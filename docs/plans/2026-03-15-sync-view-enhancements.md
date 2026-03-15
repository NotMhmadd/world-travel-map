# Sync View & UX Enhancements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enhance the Sync View with richer comparison features and add delightful UX touches across the app.

**Architecture:** All changes are frontend-only (app.js, style.css, index.html). No API changes needed — all new features derive from existing state (ratings, visited, partnerRatings, friends).

**Tech Stack:** Vanilla JS, D3.js, CSS3

---

### Task 1: Tooltip shows friend's rating in "Their Map" view

**Files:**
- Modify: `app.js` — `onMouseOver` function (~line 209)

**Step 1:** Update `onMouseOver` to check `state.couplesMode` and `state.syncViewMode`. When in `theirs` mode, show the partner's rating instead of the user's. When in `match` mode, show both ratings side by side.

```javascript
function onMouseOver(ev, d) {
  const name = d3.select(this).attr('data-name') || 'Unknown';
  const r = state.ratings[name];
  let html = name;

  if (state.couplesMode && state.partnerRatings && state.syncViewMode === 'theirs') {
    const pR = state.partnerRatings[name];
    if (pR !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(pR)}">${pR}/10</span>`;
  } else if (state.couplesMode && state.partnerRatings && state.syncViewMode === 'match') {
    const pR = state.partnerRatings[name];
    if (r !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(r)}"> You: ${r}</span>`;
    if (pR !== undefined) {
      const friendName = state.activeFriend ? state.activeFriend.name : 'Friend';
      html += `<span class="tt-rating" style="color:${ratingToColorBright(pR)}"> ${friendName}: ${pR}</span>`;
    }
  } else {
    if (r !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(r)}">${r}/10</span>`;
  }

  tooltip.innerHTML = html;
  tooltip.classList.add('visible');
}
```

---

### Task 2: Travel Compatibility Insights text

**Files:**
- Modify: `index.html` — add `#compat-insight` element inside `sync-match-panel` (~line 155)
- Modify: `app.js` — `updateSyncStats` function (~line 469)
- Modify: `style.css` — add `.compat-insight` style

**Step 1:** Add HTML element after `compat-detail` div:
```html
<p id="compat-insight" class="compat-insight"></p>
```

**Step 2:** In `updateSyncStats`, after computing `compatPct`, set insight text:
```javascript
const insightEl = document.getElementById('compat-insight');
if (insightEl) {
  let insight = '';
  if (totalShared === 0) insight = 'Rate some countries to see your compatibility!';
  else if (compatPct >= 90) insight = 'Travel soulmates! You agree on almost everything.';
  else if (compatPct >= 75) insight = 'Great match! You share similar travel tastes.';
  else if (compatPct >= 60) insight = 'Solid compatibility — a few surprises to discover.';
  else if (compatPct >= 40) insight = 'Different perspectives — perfect for broadening horizons!';
  else insight = 'Opposites attract! You\'ll never run out of debates.';
  insightEl.textContent = insight;
}
```

**Step 3:** CSS:
```css
.compat-insight{font-size:0.75rem;color:var(--text-muted);font-style:italic;margin:0 0 10px;line-height:1.4}
```

---

### Task 3: "Where You Disagree" list

**Files:**
- Modify: `index.html` — add disagree section after `sync-top-destinations` div (~line 161)
- Modify: `app.js` — `updateSyncStats` to populate disagree list
- Modify: `style.css` — add `.disagree-item` styles

**Step 1:** HTML after top-mutual-list container:
```html
<div class="sync-top-destinations" style="margin-top:10px">
    <p class="sync-top-title">Biggest Disagreements</p>
    <div id="top-disagree-list" class="top-mutual-list">
        <p class="sync-empty">No disagreements yet!</p>
    </div>
</div>
```

**Step 2:** In `updateSyncStats`, compute disagreements and render:
```javascript
const disagreements = [];
allCountries.forEach(name => {
  const mine = myR[name];
  const theirs = pR[name];
  if (mine !== undefined && theirs !== undefined) {
    const diff = Math.abs(mine - theirs);
    if (diff >= 4) disagreements.push({ name, mine, theirs, diff });
  }
});
disagreements.sort((a, b) => b.diff - a.diff);
const topDisagree = disagreements.slice(0, 5);
const disagreeList = document.getElementById('top-disagree-list');
if (disagreeList) {
  if (topDisagree.length === 0) {
    disagreeList.innerHTML = '<p class="sync-empty">You two agree on everything!</p>';
  } else {
    disagreeList.innerHTML = topDisagree.map(d => {
      const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[d.name] : null;
      const flag = cd ? cd.flag : '';
      return `<div class="disagree-item"><span class="mi-flag">${flag}</span><span class="mi-name">${d.name}</span><span class="di-scores"><span style="color:${ratingToColorBright(d.mine)}">${d.mine}</span> vs <span style="color:${ratingToColorBright(d.theirs)}">${d.theirs}</span></span></div>`;
    }).join('');
  }
}
```

**Step 3:** CSS:
```css
.disagree-item{display:flex;align-items:center;gap:8px;font-size:0.8rem;padding:6px 10px;border-radius:8px;background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.12);transition:transform 0.2s}
.disagree-item:hover{transform:translateX(4px)}
.disagree-item .mi-name{flex:1;font-weight:500;color:var(--text)}
.di-scores{font-size:0.72rem;font-weight:600;white-space:nowrap}
```

---

### Task 4: Shared Visited countries

**Files:**
- Modify: `index.html` — add shared-visited section
- Modify: `app.js` — `updateSyncStats` to compute shared visited
- Modify: `style.css` — styles

**Step 1:** HTML after disagree list:
```html
<div class="sync-top-destinations" id="shared-visited-section" style="margin-top:10px">
    <p class="sync-top-title">Both Visited</p>
    <div id="shared-visited-list" class="top-mutual-list">
        <p class="sync-empty">No shared trips yet!</p>
    </div>
</div>
```

**Step 2:** This requires partner visited data. Update the API response and frontend to include partner visited. The API at `/sync/data` already returns `myVisited`; we need to also return `partnerVisited`. Modify `api.js` to include `partnerVisited: fData.visited` in the response. Then in `selectFriend`, store `state.partnerVisited = data.partnerVisited || []`.

**Step 3:** In `updateSyncStats`:
```javascript
const sharedVisited = state.visited.filter(c => (state.partnerVisited || []).includes(c));
const svList = document.getElementById('shared-visited-list');
if (svList) {
  if (sharedVisited.length === 0) {
    svList.innerHTML = '<p class="sync-empty">No shared trips yet!</p>';
  } else {
    svList.innerHTML = sharedVisited.slice(0, 5).map(name => {
      const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
      const flag = cd ? cd.flag : '';
      return `<div class="mutual-item"><span class="mi-flag">${flag}</span><span class="mi-name">${name}</span><span class="mi-score">Both visited</span></div>`;
    }).join('');
  }
}
```

---

### Task 5: Region Comparison bars (you vs friend)

**Files:**
- Modify: `index.html` — add region comparison section inside sync-match-panel
- Modify: `app.js` — `updateSyncStats`
- Modify: `style.css`

**Step 1:** HTML:
```html
<div class="sync-region-compare" style="margin-top:10px">
    <p class="sync-top-title">Region Breakdown</p>
    <div id="sync-region-bars"></div>
</div>
```

**Step 2:** In `updateSyncStats`, compute per-region average ratings for both users and render dual bars.

---

### Task 6: Click-to-copy sync code

**Files:**
- Modify: `app.js` — add click handler on `#my-code`
- Modify: `style.css` — `.code-box` cursor and feedback

**Step 1:** Add click handler:
```javascript
myCodeEl.addEventListener('click', () => {
  navigator.clipboard.writeText(myCodeEl.textContent).then(() => {
    myCodeEl.dataset.original = myCodeEl.textContent;
    myCodeEl.textContent = 'Copied!';
    myCodeEl.classList.add('copied');
    setTimeout(() => {
      myCodeEl.textContent = myCodeEl.dataset.original;
      myCodeEl.classList.remove('copied');
    }, 1200);
  });
});
```

**Step 2:** CSS:
```css
.code-box{cursor:pointer;transition:all 0.2s}
.code-box.copied{background:rgba(34,197,94,0.15);color:#16a34a}
```

---

### Task 7: "Surprise Me" button

**Files:**
- Modify: `index.html` — add button in region-filter bar
- Modify: `app.js` — random country selection logic
- Modify: `style.css` — button style

**Step 1:** Add button to `#region-filter`:
```html
<button class="region-btn surprise-btn" id="surprise-btn" title="Discover a random country">Surprise Me</button>
```

**Step 2:** JS handler:
```javascript
$('#surprise-btn').addEventListener('click', () => {
  const unrated = allNames.filter(n => state.ratings[n] === undefined);
  const pool = unrated.length > 0 ? unrated : allNames;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const cp = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === pick; });
  if (!cp.empty()) onCountryClick.call(cp.node(), null, cp.datum());
});
```

---

### Task 8: Animated stat counters

**Files:**
- Modify: `app.js` — add `animateCounter` utility and use in `updateStats`/`updateEnhancedStats`

**Step 1:** Utility function:
```javascript
function animateCounter(el, target, duration = 400) {
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const diff = target - start;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
```

Use in `updateStats` for `#stat-rated` and in `updateEnhancedStats` for `#stat-visited`.
