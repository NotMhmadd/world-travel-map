const jwt = require('jsonwebtoken');
const { getStore } = require('@netlify/blobs');

const JWT_SECRET = process.env.JWT_SECRET || 'world-travel-map-secret';
const crypto = require('crypto');

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored.includes(':')) return password === stored; // Legacy plain-text fallback
  const [salt, hash] = stored.split(':');
  const testHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return hash === testHash;
}

// ===== BLOB HELPERS =====
function blobStore(name) {
  return getStore({
    name,
    consistency: 'strong',
    siteID: process.env.SITE_ID || process.env.NETLIFY_SITE_ID,
    token: process.env.NETLIFY_API_TOKEN || process.env.NETLIFY_TOKEN,
  });
}

async function getUser(id) {
  try {
    const data = await blobStore('users').get(`user:${id}`, { type: 'json' });
    return data || null;
  } catch { return null; }
}

async function getUserByUsername(username) {
  try {
    const index = await blobStore('users').get(`username:${username.toLowerCase()}`, { type: 'json' });
    if (!index) return null;
    return getUser(index.id);
  } catch { return null; }
}

async function getUserByCode(code) {
  try {
    const index = await blobStore('users').get(`code:${code}`, { type: 'json' });
    if (!index) return null;
    return getUser(index.id);
  } catch { return null; }
}

async function saveUser(user) {
  const s = blobStore('users');
  await s.setJSON(`user:${user.id}`, user);
  await s.setJSON(`username:${user.username.toLowerCase()}`, { id: user.id });
  await s.setJSON(`code:${user.sync_code}`, { id: user.id });
}

async function getNextId() {
  const s = blobStore('users');
  let counter;
  try { counter = await s.get('counter', { type: 'json' }); } catch { counter = null; }
  const nextId = (counter?.value || 0) + 1;
  await s.setJSON('counter', { value: nextId });
  return nextId;
}

async function getUserRatings(userId) {
  try {
    const data = await blobStore('ratings').get(`ratings:${userId}`, { type: 'json' });
    if (!data) return { ratings: {}, visited: [] };
    return data;
  } catch { return { ratings: {}, visited: [] }; }
}

async function saveUserRatings(userId, ratingsData) {
  await blobStore('ratings').setJSON(`ratings:${userId}`, ratingsData);
}

async function getUserConnections(userId) {
  try {
    const data = await blobStore('connections').get(`friends:${userId}`, { type: 'json' });
    return data || [];
  } catch { return []; }
}

async function saveUserConnections(userId, connections) {
  await blobStore('connections').setJSON(`friends:${userId}`, connections);
}

async function appendActivity(userId, event) {
  try {
    const store = blobStore('activity');
    let events = [];
    try { events = await store.get(`activity:${userId}`, { type: 'json' }) || []; } catch {}
    events.unshift({ ...event, time: Date.now() });
    if (events.length > 20) events = events.slice(0, 20);
    await store.setJSON(`activity:${userId}`, events);
  } catch (err) { console.warn('Activity write failed', err.message); }
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function authenticate(token) {
  if (!token) return null;
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}

function getToken(headers) {
  const auth = headers.authorization || headers.Authorization || '';
  return auth.split(' ')[1] || null;
}

// ===== HANDLER =====
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers };

  const path = event.path.replace('/.netlify/functions/api', '').replace('/api', '');
  const body = event.body ? JSON.parse(event.body) : {};

  try {

  // ===== REGISTER =====
  if (path === '/auth/register' && event.httpMethod === 'POST') {
    const { username, password } = body;
    if (!username || !password) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
    const existing = await getUserByUsername(username);
    if (existing) return { statusCode: 409, headers, body: JSON.stringify({ error: 'Username already exists' }) };

    const id = await getNextId();
    let sync_code = generateCode();
    while (await getUserByCode(sync_code)) { sync_code = generateCode(); }

    const user = { id, username, password: hashPassword(password), sync_code };
    await saveUser(user);
    await saveUserRatings(id, { ratings: {}, visited: [] });
    await saveUserConnections(id, []);

    const token = jwt.sign({ id }, JWT_SECRET);
    return { statusCode: 200, headers, body: JSON.stringify({ token, user: { username, sync_code } }) };
  }

  // ===== LOGIN =====
  if (path === '/auth/login' && event.httpMethod === 'POST') {
    const { username, password } = body;
    if (!username || !password) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
    const user = await getUserByUsername(username);
    if (!user) return { statusCode: 404, headers, body: JSON.stringify({ error: 'User not found' }) };
    if (!verifyPassword(password, user.password)) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Incorrect password' }) };
    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    return { statusCode: 200, headers, body: JSON.stringify({ token, user: { username: user.username, sync_code: user.sync_code } }) };
  }

  // ===== SAVE RATING =====
  if (path === '/ratings' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { country, rating, visited } = body;
    if (!country || typeof country !== 'string' || country.length > 100) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid country' }) };
    }
    if (rating !== undefined && (typeof rating !== 'number' || rating < 1 || rating > 10)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Rating must be 1-10' }) };
    }

    const data = await getUserRatings(decoded.id);
    data.ratings[country] = rating;
    if (visited && !data.visited.includes(country)) {
      data.visited.push(country);
    } else if (!visited) {
      data.visited = data.visited.filter(c => c !== country);
    }
    await saveUserRatings(decoded.id, data);
    if (body.bucketList !== undefined && Array.isArray(body.bucketList)) {
      data.bucketList = body.bucketList;
      await saveUserRatings(decoded.id, data);
    }
    if (country !== '_bucket_sync') {
      await appendActivity(decoded.id, {
        type: visited ? 'visited' : 'rated',
        country,
        rating: data.ratings[country],
      });
    }
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  // ===== BULK SYNC RATINGS =====
  if (path === '/ratings/bulk' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { ratings, visited, bucketList } = body;
    if (!ratings || typeof ratings !== 'object') {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid ratings' }) };
    }
    const data = await getUserRatings(decoded.id);
    // Merge: local ratings fill in anything cloud doesn't have
    Object.entries(ratings).forEach(([country, rating]) => {
      if (typeof country === 'string' && country.length < 100 && typeof rating === 'number' && rating >= 1 && rating <= 10) {
        if (data.ratings[country] === undefined) {
          data.ratings[country] = rating;
        }
      }
    });
    // Merge visited
    if (Array.isArray(visited)) {
      visited.forEach(c => {
        if (typeof c === 'string' && !data.visited.includes(c)) data.visited.push(c);
      });
    }
    // Merge bucket list
    if (Array.isArray(bucketList)) {
      data.bucketList = data.bucketList || [];
      bucketList.forEach(c => {
        if (typeof c === 'string' && !data.bucketList.includes(c)) data.bucketList.push(c);
      });
    }
    await saveUserRatings(decoded.id, data);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, merged: Object.keys(data.ratings).length }) };
  }

  // ===== ADD FRIEND =====
  if (path === '/friends/add' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { friend_code } = body;
    if (!friend_code || typeof friend_code !== 'string' || !/^\d{6}$/.test(friend_code)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid sync code format' }) };
    }

    const friend = await getUserByCode(friend_code);
    if (!friend) return { statusCode: 404, headers, body: JSON.stringify({ error: 'Code not found. Ask your friend for their 6-digit sync code.' }) };
    if (friend.id === decoded.id) return { statusCode: 400, headers, body: JSON.stringify({ error: "That's your own code!" }) };

    const myConns = await getUserConnections(decoded.id);
    if (myConns.find(c => c.friend_code === friend_code)) {
      return { statusCode: 409, headers, body: JSON.stringify({ error: `Already connected to ${friend.username}` }) };
    }
    myConns.push({ friend_code, friend_name: friend.username });
    await saveUserConnections(decoded.id, myConns);

    // Auto-add reverse connection
    const me = await getUser(decoded.id);
    if (me) {
      const theirConns = await getUserConnections(friend.id);
      if (!theirConns.find(c => c.friend_code === me.sync_code)) {
        theirConns.push({ friend_code: me.sync_code, friend_name: me.username });
        await saveUserConnections(friend.id, theirConns);
      }
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true, friend_name: friend.username, friend_code }) };
  }

  // ===== REMOVE FRIEND =====
  if (path === '/friends/remove' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { friend_code } = body;

    // Remove from my connections
    const myConns = await getUserConnections(decoded.id);
    const updated = myConns.filter(c => c.friend_code !== friend_code);
    await saveUserConnections(decoded.id, updated);

    // Also remove reverse connection
    const friend = await getUserByCode(friend_code);
    if (friend) {
      const me = await getUser(decoded.id);
      if (me) {
        const theirConns = await getUserConnections(friend.id);
        const theirUpdated = theirConns.filter(c => c.friend_code !== me.sync_code);
        await saveUserConnections(friend.id, theirUpdated);
      }
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  // ===== LIST FRIENDS =====
  if (path === '/friends' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };

    const myConns = await getUserConnections(decoded.id);
    const friends = [];
    for (const c of myConns) {
      const friend = await getUserByCode(c.friend_code);
      const fData = friend ? await getUserRatings(friend.id) : { ratings: {}, visited: [] };
      friends.push({ name: c.friend_name, code: c.friend_code, ratedCount: Object.keys(fData.ratings).length, visitedCount: (fData.visited || []).length });
    }
    return { statusCode: 200, headers, body: JSON.stringify({ friends }) };
  }

  // ===== SYNC DATA (with specific friend) =====
  if (path === '/sync/data' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const myData = await getUserRatings(decoded.id);

    const qs = event.queryStringParameters || {};
    const friendCode = qs.friend;
    if (!friendCode) {
      return { statusCode: 200, headers, body: JSON.stringify({ myRatings: myData.ratings, myVisited: myData.visited, partnerRatings: null, partnerName: null }) };
    }
    const friend = await getUserByCode(friendCode);
    if (!friend) {
      return { statusCode: 200, headers, body: JSON.stringify({ myRatings: myData.ratings, myVisited: myData.visited, partnerRatings: null, partnerName: null }) };
    }
    const fData = await getUserRatings(friend.id);
    return { statusCode: 200, headers, body: JSON.stringify({ myRatings: myData.ratings, myVisited: myData.visited, myBucketList: myData.bucketList || [], partnerRatings: fData.ratings, partnerVisited: fData.visited, partnerBucketList: fData.bucketList || [], partnerName: friend.username }) };
  }

  // ===== SAVE REVIEW =====
  if (path === '/reviews' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { country, review } = body;
    if (!country || typeof country !== 'string') {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid country' }) };
    }
    const store = blobStore('reviews');
    let userReviews = {};
    try { userReviews = await store.get(`reviews:${decoded.id}`, { type: 'json' }) || {}; } catch { userReviews = {}; }
    userReviews[country] = review;
    await store.setJSON(`reviews:${decoded.id}`, userReviews);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  // ===== GET REVIEWS =====
  if (path === '/reviews' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const store = blobStore('reviews');
    let userReviews = {};
    try { userReviews = await store.get(`reviews:${decoded.id}`, { type: 'json' }) || {}; } catch { userReviews = {}; }
    return { statusCode: 200, headers, body: JSON.stringify({ reviews: userReviews }) };
  }

  // ===== REACTIONS =====
  if (path === '/reactions' && event.httpMethod === 'POST') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const { country, friend_code, reaction } = body;
    if (!country || !friend_code || !reaction) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
    }
    const validReactions = ['\ud83d\udc4d', '\ud83e\udd14', '\u2708\ufe0f'];
    if (!validReactions.includes(reaction)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid reaction' }) };
    }
    const me = await getUser(decoded.id);
    if (!me) return { statusCode: 404, headers, body: JSON.stringify({ error: 'User not found' }) };
    const store = blobStore('reactions');
    const key = `reaction:${friend_code}:${country}`;
    let existing = {};
    try { existing = await store.get(key, { type: 'json' }) || {}; } catch {}
    existing[me.sync_code] = { reaction, name: me.username, time: Date.now() };
    await store.setJSON(key, existing);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  }

  if (path === '/reactions' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const qs = event.queryStringParameters || {};
    const me = await getUser(decoded.id);
    if (!me) return { statusCode: 200, headers, body: JSON.stringify({ reactions: {} }) };
    const store = blobStore('reactions');
    const key = `reaction:${me.sync_code}:${qs.country}`;
    let reactions = {};
    try { reactions = await store.get(key, { type: 'json' }) || {}; } catch {}
    return { statusCode: 200, headers, body: JSON.stringify({ reactions }) };
  }

  // ===== VERIFY TOKEN =====
  if (path === '/auth/verify' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const user = await getUser(decoded.id);
    if (!user) return { statusCode: 404, headers, body: JSON.stringify({ error: 'User not found' }) };
    return { statusCode: 200, headers, body: JSON.stringify({ valid: true, user: { username: user.username, sync_code: user.sync_code } }) };
  }

  // ===== GET ACTIVITY FEED =====
  if (path === '/activity' && event.httpMethod === 'GET') {
    const decoded = authenticate(getToken(event.headers));
    if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
    const qs = event.queryStringParameters || {};
    const friendCode = qs.friend;
    if (!friendCode) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing friend code' }) };
    const myConns = await getUserConnections(decoded.id);
    if (!myConns.find(c => c.friend_code === friendCode)) {
      return { statusCode: 403, headers, body: JSON.stringify({ error: 'Not connected' }) };
    }
    const friend = await getUserByCode(friendCode);
    if (!friend) return { statusCode: 404, headers, body: JSON.stringify({ error: 'Friend not found' }) };
    const store = blobStore('activity');
    let events = [];
    try { events = await store.get(`activity:${friend.id}`, { type: 'json' }) || []; } catch {}
    return { statusCode: 200, headers, body: JSON.stringify({ events: events.slice(0, 10) }) };
  }

  } catch (err) {
    console.error('API Error:', err.message, err.stack);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error', detail: err.message }) };
  }

  return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not found' }) };
};
