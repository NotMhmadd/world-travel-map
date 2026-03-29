# Four Features Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add multi-select friends comparison, visa requirements, travel budget snapshot, and country soundtrack to the World Travel Explorer Map.

**Architecture:** All external APIs proxied through Netlify Functions with blob caching. Frontend calls `/api/*` endpoints. Multi-select is purely frontend. Budget data uses a curated static dataset since no affordable tiered-budget API exists. Visa uses Travel Buddy AI (RapidAPI). Soundtrack uses Spotify embed scraping for 30s preview URLs.

**Tech Stack:** Vanilla JS (IIFE), D3.js, Netlify Functions, @netlify/blobs, RapidAPI (visa), Spotify embed parsing

---

## Task 1: Multi-Select Friends — State & Data Loading

**Files:**
- Modify: `app.js` — state object (~line 13), `selectFriend()` (~line 1253), `renderFriendsList()` (~line 1214)

**Step 1: Update state shape**

In `app.js` state object, replace:
```javascript
// OLD
state.activeFriend = null;  // single friend
state.partnerRatings = null;
state.partnerVisited = [];
state.partnerBucketList = [];
```
With:
```javascript
// NEW
state.activeFriends = [];       // array of { name, code }
state.partnerDatasets = {};     // { code: { ratings, visited, bucketList } }
```

Also update the initialization at ~line 1200:
```javascript
state.friends = [];
state.activeFriends = [];
state.partnerDatasets = {};
```

**Step 2: Rewrite `selectFriend()` to toggle multi-select**

Replace `selectFriend(code)` with:
```javascript
async function toggleFriend(code) {
  const friend = state.friends.find(f => f.code === code);
  if (!friend) return;

  const idx = state.activeFriends.findIndex(f => f.code === code);
  if (idx >= 0) {
    // Deselect
    state.activeFriends.splice(idx, 1);
    delete state.partnerDatasets[code];
    if (state.activeFriends.length === 0) {
      state.couplesMode = false;
      couplesToggle.classList.remove('active');
      couplesLegend.classList.add('hidden');
    }
  } else {
    // Select (max 4)
    if (state.activeFriends.length >= 4) {
      showToast('Max 4 friends for comparison', 'error');
      return;
    }
    state.activeFriends.push(friend);

    // Activate sync mode
    state.couplesMode = true;
    state.ratingMode = false;
    ratingToggle.classList.remove('active');
    couplesToggle.classList.add('active');
    colorLegend.classList.add('hidden');
    couplesLegend.classList.remove('hidden');

    // Load data if not cached
    if (!state.partnerDatasets[code]) {
      try {
        const res = await fetch(`${API_URL}/sync/data?friend=${code}`, { headers: getAuthHeader() });
        if (res.ok) {
          const data = await res.json();
          const pRaw = data.partnerRatings || {};
          delete pRaw._bucket_sync;
          state.partnerDatasets[code] = {
            ratings: pRaw,
            visited: data.partnerVisited || [],
            bucketList: data.partnerBucketList || [],
          };
        }
      } catch (err) {
        showToast(`Could not load ${friend.name}'s data`, 'error');
        return;
      }
    }
  }

  // Update legacy compat fields for functions that still read them
  syncLegacyPartnerState();
  renderFriendsList();
  updateColors();
  updateSyncStats();
  renderActivityFeed([]);
}

function syncLegacyPartnerState() {
  // Merge all selected friends into the legacy single-partner fields
  // so existing comparison functions work without full rewrite
  const codes = state.activeFriends.map(f => f.code);
  if (codes.length === 0) {
    state.partnerRatings = null;
    state.partnerVisited = [];
    state.partnerBucketList = [];
    state.activeFriend = null;
    return;
  }
  // Use first friend as "primary" for legacy compat, multi-comparison handled separately
  state.activeFriend = state.activeFriends[0];
  const first = state.partnerDatasets[codes[0]];
  state.partnerRatings = first ? first.ratings : {};
  state.partnerVisited = first ? first.visited : [];
  state.partnerBucketList = first ? first.bucketList : [];
}
```

**Step 3: Update `renderFriendsList()` for checkboxes**

Replace the friend card markup to add checkbox and multi-select visual:
```javascript
const FRIEND_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];

list.innerHTML = state.friends.map((f, i) => {
  const isActive = state.activeFriends.some(af => af.code === f.code);
  const colorIdx = state.activeFriends.findIndex(af => af.code === f.code);
  const dotColor = colorIdx >= 0 ? FRIEND_COLORS[colorIdx] : '';
  const travelClass = (f.visitedCount || 0) >= 10 ? 'traveler-green' : (f.visitedCount || 0) >= 3 ? 'traveler-amber' : 'traveler-gray';
  return `<div class="friend-card${isActive ? ' active' : ''} ${travelClass}" data-code="${f.code}">
    <span class="fc-check">${isActive ? '☑' : '☐'}</span>
    <span class="fc-dot" ${dotColor ? `style="background:${dotColor}"` : ''}></span>
    <span class="fc-name">${f.name}</span>
    <span class="fc-count">${f.ratedCount || 0} rated</span>
    <button class="fc-remove" data-code="${f.code}" title="Remove">✕</button>
  </div>`;
}).join('');
```

Update click handler from `selectFriend` to `toggleFriend`.

**Step 4: Commit**
```bash
git add app.js
git commit -m "feat: multi-select friends state and data loading (up to 4)"
```

---

## Task 2: Multi-Select Friends — Map & Stats

**Files:**
- Modify: `app.js` — `updateColors()` (~line 500), `updateSyncStats()` (~line 560)
- Modify: `style.css` — friend color legend styles

**Step 1: Update `updateColors()` for multi-friend overlap**

In the `couplesMode` branch of `updateColors()`, replace single-partner logic with:
```javascript
// Multi-friend overlap coloring
const allDatasets = state.activeFriends.map(f => state.partnerDatasets[f.code]).filter(Boolean);
if (allDatasets.length === 0) return;

d3.selectAll('.country').each(function () {
  const el = d3.select(this);
  const name = el.attr('data-name');

  const myRated = state.ratings[name];
  const myVisited = state.visited.includes(name);

  // Count how many friends rated/visited this country
  const friendsVisited = allDatasets.filter(d => (d.visited || []).includes(name)).length;
  const friendsRated = allDatasets.filter(d => d.ratings && d.ratings[name]).length;
  const totalInvolved = (myVisited || myRated ? 1 : 0) + friendsVisited;

  if (state.syncViewMode === 'match') {
    // Brighter = more overlap
    if (totalInvolved >= 2) {
      const intensity = totalInvolved / (allDatasets.length + 1);
      el.attr('fill', d3.interpolateGreens(0.3 + intensity * 0.7));
    } else if (myRated || myVisited) {
      el.attr('fill', '#60a5fa');
    } else if (friendsVisited > 0 || friendsRated > 0) {
      el.attr('fill', '#fbbf24');
    } else {
      el.attr('fill', isDark ? '#2a2a2a' : '#e8e8e8');
    }
  }
  // diff and explore modes similar with multi-friend awareness
});
```

**Step 2: Update `updateSyncStats()` for multi-friend**

Update header to show all selected friend names. Update mutual/diff calculations to use intersection across all selected friends.

Key changes:
- "Both visited" → "All visited" (intersection of everyone's visited lists)
- "Biggest Disagreements" → compare avg of friends vs your rating
- "Shared Wishlist" → bucket list items all selected friends share
- "Plan a Trip" → destinations everyone rated ≥6

**Step 3: Add friend color legend to sync panel**

In the sync legend, show color-coded dots matching each friend:
```html
<div class="friend-legend">
  <!-- Dynamically filled: purple dot = Sarah, pink dot = Ahmed, etc. -->
</div>
```

**Step 4: Commit**
```bash
git add app.js style.css
git commit -m "feat: multi-friend map overlap coloring and stats"
```

---

## Task 3: Registration — Nationality & Residence

**Files:**
- Modify: `index.html` — auth modal form
- Modify: `app.js` — registration flow, profile panel
- Modify: `netlify/functions/api.js` — `/auth/register` endpoint, user blob schema
- Modify: `countryData.js` — add ISO code mapping

**Step 1: Add nationality/residence data**

In `countryData.js`, add a mapping at the bottom:
```javascript
const COUNTRY_ISO = {
  "Afghanistan": "AF", "Albania": "AL", "Algeria": "DZ", /* ... all ~200 countries ... */
};
const ISO_TO_NAME = Object.fromEntries(Object.entries(COUNTRY_ISO).map(([k,v]) => [v,k]));
```

**Step 2: Add registration step 2 to auth modal**

In `index.html`, add a hidden second step inside `#auth-modal`:
```html
<div id="register-step2" class="hidden">
  <h3>Almost there!</h3>
  <p class="auth-subtitle">Tell us about yourself for personalized travel info.</p>

  <label class="form-label">Your Nationalities (up to 3)</label>
  <div id="nationality-picker">
    <input type="text" id="nationality-search" placeholder="Search country..." autocomplete="off">
    <div id="nationality-results" class="dropdown-results hidden"></div>
    <div id="selected-nationalities" class="selected-tags"></div>
  </div>

  <label class="form-label">Where do you currently live?</label>
  <div id="residence-picker">
    <input type="text" id="residence-search" placeholder="Search country..." autocomplete="off">
    <div id="residence-results" class="dropdown-results hidden"></div>
    <div id="selected-residence"></div>
  </div>

  <button type="button" id="complete-registration" class="btn-primary">Start Exploring</button>
  <button type="button" id="skip-registration" class="btn-text">Skip for now</button>
</div>
```

**Step 3: Add searchable country picker logic**

In `app.js`, add country picker component:
```javascript
function initCountryPicker(searchId, resultsId, onSelect, maxSelections) {
  const input = document.getElementById(searchId);
  const dropdown = document.getElementById(resultsId);
  const allCountries = Object.keys(COUNTRY_DATA).sort();

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { dropdown.classList.add('hidden'); return; }
    const matches = allCountries.filter(c => c.toLowerCase().includes(q)).slice(0, 8);
    dropdown.innerHTML = matches.map(c => {
      const d = COUNTRY_DATA[c];
      return `<div class="picker-option" data-country="${c}">${d ? d.flag : '🏳️'} ${c}</div>`;
    }).join('');
    dropdown.classList.remove('hidden');
    dropdown.querySelectorAll('.picker-option').forEach(opt => {
      opt.addEventListener('click', () => {
        onSelect(opt.dataset.country);
        input.value = '';
        dropdown.classList.add('hidden');
      });
    });
  });
}
```

**Step 4: Update registration flow**

After successful register API call, show step 2 instead of closing modal. On "Complete" or "Skip", send `POST /api/profile` with nationalities + residence.

**Step 5: Update backend `/auth/register`**

In `api.js`, accept optional `nationalities` and `residence` in register body. Store in user blob:
```javascript
const user = {
  id, username, password: hashPassword(password), sync_code,
  nationalities: body.nationalities || [],  // ISO alpha-2 codes
  residence: body.residence || null          // ISO alpha-2 code
};
```

**Step 6: Add `POST /api/profile` and `GET /api/profile` endpoints**

```javascript
if (path === '/profile' && event.httpMethod === 'POST') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  const user = await getUser(decoded.id);
  if (!user) return { statusCode: 404, headers, body: JSON.stringify({ error: 'Not found' }) };

  if (body.nationalities && Array.isArray(body.nationalities) && body.nationalities.length <= 3) {
    user.nationalities = body.nationalities;
  }
  if (body.residence && typeof body.residence === 'string' && body.residence.length === 2) {
    user.residence = body.residence;
  }
  await saveUser(user);
  return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
}

if (path === '/profile' && event.httpMethod === 'GET') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
  const user = await getUser(decoded.id);
  return { statusCode: 200, headers, body: JSON.stringify({
    nationalities: user.nationalities || [],
    residence: user.residence || null
  }) };
}
```

**Step 7: Add nationality/residence display in profile panel**

In the profile view section of `app.js`, show flags for nationalities and residence, with an "Edit" button that reopens the picker.

**Step 8: Commit**
```bash
git add index.html app.js netlify/functions/api.js countryData.js style.css
git commit -m "feat: nationality and residence in registration and profile"
```

---

## Task 4: Visa Requirements — Backend Endpoint

**Files:**
- Modify: `netlify/functions/api.js` — add `/visa` endpoint
- Create: `netlify/functions/visa-data.js` — static fallback data + dual-rate country list

**Step 1: Sign up for Travel Buddy AI on RapidAPI**

Get API key. Store as `RAPIDAPI_KEY` in Netlify env vars. Note: 120 free requests/month.

**Step 2: Add `/api/visa` endpoint**

```javascript
if (path === '/visa' && event.httpMethod === 'GET') {
  const decoded = authenticate(getToken(event.headers));
  if (!decoded) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };

  const destination = event.queryStringParameters?.destination;
  if (!destination || destination.length !== 2) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid destination ISO code' }) };
  }

  const user = await getUser(decoded.id);
  const nationalities = user.nationalities || [];
  if (nationalities.length === 0) {
    return { statusCode: 200, headers, body: JSON.stringify({
      needsSetup: true,
      message: 'Set your nationality in profile'
    }) };
  }

  const cache = blobStore('visa-cache');
  const results = [];

  for (const passport of nationalities) {
    const cacheKey = `${passport}:${destination}`;
    let cached = null;
    try { cached = await cache.get(cacheKey, { type: 'json' }); } catch {}

    if (cached && (Date.now() - cached.timestamp < 7 * 24 * 60 * 60 * 1000)) {
      results.push(cached.data);
      continue;
    }

    // Call Travel Buddy AI
    try {
      const res = await fetch('https://visa-requirement.p.rapidapi.com/v2/visa/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'visa-requirement.p.rapidapi.com',
        },
        body: JSON.stringify({ passport, destination }),
      });
      if (res.ok) {
        const data = await res.json();
        results.push({ passport, ...data });
        await cache.setJSON(cacheKey, { data: { passport, ...data }, timestamp: Date.now() });
      }
    } catch (err) {
      // Fallback to static data
      const fallback = getStaticVisaData(passport, destination);
      if (fallback) results.push(fallback);
    }
  }

  // Pick best option (visa-free > VOA > eVisa > required)
  const ranked = results.sort((a, b) => visaPriority(a.status) - visaPriority(b.status));

  return { statusCode: 200, headers, body: JSON.stringify({
    results: ranked,
    best: ranked[0] || null,
    allResults: ranked
  }) };
}
```

**Step 3: Add `visaPriority()` helper and static fallback**

```javascript
function visaPriority(status) {
  const map = { 'visa-free': 0, 'visa_free': 0, 'VF': 0, 'visa-on-arrival': 1, 'VOA': 1, 'eVisa': 2, 'EV': 2, 'visa-required': 3, 'VR': 3 };
  return map[status] ?? 4;
}
```

Create `visa-data.js` with a minimal static fallback for common passport-destination pairs and the dual-rate countries list:
```javascript
const DUAL_RATE_COUNTRIES = ['EG', 'AR', 'NG', 'LB', 'CU', 'VE', 'ET', 'MM', 'SD', 'SY', 'IR', 'LA'];
```

**Step 4: Commit**
```bash
git add netlify/functions/api.js netlify/functions/visa-data.js
git commit -m "feat: visa requirements API endpoint with caching"
```

---

## Task 5: Visa Requirements — Frontend Panel

**Files:**
- Modify: `app.js` — `openPanel()` function (~line 308)
- Modify: `index.html` — add visa section to facts panel
- Modify: `style.css` — visa badge styles

**Step 1: Add visa section to facts panel HTML**

In `index.html`, inside `#facts-panel` after the hero section, add:
```html
<div id="panel-visa" class="panel-section hidden">
  <div class="visa-badge" id="visa-badge"></div>
  <div class="visa-detail" id="visa-detail"></div>
</div>
```

**Step 2: Fetch and render visa data in `openPanel()`**

After the facts rendering in `openPanel()`, add:
```javascript
// Visa requirements
const visaSection = document.getElementById('panel-visa');
if (state.user && COUNTRY_ISO[name]) {
  visaSection.classList.remove('hidden');
  visaSection.innerHTML = '<div class="visa-loading">Checking entry requirements...</div>';

  fetch(`${API_URL}/visa?destination=${COUNTRY_ISO[name]}`, { headers: getAuthHeader() })
    .then(r => r.json())
    .then(visa => {
      if (visa.needsSetup) {
        visaSection.innerHTML = '<div class="visa-setup">Set your nationality in profile for visa info</div>';
        return;
      }
      if (!visa.best) {
        visaSection.classList.add('hidden');
        return;
      }

      const statusColors = { 'visa-free': '#10b981', 'VOA': '#f59e0b', 'eVisa': '#3b82f6', 'visa-required': '#ef4444' };
      const statusLabels = { 'visa-free': 'Visa Free', 'VF': 'Visa Free', 'VOA': 'Visa on Arrival', 'eVisa': 'eVisa', 'EV': 'eVisa', 'visa-required': 'Visa Required', 'VR': 'Visa Required' };
      const best = visa.best;
      const color = statusColors[best.status] || statusColors['visa-required'];
      const label = statusLabels[best.status] || best.status;
      const duration = best.duration ? ` — ${best.duration}` : '';

      let html = `<div class="visa-result">
        <span class="visa-pill" style="background:${color}">${label}</span>
        <span class="visa-duration">${duration}</span>
      </div>`;

      // Multi-nationality note
      if (visa.allResults.length > 1 && visa.allResults[0].passport !== visa.allResults[1]?.passport) {
        const passportName = ISO_TO_NAME[best.passport] || best.passport;
        html += `<div class="visa-note">Using your ${passportName} passport</div>`;
      }

      visaSection.innerHTML = html;
    })
    .catch(() => visaSection.classList.add('hidden'));
} else {
  visaSection.classList.add('hidden');
}
```

**Step 3: Style visa badges**

```css
.visa-pill {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.visa-duration { font-size: 0.8rem; opacity: 0.7; margin-left: 6px; }
.visa-note { font-size: 0.72rem; opacity: 0.6; margin-top: 4px; font-style: italic; }
```

**Step 4: Commit**
```bash
git add app.js index.html style.css
git commit -m "feat: visa requirement badge in country panel"
```

---

## Task 6: Travel Budget — Static Dataset

**Files:**
- Modify: `countryData.js` — add budget data per country

**Step 1: Add budget data to countryData.js**

Add a new object with per-country budget tiers (sourced from Budget Your Trip, Numbeo cost index, and travel blogs). This is the static dataset approach since no affordable API exists.

```javascript
const BUDGET_DATA = {
  "Thailand": {
    backpacker: [15, 25], midrange: [40, 70], luxury: [150, 300],
    breakdown: { accommodation: 35, food: 30, transport: 20, activities: 15 },
    costIndex: 38, // Numbeo index (NYC = 100)
    bestMonths: "Nov–Feb",
    currency: "THB",
    dualRate: false
  },
  "Switzerland": {
    backpacker: [80, 120], midrange: [200, 300], luxury: [500, 800],
    breakdown: { accommodation: 45, food: 25, transport: 15, activities: 15 },
    costIndex: 122,
    bestMonths: "Mar–May, Sep–Nov",
    currency: "CHF",
    dualRate: false
  },
  "Egypt": {
    backpacker: [15, 25], midrange: [40, 80], luxury: [120, 250],
    breakdown: { accommodation: 30, food: 25, transport: 25, activities: 20 },
    costIndex: 22,
    bestMonths: "Oct–Apr",
    currency: "EGP",
    dualRate: true
  },
  // ... all countries with COUNTRY_DATA entries
};
```

Populate for all countries that have entries in COUNTRY_DATA. Use realistic, researched ranges.

**Step 2: Commit**
```bash
git add countryData.js
git commit -m "feat: static budget dataset for all countries"
```

---

## Task 7: Travel Budget — Backend & Frontend

**Files:**
- Modify: `netlify/functions/api.js` — add `/budget` endpoint
- Modify: `app.js` — render budget section in `openPanel()`
- Modify: `index.html` — budget section in facts panel
- Modify: `style.css` — budget card styles

**Step 1: Add `/api/budget` endpoint**

```javascript
if (path === '/budget' && event.httpMethod === 'GET') {
  const country = event.queryStringParameters?.country;
  if (!country) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing country' }) };

  // Budget data is static, served from countryData
  // This endpoint exists to compute the relative cost vs user's residence
  const decoded = authenticate(getToken(event.headers));
  let residenceIndex = null;
  if (decoded) {
    const user = await getUser(decoded.id);
    if (user?.residence) {
      // Look up residence cost index from static data
      residenceIndex = user.residence; // Frontend will handle comparison
    }
  }

  return { statusCode: 200, headers, body: JSON.stringify({ residence: residenceIndex }) };
}
```

Actually, since budget data is static and lives in `countryData.js` (loaded client-side), the comparison can happen entirely in the frontend. The only server call needed is `GET /api/profile` to get the user's residence — which we already built in Task 3. So **no new backend endpoint is needed** for budget.

**Step 2: Add budget section to facts panel HTML**

In `index.html`:
```html
<div id="panel-budget" class="panel-section hidden">
  <div class="section-header" onclick="this.parentElement.classList.toggle('open')">
    <span>Travel Budget</span>
    <svg class="chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  <div class="section-body">
    <div id="budget-tiers"></div>
    <div id="budget-breakdown"></div>
    <div id="budget-relative"></div>
    <div id="budget-season"></div>
  </div>
</div>
```

**Step 3: Render budget in `openPanel()`**

```javascript
// Budget snapshot
const budgetSection = document.getElementById('panel-budget');
const budgetData = typeof BUDGET_DATA !== 'undefined' ? BUDGET_DATA[name] : null;
if (budgetData) {
  budgetSection.classList.remove('hidden');
  budgetSection.classList.add('open');

  const tierIcons = { backpacker: '🎒', midrange: '🏨', luxury: '💎' };
  const tierLabels = { backpacker: 'Backpacker', midrange: 'Mid-range', luxury: 'Luxury' };

  let tiersHtml = '<div class="budget-tiers">';
  for (const tier of ['backpacker', 'midrange', 'luxury']) {
    const [lo, hi] = budgetData[tier];
    tiersHtml += `<div class="budget-tier">
      <span class="bt-icon">${tierIcons[tier]}</span>
      <span class="bt-label">${tierLabels[tier]}</span>
      <span class="bt-range">$${lo}–${hi}/day</span>
    </div>`;
  }
  tiersHtml += '</div>';

  // Breakdown bar
  const colors = { accommodation: '#6366f1', food: '#f59e0b', transport: '#10b981', activities: '#ec4899' };
  let barHtml = '<div class="budget-bar">';
  for (const [cat, pct] of Object.entries(budgetData.breakdown)) {
    barHtml += `<div class="bb-segment" style="width:${pct}%;background:${colors[cat]}" title="${cat}: ${pct}%"></div>`;
  }
  barHtml += '</div><div class="bb-labels">';
  for (const [cat, pct] of Object.entries(budgetData.breakdown)) {
    barHtml += `<span class="bb-label"><span class="bb-dot" style="background:${colors[cat]}"></span>${cat} ${pct}%</span>`;
  }
  barHtml += '</div>';

  // Relative cost
  let relativeHtml = '';
  if (state.userResidence && typeof BUDGET_DATA !== 'undefined') {
    const homeData = BUDGET_DATA[ISO_TO_NAME[state.userResidence]];
    if (homeData && homeData.costIndex && budgetData.costIndex) {
      const ratio = homeData.costIndex / budgetData.costIndex;
      if (ratio > 1.1) {
        relativeHtml = `<div class="budget-relative cheaper">${ratio.toFixed(1)}x cheaper than home</div>`;
      } else if (ratio < 0.9) {
        relativeHtml = `<div class="budget-relative pricier">${(1/ratio).toFixed(1)}x pricier than home</div>`;
      } else {
        relativeHtml = `<div class="budget-relative similar">Similar cost to home</div>`;
      }
    }
  }

  // Dual rate warning
  let dualRateHtml = '';
  if (budgetData.dualRate) {
    dualRateHtml = `<div class="budget-dualrate">⚠ Unofficial exchange rates may significantly lower actual costs</div>`;
  }

  // Season
  const seasonHtml = budgetData.bestMonths ?
    `<div class="budget-season">Best value: <strong>${budgetData.bestMonths}</strong></div>` : '';

  document.getElementById('budget-tiers').innerHTML = tiersHtml;
  document.getElementById('budget-breakdown').innerHTML = barHtml;
  document.getElementById('budget-relative').innerHTML = relativeHtml + dualRateHtml;
  document.getElementById('budget-season').innerHTML = seasonHtml;
} else {
  budgetSection.classList.add('hidden');
}
```

**Step 4: Style budget section**

Add CSS for budget tiers, breakdown bar, relative cost indicator, dual-rate warning, and season line.

**Step 5: Commit**
```bash
git add app.js index.html style.css
git commit -m "feat: travel budget snapshot in country panel"
```

---

## Task 8: Country Soundtrack — Backend

**Files:**
- Modify: `countryData.js` — add Spotify track IDs
- Modify: `netlify/functions/api.js` — add `/soundtrack` endpoint

**Step 1: Add Spotify track IDs to countryData.js**

```javascript
const SOUNDTRACK_DATA = {
  "Japan": { trackId: "3n3Ppam7vgaVa1iaRUc9Lp", artist: "Joe Hisaishi", title: "One Summer's Day" },
  "Brazil": { trackId: "4gNMEWk5CEJMkJnMfikhpD", artist: "João Gilberto", title: "The Girl from Ipanema" },
  "Egypt": { trackId: "1dNIEtp7AY3oDAKCGg2XkN", artist: "Umm Kulthum", title: "Enta Omri" },
  "Iceland": { trackId: "2cGxRwrMyEAp8dEbuZaVv6", artist: "Sigur Rós", title: "Hoppípolla" },
  "India": { trackId: "1mCsF9Tw4AkIZOjvZbZZdT", artist: "A.R. Rahman", title: "Jai Ho" },
  "France": { trackId: "3bi7MRg5wMmMWsmhBiigs7", artist: "Edith Piaf", title: "La Vie en Rose" },
  "Mexico": { trackId: "5fjYFxKBIvC0hMbTnJdFkM", artist: "Mariachi Vargas", title: "Cielito Lindo" },
  "Turkey": { trackId: "3T4tUhGYeRNVUGevb0wThu", artist: "Barış Manço", title: "Dağlar Dağlar" },
  // ... all countries in COUNTRY_DATA
};
```

**Step 2: Add `/api/soundtrack` endpoint**

Uses the Spotify embed scraping approach (no API key needed):

```javascript
if (path === '/soundtrack' && event.httpMethod === 'GET') {
  const country = event.queryStringParameters?.country;
  if (!country) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing country' }) };

  // Check cache first
  const cache = blobStore('soundtrack-cache');
  const cacheKey = `track:${country}`;
  let cached = null;
  try { cached = await cache.get(cacheKey, { type: 'json' }); } catch {}

  if (cached && (Date.now() - cached.timestamp < 24 * 60 * 60 * 1000)) {
    return { statusCode: 200, headers, body: JSON.stringify(cached.data) };
  }

  // Look up track ID (passed from frontend or from server-side data)
  const trackId = event.queryStringParameters?.trackId;
  if (!trackId) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing trackId' }) };

  try {
    // Fetch Spotify embed page to extract preview URL
    const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
    const res = await fetch(embedUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();

    // Extract preview URL from the embed page's JSON data
    const previewMatch = html.match(/"audioPreview":\{"url":"([^"]+)"/);
    const previewUrl = previewMatch ? previewMatch[1] : null;

    const result = {
      previewUrl,
      spotifyLink: `https://open.spotify.com/track/${trackId}`,
    };

    if (previewUrl) {
      await cache.setJSON(cacheKey, { data: result, timestamp: Date.now() });
    }

    return { statusCode: 200, headers, body: JSON.stringify(result) };
  } catch (err) {
    return { statusCode: 200, headers, body: JSON.stringify({
      previewUrl: null,
      spotifyLink: `https://open.spotify.com/track/${trackId}`
    }) };
  }
}
```

**Step 3: Commit**
```bash
git add countryData.js netlify/functions/api.js
git commit -m "feat: soundtrack API with Spotify embed preview extraction"
```

---

## Task 9: Country Soundtrack — Frontend Player

**Files:**
- Modify: `app.js` — audio player in `openPanel()`
- Modify: `index.html` — player section in facts panel
- Modify: `style.css` — player styles

**Step 1: Add player HTML to facts panel**

In `index.html`, inside `#facts-panel` right after the hero section:
```html
<div id="panel-soundtrack" class="panel-section hidden">
  <div class="soundtrack-player">
    <button class="sp-play" id="sp-play-btn">
      <svg id="sp-play-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    </button>
    <div class="sp-info">
      <div class="sp-title" id="sp-title"></div>
      <div class="sp-artist" id="sp-artist"></div>
    </div>
    <div class="sp-progress">
      <div class="sp-bar" id="sp-bar"></div>
    </div>
  </div>
</div>
```

**Step 2: Add audio player logic in `openPanel()`**

```javascript
// Soundtrack player
const soundtrackSection = document.getElementById('panel-soundtrack');
const trackData = typeof SOUNDTRACK_DATA !== 'undefined' ? SOUNDTRACK_DATA[name] : null;

// Stop any currently playing audio
if (window._travelAudio) {
  window._travelAudio.pause();
  window._travelAudio = null;
}

if (trackData) {
  soundtrackSection.classList.remove('hidden');
  document.getElementById('sp-title').textContent = trackData.title;
  document.getElementById('sp-artist').textContent = trackData.artist;
  document.getElementById('sp-bar').style.width = '0%';

  const playBtn = document.getElementById('sp-play-btn');
  const playIcon = document.getElementById('sp-play-icon');
  let audio = null;
  let loaded = false;

  playBtn.onclick = async () => {
    if (audio && !audio.paused) {
      audio.pause();
      playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
      return;
    }

    if (!loaded) {
      playBtn.classList.add('loading');
      try {
        const res = await fetch(`${API_URL}/soundtrack?country=${encodeURIComponent(name)}&trackId=${trackData.trackId}`);
        const data = await res.json();
        if (data.previewUrl) {
          audio = new Audio(data.previewUrl);
          window._travelAudio = audio;

          audio.addEventListener('timeupdate', () => {
            const pct = (audio.currentTime / audio.duration) * 100;
            document.getElementById('sp-bar').style.width = pct + '%';
          });
          audio.addEventListener('ended', () => {
            playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            document.getElementById('sp-bar').style.width = '0%';
          });

          audio.play();
          loaded = true;
          playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        } else {
          soundtrackSection.innerHTML = `<div class="sp-fallback">No preview available — <a href="${data.spotifyLink}" target="_blank">Open in Spotify</a></div>`;
        }
      } catch {
        soundtrackSection.classList.add('hidden');
      }
      playBtn.classList.remove('loading');
    } else if (audio) {
      audio.play();
      playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    }
  };
} else {
  soundtrackSection.classList.add('hidden');
}
```

**Step 3: Style the player**

Minimal, elegant player CSS matching the existing panel aesthetic.

**Step 4: Commit**
```bash
git add app.js index.html style.css
git commit -m "feat: inline soundtrack player with 30s Spotify previews"
```

---

## Task 10: Integration Testing & Polish

**Files:**
- All modified files

**Step 1: Test multi-select friends**
- Select 2-3 friends, verify map colors overlap correctly
- Deselect one, verify state updates
- Check stats panel shows multi-friend breakdown
- Test "Plan a Trip" with multiple friends

**Step 2: Test visa requirements**
- Register new user with 2 nationalities + residence
- Click various countries, verify visa badges appear
- Verify "best passport" logic picks the better option
- Test with no nationalities set (should show setup prompt)

**Step 3: Test budget snapshot**
- Click countries with budget data, verify tiers render
- Verify relative cost comparison works against user's residence
- Verify dual-rate warning shows for Egypt, Argentina etc.
- Test countries without budget data (section should hide)

**Step 4: Test soundtrack**
- Click countries with soundtrack data, verify player appears
- Click play, verify audio loads and progress bar moves
- Switch countries mid-play, verify previous audio stops
- Test fallback when no preview is available

**Step 5: Test mobile layout**
- Verify all new sections work on mobile (≤768px)
- Budget tiers should stack vertically
- Soundtrack player should be compact
- Visa badge should wrap nicely

**Step 6: Final commit**
```bash
git add -A
git commit -m "polish: integration testing and mobile adjustments"
```

---

## Task 11: Environment Variables & Documentation

**Step 1: Set environment variables**

In Netlify dashboard (or via CLI):
```bash
netlify env:set RAPIDAPI_KEY "your-key-here"
```

**Step 2: Update existing users**

Existing users won't have `nationalities` or `residence`. The code handles this gracefully — these fields are optional, and the visa/budget features show "set up your profile" prompts when missing.

**Step 3: Commit any final adjustments**
```bash
git add -A
git commit -m "docs: environment setup for new API integrations"
```
