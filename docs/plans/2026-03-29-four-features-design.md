# Design: Four New Features — 2026-03-29

## Overview
Four new features for World Travel Explorer Map:
1. Multi-select friends comparison
2. Visa & entry requirements (live API)
3. Travel cost snapshot (per-country budget)
4. Country soundtrack (Spotify 30s previews)

Architecture: All external APIs proxied through Netlify Functions, cached in Blobs. Frontend calls `/api/*` endpoints as with existing features.

---

## Feature 1: Multi-Select Friends Comparison

### UX
- Friends list: checkboxes replace single-click selection
- Select 1–4 friends, "Compare" button activates (or auto-activates on 2+)
- Map paints overlap heatmap: brighter = more friends visited/rated
- Each friend gets a consistent color dot (4-color palette) shown in map legend
- Stats panel shows Venn-style breakdown: "All 3 visited" / "Only you & Sarah" / etc.
- Shared bucket list = intersection of all selected friends' wishlists
- Top mutual picks = countries everyone rated ≥7
- "Plan a Trip Together" modal considers all selected friends

### Data flow
- Calls existing `GET /sync/data?friend={code}` once per selected friend
- All comparison logic client-side — iterate multiple partner datasets
- No new backend endpoints

### State changes
```javascript
state.activeFriends: []          // array replaces single activeFriend
state.partnerDatasets: {}        // { friendCode: { ratings, visited, bucketList } }
state.syncViewMode: 'match'     // unchanged, works across N friends
```

---

## Feature 2: Visa & Entry Requirements

### Registration changes
- After username/password, second step: "Where are you from?"
- Nationality selector: searchable dropdown with flags, up to 3 nationalities
- Current residence: single country picker
- Stored in user blob: `{ ...existingFields, nationalities: ["EG", "NL"], residence: "NL" }`
- Editable later in profile panel

### Country panel integration
New "Entry Requirements" section in facts panel:
- Badge: **Visa Free** (green) / **Visa on Arrival** (amber) / **eVisa** (blue) / **Visa Required** (red)
- Duration: "90 days", "30 days", etc.
- Multiple nationalities: shows best option with note ("Using your Dutch passport — your Egyptian passport requires a visa")
- Residence-based perks noted if applicable

### Backend
- `GET /api/visa?destination=JP` — new endpoint
- Reads user's nationalities from blob
- Queries external visa API (evaluate: Travelpayy or similar free tier)
- Caches in `visa-cache` blob store, key: `{nationality}:{destination}`, TTL ~7 days
- Falls back to static baseline if API is down

---

## Feature 3: Travel Cost Snapshot

### Country panel integration
New collapsible "Travel Budget" section in facts panel.

**Three daily budget tiers (country-specific from API, NOT hardcoded):**
```
🎒 Backpacker     $15-25/day    (Thailand)
🏨 Mid-range      $40-70/day
💎 Luxury         $150+/day
```
Vs Switzerland:
```
🎒 Backpacker     $80-120/day
🏨 Mid-range      $200-300/day
💎 Luxury         $500+/day
```

**Cost breakdown bar:**
Stacked horizontal bar: Accommodation | Food | Transport | Activities
Color-coded segments with labels on hover/tap.

**Relative cost indicator:**
"2.3x cheaper than living in Netherlands" — uses user's residence as baseline.
Green arrow = cheaper, red = pricier.

**Best value season:**
Single line: "Cheapest to visit: Sep–Nov (shoulder season)"

**Exchange rate handling:**
- Dual-rate countries flagged (Egypt, Argentina, Nigeria, Lebanon, Cuba, Venezuela, Ethiopia, etc.)
- Disclaimer badge: "⚠ Unofficial exchange rates may significantly lower actual costs"
- Relative comparison gets asterisk for these countries

### Backend
- `GET /api/budget?country=Thailand` — new endpoint
- Reads user's residence from blob for relative comparison
- Queries cost-of-living API (evaluate: Numbeo, Travel Cost API, or similar)
- Caches in `budget-cache` blob, key: country, TTL ~30 days
- Falls back to curated static dataset (~50 popular destinations)
- All amounts in USD

---

## Feature 4: Country Soundtrack — Click-to-Listen

### Country panel integration
Minimal inline player at top of facts panel, under country name/flag:
```
♫ "Enta Omri" — Umm Kulthum          ▶ ━━━━━━━━━
```
- Play/pause button, track name, artist
- Thin 30-second progress bar
- No album art, no volume control — ultra-clean

### Music curation
- Each country: 1 iconic track as Spotify track ID in `countryData.js`
- Curated for instant country association (Umm Kulthum for Egypt, Bossa Nova for Brazil, Sigur Rós for Iceland)
- Traditional, classic pop, or iconic artists — not random current hits

### Backend
- `GET /api/soundtrack?country=Egypt` — new endpoint
- Reads Spotify track ID from countryData
- Calls Spotify preview URL endpoint (client credentials, no user auth)
- Returns `{ trackName, artist, previewUrl, spotifyLink }`
- Caches in `soundtrack-cache` blob, TTL ~24 hours (preview URLs expire)
- Frontend plays via `new Audio(previewUrl)`

### Fallback
If preview unavailable: "No preview available" + link to open in Spotify.

### Sync mode bonus
When comparing with friends and both rated a country highly, player shows: "A shared favorite"

---

## API Summary

| Endpoint | Method | Auth | Cache Store | TTL |
|----------|--------|------|-------------|-----|
| `/api/visa?destination=XX` | GET | Yes | `visa-cache` | 7 days |
| `/api/budget?country=XX` | GET | Yes | `budget-cache` | 30 days |
| `/api/soundtrack?country=XX` | GET | No | `soundtrack-cache` | 24 hours |

Existing endpoints unchanged. Multi-select uses existing `/sync/data`.

## User blob schema changes
```javascript
// users store: user:{id}
{
  id, username, password, sync_code,
  nationalities: ["EG", "NL"],  // NEW — ISO 3166-1 alpha-2, up to 3
  residence: "NL"                // NEW — ISO 3166-1 alpha-2
}
```

## External API dependencies
1. **Visa API** — TBD (evaluate during implementation)
2. **Cost-of-living API** — TBD (evaluate during implementation)
3. **Spotify Web API** — client credentials flow for preview URLs
