const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'world-travel-map-secret';

// Initialize SQLite DB
const db = new sqlite3.Database('./travel.db', (err) => {
  if (err) console.error('Database opening error: ', err);
  else console.log('Connected to SQLite database.');
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    sync_code TEXT UNIQUE,
    partner_code TEXT
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS ratings (
    user_id INTEGER,
    country TEXT,
    rating INTEGER,
    visited BOOLEAN DEFAULT 0,
    PRIMARY KEY (user_id, country),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
});

// Middleware to verify JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// Generate random 6-digit code
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

// Register
app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

  db.get(`SELECT id FROM users WHERE username = ?`, [username], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (user) return res.status(409).json({ error: 'Username already exists' });

    const code = generateCode();
    db.run(`INSERT INTO users (username, password, sync_code) VALUES (?, ?, ?)`, [username, password, code], function(err) {
      if (err) return res.status(500).json({ error: 'Failed to create user' });
      const token = jwt.sign({ id: this.lastID }, JWT_SECRET);
      res.json({ token, user: { username, sync_code: code, partner_code: null } });
    });
  });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.password !== password) return res.status(401).json({ error: 'Incorrect password' });

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.json({ token, user: { username: user.username, sync_code: user.sync_code, partner_code: user.partner_code } });
  });
});

// Connect Partner
app.post('/api/sync/connect', authenticate, (req, res) => {
  const { partner_code } = req.body;
  
  db.get(`SELECT id, username FROM users WHERE sync_code = ?`, [partner_code], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'Companion code not found' });
    
    db.run(`UPDATE users SET partner_code = ? WHERE id = ?`, [partner_code, req.userId], (err) => {
      if (err) return res.status(500).json({ error: 'Failed to link' });
      res.json({ success: true, partner_name: row.username });
    });
  });
});

// Disconnect Partner
app.post('/api/sync/disconnect', authenticate, (req, res) => {
  db.run(`UPDATE users SET partner_code = NULL WHERE id = ?`, [req.userId], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to disconnect' });
    res.json({ success: true });
  });
});

// Save rating / visited
app.post('/api/ratings', authenticate, (req, res) => {
  const { country, rating, visited } = req.body;
  
  // Upsert pattern for sqlite
  db.run(`INSERT INTO ratings (user_id, country, rating, visited) VALUES (?, ?, ?, ?)
          ON CONFLICT(user_id, country) DO UPDATE SET rating=excluded.rating, visited=excluded.visited`,
    [req.userId, country, rating, visited ? 1 : 0], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to save' });
    res.json({ success: true });
  });
});

// Get User Ratings & Partner Ratings
app.get('/api/sync/data', authenticate, (req, res) => {
  // 1. Get user ratings
  db.all(`SELECT country, rating, visited FROM ratings WHERE user_id = ?`, [req.userId], (err, myRows) => {
    if (err) return res.status(500).json({ error: 'DB Error' });
    
    const myRatings = {};
    const myVisited = [];
    myRows.forEach(r => {
      myRatings[r.country] = r.rating;
      if (r.visited) myVisited.push(r.country);
    });

    // 2. Check partner
    db.get(`SELECT partner_code FROM users WHERE id = ?`, [req.userId], (err, user) => {
      if (err || !user || !user.partner_code) {
        return res.json({ myRatings, myVisited, partnerRatings: null, partnerName: null });
      }

      // 3. Get partner details and ratings
      db.get(`SELECT id, username FROM users WHERE sync_code = ?`, [user.partner_code], (err, pUser) => {
        if (!pUser) return res.json({ myRatings, myVisited, partnerRatings: null, partnerName: null });

        db.all(`SELECT country, rating FROM ratings WHERE user_id = ?`, [pUser.id], (err, pRows) => {
          const partnerRatings = {};
          if (pRows) pRows.forEach(r => { partnerRatings[r.country] = r.rating; });
          
          res.json({ myRatings, myVisited, partnerRatings, partnerName: pUser.username });
        });
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`World Travel Map API running on http://localhost:${PORT}`);
});
