# World Travel Map: Hardening + Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix sync bugs, harden the backend, fix country names, optimize performance, and add 7 new features (animated counters, progress achievements, shared wishlist, quick reactions, map pulse, smart greetings, keyboard shortcuts).

**Architecture:** Vanilla JS frontend with D3.js, Netlify Functions backend with Blob storage. All changes are in 4 files: `app.js`, `style.css`, `index.html`, `netlify/functions/api.js`. No new dependencies needed (bcrypt skipped since Netlify Functions has cold-start issues with native modules — we'll use Web Crypto API for password hashing instead).

**Tech Stack:** JavaScript (IIFE), D3.js v7, CSS3, Netlify Functions (Node.js), Netlify Blobs

---

### Task 1: Fix Country Names (N. Cyprus and other incorrect names)

**Files:**
- Modify: `app.js:93-118` (NAME_ALIASES object)

**Step 1: Add missing aliases to NAME_ALIASES**

The TopoJSON from world-atlas CDN uses abbreviated or unofficial names. Add these to the `NAME_ALIASES` object at line ~93:

```javascript
// Add inside NAME_ALIASES object, before the closing brace at line 118:
'N. Cyprus': 'Cyprus',
'Northern Cyprus': 'Cyprus',
'Somaliland': 'Somalia',
'Kosovo': 'Kosovo',
```

This ensures `resolveName()` at line 120 maps these to proper names. The `N. Cyprus` entries in the TopoJSON will now resolve to `Cyprus`, which is the internationally recognized name.

**Step 2: Verify by searching allNames**

After the fix, open browser console on the preview and run:
```javascript
// Should NOT find "N. Cyprus" in the list
```

---

### Task 2: Fix Sync Bug — One-Way Friend Stats Visibility

**Root cause:** When User A adds User B, the bidirectional connection is created in the backend. But when User B clicks User A in their friend list, `selectFriend()` fetches `/sync/data?friend=CODE` which looks up User A's ratings. The issue is:
1. If User A hasn't synced ratings yet (they only have local data), the ratings blob is empty → partner sees nothing
2. The `selectFriend()` function silently fails on network errors — no retry, no loading state
3. `removeFriend` is one-directional (only removes from your list, not theirs)

**Files:**
- Modify: `netlify/functions/api.js:186-196` (removeFriend endpoint)
- Modify: `app.js:1053-1087` (selectFriend function)
- Modify: `app.js:1124-1141` (removeFriend function)

**Step 1: Fix backend removeFriend to be bidirectional**

In `netlify/functions/api.js`, replace the REMOVE FRIEND section (lines 186-196):

```javascript
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
```

**Step 2: Add loading state and error handling to selectFriend**

In `app.js`, replace `selectFriend` function (lines 1053-1087):

```javascript
async function selectFriend(code) {
  const friend = state.friends.find(f => f.code === code);
  if (!friend) return;
  state.activeFriend = friend;

  // Auto-activate sync mode
  state.couplesMode = true;
  state.ratingMode = false;
  ratingToggle.classList.remove('active');
  couplesToggle.classList.add('active');
  colorLegend.classList.add('hidden');
  couplesLegend.classList.remove('hidden');

  // Show comparison panel with loading state
  $('#compare-name').textContent = friend.name;
  $('#sync-compare').classList.remove('hidden');
  renderFriendsList();

  // Show a loading indicator in the match panel
  const matchPanel = $('#sync-match-panel');
  const originalContent = matchPanel.innerHTML;

  // Load this friend's data with retry
  let success = false;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${API_URL}/sync/data?friend=${code}`, { headers: getAuthHeader() });
      if (res.ok) {
        const data = await res.json();
        state.ratings = { ...state.ratings, ...data.myRatings };
        state.visited = [...new Set([...state.visited, ...(data.myVisited || [])])];
        state.partnerRatings = data.partnerRatings || {};
        state.partnerVisited = data.partnerVisited || [];
        try {
          localStorage.setItem('travelRatings', JSON.stringify(state.ratings));
          localStorage.setItem('travelVisited', JSON.stringify(state.visited));
        } catch (e) { /* quota exceeded */ }
        success = true;
        break;
      }
    } catch (err) {
      console.error('Error loading friend data (attempt ' + (attempt + 1) + ')', err);
      if (attempt === 0) await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (!success) {
    showToast('Could not load friend data. Try again.');
    state.partnerRatings = {};
    state.partnerVisited = [];
  }

  updateSyncStats();
  updateColors();
  updateStats();
}
```

**Step 3: Add error handling to removeFriend**

In `app.js`, replace `removeFriend` function (lines 1124-1141):

```javascript
async function removeFriend(code) {
  try {
    const res = await fetch(`${API_URL}/friends/remove`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify({ friend_code: code })
    });
    if (!res.ok) {
      showToast('Failed to remove friend');
      return;
    }
  } catch (err) {
    showToast('Network error removing friend');
    return;
  }

  state.friends = state.friends.filter(f => f.code !== code);
  if (state.activeFriend && state.activeFriend.code === code) {
    state.activeFriend = null;
    state.partnerRatings = null;
    state.partnerVisited = [];
    $('#sync-compare').classList.add('hidden');
    state.couplesMode = false;
    couplesToggle.classList.remove('active');
    updateColors();
  }
  renderFriendsList();
  updateLeaderboard();
}
```

---

### Task 3: Backend Hardening

**Files:**
- Modify: `netlify/functions/api.js` (multiple sections)
- Modify: `package.json` (no new deps needed)

**Step 1: Add password hashing using Node.js built-in crypto**

At the top of `api.js`, after the requires, add:

```javascript
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
```

**Step 2: Update register to use hashing**

In the REGISTER section, change line 119:
```javascript
// OLD: const user = { id, username, password, sync_code };
const user = { id, username, password: hashPassword(password), sync_code };
```

**Step 3: Update login to use verifyPassword**

In the LOGIN section, change line 134:
```javascript
// OLD: if (user.password !== password)
if (!verifyPassword(password, user.password))
```

**Step 4: Add input validation to the ratings endpoint**

After `const { country, rating, visited } = body;` at line 143, add:
```javascript
if (!country || typeof country !== 'string' || country.length > 100) {
  return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid country' }) };
}
if (rating !== undefined && (typeof rating !== 'number' || rating < 1 || rating > 10)) {
  return { statusCode: 400, headers, body: JSON.stringify({ error: 'Rating must be 1-10' }) };
}
```

**Step 5: Add input validation to add friend**

After `const { friend_code } = body;` at line 160, add:
```javascript
if (!friend_code || typeof friend_code !== 'string' || !/^\d{6}$/.test(friend_code)) {
  return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid sync code format' }) };
}
```

**Step 6: Add a reviews endpoint for cloud sync**

Before the catch block, add a new endpoint:

```javascript
// ===== SAVE REVIEW =====
if (path === '/reviews' && event.httpMethod === 'POST') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  const { country, review } = body;
  if (!country || typeof country !== 'string') {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid country' }) };
  }
  try {
    const store = blobStore('reviews');
    let userReviews = {};
    try {
      userReviews = await store.get(`reviews:${decoded.id}`, { type: 'json' }) || {};
    } catch { userReviews = {}; }
    userReviews[country] = review;
    await store.setJSON(`reviews:${decoded.id}`, userReviews);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to save review' }) };
  }
}

// ===== GET REVIEWS =====
if (path === '/reviews' && event.httpMethod === 'GET') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  try {
    const store = blobStore('reviews');
    const userReviews = await store.get(`reviews:${decoded.id}`, { type: 'json' }) || {};
    return { statusCode: 200, headers, body: JSON.stringify({ reviews: userReviews }) };
  } catch {
    return { statusCode: 200, headers, body: JSON.stringify({ reviews: {} }) };
  }
}
```

**Step 7: Update friends list to include visited count**

In the LIST FRIENDS section (line 208), change:
```javascript
// OLD:
friends.push({ name: c.friend_name, code: c.friend_code, ratedCount: Object.keys(fData.ratings).length });
// NEW:
friends.push({ name: c.friend_name, code: c.friend_code, ratedCount: Object.keys(fData.ratings).length, visitedCount: (fData.visited || []).length });
```

---

### Task 4: Frontend Error Handling & localStorage Safety

**Files:**
- Modify: `app.js` (multiple locations)

**Step 1: Create a safe localStorage wrapper**

At the top of the IIFE (after line 3), add:

```javascript
function safeGetItem(key, fallback) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { console.warn('localStorage full', e); }
}
```

**Step 2: Replace all localStorage calls**

Use find-and-replace across app.js:
- `localStorage.getItem(` → `safeGetItem(`
- `localStorage.setItem(` → `safeSetItem(`
- `localStorage.removeItem(` stays as-is (safe to fail)

**Step 3: Add review cloud sync to saveReview function**

After `localStorage.setItem('travelReviews', ...)` in `saveReview()`, add:

```javascript
// Sync to cloud
if (state.user) {
  fetch(`${API_URL}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    body: JSON.stringify({ country: countryName, review: reviews[countryName] })
  }).catch(err => console.warn('Review sync failed', err));
}
```

**Step 4: Load reviews from cloud on login**

In `loadCloudData()`, after loading ratings, add:

```javascript
// Load reviews from cloud
try {
  const revRes = await fetch(`${API_URL}/reviews`, { headers: getAuthHeader() });
  if (revRes.ok) {
    const revData = await revRes.json();
    const cloudReviews = revData.reviews || {};
    // Merge: cloud wins for newer entries
    Object.entries(cloudReviews).forEach(([country, review]) => {
      if (!reviews[country] || (review.updated && (!reviews[country].updated || review.updated > reviews[country].updated))) {
        reviews[country] = review;
      }
    });
    safeSetItem('travelReviews', JSON.stringify(reviews));
  }
} catch (err) { console.warn('Review cloud load failed', err); }
```

---

### Task 5: Performance Optimizations

**Files:**
- Modify: `app.js` (search, resize, animation cleanup)

**Step 1: Add search debounce**

Replace the search input event listener (line 771):

```javascript
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const q = searchInput.value.trim().toLowerCase();
    if (q.length < 1) { searchResults.style.display = 'none'; return; }
    const matches = allNames.filter(n => n.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { searchResults.style.display = 'none'; return; }

    searchResults.innerHTML = matches.map(name => {
      const d = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
      const flag = d ? d.flag : '🏳️';
      const r = state.ratings[name];
      const rHtml = r !== undefined ? `<span style="margin-left:auto;color:${ratingToColorBright(r)};font-weight:600">${r}/10</span>` : '';
      return `<div class="result-item" data-name="${name}">${flag} ${name}${rHtml}</div>`;
    }).join('');

    searchResults.style.display = 'block';
    searchResults.querySelectorAll('.result-item').forEach(item => {
      item.addEventListener('click', () => {
        const name = item.dataset.name;
        searchResults.style.display = 'none';
        searchInput.value = '';
        const cp = g.selectAll('.country').filter(function () { return d3.select(this).attr('data-name') === name; });
        if (!cp.empty()) {
          onCountryClick.call(cp.node(), null, cp.datum());
        } else {
          openPanel(name);
        }
      });
    });
  }, 150);
});
```

**Step 2: Add window resize handler**

After the map setup (after line ~75, near the zoom setup), add:

```javascript
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    projection.translate([width / 2, height / 2]);
    g.selectAll('.country').attr('d', path);
    g.selectAll('.graticule').attr('d', path);
    // Re-render borders
    g.select('path[fill="none"]').attr('d', path);
  }, 200);
});
```

Note: Need to verify where `width`, `height`, and `projection` are defined and make them mutable (change `const` to `let` if needed).

**Step 3: Fix animateCounter cleanup**

Replace the `animateCounter` function (line 1468):

```javascript
const counterAnimations = new Map();
function animateCounter(el, target, duration) {
  if (!el) return;
  duration = duration || 400;
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  // Cancel any existing animation on this element
  if (counterAnimations.has(el)) cancelAnimationFrame(counterAnimations.get(el));
  const diff = target - start;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) {
      counterAnimations.set(el, requestAnimationFrame(tick));
    } else {
      counterAnimations.delete(el);
    }
  }
  counterAnimations.set(el, requestAnimationFrame(tick));
}
```

---

### Task 6: Progress Achievements with Hover Tooltips

**Files:**
- Modify: `app.js:1257-1289` (ACHIEVEMENTS and renderAchievements)
- Modify: `style.css` (add tooltip styles)

**Step 1: Update ACHIEVEMENTS array with progress info**

Replace ACHIEVEMENTS (line 1258):

```javascript
const ACHIEVEMENTS = [
  { id: 'first_rate', icon: '🌟', name: 'First Step', desc: 'Rate your first country', check: () => Object.keys(state.ratings).length >= 1, progress: () => `${Math.min(Object.keys(state.ratings).length, 1)}/1 rated` },
  { id: 'rate_10', icon: '🗺️', name: 'Explorer', desc: 'Rate 10 countries', check: () => Object.keys(state.ratings).length >= 10, progress: () => `${Math.min(Object.keys(state.ratings).length, 10)}/10 rated` },
  { id: 'rate_25', icon: '🧭', name: 'Pathfinder', desc: 'Rate 25 countries', check: () => Object.keys(state.ratings).length >= 25, progress: () => `${Math.min(Object.keys(state.ratings).length, 25)}/25 rated` },
  { id: 'rate_50', icon: '🌍', name: 'Globetrotter', desc: 'Rate 50 countries', check: () => Object.keys(state.ratings).length >= 50, progress: () => `${Math.min(Object.keys(state.ratings).length, 50)}/50 rated` },
  { id: 'rate_100', icon: '👑', name: 'World King', desc: 'Rate 100 countries', check: () => Object.keys(state.ratings).length >= 100, progress: () => `${Math.min(Object.keys(state.ratings).length, 100)}/100 rated` },
  { id: 'visit_1', icon: '✈️', name: 'Takeoff', desc: 'Visit your first country', check: () => state.visited.length >= 1, progress: () => `${Math.min(state.visited.length, 1)}/1 visited` },
  { id: 'visit_10', icon: '🎒', name: 'Backpacker', desc: 'Visit 10 countries', check: () => state.visited.length >= 10, progress: () => `${Math.min(state.visited.length, 10)}/10 visited` },
  { id: 'visit_25', icon: '🏆', name: 'Veteran', desc: 'Visit 25 countries', check: () => state.visited.length >= 25, progress: () => `${Math.min(state.visited.length, 25)}/25 visited` },
  { id: 'perfect_10', icon: '💯', name: 'Perfect 10', desc: 'Give a country a 10/10', check: () => Object.values(state.ratings).some(r => r === 10), progress: () => Object.values(state.ratings).some(r => r === 10) ? 'Achieved!' : `Best: ${Math.max(0, ...Object.values(state.ratings))}/10` },
  { id: 'all_continents', icon: '🌐', name: 'Continental', desc: 'Visit all 6 continents', check: () => getVisitedContinents().length >= 6, progress: () => `${getVisitedContinents().length}/6 continents` },
  { id: 'bucket_5', icon: '📋', name: 'Dreamer', desc: 'Add 5 bucket list items', check: () => state.bucketList.length >= 5, progress: () => `${Math.min(state.bucketList.length, 5)}/5 bucket list` },
  { id: 'friend_1', icon: '🤝', name: 'Social', desc: 'Connect with a friend', check: () => (state.friends || []).length >= 1, progress: () => `${Math.min((state.friends || []).length, 1)}/1 friends` },
];
```

**Step 2: Update renderAchievements with tooltips and progress bars**

Replace `renderAchievements` function (line 1282):

```javascript
function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = a.check();
    const progress = a.progress();
    return `<div class="achievement ${unlocked ? 'unlocked' : 'locked'}" title="${a.desc}\n${progress}">
      <span class="ach-icon">${a.icon}</span>
      <span class="ach-name">${a.name}</span>
      <span class="ach-progress">${progress}</span>
    </div>`;
  }).join('');
}
```

**Step 3: Add CSS for achievement progress and tooltip**

Add to `style.css` after the existing `.achievement` rules (after line ~703):

```css
.ach-progress{font-size:0.52rem;color:var(--text-muted);font-weight:500;margin-top:2px}
.achievement.unlocked .ach-progress{color:#22c55e}
.achievement{position:relative;cursor:default}
.achievement[title]:hover::after{
  content:attr(title);position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);
  padding:6px 10px;border-radius:8px;font-size:0.68rem;font-weight:500;white-space:pre-line;text-align:center;
  background:var(--text);color:var(--bg);z-index:10;pointer-events:none;
  box-shadow:0 4px 12px rgba(0,0,0,0.15);min-width:100px;line-height:1.4;
}
```

---

### Task 7: Shared Wishlist (Bucket List Comparison)

**Files:**
- Modify: `index.html` (add shared wishlist section in sync panel)
- Modify: `app.js` (add to updateSyncStats)

**Step 1: Add HTML section in sync panel**

In `index.html`, after the "Both Visited" section (after line 175), add:

```html
<div class="sync-top-destinations" id="shared-bucket-section" style="margin-top:10px">
    <p class="sync-top-title">Shared Wishlist</p>
    <div id="shared-bucket-list" class="top-mutual-list">
        <p class="sync-empty">No shared bucket list items yet!</p>
    </div>
</div>
```

**Step 2: Add bucket list to sync data endpoint**

In `api.js`, in the `/sync/data` GET endpoint, also return bucket list data. But since we don't have bucket lists in the backend yet, we need to:

Add to the ratings blob structure — when saving ratings, also save bucket list. Actually, the simpler approach: include bucket list in the sync/data response and add a bucket list field to the ratings blob.

In `api.js`, update the ratings endpoint to also handle bucket list:

```javascript
// In /ratings POST handler, after line 152, before the return:
if (body.bucketList !== undefined && Array.isArray(body.bucketList)) {
  data.bucketList = body.bucketList;
}
```

And in the `/sync/data` response, include bucket list:

```javascript
// In the sync/data response with friend, add partnerBucketList:
const fData = await getUserRatings(friend.id);
return { statusCode: 200, headers, body: JSON.stringify({
  myRatings: myData.ratings, myVisited: myData.visited, myBucketList: myData.bucketList || [],
  partnerRatings: fData.ratings, partnerVisited: fData.visited, partnerBucketList: fData.bucketList || [],
  partnerName: friend.username
}) };
```

**Step 3: Sync bucket list to cloud**

In `app.js`, in the `saveBucket()` function (line 1223), add cloud sync:

```javascript
function saveBucket() {
  safeSetItem('travelBucket', JSON.stringify(state.bucketList));
  // Sync to cloud
  if (state.user) {
    fetch(`${API_URL}/ratings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify({ country: '_bucket_sync', rating: 0, visited: false, bucketList: state.bucketList })
    }).catch(() => {});
  }
}
```

**Step 4: Render shared wishlist in updateSyncStats**

In `app.js`, in `updateSyncStats()`, after the shared visited section (after line ~613), add:

```javascript
// Shared Bucket List
const sharedBucket = state.bucketList.filter(c => (state.partnerBucketList || []).includes(c));
const sbList = document.getElementById('shared-bucket-list');
if (sbList) {
  if (sharedBucket.length === 0) {
    sbList.innerHTML = '<p class="sync-empty">No shared bucket list items yet!</p>';
  } else {
    sbList.innerHTML = sharedBucket.slice(0, 5).map(name => {
      const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
      const flag = cd ? cd.flag : '';
      return `<div class="mutual-item" style="background:rgba(245,158,11,0.05);border-color:rgba(245,158,11,0.12)"><span class="mi-flag">${flag}</span><span class="mi-name">${name}</span><span class="mi-score">Both want!</span></div>`;
    }).join('');
  }
}
```

Also update `selectFriend` to store partnerBucketList:
```javascript
state.partnerBucketList = data.partnerBucketList || [];
```

---

### Task 8: Quick Reactions to Friend's Ratings

**Files:**
- Modify: `index.html` (add reactions UI in friend-recs section)
- Modify: `app.js` (reaction logic)
- Modify: `style.css` (reaction styles)
- Modify: `netlify/functions/api.js` (reactions endpoint)

**Step 1: Add reactions endpoint to backend**

In `api.js`, before the catch block, add:

```javascript
// ===== REACTIONS =====
if (path === '/reactions' && event.httpMethod === 'POST') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  const { country, friend_code, reaction } = body;
  if (!country || !friend_code || !reaction) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
  }
  const validReactions = ['👍', '🤔', '✈️'];
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
```

**Step 2: Add reaction UI to the country panel friend-recs area**

In `app.js`, update `renderFriendRecs()` to include reaction buttons:

```javascript
function renderFriendRecs(countryName) {
  const recsEl = document.getElementById('friend-recs');
  if (!recsEl || !state.friends || state.friends.length === 0) {
    if (recsEl) recsEl.classList.add('hidden');
    return;
  }
  if (!state.activeFriend || !state.partnerRatings) {
    recsEl.classList.add('hidden');
    return;
  }
  const friendRating = state.partnerRatings[countryName];
  if (friendRating !== undefined) {
    const friendName = state.activeFriend.name;
    recsEl.innerHTML = `
      <p class="friend-rec-title">${friendName}'s Rating</p>
      <div class="friend-rec-item">
        <span class="fr-name">${friendName}</span>
        <span class="fr-score" style="color:${ratingToColorBright(friendRating)}">${friendRating}/10</span>
      </div>
      <div class="quick-reactions">
        <button class="reaction-btn" data-reaction="👍" title="Nice pick!">👍</button>
        <button class="reaction-btn" data-reaction="🤔" title="Hmm, really?">🤔</button>
        <button class="reaction-btn" data-reaction="✈️" title="Let's go!">✈️</button>
      </div>`;
    recsEl.classList.remove('hidden');

    // Wire up reaction buttons
    recsEl.querySelectorAll('.reaction-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const reaction = btn.dataset.reaction;
        btn.classList.add('reacted');
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => { btn.style.transform = ''; }, 200);
        if (state.user) {
          try {
            await fetch(`${API_URL}/reactions`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
              body: JSON.stringify({ country: countryName, friend_code: state.activeFriend.code, reaction })
            });
            showToast(`${reaction} sent to ${friendName}!`);
          } catch { showToast('Could not send reaction'); }
        }
      });
    });
  } else {
    recsEl.classList.add('hidden');
  }
}
```

**Step 3: Add CSS for reactions**

Add to `style.css`:

```css
.quick-reactions{display:flex;gap:6px;margin-top:8px}
.reaction-btn{
  width:36px;height:36px;border-radius:10px;border:1.5px solid var(--border);
  background:var(--surface);font-size:1.1rem;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:all 0.2s var(--ease);
}
.reaction-btn:hover{border-color:var(--text-secondary);transform:scale(1.12)}
.reaction-btn.reacted{border-color:var(--accent);background:rgba(99,102,241,0.08)}
[data-theme="dark"] .reaction-btn{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1)}
```

---

### Task 9: Map Pulse Animation

**Files:**
- Modify: `style.css` (pulse keyframe)
- Modify: `app.js` (add pulse class on rate)

**Step 1: Add CSS pulse animation**

Add to `style.css`:

```css
.country.just-rated{
  animation:countryPulse 0.8s var(--ease);
}
@keyframes countryPulse{
  0%{filter:brightness(1)}
  30%{filter:brightness(1.3) drop-shadow(0 0 4px rgba(34,197,94,0.4))}
  100%{filter:brightness(1)}
}
```

**Step 2: Trigger pulse on rating change**

In `app.js`, in the `slider.onchange` handler (line 305), after `updateColors()`, add:

```javascript
// Pulse the country on the map
const countryPath = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === name; });
if (!countryPath.empty()) {
  countryPath.classed('just-rated', false);
  void countryPath.node().offsetWidth; // Force reflow
  countryPath.classed('just-rated', true);
  setTimeout(() => countryPath.classed('just-rated', false), 800);
}
```

---

### Task 10: Smart Greetings

**Files:**
- Modify: `app.js` (greeting logic at init)
- Modify: `index.html` (add greeting element)

**Step 1: Add greeting element to header**

In `index.html`, replace the logo line (line 20):

```html
<h1 id="logo">World Explorer</h1>
<p id="greeting" class="greeting-text"></p>
```

**Step 2: Add CSS for greeting**

Add to `style.css`:

```css
.greeting-text{
  font-size:0.68rem;color:var(--text-muted);margin:0;font-weight:500;
  opacity:0;animation:greetFade 0.8s 1.5s forwards;
}
@keyframes greetFade{to{opacity:1}}
```

**Step 3: Add greeting logic**

In `app.js`, add a function before `initAuth()` (around line 1609):

```javascript
function updateGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;
  const hour = new Date().getHours();
  let timeGreet = 'Hello';
  if (hour < 12) timeGreet = 'Good morning';
  else if (hour < 17) timeGreet = 'Good afternoon';
  else timeGreet = 'Good evening';

  const name = state.user ? state.user.username : '';
  const rated = Object.keys(state.ratings).length;
  const visited = state.visited.length;
  const pct = Math.round((visited / 195) * 100);

  let stat = '';
  if (visited > 0 && rated > 0) stat = ` — ${pct}% of the world explored`;
  else if (rated > 0) stat = ` — ${rated} countries rated`;

  el.textContent = name ? `${timeGreet}, ${name}${stat}` : `${timeGreet}! Start exploring the world.`;
}
```

Call `updateGreeting()` after `initAuth()` and after login success.

---

### Task 11: Keyboard Shortcuts Enhancement

**Files:**
- Modify: `app.js:803-817` (keyboard handler)

**Step 1: Enhance the keyboard handler**

Replace the existing keyboard handler (line 804):

```javascript
document.addEventListener('keydown', e => {
  const isInput = document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA';

  if (e.key === 'Escape') {
    if (!factsPanel.classList.contains('hidden')) { closePanel(); return; }
    if (!authModal.classList.contains('hidden')) { authModal.classList.add('hidden'); return; }
    searchInput.blur();
    searchResults.style.display = 'none';
  }

  if (isInput) return; // Don't intercept when typing

  if (e.key === '/') { e.preventDefault(); searchInput.focus(); }

  // Arrow keys to cycle countries when panel is open
  if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && state.selectedCountry && allNames.length > 0) {
    e.preventDefault();
    const idx = allNames.indexOf(state.selectedCountry);
    if (idx === -1) return;
    const next = e.key === 'ArrowRight' ? (idx + 1) % allNames.length : (idx - 1 + allNames.length) % allNames.length;
    const nextName = allNames[next];
    const cp = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === nextName; });
    if (!cp.empty()) onCountryClick.call(cp.node(), null, cp.datum());
  }

  // Arrow up/down to adjust rating when panel is open
  if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && state.selectedCountry) {
    e.preventDefault();
    const slider = document.getElementById('rating-slider');
    if (!slider) return;
    const current = parseInt(slider.value);
    const next = e.key === 'ArrowUp' ? Math.min(10, current + 1) : Math.max(1, current - 1);
    slider.value = next;
    slider.dispatchEvent(new Event('input'));
    slider.dispatchEvent(new Event('change'));
  }

  // 'v' to toggle visited
  if (e.key === 'v' && state.selectedCountry) {
    const cb = document.getElementById('visited-checkbox');
    if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')); }
  }

  // 'b' to toggle bucket list
  if (e.key === 'b' && state.selectedCountry) {
    const cb = document.getElementById('bucket-checkbox');
    if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')); }
  }

  // 'h' to toggle heatmap
  if (e.key === 'h') { ratingToggle.click(); }

  // 'r' to reset view
  if (e.key === 'r') { document.getElementById('reset-view-btn').click(); }
});
```

---

### Task 12: Leaderboard Fix — Include Visited Count

**Files:**
- Modify: `app.js:1374-1399` (updateLeaderboard)

**Step 1: Use visitedCount from friends data**

Replace the leaderboard entries builder (lines 1389-1392):

```javascript
const entries = [{ name: 'You', visited: myVisited, rated: myRated, score: myScore, isMe: true }];
state.friends.forEach(f => {
  const fVisited = f.visitedCount || 0;
  const fScore = (fVisited * 10) + ((f.ratedCount || 0) * 2);
  entries.push({ name: f.name, visited: fVisited, rated: f.ratedCount || 0, score: fScore, isMe: false });
});
```

---

### Execution Order

Tasks should be executed in this order:
1. Task 1 (country names) — quick fix, no dependencies
2. Task 3 (backend hardening) — security first
3. Task 2 (sync bug fix) — depends on backend being solid
4. Task 4 (localStorage safety) — foundational for other features
5. Task 5 (performance) — foundational improvements
6. Task 6 (achievements) — standalone
7. Task 7 (shared wishlist) — needs backend bucket sync
8. Task 8 (quick reactions) — needs backend endpoint
9. Task 9 (map pulse) — standalone CSS + JS
10. Task 10 (smart greetings) — standalone
11. Task 11 (keyboard shortcuts) — standalone
12. Task 12 (leaderboard fix) — depends on Task 3 backend changes

After all tasks: test everything locally on port 3456, verify no console errors.

Do NOT deploy — user will say when to deploy.
