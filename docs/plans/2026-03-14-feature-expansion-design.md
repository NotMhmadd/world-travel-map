# World Travel Map — Feature Expansion Design

## Overview
Expand the World Travel Map from a basic rating/sync tool into a full travel tracking, discovery, and social platform. Four workstreams: complete country data, solo experience, social features, and visual polish.

## Section 1: Complete Country Coverage
- Expand countryData.js from 46 to ~195 countries
- Every country gets: flag, capital, continent, population, 5-8 curated facts
- Include disputed/special territories: Taiwan, Kosovo, Palestine
- Fix any name alias mismatches between map data and country data

## Section 2: Solo Experience
- **Bucket List**: "Want to Visit" toggle per country, star icon on map, stored in localStorage + cloud
- **Enhanced Stats Dashboard**: continents completed (X/7), % world visited, region breakdown, total rated
- **Achievements**: Badge system with milestones unlocked by activity (stored locally, shown in profile)
- **Region Filter**: Quick-zoom buttons for Africa, Asia, Europe, Americas, Oceania

## Section 3: Social Features
- **Friend Leaderboard**: Rankings in sync panel — most visited, highest avg, most rated, travel score
- **Friend Recommendations**: In facts panel, show which friends rated a country highly
- **Shared Bucket List**: In sync compare view, highlight mutual "want to visit" countries
- **Travel Score**: Composite gamified score (visited count x avg rating x continent diversity)

## Section 4: Visual Polish
- **Dark Mode**: Toggle in top bar, dark atlas theme with inverted colors
- **Animated Counters**: "+1" float animation when marking visited

## Data Model Changes
- Add `bucketList` array to state (country names)
- Add `achievements` array to state (unlocked badge IDs)
- Cloud API: new endpoints for bucket list sync
- Leaderboard data computed from existing friend ratings

## Files Modified
- countryData.js — full rewrite (all countries)
- app.js — new features, state, event handlers
- style.css — dark mode, achievements, bucket list, leaderboard styles
- index.html — new UI elements (region filters, achievements, leaderboard, dark toggle)
- api.js — bucket list sync endpoint
