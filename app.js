(function () {
  'use strict';

  // ===== SAFE LOCALSTORAGE =====
  function safeGetItem(key, fallback) {
    try { return localStorage.getItem(key); } catch { return fallback || null; }
  }
  function safeSetItem(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* localStorage full — silent fallback */ }
  }

  // ===== STATE =====
  const state = {
    ratings: JSON.parse(safeGetItem('travelRatings', '{}') || '{}'),
    visited: JSON.parse(safeGetItem('travelVisited', '[]') || '[]'),
    bucketList: JSON.parse(safeGetItem('travelBucket', '[]') || '[]'),
    ratingMode: false,
    couplesMode: false,
    syncViewMode: 'match',
    selectedCountry: null,
    user: null,
    partnerRatings: null,
    partnerVisited: [],
    partnerBucketList: [],
    darkMode: safeGetItem('travelDarkMode') === 'true',
    // Multi-select friends (up to 4)
    activeFriends: [],       // array of { name, code }
    partnerDatasets: {},     // { code: { ratings, visited, bucketList } }
  };
  
  state.userNationalities = []; // ISO codes
  state.userResidence = null;   // ISO code

  let allNames = []; // Search cache
  function realRatings() { return Object.fromEntries(Object.entries(state.ratings).filter(([k]) => k !== '_bucket_sync')); }
  function realRatingCount() { return Object.keys(state.ratings).filter(k => k !== '_bucket_sync').length; }
  
  const API_URL = location.hostname === 'localhost' ? 'http://localhost:8888/api' : '/api';

  const $ = s => document.querySelector(s);
  const mapSvg = d3.select('#world-map');
  const tooltip = $('#tooltip');
  const searchInput = $('#search-input');
  const searchResults = $('#search-results');
  const factsPanel = $('#facts-panel');
  const panelOverlay = $('#panel-overlay');
  const ratingToggle = $('#rating-mode-toggle');
  const colorLegend = $('#color-legend');
  const couplesLegend = $('#sync-legend');
  const loadingScreen = $('#loading-screen');
  const couplesToggle = $('#sync-mode-toggle');
  
  // Auth / Profile elements
  const profileBtn = $('#profile-btn');
  const authModal = $('#auth-modal');
  const loginView = $('#login-view');
  const profileView = $('#profile-view');
  const myCodeEl = $('#my-code');

  // ===== RATING → COLOR =====
  function ratingToColor(r) {
    const hue = ((r - 1) / 9) * 120;
    return `hsl(${hue}, 75%, 45%)`;
  }
  function ratingToColorBright(r) {
    const hue = ((r - 1) / 9) * 120;
    return `hsl(${hue}, 80%, 42%)`;
  }
  
  // Match colors
  const COLOR_MATCH = '#10b981';
  const COLOR_CONVINCE = '#f59e0b';
  const COLOR_NOGO = '#ef4444';

  // ===== MAP SETUP =====
  let width = window.innerWidth;
  let height = window.innerHeight;

  const projection = d3.geoNaturalEarth1()
    .scale(width / 5.2)
    .translate([width / 2, height / 2 + 30]);

  const path = d3.geoPath().projection(projection);

  const g = mapSvg
    .attr('width', width)
    .attr('height', height)
    .append('g');

  const zoom = d3.zoom()
    .scaleExtent([1, 12])
    .on('zoom', e => g.attr('transform', e.transform));
  mapSvg.call(zoom);

  // ===== RESIZE HANDLER =====
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = window.innerWidth;
      height = window.innerHeight;
      mapSvg.attr('width', width).attr('height', height);
      projection.translate([width / 2, height / 2 + 30]).scale(width / 5.2);
      g.selectAll('path').attr('d', path);
    }, 200);
  });

  $('#zoom-in').addEventListener('click', () => mapSvg.transition().duration(500).call(zoom.scaleBy, 1.5));
  $('#zoom-out').addEventListener('click', () => mapSvg.transition().duration(500).call(zoom.scaleBy, 0.67));
  $('#reset-view-btn').addEventListener('click', () => mapSvg.transition().duration(700).call(zoom.transform, d3.zoomIdentity));

  // ===== NAME ALIASES =====
  const NAME_ALIASES = {
    'United States of America': 'United States',
    'Republic of Korea': 'South Korea',
    'Korea, Republic of': 'South Korea',
    'Dem. Rep. Korea': 'North Korea',
    'Russian Federation': 'Russia',
    'United Republic of Tanzania': 'Tanzania',
    'Czech Republic': 'Czechia',
    'Republic of the Congo': 'Congo',
    'Democratic Republic of the Congo': 'DR Congo',
    'Dem. Rep. Congo': 'DR Congo',
    'Viet Nam': 'Vietnam',
    'Lao PDR': 'Laos',
    'Syrian Arab Republic': 'Syria',
    'Iran (Islamic Republic of)': 'Iran',
    'Brunei Darussalam': 'Brunei',
    'Venezuela (Bolivarian Republic of)': 'Venezuela',
    'Bolivia (Plurinational State of)': 'Bolivia',
    'Republic of Serbia': 'Serbia',
    'The former Yugoslav Republic of Macedonia': 'North Macedonia',
    'Macedonia': 'North Macedonia',
    'United Kingdom of Great Britain and Northern Ireland': 'United Kingdom',
    'Ivory Coast': "Côte d'Ivoire",
    "Côte d'Ivoire": "Côte d'Ivoire",
    'W. Sahara': 'Western Sahara',
    'Central African Rep.': 'Central African Republic',
    'S. Sudan': 'South Sudan',
    'Eq. Guinea': 'Equatorial Guinea',
    'eSwatini': 'Eswatini',
    'Dem. Rep. Congo': 'DR Congo',
    'Solomon Is.': 'Solomon Islands',
    'Bosnia and Herz.': 'Bosnia and Herzegovina',
    'Dominican Rep.': 'Dominican Republic',
    'Falkland Is.': 'Falkland Islands',
    'Fr. S. Antarctic Lands': 'French Southern Territories',
    'N. Cyprus': 'Northern Cyprus',
    'Northern Cyprus': 'Northern Cyprus',
  };

  function resolveName(raw) { return NAME_ALIASES[raw] || raw; }

  // ===== ISO 3166-1 numeric → country name =====
  const ID_TO_NAME = {};
  const isoRaw = {
    '4':"Afghanistan",'8':"Albania",'12':"Algeria",'24':"Angola",'32':"Argentina",'36':"Australia",
    '40':"Austria",'50':"Bangladesh",'56':"Belgium",'64':"Bhutan",'68':"Bolivia",'70':"Bosnia and Herzegovina",
    '72':"Botswana",'76':"Brazil",'96':"Brunei",'100':"Bulgaria",'104':"Myanmar",'108':"Burundi",
    '112':"Belarus",'116':"Cambodia",'120':"Cameroon",'124':"Canada",'140':"Central African Republic",
    '144':"Sri Lanka",'148':"Chad",'152':"Chile",'156':"China",'170':"Colombia",'178':"Congo",
    '180':"DR Congo",'188':"Costa Rica",'191':"Croatia",'192':"Cuba",'196':"Cyprus",
    '203':"Czechia",'208':"Denmark",'262':"Djibouti",'214':"Dominican Republic",'218':"Ecuador",
    '818':"Egypt",'222':"El Salvador",'226':"Equatorial Guinea",'232':"Eritrea",'233':"Estonia",
    '231':"Ethiopia",'238':"Falkland Islands",'242':"Fiji",'246':"Finland",'250':"France",
    '260':"French Southern Territories",'266':"Gabon",'270':"Gambia",'268':"Georgia",'276':"Germany",
    '288':"Ghana",'300':"Greece",'320':"Guatemala",'324':"Guinea",'328':"Guyana",'332':"Haiti",
    '340':"Honduras",'348':"Hungary",'352':"Iceland",'356':"India",'360':"Indonesia",'364':"Iran",
    '368':"Iraq",'372':"Ireland",'376':"Israel",'380':"Italy",'388':"Jamaica",'392':"Japan",
    '400':"Jordan",'398':"Kazakhstan",'404':"Kenya",'408':"North Korea",'410':"South Korea",
    '-99':"Kosovo",'414':"Kuwait",'417':"Kyrgyzstan",'418':"Laos",'428':"Latvia",'422':"Lebanon",
    '426':"Lesotho",'430':"Liberia",'434':"Libya",'440':"Lithuania",'442':"Luxembourg",'450':"Madagascar",
    '454':"Malawi",'458':"Malaysia",'466':"Mali",'478':"Mauritania",'484':"Mexico",'496':"Mongolia",
    '499':"Montenegro",'504':"Morocco",'508':"Mozambique",'516':"Namibia",'524':"Nepal",'528':"Netherlands",
    '540':"New Caledonia",'554':"New Zealand",'558':"Nicaragua",'562':"Niger",'566':"Nigeria",
    '578':"Norway",'512':"Oman",'586':"Pakistan",'275':"Palestine",'591':"Panama",'598':"Papua New Guinea",
    '600':"Paraguay",'604':"Peru",'608':"Philippines",'616':"Poland",'620':"Portugal",'630':"Puerto Rico",
    '634':"Qatar",'642':"Romania",'643':"Russia",'646':"Rwanda",'682':"Saudi Arabia",'686':"Senegal",
    '688':"Serbia",'694':"Sierra Leone",'702':"Singapore",'703':"Slovakia",'705':"Slovenia",
    '706':"Somalia",'710':"South Africa",'716':"Zimbabwe",'724':"Spain",'728':"South Sudan",
    '729':"Sudan",'740':"Suriname",'748':"Eswatini",'752':"Sweden",'756':"Switzerland",
    '760':"Syria",'762':"Tajikistan",'764':"Thailand",'626':"Timor-Leste",'768':"Togo",
    '780':"Trinidad and Tobago",'788':"Tunisia",'792':"Turkey",'795':"Turkmenistan",'800':"Uganda",
    '804':"Ukraine",'784':"United Arab Emirates",'826':"United Kingdom",'834':"Tanzania",
    '840':"United States",'858':"Uruguay",'860':"Uzbekistan",'862':"Venezuela",'704':"Vietnam",
    '887':"Yemen",'894':"Zambia"
  };
  Object.entries(isoRaw).forEach(([id, name]) => { ID_TO_NAME[id] = resolveName(name); });

  // ===== LOAD MAP =====
  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
    const countries = topojson.feature(world, world.objects.countries);

    g.append('path').datum(d3.geoGraticule()()).attr('class', 'graticule').attr('d', path);

    // For any features not in our map, try properties.name as fallback
    // Use a per-feature _resolvedName to handle features with undefined/duplicate IDs
    countries.features.forEach(f => {
      if (ID_TO_NAME[f.id]) {
        f._resolvedName = ID_TO_NAME[f.id];
      } else if (f.properties && f.properties.name) {
        f._resolvedName = resolveName(f.properties.name);
      } else {
        f._resolvedName = '';
      }
    });

    renderCountries(countries, world);

  }).catch(() => {
    loadingScreen.innerHTML = '<p style="color:#b91c1c">Failed to load map. Please refresh.</p>';
  });

  function renderCountries(countries, world) {
    g.selectAll('.country')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', path)
      .attr('data-name', d => d._resolvedName || ID_TO_NAME[d.id] || '')
      .on('mouseover', onMouseOver)
      .on('mousemove', onMouseMove)
      .on('mouseout', onMouseOut)
      .on('click', onCountryClick);

    // Visited markers (subtle stroke highlight over existing stroke)
    // In actual SVG, we add a class if visited, handled in updateColors()

    // Borders
    g.append('path')
      .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
      .attr('fill', 'none')
      .attr('stroke', 'var(--country-stroke)')
      .attr('stroke-width', 0.5)
      .attr('d', path)
      .style('pointer-events', 'none');

    updateColors();
    updateStats();
    initSearch();
    setTimeout(() => loadingScreen.classList.add('done'), 350);
  }

  // ===== TOOLTIP =====
  function onMouseOver(ev, d) {
    const name = d3.select(this).attr('data-name') || 'Unknown';
    const r = state.ratings[name];
    let html = name;
    const friendName = state.activeFriend ? state.activeFriend.name : 'Friend';

    if (state.couplesMode && state.partnerRatings) {
      const pR = state.partnerRatings[name];
      if (state.syncViewMode === 'theirs') {
        // Show only friend's rating
        if (pR !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(pR)}">${pR}/10</span>`;
        else html += `<span class="tt-rating tt-unrated">Not rated</span>`;
      } else if (state.syncViewMode === 'mine') {
        // Show only user's rating
        if (r !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(r)}">${r}/10</span>`;
        else html += `<span class="tt-rating tt-unrated">Not rated</span>`;
      } else {
        // Match view: show both
        if (r !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(r)}"> You: ${r}</span>`;
        if (pR !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(pR)}"> ${friendName}: ${pR}</span>`;
        if (r === undefined && pR === undefined) html += `<span class="tt-rating tt-unrated">Unrated</span>`;
      }
    } else {
      if (r !== undefined) html += `<span class="tt-rating" style="color:${ratingToColorBright(r)}">${r}/10</span>`;
    }

    tooltip.innerHTML = html;
    tooltip.classList.add('visible');
  }
  function onMouseMove(ev) {
    tooltip.style.left = (ev.clientX + 16) + 'px';
    tooltip.style.top = (ev.clientY - 16) + 'px';
  }
  function onMouseOut() { tooltip.classList.remove('visible'); }

  // ===== COUNTRY CLICK =====
  function onCountryClick(ev, d) {
    const name = d3.select(this).attr('data-name') || 'Unknown';
    state.selectedCountry = name;

    // Deselect old, select new
    g.selectAll('.country').classed('selected', false);
    d3.select(this).classed('selected', true);

    // Calculate the path length for the stroke animation
    const pathEl = this;
    const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 1000;
    d3.select(this).style('stroke-dasharray', len).style('stroke-dashoffset', len);
    // Force reflow then animate
    void pathEl.getBoundingClientRect();
    d3.select(this).transition().duration(800).ease(d3.easeCubicInOut).style('stroke-dashoffset', 0);

    // Zoom to country, offset left to make room for panel
    const [[x0, y0], [x1, y1]] = path.bounds(d);
    const dx = x1 - x0, dy = y1 - y0;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const scale = Math.max(1, Math.min(6, 0.8 / Math.max(dx / width, dy / height)));
    const tx = width / 2 - scale * cx - width * 0.12;
    const ty = height / 2 - scale * cy;

    mapSvg.transition().duration(900).ease(d3.easeCubicInOut).call(
      zoom.transform,
      d3.zoomIdentity.translate(tx, ty).scale(scale)
    );

    openPanel(name);
  }

  // ===== PANEL =====
  function openPanel(name) {
    // Stop any currently playing audio
    if (window._travelAudio) { window._travelAudio.pause(); window._travelAudio = null; }

    const data = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;

    // Hero
    $('#panel-flag').textContent = data ? data.flag : '🏳️';
    $('#panel-country-name').textContent = name;
    const pinIcon = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;opacity:.7"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    const globeIcon = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;opacity:.7"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
    const usersIcon = `<svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;opacity:.7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
    $('#panel-capital').innerHTML = data ? `${pinIcon} ${data.capital}` : '';
    $('#panel-continent').innerHTML = data ? `${globeIcon} ${data.continent}` : '';
    $('#panel-population').innerHTML = data ? `${usersIcon} ${data.population}` : '';

    // Rating
    const slider = $('#rating-slider');
    const numEl = $('#rating-number');
    const fill = $('#slider-fill');
    const saved = state.ratings[name] ?? 5;

    slider.value = saved;
    updateSliderVisual(saved, numEl, fill);

    slider.oninput = () => {
      const v = +slider.value;
      updateSliderVisual(v, numEl, fill);
      numEl.classList.remove('bounce');
      void numEl.offsetWidth;
      numEl.classList.add('bounce');
    };
    slider.onchange = () => {
      const v = +slider.value;
      state.ratings[name] = v;
      safeSetItem('travelRatings', JSON.stringify(state.ratings));
      updateStreak();
      if (state.ratingMode || state.couplesMode) updateColors();
      updateStats();
      syncRatingToCloud(name, v, state.visited.includes(name));
      // Pulse the country on the map
      const countryPath = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === name; });
      if (!countryPath.empty()) {
        countryPath.classed('just-rated', false);
        void countryPath.node().offsetWidth;
        countryPath.classed('just-rated', true);
        setTimeout(() => countryPath.classed('just-rated', false), 800);
      }
    };

    // Visited
    const visCheckbox = $('#visited-checkbox');
    visCheckbox.checked = state.visited.includes(name);
    visCheckbox.onchange = () => {
      const wasVisited = state.visited.includes(name);
      const isVis = visCheckbox.checked;
      if (isVis && !state.visited.includes(name)) {
        state.visited.push(name);
      } else if (!isVis) {
        state.visited = state.visited.filter(n => n !== name);
      }
      safeSetItem('travelVisited', JSON.stringify(state.visited));
      updateStreak();
      updateColors();
      updateProfileStats();
      syncRatingToCloud(name, state.ratings[name] || 0, isVis);
      // Animated counter + stamp
      if (!wasVisited && isVis) {
        const heroEl = document.getElementById('panel-hero');
        if (heroEl) {
          const hRect = heroEl.getBoundingClientRect();
          fireConfetti(hRect.left + hRect.width / 2, hRect.top + hRect.height / 2);
          showVisitedStamp(hRect.left + hRect.width / 2 - 20, hRect.top + hRect.height / 2 - 20);
        }
        const statEl = document.getElementById('stat-visited');
        if (statEl) {
          const rect = statEl.getBoundingClientRect();
          showFloatPlus('+1', rect.left, rect.top - 10);
        }
      }
    };

    // Facts
    const list = $('#facts-list');
    list.innerHTML = '';
    if (data && data.facts && data.facts.length) {
      data.facts.forEach((f, i) => {
        const card = document.createElement('div');
        card.className = 'fact-card';
        const FACT_ICONS = {
          '💡': `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
          '🏛️': `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
        };
        const badgeIcon = FACT_ICONS[f.e] || `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
        card.innerHTML = `<span class="fact-badge">${badgeIcon}</span>${f.t}`;
        list.appendChild(card);
        // Stagger reveal
        setTimeout(() => card.classList.add('show'), 80 + i * 70);
      });
    } else {
      list.innerHTML = `<div class="no-data"><span class="nd-icon">🌐</span><h4>Coming Soon</h4><p>We're gathering fascinating details about ${name}.</p></div>`;
    }

    // Visa requirements
    const visaSection = document.getElementById('panel-visa');
    if (state.user && typeof COUNTRY_ISO !== 'undefined' && COUNTRY_ISO[name]) {
      visaSection.classList.remove('hidden');
      visaSection.innerHTML = '<div class="visa-loading" style="font-size:0.82rem;opacity:0.5;padding:8px 0">Checking entry requirements...</div>';

      fetch(`${API_URL}/visa?destination=${COUNTRY_ISO[name]}`, { headers: getAuthHeader() })
        .then(r => r.json())
        .then(visa => {
          if (visa.needsSetup) {
            visaSection.innerHTML = '<div style="font-size:0.82rem;opacity:0.5;padding:8px 0">Set your nationality in profile for visa info</div>';
            return;
          }
          if (visa.unavailable || !visa.best) { visaSection.classList.add('hidden'); return; }

          const best = visa.best;
          const statusColors = { 'VF': '#10b981', 'visa-free': '#10b981', 'VOA': '#f59e0b', 'visa-on-arrival': '#f59e0b', 'EV': '#3b82f6', 'eVisa': '#3b82f6', 'VR': '#ef4444', 'visa-required': '#ef4444' };
          const statusLabels = { 'VF': 'Visa Free', 'visa-free': 'Visa Free', 'VOA': 'Visa on Arrival', 'visa-on-arrival': 'Visa on Arrival', 'EV': 'eVisa', 'eVisa': 'eVisa', 'VR': 'Visa Required', 'visa-required': 'Visa Required' };
          const color = statusColors[best.status] || '#ef4444';
          const label = statusLabels[best.status] || best.status || 'Unknown';
          const duration = best.duration ? ` — ${best.duration}` : '';

          let html = `<div style="display:flex;align-items:center;gap:8px;padding:8px 0">
            <span style="display:inline-block;padding:3px 10px;border-radius:12px;color:#fff;font-size:0.75rem;font-weight:600;background:${color}">${label}</span>
            <span style="font-size:0.8rem;opacity:0.7">${duration}</span>
          </div>`;

          // Multi-passport note
          if (visa.results && visa.results.length > 1) {
            const passportName = (typeof ISO_TO_NAME !== 'undefined' && ISO_TO_NAME[best.passport]) || best.passport;
            html += `<div style="font-size:0.72rem;opacity:0.6;font-style:italic">Using your ${passportName} passport</div>`;
          }

          visaSection.innerHTML = html;
        })
        .catch(() => visaSection.classList.add('hidden'));
    } else if (visaSection) {
      visaSection.classList.add('hidden');
    }

    // Budget snapshot
    const budgetSection = document.getElementById('panel-budget');
    const budgetData = typeof BUDGET_DATA !== 'undefined' ? BUDGET_DATA[name] : null;
    if (budgetData && budgetSection && budgetData.costIndex > 0) {
      budgetSection.classList.remove('hidden');

      const tierIcons = { backpacker: '\u{1F392}', midrange: '\u{1F3E8}', luxury: '\u{1F48E}' };
      const tierLabels = { backpacker: 'Backpacker', midrange: 'Mid-range', luxury: 'Luxury' };

      let bhtml = '<div class="budget-card">';
      bhtml += '<div class="budget-title">Travel Budget</div>';

      // Tiers
      bhtml += '<div class="budget-tiers">';
      for (const tier of ['backpacker', 'midrange', 'luxury']) {
        const [lo, hi] = budgetData[tier];
        bhtml += `<div class="budget-tier">
          <span class="bt-icon">${tierIcons[tier]}</span>
          <span class="bt-label">${tierLabels[tier]}</span>
          <span class="bt-range">$${lo}\u2013${hi}/day</span>
        </div>`;
      }
      bhtml += '</div>';

      // Breakdown bar
      const barColors = { accommodation: '#6366f1', food: '#f59e0b', transport: '#10b981', activities: '#ec4899' };
      bhtml += '<div class="budget-bar">';
      for (const [cat, pct] of Object.entries(budgetData.breakdown)) {
        bhtml += `<div class="bb-seg" style="width:${pct}%;background:${barColors[cat]}" title="${cat}: ${pct}%"></div>`;
      }
      bhtml += '</div><div class="bb-labels">';
      for (const [cat, pct] of Object.entries(budgetData.breakdown)) {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        bhtml += `<span class="bb-label"><span class="bb-dot" style="background:${barColors[cat]}"></span>${label} ${pct}%</span>`;
      }
      bhtml += '</div>';

      // Relative cost
      if (state.userResidence && typeof ISO_TO_NAME !== 'undefined') {
        const homeName = ISO_TO_NAME[state.userResidence];
        const homeData = homeName && typeof BUDGET_DATA !== 'undefined' ? BUDGET_DATA[homeName] : null;
        if (homeData && homeData.costIndex && budgetData.costIndex) {
          const ratio = homeData.costIndex / budgetData.costIndex;
          if (ratio > 1.15) {
            bhtml += `<div class="budget-relative cheaper">${ratio.toFixed(1)}x cheaper than home</div>`;
          } else if (ratio < 0.87) {
            bhtml += `<div class="budget-relative pricier">${(1/ratio).toFixed(1)}x pricier than home</div>`;
          } else {
            bhtml += `<div class="budget-relative similar">Similar cost to home</div>`;
          }
        }
      }

      // Dual rate warning
      if (budgetData.dualRate) {
        bhtml += `<div class="budget-dualrate">\u26A0 Unofficial exchange rates may significantly lower actual costs</div>`;
      }

      // Best season
      if (budgetData.bestMonths) {
        bhtml += `<div class="budget-season">Best value: <strong>${budgetData.bestMonths}</strong></div>`;
      }

      bhtml += '</div>';
      budgetSection.innerHTML = bhtml;
    } else if (budgetSection) {
      budgetSection.classList.add('hidden');
    }

    // Soundtrack player
    const soundtrackSection = document.getElementById('panel-soundtrack');
    const trackData = typeof SOUNDTRACK_DATA !== 'undefined' ? SOUNDTRACK_DATA[name] : null;

    if (trackData && soundtrackSection) {
      soundtrackSection.classList.remove('hidden');
      soundtrackSection.innerHTML = `<div class="soundtrack-player">
        <button class="sp-play" id="sp-play-btn" title="Play preview">
          <svg id="sp-play-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
        <div class="sp-info">
          <span class="sp-note">&#9835;</span>
          <div class="sp-meta">
            <div class="sp-title" id="sp-title"></div>
            <div class="sp-artist" id="sp-artist"></div>
          </div>
        </div>
        <div class="sp-progress">
          <div class="sp-bar" id="sp-bar"></div>
        </div>
      </div>`;
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
                const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
                document.getElementById('sp-bar').style.width = pct + '%';
              });
              audio.addEventListener('ended', () => {
                playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
                document.getElementById('sp-bar').style.width = '0%';
              });
              audio.play();
              loaded = true;
              playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
            } else {
              soundtrackSection.innerHTML = `<div class="sp-fallback">No preview — <a href="${data.spotifyLink}" target="_blank" rel="noopener">Open in Spotify</a></div>`;
            }
          } catch {
            soundtrackSection.classList.add('hidden');
          }
          playBtn.classList.remove('loading');
        } else if (audio) {
          audio.play();
          playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
        }
      };
    } else if (soundtrackSection) {
      soundtrackSection.classList.add('hidden');
    }

    // Bucket list checkbox
    const bucketCheck = document.getElementById('bucket-checkbox');
    if (bucketCheck) {
      bucketCheck.checked = state.bucketList.includes(name);
      bucketCheck.onchange = () => {
        if (bucketCheck.checked && !state.bucketList.includes(name)) {
          state.bucketList.push(name);
        } else if (!bucketCheck.checked) {
          state.bucketList = state.bucketList.filter(n => n !== name);
        }
        saveBucket();
        updateColors();
        updateEnhancedStats();
      };
    }

    // Friend recommendations
    renderFriendRecs(name);

    // User review
    if (typeof renderReview === 'function') renderReview(name);

    factsPanel.classList.remove('hidden');
    panelOverlay.classList.remove('hidden');
    $('.panel-scroll').scrollTop = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => factsPanel.classList.add('panel-open'));
    });
  }

  function updateSliderVisual(v, numEl, fillEl) {
    const pct = ((v - 1) / 9) * 100;
    numEl.textContent = v;
    numEl.style.color = ratingToColorBright(v);
    fillEl.style.width = pct + '%';
    fillEl.style.background = `linear-gradient(90deg, #ef4444, ${ratingToColor(v)})`;
    // Color the thumb border to match current value
    const thumb = document.getElementById('slider-thumb');
    if (thumb) thumb.style.color = ratingToColor(v);
  }

  function closePanel() {
    factsPanel.classList.remove('panel-open');
    panelOverlay.classList.add('hidden');
    setTimeout(() => {
      factsPanel.classList.add('hidden');
      g.selectAll('.country').classed('selected', false).style('stroke-dasharray', null).style('stroke-dashoffset', null);
      state.selectedCountry = null;
    }, 320);
  }

  $('#panel-close').addEventListener('click', closePanel);
  panelOverlay.addEventListener('click', closePanel);

  // ===== HEATMAP / COUPLES MODE =====
  ratingToggle.addEventListener('click', () => {
    state.ratingMode = !state.ratingMode;
    if (state.ratingMode) {
      state.couplesMode = false;
      couplesToggle.classList.remove('active');
    }
    ratingToggle.classList.toggle('active', state.ratingMode);
    colorLegend.classList.toggle('hidden', !state.ratingMode);
    couplesLegend.classList.add('hidden');
    updateColors();
  });

  couplesToggle.addEventListener('click', () => {
    if (!state.user) {
      profileBtn.click(); // Open auth modal if not logged in
      return;
    }
    state.couplesMode = !state.couplesMode;
    if (state.couplesMode) {
      state.ratingMode = false;
      ratingToggle.classList.remove('active');
    }
    couplesToggle.classList.toggle('active', state.couplesMode);
    couplesLegend.classList.toggle('hidden', !state.couplesMode);
    colorLegend.classList.add('hidden');
    updateColors();
  });

  function updateColors() {
    g.selectAll('.country').each(function () {
      const el = d3.select(this);
      const name = el.attr('data-name');
      const r = state.ratings[name];
      const isVisited = state.visited.includes(name);
      
      let fillCol = null;
      let strokeCol = null;

      if (state.ratingMode) {
        if (r !== undefined) {
          fillCol = ratingToColor(r);
          strokeCol = ratingToColor(r);
        } else {
          fillCol = '#e0ddd6'; strokeCol = '#d0cdc6';
        }
      } else if (state.couplesMode && state.partnerRatings !== null && state.partnerRatings !== undefined) {
        const multiFriend = state.activeFriends.length > 1;
        if (state.syncViewMode === 'mine') {
          // My heatmap
          if (r !== undefined) {
            fillCol = ratingToColor(r);
            strokeCol = ratingToColor(r);
          } else {
            fillCol = '#e0ddd6'; strokeCol = '#d0cdc6';
          }
        } else if (state.syncViewMode === 'theirs') {
          if (multiFriend) {
            // Multi-friend: average all friends' ratings for this country
            const friendRatings = [];
            state.activeFriends.forEach(af => {
              const ds = state.partnerDatasets[af.code];
              if (ds && ds.ratings[name] !== undefined) friendRatings.push(ds.ratings[name]);
            });
            if (friendRatings.length > 0) {
              const avg = friendRatings.reduce((a, b) => a + b, 0) / friendRatings.length;
              fillCol = ratingToColor(Math.round(avg));
              strokeCol = fillCol;
            } else {
              fillCol = '#e0ddd6'; strokeCol = '#d0cdc6';
            }
          } else {
            // Single friend: partner's heatmap
            const pR = state.partnerRatings[name];
            if (pR !== undefined) {
              fillCol = ratingToColor(pR);
              strokeCol = ratingToColor(pR);
            } else {
              fillCol = '#e0ddd6'; strokeCol = '#d0cdc6';
            }
          }
        } else {
          // Match view
          if (multiFriend) {
            // Multi-friend overlap coloring
            const iHaveRating = r !== undefined;
            const friendsWithRating = [];
            state.activeFriends.forEach(af => {
              const ds = state.partnerDatasets[af.code];
              if (ds && ds.ratings[name] !== undefined) friendsWithRating.push(ds.ratings[name]);
            });
            const totalPeople = (iHaveRating ? 1 : 0) + friendsWithRating.length;

            if (totalPeople >= 2 && iHaveRating && friendsWithRating.length > 0) {
              // Both me and at least one friend rated — check match quality
              const friendAvg = friendsWithRating.reduce((a, b) => a + b, 0) / friendsWithRating.length;
              if (r >= 7 && friendAvg >= 7) {
                // Green intensity by overlap count: more people = brighter
                const intensity = Math.min(totalPeople / (state.activeFriends.length + 1), 1);
                const lightness = 45 - (intensity * 12); // 45% down to 33%
                fillCol = `hsl(160, 75%, ${lightness}%)`;
              } else if ((r >= 7 && friendAvg < 4) || (friendAvg >= 7 && r < 4)) {
                fillCol = COLOR_CONVINCE;
              } else if (r < 4 && friendAvg < 4) {
                fillCol = COLOR_NOGO;
              } else {
                fillCol = '#d1d5db';
              }
            } else if (totalPeople >= 1) {
              // Only one side rated
              if (iHaveRating && friendsWithRating.length === 0) {
                fillCol = 'rgba(96,165,250,0.35)'; // blue tint — only you
              } else if (!iHaveRating && friendsWithRating.length > 0) {
                fillCol = 'rgba(245,158,11,0.3)'; // amber tint — only friend(s)
              } else {
                fillCol = 'rgba(180,175,165,0.4)';
              }
            } else {
              fillCol = '#e0ddd6';
            }
            strokeCol = fillCol;
          } else {
            // Single friend match view (legacy)
            const pR = state.partnerRatings[name];
            if (r !== undefined && pR !== undefined) {
              if (r >= 7 && pR >= 7) fillCol = COLOR_MATCH;
              else if ((r >= 7 && pR < 4) || (pR >= 7 && r < 4)) fillCol = COLOR_CONVINCE;
              else if (r < 4 && pR < 4) fillCol = COLOR_NOGO;
              else fillCol = '#d1d5db';
            } else if (r !== undefined || pR !== undefined) {
              fillCol = 'rgba(180,175,165,0.4)';
            } else {
              fillCol = '#e0ddd6';
            }
            strokeCol = fillCol;
          }
        }
      }

      if (!fillCol && isVisited) {
        strokeCol = '#bfa034';
        el.style('stroke-width', 1.3)
          .style('filter', 'drop-shadow(0 0 1px rgba(212,160,23,0.25))');
      } else if (!fillCol && state.bucketList.includes(name)) {
        strokeCol = '#f59e0b';
        el.style('stroke-width', 1.4).style('stroke-dasharray', '6,3');
      } else {
        el.style('stroke-width', null).style('stroke-dasharray', null).style('filter', null);
      }

      el.style('fill', fillCol).style('stroke', strokeCol);
    });
  }

  // ===== FRIEND COLOR LEGEND =====
  function renderFriendColorLegend() {
    const legendEl = document.getElementById('friend-color-legend');
    if (!legendEl) return;
    if (state.activeFriends.length < 2) {
      legendEl.classList.add('hidden');
      return;
    }
    legendEl.classList.remove('hidden');
    legendEl.innerHTML = state.activeFriends.map((af, i) => {
      const color = FRIEND_COLORS[i % FRIEND_COLORS.length];
      return `<span class="friend-legend-item"><span class="friend-legend-dot" style="background:${color}"></span>${af.name}</span>`;
    }).join('');
  }

  // ===== SYNC STATS =====
  function updateSyncStats() {
    if (state.partnerRatings === null || state.partnerRatings === undefined) return;
    if (!state.ratings) return;

    const multiFriend = state.activeFriends.length > 1;

    // Build combined friend data for multi-friend mode
    // pR = combined/averaged partner ratings across all selected friends
    // pVisited = union of all friends' visited lists
    // pBucket = all friends' bucket lists (for majority calc)
    let pR, pVisited, pBucketLists, friendName;

    if (multiFriend) {
      // Merge all friend datasets: average ratings, union visited, collect bucket lists
      const mergedRatings = {};
      const ratingCounts = {};
      let visitedSet = new Set();
      pBucketLists = [];

      state.activeFriends.forEach(af => {
        const ds = state.partnerDatasets[af.code];
        if (!ds) return;
        Object.entries(ds.ratings || {}).forEach(([country, rating]) => {
          if (country === '_bucket_sync') return;
          mergedRatings[country] = (mergedRatings[country] || 0) + rating;
          ratingCounts[country] = (ratingCounts[country] || 0) + 1;
        });
        (ds.visited || []).forEach(c => visitedSet.add(c));
        pBucketLists.push(ds.bucketList || []);
      });

      // Average the ratings
      pR = {};
      Object.entries(mergedRatings).forEach(([country, sum]) => {
        pR[country] = Math.round(sum / ratingCounts[country]);
      });
      pVisited = [...visitedSet];
      friendName = state.activeFriends.map(f => f.name).join(', ');
    } else {
      pR = Object.fromEntries(Object.entries(state.partnerRatings).filter(([k]) => k !== '_bucket_sync'));
      pVisited = state.partnerVisited || [];
      pBucketLists = [state.partnerBucketList || []];
      friendName = state.activeFriend ? state.activeFriend.name : 'Friend';
    }

    // Update compare header for multi-friend
    const compareNameEl = document.getElementById('compare-name');
    if (compareNameEl) {
      compareNameEl.textContent = multiFriend
        ? state.activeFriends.map(f => f.name).join(' & ')
        : friendName;
    }

    // Render friend color legend
    renderFriendColorLegend();

    const partnerEntries = Object.keys(pR);
    if (partnerEntries.length === 0) {
      const insightEl = document.getElementById('compat-insight');
      if (insightEl) insightEl.textContent = `${friendName} hasn't rated any countries yet — share your map to inspire them!`;
      const topList = document.getElementById('top-mutual-list');
      if (topList) topList.innerHTML = '<p class="sync-empty">No ratings to compare yet.</p>';
      return;
    }

    const myR = Object.fromEntries(Object.entries(state.ratings).filter(([k]) => k !== '_bucket_sync'));
    const allCountries = new Set([...Object.keys(myR), ...Object.keys(pR)]);
    let matchCount = 0, mixedCount = 0, nogoCount = 0, totalShared = 0, compatSum = 0;
    const mutualPicks = [];

    allCountries.forEach(name => {
      const mine = myR[name];
      const theirs = pR[name];
      if (mine !== undefined && theirs !== undefined) {
        totalShared++;
        const diff = Math.abs(mine - theirs);
        compatSum += (10 - diff);
        if (mine >= 7 && theirs >= 7) {
          matchCount++;
          mutualPicks.push({ name, score: Math.round((mine + theirs) / 2) });
        }
        else if ((mine >= 7 && theirs < 4) || (theirs >= 7 && mine < 4)) mixedCount++;
        else if (mine < 4 && theirs < 4) nogoCount++;
      }
    });

    // Compatibility percentage
    const compatPct = totalShared > 0 ? Math.round((compatSum / (totalShared * 10)) * 100) : 0;
    const arcEl = document.getElementById('compat-arc');
    const pctEl = document.getElementById('compat-pct');
    if (arcEl) arcEl.setAttribute('stroke-dasharray', `${compatPct}, 100`);
    if (pctEl) pctEl.textContent = compatPct + '%';

    // Counts
    const matchEl = document.getElementById('match-count');
    const mixedEl = document.getElementById('mixed-count');
    const nogoEl = document.getElementById('nogo-count');
    if (matchEl) matchEl.textContent = matchCount;
    if (mixedEl) mixedEl.textContent = mixedCount;
    if (nogoEl) nogoEl.textContent = nogoCount;

    // Compatibility insight
    const insightEl = document.getElementById('compat-insight');
    if (insightEl) {
      let insight = '';
      if (totalShared === 0) insight = 'Rate some countries to see your compatibility!';
      else if (compatPct >= 90) insight = 'Travel soulmates! You agree on almost everything.';
      else if (compatPct >= 75) insight = 'Great match! You share similar travel tastes.';
      else if (compatPct >= 60) insight = 'Solid compatibility \u2014 a few surprises to discover.';
      else if (compatPct >= 40) insight = 'Different perspectives \u2014 perfect for broadening horizons!';
      else insight = 'Opposites attract! You\'ll never run out of debates.';
      insightEl.textContent = insight;
    }

    // Top mutual picks
    const topList = document.getElementById('top-mutual-list');
    if (topList) {
      mutualPicks.sort((a, b) => b.score - a.score);
      const top5 = mutualPicks.slice(0, 5);
      if (top5.length === 0) {
        topList.innerHTML = '<p class="sync-empty">Rate more countries to see shared picks!</p>';
      } else {
        topList.innerHTML = top5.map(p => {
          const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[p.name] : null;
          const flag = cd ? cd.flag : '🌍';
          return `<div class="mutual-item"><span class="mi-flag">${flag}</span><span class="mi-name">${p.name}</span><span class="mi-score">${p.score}/10</span></div>`;
        }).join('');
      }
    }

    // Biggest disagreements
    const disagreements = [];
    allCountries.forEach(name => {
      const mine = myR[name];
      const theirs = pR[name];
      if (mine !== undefined && theirs !== undefined) {
        const diff = Math.abs(mine - theirs);
        if (diff >= 3) disagreements.push({ name, mine, theirs, diff });
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
          const theirLabel = multiFriend ? 'Avg' : friendName;
          return `<div class="disagree-item"><span class="mi-flag">${flag}</span><span class="mi-name">${d.name}</span><span class="di-scores"><span style="color:${ratingToColorBright(d.mine)}">You: ${d.mine}</span> <span style="color:${ratingToColorBright(d.theirs)}">${theirLabel}: ${d.theirs}</span></span></div>`;
        }).join('');
      }
    }

    // Shared visited — intersection of everyone's visited lists
    let sharedVisited;
    if (multiFriend) {
      // Intersection: countries visited by you AND all friends
      sharedVisited = state.visited.filter(c => {
        return state.activeFriends.every(af => {
          const ds = state.partnerDatasets[af.code];
          return ds && (ds.visited || []).includes(c);
        });
      });
    } else {
      sharedVisited = state.visited.filter(c => pVisited.includes(c));
    }
    const svList = document.getElementById('shared-visited-list');
    if (svList) {
      if (sharedVisited.length === 0) {
        svList.innerHTML = '<p class="sync-empty">No shared trips yet!</p>';
      } else {
        const allLabel = multiFriend ? 'All visited' : 'Both visited';
        svList.innerHTML = sharedVisited.slice(0, 5).map(name => {
          const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
          const flag = cd ? cd.flag : '';
          return `<div class="mutual-item"><span class="mi-flag">${flag}</span><span class="mi-name">${name}</span><span class="mi-score">${allLabel}</span></div>`;
        }).join('');
      }
    }

    // Shared Bucket List — items on majority of friends' lists
    let sharedBucket;
    if (multiFriend) {
      // Majority: bucket list items that appear on your list AND at least half of friends' lists
      const majority = Math.ceil(state.activeFriends.length / 2);
      sharedBucket = state.bucketList.filter(c => {
        const friendCount = state.activeFriends.filter(af => {
          const ds = state.partnerDatasets[af.code];
          return ds && (ds.bucketList || []).includes(c);
        }).length;
        return friendCount >= majority;
      });
    } else {
      sharedBucket = state.bucketList.filter(c => (pBucketLists[0] || []).includes(c));
    }
    const sbList = document.getElementById('shared-bucket-list');
    if (sbList) {
      if (sharedBucket.length === 0) {
        sbList.innerHTML = '<p class="sync-empty">No shared bucket list items yet!</p>';
      } else {
        const wantLabel = multiFriend ? 'Most want!' : 'Both want!';
        sbList.innerHTML = sharedBucket.slice(0, 5).map(name => {
          const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
          const flag = cd ? cd.flag : '';
          return `<div class="mutual-item" style="background:rgba(245,158,11,0.05);border-color:rgba(245,158,11,0.12)"><span class="mi-flag">${flag}</span><span class="mi-name">${name}</span><span class="mi-score">${wantLabel}</span></div>`;
        }).join('');
      }
    }

    // Combined Top 10 — ranked by average of both users' ratings
    const top10El = document.getElementById('combined-top10-list');
    if (top10El) {
      const combinedEntries = [];
      const allRatedKeys = new Set([...Object.keys(myR), ...Object.keys(pR)]);
      allRatedKeys.forEach(name => {
        const mine = myR[name];
        const theirs = pR[name];
        if (mine !== undefined && theirs !== undefined) {
          const avg = (mine + theirs) / 2;
          const cd = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
          combinedEntries.push({ name, mine, theirs, avg, flag: cd ? cd.flag : '🌍' });
        }
      });
      combinedEntries.sort((a, b) => b.avg - a.avg);
      const top10 = combinedEntries.slice(0, 10);
      if (top10.length === 0) {
        top10El.innerHTML = '<p class="sync-empty">Rate countries together to build your combined top 10!</p>';
      } else {
        top10El.innerHTML = top10.map((p, i) => {
          const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `<span class="top10-rank">${i + 1}</span>`;
          return `<div class="mutual-item top10-item"><span class="top10-medal">${medal}</span><span class="mi-flag">${p.flag}</span><span class="mi-name">${p.name}</span><span class="mi-score" style="color:${ratingToColorBright(p.avg)}">${p.avg % 1 === 0 ? p.avg : p.avg.toFixed(1)}/10</span></div>`;
        }).join('');
      }
    }

    // Travel Personality Comparison
    const personalityEl = document.getElementById('personality-compare');
    if (personalityEl) {
      function getPersonality(ratings) {
        const _pi = {
          leaf: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.9.7 7.7C18.7 12 15.9 14.5 11 20z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
          butterfly: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12M12 12C12 8 8 2 3 3c0 4 2.5 7 5 9"/><path d="M12 12c0-4 4-10 9-9 0 4-2.5 7-5 9"/><path d="M12 12c-2 2-6 4-9 3 1-3 3-5 5-6"/><path d="M12 12c2 2 6 4 9 3-1-3-3-5-5-6"/></svg>`,
          zap: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
          flame: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
          brain: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.04-3 2.5 2.5 0 0 1-.1-3.14 3 3 0 0 1 .6-5.87A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.04-3 2.5 2.5 0 0 0 .1-3.14 3 3 0 0 0-.6-5.87A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
          diamond: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0z"/></svg>`,
          compass: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
        };
        if (!ratings) return { type: 'Newcomer', icon: _pi.leaf, desc: 'Just getting started' };
        const vals = Object.values(ratings);
        if (vals.length === 0) return { type: 'Newcomer', icon: _pi.leaf, desc: 'Just getting started' };
        const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
        const high = vals.filter(v => v >= 8).length;
        const low = vals.filter(v => v <= 3).length;
        const spread = vals.length;
        if (avg >= 7.5 && spread >= 20) return { type: 'Wanderlust', icon: _pi.butterfly, desc: 'Loves everywhere, wants to see it all' };
        if (high >= 10 && low >= 5) return { type: 'Polarized', icon: _pi.zap, desc: 'Strong opinions, loves or avoids' };
        if (avg >= 6.5) return { type: 'Enthusiast', icon: _pi.flame, desc: 'Passionate about travel' };
        if (spread >= 40) return { type: 'Analyst', icon: _pi.brain, desc: 'Methodical world rater' };
        if (avg <= 4.5) return { type: 'Selective', icon: _pi.diamond, desc: 'Only the finest destinations' };
        return { type: 'Explorer', icon: _pi.compass, desc: 'Curious and open-minded' };
      }
      const myP = getPersonality(myR);
      const theirP = getPersonality(pR);
      personalityEl.innerHTML = `
        <div class="personality-row">
          <div class="personality-card mine-personality">
            <span class="p-icon">${myP.icon}</span>
            <strong class="p-type">${myP.type}</strong>
            <span class="p-desc">${myP.desc}</span>
            <span class="p-label">You</span>
          </div>
          <span class="personality-vs">vs</span>
          <div class="personality-card theirs-personality">
            <span class="p-icon">${theirP.icon}</span>
            <strong class="p-type">${theirP.type}</strong>
            <span class="p-desc">${theirP.desc}</span>
            <span class="p-label">${friendName}</span>
          </div>
        </div>`;
    }

    // Region comparison bars
    const syncRegionBars = document.getElementById('sync-region-bars');
    if (syncRegionBars && typeof COUNTRY_DATA !== 'undefined') {
      const regions = ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'];
      const myRegionAvg = {};
      const partnerRegionAvg = {};
      regions.forEach(r => { myRegionAvg[r] = { sum: 0, count: 0 }; partnerRegionAvg[r] = { sum: 0, count: 0 }; });
      Object.entries(myR).forEach(([name, rating]) => {
        const cd = COUNTRY_DATA[name];
        if (cd && myRegionAvg[cd.continent]) { myRegionAvg[cd.continent].sum += rating; myRegionAvg[cd.continent].count++; }
      });
      Object.entries(pR).forEach(([name, rating]) => {
        const cd = COUNTRY_DATA[name];
        if (cd && partnerRegionAvg[cd.continent]) { partnerRegionAvg[cd.continent].sum += rating; partnerRegionAvg[cd.continent].count++; }
      });
      syncRegionBars.innerHTML = regions.map(r => {
        const myAvg = myRegionAvg[r].count > 0 ? (myRegionAvg[r].sum / myRegionAvg[r].count).toFixed(1) : '—';
        const pAvg = partnerRegionAvg[r].count > 0 ? (partnerRegionAvg[r].sum / partnerRegionAvg[r].count).toFixed(1) : '—';
        const myPct = myAvg !== '—' ? (parseFloat(myAvg) / 10) * 100 : 0;
        const pPct = pAvg !== '—' ? (parseFloat(pAvg) / 10) * 100 : 0;
        return `<div class="sync-region-row">
          <span class="sr-label">${r.replace('North ','N.').replace('South ','S.')}</span>
          <div class="sr-bars">
            <div class="sr-bar-wrap"><div class="sr-bar sr-bar-mine" style="width:${myPct}%"></div><span class="sr-val">${myAvg}</span></div>
            <div class="sr-bar-wrap"><div class="sr-bar sr-bar-theirs" style="width:${pPct}%"></div><span class="sr-val">${pAvg}</span></div>
          </div>
        </div>`;
      }).join('');
    }
  }

  // ===== STATS =====
  function updateStats() {
    const entries = Object.entries(state.ratings);
    const n = entries.length;
    animateCounter($('#stat-rated'), n);
    if (n > 0) {
      const avg = entries.reduce((s, [, v]) => s + v, 0) / n;
      $('#stat-avg').textContent = avg.toFixed(1);
      const top = entries.sort((a, b) => b[1] - a[1])[0];
      const td = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[top[0]] : null;
      $('#stat-top').textContent = `${td ? td.flag : ''} ${top[0]}`;
      $('#stat-top').style.color = ratingToColorBright(top[1]);
    } else {
      $('#stat-avg').textContent = '—';
      $('#stat-top').textContent = '—';
      $('#stat-top').style.color = '';
    }
    updateEnhancedStats();
  }

  // Stats toggle
  $('#stats-toggle').addEventListener('click', () => {
    const body = document.querySelector('.stats-body');
    body.classList.toggle('collapsed');
    $('#stats-toggle').innerHTML = body.classList.contains('collapsed')
      ? '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>'
      : '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  });

  // ===== SEARCH =====
  function initSearch() {
    g.selectAll('.country').each(function () {
      const n = d3.select(this).attr('data-name');
      if (n) allNames.push(n);
    });
    allNames = [...new Set(allNames)].sort();
    // Dynamic placeholder with count
    searchInput.placeholder = `Search ${allNames.length} countries…`;
  }

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

  searchInput.addEventListener('blur', () => setTimeout(() => { searchResults.style.display = 'none'; }, 200));

  // ===== KEYBOARD =====
  document.addEventListener('keydown', e => {
    const isInput = document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA';

    if (e.key === 'Escape') {
      if (!factsPanel.classList.contains('hidden')) { closePanel(); return; }
      if (!authModal.classList.contains('hidden')) { authModal.classList.add('hidden'); return; }
      searchInput.blur();
      searchResults.style.display = 'none';
    }

    if (isInput) return;

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

  // ===== API SYNC LOGIC =====
  function getAuthHeader() {
    const token = safeGetItem('travelToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  async function syncRatingToCloud(country, rating, visited) {
    if (!state.user) return;
    try {
      await fetch(`${API_URL}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ country, rating, visited })
      });
    } catch (err) { /* silent — cloud sync is best-effort */ }
  }

  async function pushLocalDataToCloud() {
    if (!state.user) return;
    const localRatings = { ...state.ratings };
    delete localRatings._bucket_sync;
    if (Object.keys(localRatings).length === 0 && state.visited.length === 0) return;
    try {
      await fetch(`${API_URL}/ratings/bulk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
        body: JSON.stringify({ ratings: localRatings, visited: state.visited, bucketList: state.bucketList })
      });
    } catch (err) { /* silent */ }
  }

  async function loadCloudData() {
    if (!state.user) return;
    try {
      const res = await fetch(`${API_URL}/sync/data`, { headers: getAuthHeader() });
      if (res.ok) {
        const data = await res.json();
        state.ratings = { ...state.ratings, ...data.myRatings };
        state.visited = [...new Set([...state.visited, ...data.myVisited])];
        safeSetItem('travelRatings', JSON.stringify(state.ratings));
        safeSetItem('travelVisited', JSON.stringify(state.visited));

        updateColors();
        updateStats();
        updateProfileStats();

        // Load reviews from cloud
        try {
          const revRes = await fetch(`${API_URL}/reviews`, { headers: getAuthHeader() });
          if (revRes.ok) {
            const revData = await revRes.json();
            const cloudReviews = revData.reviews || {};
            Object.entries(cloudReviews).forEach(([country, review]) => {
              if (!reviews[country] || (review.updated && (!reviews[country].updated || review.updated > reviews[country].updated))) {
                reviews[country] = review;
              }
            });
            safeSetItem('travelReviews', JSON.stringify(reviews));
          }
        } catch (err) { /* silent */ }
      }
    } catch (err) { /* silent */ }
  }


  // ===== AUTH & PROFILE MODAL =====
  profileBtn.addEventListener('click', () => {
    updateProfileStats();
    authModal.classList.remove('hidden');
    if (state.user) {
      loginView.classList.add('hidden');
      profileView.classList.remove('hidden');
    } else {
      loginView.classList.remove('hidden');
      profileView.classList.add('hidden');
    }
  });

  function updateProfileStats() {
    const ratedCount = Object.keys(state.ratings).filter(k => k !== '_bucket_sync').length;
    $('.profile-stats').innerHTML = `
      <div class="p-stat"><strong id="profile-rated">${ratedCount}</strong> Rated</div>
      <div class="p-stat"><strong id="profile-visited">${state.visited.length}</strong> Visited</div>
    `;
    renderProfileTabs();
    renderStreak();
  }

  function renderProfileTabs() {
    const visited = state.visited || [];
    const bucket = state.bucketList || [];
    const ratings = Object.entries(state.ratings || {}).filter(([k]) => k !== '_bucket_sync').sort((a, b) => b[1] - a[1]);
    const top = ratings.slice(0, 10);

    const countEl = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = `(${n})`; };
    countEl('ptab-visited-count', visited.length);
    countEl('ptab-bucket-count', bucket.length);
    countEl('ptab-top-count', Math.min(ratings.length, 10));

    const flag = name => (COUNTRY_DATA[name] && COUNTRY_DATA[name].flag) || '🌍';
    const row = (name, extra) => `<div class="profile-country-item"><span class="country-flag">${flag(name)}</span><span class="country-name">${name}</span>${extra || ''}</div>`;
    const empty = msg => `<div class="profile-country-empty">${msg}</div>`;

    const visitedList = document.getElementById('ptab-visited-list');
    if (visitedList) visitedList.innerHTML = visited.length ? visited.map(c => row(c)).join('') : empty('No countries visited yet — start exploring!');

    const bucketEl = document.getElementById('ptab-bucket-list');
    if (bucketEl) bucketEl.innerHTML = bucket.length ? bucket.map(c => row(c)).join('') : empty('No bucket list items yet — add some dream destinations!');

    const topEl = document.getElementById('ptab-top-list');
    if (topEl) topEl.innerHTML = top.length ? top.map(([name, r]) => row(name, `<span class="country-rating">${r}/10</span>`)).join('') : empty('No ratings yet — rate some countries!');
  }

  // Profile tab switching
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.add('hidden'));
      tab.classList.add('active');
      const target = document.getElementById('ptab-' + tab.dataset.ptab);
      if (target) target.classList.remove('hidden');
    });
  });

  function closeAuthModal() {
    authModal.classList.add('hidden');
    const step2 = document.getElementById('register-step2');
    if (step2) step2.classList.add('hidden');
  }
  $('.modal-close').addEventListener('click', closeAuthModal);
  // Close modal by clicking the backdrop
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  // Auth Tabs Logic
  let isRegisterMode = false;
  const authTabs = document.querySelectorAll('.auth-tab');
  const authSubtitle = $('#auth-subtitle');
  const btnLoginSubmit = $('#btn-login-submit');

  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      isRegisterMode = tab.dataset.tab === 'register';
      
      if (isRegisterMode) {
        authSubtitle.textContent = 'Create an account to start tracking your travels.';
        btnLoginSubmit.textContent = 'Create Account';
      } else {
        authSubtitle.textContent = 'Welcome back. Access your saved travel plans.';
        btnLoginSubmit.textContent = 'Sign In';
      }
      $('#auth-error').classList.add('hidden');
    });
  });

  // Live Login / Register
  $('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('#btn-login-submit');
    const errEl = $('#auth-error');
    errEl.classList.add('hidden');
    
    const username = $('#auth-username').value.trim();
    const password = $('#auth-password').value.trim();
    if (!username || !password) {
      errEl.textContent = 'Please enter both a username and password.';
      errEl.classList.remove('hidden');
      return;
    }

    const endpoint = isRegisterMode ? 'register' : 'login';
    btn.textContent = isRegisterMode ? 'Creating account…' : 'Signing in…';
    btn.disabled = true;

    try {
      const res = await fetch(`${API_URL}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Authentication failed');
      
      safeSetItem('travelToken', data.token);
      safeSetItem('travelUser', JSON.stringify(data.user));
      
      state.user = data.user;
      myCodeEl.textContent = state.user.sync_code;
      myCodeEl.dataset.original = state.user.sync_code;
      profileBtn.classList.add('logged-in');
      $('#profile-initial').textContent = state.user.username.charAt(0);
      $('#profile-name').textContent = state.user.username;

      // Push any local ratings to cloud first, then load fresh data
      await pushLocalDataToCloud();
      await loadCloudData();
      loadFriends();
      loadProfile();

      if (isRegisterMode) {
        // Show step 2 for new registrations
        showRegistrationStep2();
      } else {
        loginView.classList.add('hidden');
        profileView.classList.remove('hidden');
        updateProfileStats();
        setTimeout(() => {
          authModal.classList.add('hidden');
          showToast(`Welcome back, ${state.user.username}!`, 'travel');
        }, 600);
      }

    } catch (err) {
      errEl.textContent = err.message;
      errEl.classList.remove('hidden');
    } finally {
      btn.textContent = isRegisterMode ? 'Create Account' : 'Sign In';
      btn.disabled = false;
    }
  });

  // Share Travel Card
  document.getElementById('share-card-btn')?.addEventListener('click', generateTravelCard);

  // Logout
  $('#btn-logout').addEventListener('click', () => {
    localStorage.removeItem('travelToken');
    localStorage.removeItem('travelUser');
    localStorage.removeItem('travelRatings');
    localStorage.removeItem('travelVisited');
    
    state.user = null;
    state.ratings = {};
    state.visited = [];
    state.partnerRatings = null;
    state.partnerVisited = [];
    state.couplesMode = false;
    state.syncViewMode = 'match';
    state.friends = [];
    state.activeFriend = null;
    state.activeFriends = [];
    state.partnerDatasets = {};

    couplesToggle.classList.remove('active');
    couplesLegend.classList.add('hidden');
    profileBtn.classList.remove('logged-in');
    $('#profile-initial').textContent = '';
    $('#profile-name').textContent = 'Explorer';

    // Reset friends list UI
    $('#sync-compare').classList.add('hidden');
    renderFriendsList();

    updateColors();
    updateStats();
    authModal.classList.add('hidden');

    // Reset auth form to Sign In tab
    isRegisterMode = false;
    authTabs.forEach(t => t.classList.remove('active'));
    authTabs[0].classList.add('active');
    authSubtitle.textContent = 'Welcome back. Access your saved travel plans.';
    btnLoginSubmit.textContent = 'Sign In';
    $('#auth-error').classList.add('hidden');
    $('#auth-username').value = '';
    $('#auth-password').value = '';
    $('#partner-code-input').value = '';
  });

  // ===== FRIENDS-BASED SYNC =====
  state.friends = [];
  state.activeFriend = null;
  state.activeFriends = [];
  state.partnerDatasets = {};

  const FRIEND_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];

  // Bridge: merge first selected friend's data into legacy fields
  function syncLegacyPartnerState() {
    if (state.activeFriends.length > 0) {
      const first = state.activeFriends[0];
      const ds = state.partnerDatasets[first.code];
      state.activeFriend = first;
      state.partnerRatings = ds ? ds.ratings : {};
      state.partnerVisited = ds ? ds.visited : [];
      state.partnerBucketList = ds ? ds.bucketList : [];
    } else {
      state.activeFriend = null;
      state.partnerRatings = null;
      state.partnerVisited = [];
      state.partnerBucketList = [];
    }
  }

  function timeAgo(ms) {
    const diff = Date.now() - ms;
    const min = Math.floor(diff / 60000);
    const hr = Math.floor(diff / 3600000);
    const day = Math.floor(diff / 86400000);
    if (min < 2) return 'just now';
    if (min < 60) return `${min}m ago`;
    if (hr < 24) return `${hr}h ago`;
    if (day === 1) return 'yesterday';
    return `${day} days ago`;
  }

  function renderFriendsList() {
    const list = $('#friends-list');
    const noMsg = $('#no-friends-msg');
    const compare = $('#sync-compare');
    
    if (state.friends.length === 0) {
      list.innerHTML = '<p class="sync-empty" id="no-friends-msg">Add a friend to start comparing maps.</p>';
      compare.classList.add('hidden');
      return;
    }

    list.innerHTML = state.friends.map(f => {
      const activeIdx = state.activeFriends.findIndex(af => af.code === f.code);
      const isActive = activeIdx !== -1;
      const friendColor = isActive ? FRIEND_COLORS[activeIdx % FRIEND_COLORS.length] : '';
      const travelClass = (f.visitedCount || 0) >= 10 ? 'traveler-green' : (f.visitedCount || 0) >= 3 ? 'traveler-amber' : 'traveler-gray';
      const checkIcon = isActive
        ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0"><rect x="1" y="1" width="14" height="14" rx="3" fill="${friendColor}" stroke="${friendColor}"/><path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0"><rect x="1.5" y="1.5" width="13" height="13" rx="2.5" stroke="currentColor" stroke-opacity="0.4"/></svg>`;
      return `<div class="friend-card${isActive ? ' active' : ''} ${travelClass}" data-code="${f.code}"${isActive ? ` style="border-left:3px solid ${friendColor}"` : ''}>
        <span class="fc-check">${checkIcon}</span>
        <span class="fc-dot"></span>
        <span class="fc-name">${f.name}</span>
        <span class="fc-count">${f.ratedCount || 0} rated</span>
        <button class="fc-remove" data-code="${f.code}" title="Remove">✕</button>
      </div>`;
    }).join('');

    // Click to toggle selection
    list.querySelectorAll('.friend-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('fc-remove')) return;
        toggleFriend(card.dataset.code);
      });
    });

    // Remove buttons
    list.querySelectorAll('.fc-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFriend(btn.dataset.code);
      });
    });
  }

  async function toggleFriend(code) {
    const friend = state.friends.find(f => f.code === code);
    if (!friend) return;

    const idx = state.activeFriends.findIndex(f => f.code === code);

    if (idx !== -1) {
      // Deselect this friend
      state.activeFriends.splice(idx, 1);
      delete state.partnerDatasets[code];
      syncLegacyPartnerState();

      if (state.activeFriends.length === 0) {
        // No friends selected — exit sync mode
        state.couplesMode = false;
        couplesToggle.classList.remove('active');
        couplesLegend.classList.add('hidden');
        $('#sync-compare').classList.add('hidden');
      } else {
        // Update compare name to first selected friend
        $('#compare-name').textContent = state.activeFriends[0].name;
      }

      renderFriendsList();
      updateSyncStats();
      updateColors();
      updateStats();
      return;
    }

    // Select — enforce max 4
    if (state.activeFriends.length >= 4) {
      showToast('Max 4 friends can be compared at once.', 'error');
      return;
    }

    state.activeFriends.push({ name: friend.name, code: friend.code });

    // Auto-activate sync mode
    state.couplesMode = true;
    state.ratingMode = false;
    ratingToggle.classList.remove('active');
    couplesToggle.classList.add('active');
    colorLegend.classList.add('hidden');
    couplesLegend.classList.remove('hidden');

    // Show comparison panel
    $('#compare-name').textContent = state.activeFriends[0].name;
    $('#sync-compare').classList.remove('hidden');
    renderFriendsList();

    // Load friend data with retry
    let success = false;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await fetch(`${API_URL}/sync/data?friend=${code}`, { headers: getAuthHeader() });
        if (res.ok) {
          const data = await res.json();
          state.ratings = { ...state.ratings, ...data.myRatings };
          state.visited = [...new Set([...state.visited, ...(data.myVisited || [])])];
          const pRaw = data.partnerRatings || {};
          delete pRaw._bucket_sync;
          state.partnerDatasets[code] = {
            ratings: pRaw,
            visited: data.partnerVisited || [],
            bucketList: data.partnerBucketList || [],
          };
          syncLegacyPartnerState();
          safeSetItem('travelRatings', JSON.stringify(state.ratings));
          safeSetItem('travelVisited', JSON.stringify(state.visited));
          success = true;
          break;
        }
      } catch (err) {
        // retry on next attempt
        if (attempt === 0) await new Promise(r => setTimeout(r, 1000));
      }
    }

    if (!success) {
      showToast('Could not load friend data. Try again.', 'error');
      state.partnerDatasets[code] = { ratings: {}, visited: [], bucketList: [] };
      syncLegacyPartnerState();
    }

    updateSyncStats();
    updateColors();
    updateStats();
  }

  // Keep backward compat alias
  const selectFriend = toggleFriend;

  async function addFriend(code) {
    const errEl = $('#sync-error');
    errEl.classList.add('hidden');
    if (!code) { errEl.textContent = 'Enter a 6-digit code.'; errEl.classList.remove('hidden'); return; }
    if (!state.user) { profileBtn.click(); return; }

    const btn = $('#btn-add-friend');
    btn.textContent = '...';
    btn.disabled = true;

    try {
      const res = await fetch(`${API_URL}/friends/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
        body: JSON.stringify({ friend_code: code })
      });
      const data = await res.json();
      if (!res.ok) {
        errEl.textContent = data.error || 'Failed to add friend';
        errEl.classList.remove('hidden');
      } else {
        state.friends.push({ name: data.friend_name, code: data.friend_code, ratedCount: 0 });
        $('#partner-code-input').value = '';
        renderFriendsList();
        toggleFriend(data.friend_code);
      }
    } catch (err) {
      errEl.textContent = 'Network error.';
      errEl.classList.remove('hidden');
    } finally {
      btn.textContent = 'Add';
      btn.disabled = false;
    }
  }

  async function removeFriend(code) {
    try {
      const res = await fetch(`${API_URL}/friends/remove`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
        body: JSON.stringify({ friend_code: code })
      });
      if (!res.ok) { showToast('Failed to remove friend', 'error'); return; }
    } catch (err) { showToast('Network error removing friend', 'error'); return; }

    state.friends = state.friends.filter(f => f.code !== code);

    // Clean up from multi-select state
    const wasActive = state.activeFriends.findIndex(f => f.code === code);
    if (wasActive !== -1) {
      state.activeFriends.splice(wasActive, 1);
      delete state.partnerDatasets[code];
      syncLegacyPartnerState();

      if (state.activeFriends.length === 0) {
        $('#sync-compare').classList.add('hidden');
        state.couplesMode = false;
        couplesToggle.classList.remove('active');
      }
      updateColors();
    }
    renderFriendsList();
    updateLeaderboard();
  }

  async function loadFriends() {
    if (!state.user) return;
    try {
      const res = await fetch(`${API_URL}/friends`, { headers: getAuthHeader() });
      if (res.ok) {
        const data = await res.json();
        state.friends = data.friends || [];
        renderFriendsList();
        updateLeaderboard();
      }
    } catch (err) { /* silent */ }
  }

  // Add Friend button
  $('#btn-add-friend').addEventListener('click', () => {
    addFriend($('#partner-code-input').value.trim());
  });

  // Enter key in code input
  $('#partner-code-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addFriend($('#partner-code-input').value.trim());
  });

  // Sync View Switcher
  document.querySelectorAll('.sync-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      state.syncViewMode = view;
      document.querySelectorAll('.sync-view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const matchPanel = $('#sync-match-panel');
      const heatPanel = $('#sync-heatmap-panel');
      const heatInfo = $('#sync-heatmap-info');
      const friendName = state.activeFriend ? state.activeFriend.name : 'Friend';

      if (view === 'match') {
        matchPanel.classList.remove('hidden');
        heatPanel.classList.add('hidden');
      } else {
        matchPanel.classList.add('hidden');
        heatPanel.classList.remove('hidden');
        heatInfo.textContent = view === 'mine'
          ? 'Viewing your ratings on the map.'
          : `Viewing ${friendName}'s ratings on the map.`;
      }

      updateColors();
    });
  });

  // ===== COUNTRY PICKER COMPONENT =====
  function initCountryPicker(searchId, resultsId, tagsId, options) {
    const input = document.getElementById(searchId);
    const dropdown = document.getElementById(resultsId);
    const tagsContainer = document.getElementById(tagsId);
    if (!input || !dropdown || !tagsContainer) return;

    const maxSelections = options.max || 1;
    let selected = [];

    const allCountries = Object.keys(COUNTRY_DATA).sort();

    function renderTags() {
      tagsContainer.innerHTML = selected.map(c => {
        const d = COUNTRY_DATA[c];
        return `<span class="picker-tag">${d ? d.flag : '🏳️'} ${c} <span class="picker-tag-x" data-country="${c}">&times;</span></span>`;
      }).join('');
      tagsContainer.querySelectorAll('.picker-tag-x').forEach(x => {
        x.addEventListener('click', (e) => {
          e.stopPropagation();
          selected = selected.filter(s => s !== x.dataset.country);
          renderTags();
          if (options.onChange) options.onChange(selected);
        });
      });
    }

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (!q) { dropdown.classList.add('hidden'); return; }
      const matches = allCountries.filter(c =>
        c.toLowerCase().includes(q) && !selected.includes(c)
      ).slice(0, 8);
      if (matches.length === 0) { dropdown.classList.add('hidden'); return; }
      dropdown.innerHTML = matches.map(c => {
        const d = COUNTRY_DATA[c];
        return `<div class="picker-option" data-country="${c}">${d ? d.flag : '🏳️'} ${c}</div>`;
      }).join('');
      dropdown.classList.remove('hidden');
      dropdown.querySelectorAll('.picker-option').forEach(opt => {
        opt.addEventListener('click', () => {
          if (selected.length >= maxSelections) {
            if (maxSelections === 1) selected = [];
            else return;
          }
          selected.push(opt.dataset.country);
          input.value = '';
          dropdown.classList.add('hidden');
          renderTags();
          if (options.onChange) options.onChange(selected);
        });
      });
    });

    input.addEventListener('blur', () => {
      setTimeout(() => dropdown.classList.add('hidden'), 200);
    });

    return {
      getSelected: () => selected,
      getSelectedISO: () => selected.map(c => COUNTRY_ISO[c]).filter(Boolean),
      setSelected: (countries) => { selected = countries; renderTags(); },
    };
  }

  // ===== REGISTRATION STEP 2 =====
  let nationalityPicker = null;
  let residencePicker = null;

  function showRegistrationStep2() {
    const step2 = document.getElementById('register-step2');
    if (!step2) return;
    loginView.classList.add('hidden');
    profileView.classList.add('hidden');
    step2.classList.remove('hidden');

    nationalityPicker = initCountryPicker('nationality-search', 'nationality-results', 'selected-nationalities', {
      max: 3,
      onChange: () => {}
    });
    residencePicker = initCountryPicker('residence-search', 'residence-results', 'selected-residence', {
      max: 1,
      onChange: () => {}
    });

    document.getElementById('complete-registration').onclick = async () => {
      const nationalities = nationalityPicker.getSelectedISO();
      const residenceArr = residencePicker.getSelectedISO();
      const residence = residenceArr.length > 0 ? residenceArr[0] : null;

      if (nationalities.length > 0 || residence) {
        state.userNationalities = nationalities;
        state.userResidence = residence;
        try {
          await fetch(`${API_URL}/profile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
            body: JSON.stringify({ nationalities, residence })
          });
        } catch (e) { /* silent */ }
      }

      step2.classList.add('hidden');
      authModal.classList.add('hidden');
      showToast(`Welcome, ${state.user.username}! Start exploring.`, 'travel');
    };

    document.getElementById('skip-registration').onclick = () => {
      step2.classList.add('hidden');
      authModal.classList.add('hidden');
      showToast(`Welcome, ${state.user.username}!`, 'travel');
    };
  }

  // ===== LOAD PROFILE DATA =====
  async function loadProfile() {
    if (!state.user) return;
    try {
      const res = await fetch(`${API_URL}/profile`, { headers: getAuthHeader() });
      if (res.ok) {
        const data = await res.json();
        state.userNationalities = data.nationalities || [];
        state.userResidence = data.residence || null;
        renderProfileTravelInfo();
      }
    } catch (e) { /* silent */ }
  }

  function renderProfileTravelInfo() {
    const container = document.getElementById('profile-travel-info');
    if (!container) return;

    if (state.userNationalities.length === 0 && !state.userResidence) {
      container.innerHTML = `<div class="travel-info-prompt">
        <button class="btn-text" id="btn-set-travel-info">Set nationality &amp; residence for visa info</button>
      </div>`;
      const btn = document.getElementById('btn-set-travel-info');
      if (btn) btn.onclick = () => {
        profileView.classList.add('hidden');
        showRegistrationStep2();
      };
      return;
    }

    let html = '<div class="travel-info-display">';
    if (state.userNationalities.length > 0) {
      const flags = state.userNationalities.map(iso => {
        const name = ISO_TO_NAME[iso];
        const d = name && COUNTRY_DATA[name];
        return d ? d.flag : '🏳️';
      }).join(' ');
      html += `<div class="ti-row"><span class="ti-label">Passport</span><span class="ti-value">${flags} ${state.userNationalities.map(iso => ISO_TO_NAME[iso] || iso).join(', ')}</span></div>`;
    }
    if (state.userResidence) {
      const rName = ISO_TO_NAME[state.userResidence];
      const rData = rName && COUNTRY_DATA[rName];
      const rFlag = rData ? rData.flag : '🏳️';
      html += `<div class="ti-row"><span class="ti-label">Lives in</span><span class="ti-value">${rFlag} ${rName || state.userResidence}</span></div>`;
    }
    html += `<button class="btn-text ti-edit" id="btn-edit-travel-info">Edit</button>`;
    html += '</div>';
    container.innerHTML = html;

    const editBtn = document.getElementById('btn-edit-travel-info');
    if (editBtn) editBtn.onclick = () => {
      profileView.classList.add('hidden');
      showRegistrationStep2();
    };
  }

  // Initialize Auth State on load
  function initAuth() {
    const savedUser = safeGetItem('travelUser');
    const savedToken = safeGetItem('travelToken');
    if (!savedUser || !savedToken) return;

    // Optimistically restore UI state immediately
    try {
      state.user = JSON.parse(savedUser);
    } catch { return; }

    myCodeEl.textContent = state.user.sync_code;
    myCodeEl.dataset.original = state.user.sync_code;
    profileBtn.classList.add('logged-in');
    $('#profile-initial').textContent = state.user.username.charAt(0);
    $('#profile-name').textContent = state.user.username;
    updateGreeting();

    // Verify token in background — clear session if invalid
    fetch(`${API_URL}/auth/verify`, { headers: getAuthHeader() })
      .then(res => {
        if (!res.ok) {
          localStorage.removeItem('travelToken');
          localStorage.removeItem('travelUser');
          state.user = null;
          profileBtn.classList.remove('logged-in');
          $('#profile-initial').textContent = '';
          myCodeEl.textContent = '...';
          showToast('Session expired — please sign in again.', 'error');
          return;
        }
        pushLocalDataToCloud().then(() => loadCloudData());
        loadFriends();
        loadProfile();
      })
      .catch(() => {
        // Network error — keep local state, try to sync later
        pushLocalDataToCloud().then(() => loadCloudData());
        loadFriends();
        loadProfile();
      });
  }

  // ===== DARK MODE =====
  function applyDarkMode() {
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  }
  $('#dark-mode-toggle').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    safeSetItem('travelDarkMode', state.darkMode);
    applyDarkMode();
    updateColors();
  });

  // ===== BUCKET LIST =====
  function saveBucket() {
    safeSetItem('travelBucket', JSON.stringify(state.bucketList));
    updateStreak();
    if (state.user) {
      fetch(`${API_URL}/ratings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
        body: JSON.stringify({ country: '_bucket_sync', rating: 1, visited: false, bucketList: state.bucketList })
      }).catch(() => {});
    }
  }

  // ===== REGION FILTER =====
  const REGION_BOUNDS = {
    'Africa': { center: [20, 0], scale: 2.5 },
    'Asia': { center: [90, 30], scale: 2 },
    'Europe': { center: [15, 52], scale: 3.5 },
    'North America': { center: [-100, 45], scale: 2 },
    'Oceania': { center: [140, -25], scale: 3 },
  };
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.dataset.region;
      const isActive = btn.classList.contains('active');
      document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
      if (isActive) {
        mapSvg.transition().duration(700).call(zoom.transform, d3.zoomIdentity);
        return;
      }
      btn.classList.add('active');
      const bounds = REGION_BOUNDS[region];
      if (!bounds) return;
      const [cx, cy] = projection(bounds.center);
      const s = bounds.scale;
      const tx = width / 2 - s * cx;
      const ty = height / 2 - s * cy;
      mapSvg.transition().duration(900).ease(d3.easeCubicInOut).call(
        zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s)
      );
    });
  });

  // ===== ACHIEVEMENTS =====
  const _ai = {
    star:     `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    map:      `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
    compass:  `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    globe:    `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    crown:    `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
    plane:    `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`,
    backpack: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    trophy:   `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
    check10:  `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    globe2:   `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    list:     `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    users:    `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  };
  const ACHIEVEMENTS = [
    { id: 'first_rate', icon: _ai.star, name: 'First Step', desc: 'Rate your first country', check: () => Object.keys(state.ratings).length >= 1, progress: () => `${Math.min(Object.keys(state.ratings).length, 1)}/1 rated` },
    { id: 'rate_10', icon: _ai.map, name: 'Explorer', desc: 'Rate 10 countries', check: () => Object.keys(state.ratings).length >= 10, progress: () => `${Math.min(Object.keys(state.ratings).length, 10)}/10 rated` },
    { id: 'rate_25', icon: _ai.compass, name: 'Pathfinder', desc: 'Rate 25 countries', check: () => Object.keys(state.ratings).length >= 25, progress: () => `${Math.min(Object.keys(state.ratings).length, 25)}/25 rated` },
    { id: 'rate_50', icon: _ai.globe, name: 'Globetrotter', desc: 'Rate 50 countries', check: () => Object.keys(state.ratings).length >= 50, progress: () => `${Math.min(Object.keys(state.ratings).length, 50)}/50 rated` },
    { id: 'rate_100', icon: _ai.crown, name: 'World King', desc: 'Rate 100 countries', check: () => Object.keys(state.ratings).length >= 100, progress: () => `${Math.min(Object.keys(state.ratings).length, 100)}/100 rated` },
    { id: 'visit_1', icon: _ai.plane, name: 'Takeoff', desc: 'Visit your first country', check: () => state.visited.length >= 1, progress: () => `${Math.min(state.visited.length, 1)}/1 visited` },
    { id: 'visit_10', icon: _ai.backpack, name: 'Backpacker', desc: 'Visit 10 countries', check: () => state.visited.length >= 10, progress: () => `${Math.min(state.visited.length, 10)}/10 visited` },
    { id: 'visit_25', icon: _ai.trophy, name: 'Veteran', desc: 'Visit 25 countries', check: () => state.visited.length >= 25, progress: () => `${Math.min(state.visited.length, 25)}/25 visited` },
    { id: 'perfect_10', icon: _ai.check10, name: 'Perfect 10', desc: 'Give a country 10/10', check: () => Object.values(state.ratings).some(r => r === 10), progress: () => Object.values(state.ratings).some(r => r === 10) ? 'Achieved!' : `Best: ${Math.max(0, ...Object.values(state.ratings))}/10` },
    { id: 'all_continents', icon: _ai.globe2, name: 'Continental', desc: 'Visit all 6 continents', check: () => getVisitedContinents().length >= 6, progress: () => `${getVisitedContinents().length}/6 continents` },
    { id: 'bucket_5', icon: _ai.list, name: 'Dreamer', desc: 'Add 5 bucket list items', check: () => state.bucketList.length >= 5, progress: () => `${Math.min(state.bucketList.length, 5)}/5 bucket list` },
    { id: 'friend_1', icon: _ai.users, name: 'Social', desc: 'Connect with a friend', check: () => (state.friends || []).length >= 1, progress: () => `${Math.min((state.friends || []).length, 1)}/1 friends` },
  ];

  function getVisitedContinents() {
    const continents = new Set();
    state.visited.forEach(name => {
      const d = typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[name] : null;
      if (d) continents.add(d.continent);
    });
    return [...continents];
  }

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

  // ===== TRAVEL SCORE =====
  function calculateTravelScore() {
    const visitedCount = state.visited.length;
    const ratedCount = Object.keys(state.ratings).length;
    const avgRating = ratedCount > 0 ? Object.values(state.ratings).reduce((a, b) => a + b, 0) / ratedCount : 0;
    const continents = getVisitedContinents().length;
    const bucketCount = state.bucketList.length;
    return Math.round((visitedCount * 10) + (ratedCount * 2) + (avgRating * 5) + (continents * 15) + (bucketCount * 3));
  }

  // ===== ENHANCED STATS =====
  const TOTAL_COUNTRIES = 195;
  const ALL_CONTINENTS = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica'];
  const REGION_COLORS = { Africa: '#f59e0b', Asia: '#ef4444', Europe: '#6366f1', 'North America': '#22c55e', 'South America': '#10b981', Oceania: '#3b82f6', Antarctica: '#94a3b8' };

  function updateEnhancedStats() {
    // Visited count
    const visitedEl = document.getElementById('stat-visited');
    animateCounter(visitedEl, state.visited.length);

    // Continents
    const continents = getVisitedContinents();
    const contEl = document.getElementById('stat-continents');
    if (contEl) contEl.textContent = `${continents.length}/7`;

    // World percentage
    const pctEl = document.getElementById('stat-world-pct');
    if (pctEl) pctEl.textContent = `${Math.round((state.visited.length / TOTAL_COUNTRIES) * 100)}%`;

    // Region bars
    const barsEl = document.getElementById('region-bars');
    if (barsEl && typeof COUNTRY_DATA !== 'undefined') {
      const regionCounts = {};
      const regionTotals = {};
      Object.entries(COUNTRY_DATA).forEach(([name, d]) => {
        const cont = d.continent;
        regionTotals[cont] = (regionTotals[cont] || 0) + 1;
      });
      state.visited.forEach(name => {
        const d = COUNTRY_DATA[name];
        if (d) regionCounts[d.continent] = (regionCounts[d.continent] || 0) + 1;
      });
      const regions = ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'];
      barsEl.innerHTML = regions.map(r => {
        const count = regionCounts[r] || 0;
        const total = regionTotals[r] || 1;
        const pct = Math.round((count / total) * 100);
        const color = REGION_COLORS[r] || '#999';
        return `<div class="region-bar-row"><span class="rb-label">${r.replace('North ','N.').replace('South ','S.')}</span><div class="rb-track"><div class="rb-fill" style="width:${pct}%;background:${color}"></div></div><span class="rb-count">${count}</span></div>`;
      }).join('');
    }

    // Travel score
    const scoreEl = document.getElementById('profile-score');
    if (scoreEl) scoreEl.textContent = calculateTravelScore();

    // Achievements
    renderAchievements();
  }

  // ===== FRIEND RECOMMENDATIONS =====
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
              showToast(`${reaction} sent to ${friendName}!`, 'friend');
            } catch { showToast('Could not send reaction', 'error'); }
          }
        });
      });
    } else {
      recsEl.classList.add('hidden');
    }
  }

  // ===== LEADERBOARD =====
  async function updateLeaderboard() {
    if (!state.user || !state.friends || state.friends.length === 0) {
      const lbEl = document.getElementById('sync-leaderboard');
      if (lbEl) lbEl.classList.add('hidden');
      return;
    }
    const lbEl = document.getElementById('sync-leaderboard');
    const listEl = document.getElementById('leaderboard-list');
    if (!lbEl || !listEl) return;

    // Build entries: me + friends
    const myScore = calculateTravelScore();
    const myVisited = state.visited.length;
    const myRated = Object.keys(state.ratings).length;
    const entries = [{ name: 'You', visited: myVisited, rated: myRated, score: myScore, isMe: true }];
    state.friends.forEach(f => {
      const fVisited = f.visitedCount || 0;
      const fScore = (fVisited * 10) + ((f.ratedCount || 0) * 2);
      entries.push({ name: f.name, visited: fVisited, rated: f.ratedCount || 0, score: fScore, isMe: false });
    });

    entries.sort((a, b) => b.score - a.score);
    const rankClass = (i) => i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';

    listEl.innerHTML = entries.map((e, i) => `<div class="lb-row ${e.isMe ? 'me' : ''}"><span class="lb-rank ${rankClass(i)}">${i + 1}</span><span class="lb-name">${e.name}</span><span class="lb-score-val">${e.score}</span><span class="lb-metric">pts</span></div>`).join('');
    lbEl.classList.remove('hidden');
  }

  // ===== ANIMATED COUNTER =====
  function showFloatPlus(text, x, y) {
    const el = document.createElement('div');
    el.className = 'float-plus';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // ===== TOAST NOTIFICATION =====
  function showToast(text, type, duration) {
    if (typeof type === 'number') { duration = type; type = null; }
    duration = duration || 2500;
    const icons = {
      travel: `<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style="flex-shrink:0"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`,
      friend: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      save: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M20 6 9 17l-5-5"/></svg>`,
      error: `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><path d="M12 9v4M12 17h.01"/></svg>`,
    };
    const icon = icons[type] || '';
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = icon ? `<span class="toast-icon">${icon}</span><span>${text}</span>` : text;
    toast.className = 'toast' + (type ? ` toast-${type}` : '');
    requestAnimationFrame(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), duration);
    });
  }

  // ===== VISITED STAMP ANIMATION =====
  function showVisitedStamp(x, y) {
    const el = document.createElement('div');
    el.className = 'visited-stamp';
    el.textContent = '✈️';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }

  // ===== CLICK-TO-COPY SYNC CODE =====
  myCodeEl.addEventListener('click', () => {
    const code = myCodeEl.dataset.original || myCodeEl.textContent;
    if (!code || code === '...' || code === 'Copied!') return;
    navigator.clipboard.writeText(code).then(() => {
      myCodeEl.dataset.original = code;
      myCodeEl.textContent = 'Copied!';
      myCodeEl.classList.add('copied');
      showToast('Sync code copied to clipboard', 'save');
      setTimeout(() => {
        myCodeEl.textContent = myCodeEl.dataset.original;
        myCodeEl.classList.remove('copied');
      }, 1200);
    });
  });

  // ===== SURPRISE ME =====
  const surpriseBtn = document.getElementById('surprise-btn');
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      const unrated = allNames.filter(n => state.ratings[n] === undefined);
      const pool = unrated.length > 0 ? unrated : allNames;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      const cp = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === pick; });
      if (!cp.empty()) onCountryClick.call(cp.node(), null, cp.datum());
    });
  }

  // ===== ANIMATED COUNTER =====
  const counterAnimations = new Map();
  function animateCounter(el, target, duration) {
    if (!el) return;
    duration = duration || 400;
    const start = parseInt(el.textContent) || 0;
    if (start === target) return;
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

  // ===== USER REVIEWS =====
  const reviews = JSON.parse(safeGetItem('travelReviews') || '{}');

  function openReviewForm(countryName) {
    const form = document.getElementById('review-form');
    const addBtn = document.getElementById('review-add-btn');
    const emptyEl = document.getElementById('review-empty');
    const displayEl = document.getElementById('review-display');
    form.classList.remove('hidden');
    addBtn.classList.add('hidden');
    emptyEl.style.display = 'none';
    displayEl.classList.add('hidden');

    const existing = reviews[countryName];
    // Reset form
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('review-textarea').value = '';
    document.getElementById('review-trip-date').value = '';

    if (existing) {
      if (existing.mood) {
        document.querySelector(`.mood-btn[data-mood="${existing.mood}"]`)?.classList.add('active');
      }
      document.getElementById('review-textarea').value = existing.text || '';
      document.getElementById('review-trip-date').value = existing.date || '';
      if (existing.tags) {
        existing.tags.forEach(t => {
          document.querySelector(`.tag-btn[data-tag="${t}"]`)?.classList.add('active');
        });
      }
    }
  }

  function saveReview(countryName) {
    const mood = document.querySelector('.mood-btn.active')?.dataset.mood || '';
    const text = document.getElementById('review-textarea').value.trim();
    const date = document.getElementById('review-trip-date').value;
    const tags = Array.from(document.querySelectorAll('.tag-btn.active')).map(b => b.dataset.tag);

    if (!mood && !text && tags.length === 0) return;

    reviews[countryName] = { mood, text, date, tags, updated: Date.now() };
    safeSetItem('travelReviews', JSON.stringify(reviews));
    if (state.user) {
      fetch(`${API_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
        body: JSON.stringify({ country: countryName, review: reviews[countryName] })
      }).catch(() => {});
    }
    renderReview(countryName);
  }

  function renderReview(countryName) {
    const form = document.getElementById('review-form');
    const addBtn = document.getElementById('review-add-btn');
    const emptyEl = document.getElementById('review-empty');
    const displayEl = document.getElementById('review-display');
    const review = reviews[countryName];

    form.classList.add('hidden');

    if (!review) {
      emptyEl.style.display = '';
      displayEl.classList.add('hidden');
      addBtn.classList.remove('hidden');
      return;
    }

    emptyEl.style.display = 'none';
    displayEl.classList.remove('hidden');
    addBtn.classList.add('hidden');

    const moodEl = document.getElementById('review-mood-display');
    if (review.mood) { moodEl.textContent = review.mood; }
    else { moodEl.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" style="opacity:.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'; }
    document.getElementById('review-text-display').textContent = review.text || 'No notes yet.';

    if (review.date) {
      const [y, m] = review.date.split('-');
      const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      document.getElementById('review-date-display').textContent = `${monthNames[parseInt(m)-1]} ${y}`;
    } else {
      document.getElementById('review-date-display').textContent = '';
    }

    const tagsEl = document.getElementById('review-tags-display');
    const TAG_LABELS = { food:'🍜 Food', nature:'🌿 Nature', culture:'🏛️ Culture', nightlife:'🌙 Nightlife', beaches:'🏖️ Beaches', adventure:'⛰️ Adventure', budget:'💰 Budget', luxury:'✨ Luxury' };
    tagsEl.innerHTML = (review.tags || []).map(t => `<span class="review-tag">${TAG_LABELS[t] || t}</span>`).join('');
  }

  // Wire up review UI events
  document.getElementById('review-add-btn')?.addEventListener('click', () => {
    if (state.selectedCountry) openReviewForm(state.selectedCountry);
  });
  document.getElementById('review-edit-btn')?.addEventListener('click', () => {
    if (state.selectedCountry) openReviewForm(state.selectedCountry);
  });
  document.getElementById('review-save')?.addEventListener('click', () => {
    if (state.selectedCountry) saveReview(state.selectedCountry);
  });
  document.getElementById('review-cancel')?.addEventListener('click', () => {
    if (state.selectedCountry) renderReview(state.selectedCountry);
  });

  // Mood button toggles
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Tag button toggles
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  function fireConfetti(x, y) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const colors = ['#10b981','#3b82f6','#f59e0b','#ef4444','#8b5cf6','#ec4899'];
    const particles = Array.from({ length: 28 }, () => ({
      x, y,
      vx: (Math.random() - 0.5) * 8,
      vy: -(Math.random() * 6 + 3),
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 4,
      life: 1,
      gravity: 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.2,
    }));
    let running = true;
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        p.rotation += p.rotSpeed;
        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });
      if (alive) requestAnimationFrame(draw);
      else { running = false; canvas.remove(); }
    }
    requestAnimationFrame(draw);
  }

  // ===== INTEGRATION HOOKS =====
  // These get called from the existing functions via direct insertion

  // ===== EASTER EGG: Double-click globe to randomize =====
  document.getElementById('logo').addEventListener('dblclick', () => {
    const unrated = allNames.filter(n => state.ratings[n] === undefined);
    const pool = unrated.length > 0 ? unrated : allNames;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const cp = g.selectAll('.country').filter(function() { return d3.select(this).attr('data-name') === pick; });
    if (!cp.empty()) onCountryClick.call(cp.node(), null, cp.datum());
  });

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
    if (visited > 0 && rated > 0) stat = ` — ${pct}% explored`;
    else if (rated > 0) stat = ` — ${rated} countries rated`;

    el.textContent = name ? `${timeGreet}, ${name}${stat}` : `${timeGreet}! Start exploring the world.`;
  }

  // ===== TRAVEL STREAK =====
  function getTodayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function updateStreak() {
    const today = getTodayStr();
    let streak = JSON.parse(safeGetItem('travelStreak') || '{"count":0,"lastDate":""}');
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (streak.lastDate === today) return;
    if (streak.lastDate === yesterday) {
      streak.count++;
    } else {
      streak.count = 1;
    }
    streak.lastDate = today;
    safeSetItem('travelStreak', JSON.stringify(streak));
    renderStreak();
  }

  function renderStreak() {
    const el = document.getElementById('streak-display');
    if (!el) return;
    const streak = JSON.parse(safeGetItem('travelStreak') || '{"count":0,"lastDate":""}');
    const count = streak.count || 0;
    const isHot = count >= 7;
    const flameClass = isHot ? 'streak-flame hot' : 'streak-flame';
    const countClass = isHot ? 'streak-count gold' : 'streak-count';
    if (count === 0) {
      el.innerHTML = '<span class="' + flameClass + '"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></span><span>Rate a country to start your streak!</span>';
    } else {
      el.innerHTML = '<span class="' + flameClass + '"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg></span><span class="' + countClass + '">' + count + '-day streak</span><span style="color:var(--text-muted);margin-left:auto;font-size:12px">Last: today</span>';
    }
  }

  // ===== TRAVEL CARD PNG GENERATOR =====
  function generateTravelCard() {
    const W = 800, H = 450;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const dark = state.darkMode;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, dark ? '#0f172a' : '#f7f5f2');
    grad.addColorStop(1, dark ? '#1e293b' : '#ebe8e4');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Subtle grid lines
    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Title
    ctx.fillStyle = dark ? '#f1f5f9' : '#1a1a1a';
    ctx.font = 'bold 28px DM Sans, sans-serif';
    ctx.fillText('World Explorer', 40, 60);

    // Username
    const username = state.user ? state.user.username : 'Traveler';
    ctx.font = '16px DM Sans, sans-serif';
    ctx.fillStyle = dark ? '#94a3b8' : '#5a5a5a';
    ctx.fillText('@' + username, 40, 88);

    // Avatar circle
    ctx.beginPath();
    ctx.arc(W - 60, 60, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#2563eb';
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(username.charAt(0).toUpperCase(), W - 60, 68);
    ctx.textAlign = 'left';

    // Mini world map — draw dots for visited/rated countries
    var CENTROIDS = {
      // Americas
      'United States': [0.22, 0.38], 'Canada': [0.2, 0.25], 'Mexico': [0.22, 0.48],
      'Brazil': [0.3, 0.62], 'Argentina': [0.28, 0.75], 'Colombia': [0.25, 0.55],
      'Peru': [0.24, 0.63], 'Chile': [0.25, 0.72], 'Venezuela': [0.27, 0.54],
      'Cuba': [0.25, 0.46], 'Bolivia': [0.27, 0.66], 'Ecuador': [0.23, 0.58],
      'Paraguay': [0.29, 0.69], 'Uruguay': [0.30, 0.73], 'Guyana': [0.29, 0.55],
      'Suriname': [0.30, 0.55], 'Costa Rica': [0.23, 0.50], 'Panama': [0.24, 0.51],
      'Guatemala': [0.21, 0.49], 'Honduras': [0.22, 0.49], 'El Salvador': [0.21, 0.50],
      'Nicaragua': [0.22, 0.50], 'Jamaica': [0.25, 0.47], 'Haiti': [0.26, 0.47],
      'Dominican Republic': [0.27, 0.47], 'Puerto Rico': [0.28, 0.47],
      'Trinidad and Tobago': [0.29, 0.53], 'Falkland Islands': [0.29, 0.82],
      // Europe
      'United Kingdom': [0.44, 0.27], 'France': [0.46, 0.32], 'Germany': [0.48, 0.29],
      'Spain': [0.44, 0.36], 'Italy': [0.49, 0.35], 'Portugal': [0.42, 0.37],
      'Netherlands': [0.47, 0.27], 'Belgium': [0.47, 0.28], 'Switzerland': [0.48, 0.32],
      'Sweden': [0.5, 0.2], 'Norway': [0.48, 0.18], 'Denmark': [0.49, 0.24],
      'Poland': [0.51, 0.27], 'Ukraine': [0.54, 0.29], 'Russia': [0.62, 0.22],
      'Iceland': [0.38, 0.17], 'Ireland': [0.42, 0.27], 'Luxembourg': [0.47, 0.29],
      'Finland': [0.52, 0.19], 'Romania': [0.53, 0.31], 'Croatia': [0.51, 0.32],
      'Czechia': [0.5, 0.29], 'Austria': [0.5, 0.31], 'Hungary': [0.51, 0.3],
      'Serbia': [0.52, 0.32], 'Bulgaria': [0.53, 0.33], 'Albania': [0.52, 0.34],
      'Georgia': [0.58, 0.34], 'Greece': [0.52, 0.37], 'Belarus': [0.53, 0.26],
      'Lithuania': [0.52, 0.24], 'Latvia': [0.52, 0.23], 'Estonia': [0.52, 0.21],
      'Slovakia': [0.51, 0.29], 'Slovenia': [0.50, 0.32], 'Montenegro': [0.51, 0.33],
      'Bosnia and Herzegovina': [0.51, 0.33], 'Kosovo': [0.52, 0.33],
      'Cyprus': [0.55, 0.37], 'Northern Cyprus': [0.55, 0.37],
      // Africa
      'Egypt': [0.55, 0.43], 'Nigeria': [0.48, 0.54], 'South Africa': [0.52, 0.72],
      'Kenya': [0.56, 0.57], 'Morocco': [0.44, 0.4], 'Ethiopia': [0.58, 0.52],
      'Tanzania': [0.56, 0.6], 'Ghana': [0.46, 0.53], 'Senegal': [0.43, 0.49],
      'Algeria': [0.47, 0.41], 'Angola': [0.51, 0.64], 'Libya': [0.51, 0.43],
      'Sudan': [0.55, 0.48], 'South Sudan': [0.54, 0.53], 'Tunisia': [0.48, 0.39],
      'Cameroon': [0.49, 0.55], 'DR Congo': [0.53, 0.58], 'Congo': [0.51, 0.58],
      'Somalia': [0.59, 0.54], 'Somaliland': [0.59, 0.52], 'Mali': [0.46, 0.48],
      'Niger': [0.49, 0.48], 'Chad': [0.51, 0.49], 'Mozambique': [0.56, 0.66],
      'Madagascar': [0.59, 0.67], 'Zambia': [0.54, 0.65], 'Zimbabwe': [0.54, 0.68],
      'Namibia': [0.50, 0.69], 'Botswana': [0.52, 0.69], 'Uganda': [0.55, 0.56],
      'Rwanda': [0.54, 0.58], 'Burundi': [0.54, 0.59], 'Malawi': [0.56, 0.64],
      'Gabon': [0.49, 0.58], 'Equatorial Guinea': [0.49, 0.56], 'Lesotho': [0.53, 0.72],
      'Eswatini': [0.54, 0.71], 'Guinea': [0.44, 0.52], 'Sierra Leone': [0.44, 0.53],
      'Liberia': [0.44, 0.54], 'Togo': [0.47, 0.54], 'Djibouti': [0.58, 0.51],
      'Eritrea': [0.57, 0.49], 'Central African Republic': [0.51, 0.54],
      'Mauritania': [0.44, 0.47], 'Gambia': [0.43, 0.50],
      // West & Central Asia
      'Turkey': [0.56, 0.36], 'Saudi Arabia': [0.59, 0.44],
      'United Arab Emirates': [0.62, 0.45], 'Israel': [0.56, 0.4],
      'Iran': [0.62, 0.4], 'Iraq': [0.59, 0.41], 'Jordan': [0.57, 0.41],
      'Lebanon': [0.56, 0.39], 'Syria': [0.57, 0.39], 'Kuwait': [0.60, 0.42],
      'Oman': [0.62, 0.46], 'Yemen': [0.59, 0.48], 'Qatar': [0.61, 0.44],
      'Palestine': [0.56, 0.40], 'Afghanistan': [0.65, 0.38],
      // South, SE & Central Asia
      'India': [0.65, 0.46], 'Pakistan': [0.65, 0.42], 'Bangladesh': [0.68, 0.45],
      'Sri Lanka': [0.67, 0.52], 'Nepal': [0.67, 0.43], 'Bhutan': [0.69, 0.43],
      'Myanmar': [0.72, 0.46], 'Thailand': [0.72, 0.49], 'Vietnam': [0.74, 0.49],
      'Cambodia': [0.73, 0.51], 'Laos': [0.73, 0.48], 'Malaysia': [0.74, 0.54],
      'Singapore': [0.75, 0.55], 'Indonesia': [0.75, 0.58], 'Philippines': [0.78, 0.5],
      'Mongolia': [0.72, 0.3], 'Kazakhstan': [0.64, 0.32], 'Uzbekistan': [0.64, 0.35],
      'Turkmenistan': [0.62, 0.36], 'Kyrgyzstan': [0.66, 0.34], 'Tajikistan': [0.66, 0.36],
      'Brunei': [0.76, 0.55], 'Timor-Leste': [0.78, 0.60], 'North Korea': [0.79, 0.34],
      // East Asia
      'China': [0.72, 0.37], 'Japan': [0.8, 0.34], 'South Korea': [0.79, 0.36],
      // Oceania
      'Australia': [0.79, 0.68], 'New Zealand': [0.87, 0.74],
      'Papua New Guinea': [0.82, 0.60], 'Fiji': [0.90, 0.66],
      'New Caledonia': [0.86, 0.68], 'French Southern Territories': [0.64, 0.82],
    };
    var mapX = 40, mapY = 110, mapW = W - 80, mapH = 220;

    // Map background
    ctx.fillStyle = dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';
    ctx.beginPath();
    ctx.roundRect(mapX, mapY, mapW, mapH, 8);
    ctx.fill();

    // Draw dots
    var visitedSet = new Set(state.visited);
    var allRatings = state.ratings;

    Object.entries(CENTROIDS).forEach(function(entry) {
      var name = entry[0], coords = entry[1];
      var px = coords[0], py = coords[1];
      var cx = mapX + px * mapW;
      var cy = mapY + py * mapH;
      var r = allRatings[name];
      var isVisited = visitedSet.has(name);
      if (isVisited || r !== undefined) {
        var radius = isVisited ? 5 : 3;
        var color = '#2563eb';
        if (r !== undefined) {
          var hue = ((r - 1) / 9) * 120;
          color = 'hsl(' + hue + ', 75%, 45%)';
        }
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        if (isVisited) {
          ctx.beginPath();
          ctx.arc(cx, cy, radius + 2, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.3;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      } else {
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fillStyle = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
        ctx.fill();
      }
    });

    // Stats row at bottom
    var visited = state.visited.length;
    var rated = Object.keys(state.ratings).filter(function(k) { return k !== '_bucket_sync'; }).length;
    var vals = Object.values(state.ratings).filter(function(v) { return typeof v === 'number'; });
    var avg = vals.length > 0 ? (vals.reduce(function(a, b) { return a + b; }, 0) / vals.length).toFixed(1) : '—';
    var topEntry = Object.entries(state.ratings).filter(function(e) { return e[0] !== '_bucket_sync'; }).sort(function(a, b) { return b[1] - a[1]; })[0];
    var topName = topEntry ? topEntry[0] : '—';
    var topCd = topName !== '—' && typeof COUNTRY_DATA !== 'undefined' ? COUNTRY_DATA[topName] : null;
    var topFlag = topCd ? topCd.flag : '';

    var textColor = dark ? '#f1f5f9' : '#1a1a1a';
    var mutedColor = dark ? '#64748b' : '#888';
    var statItems = [
      { label: 'Countries Visited', value: String(visited) },
      { label: 'Countries Rated', value: String(rated) },
      { label: 'Avg Rating', value: avg + '/10' },
      { label: 'Top Pick', value: (topFlag + ' ' + topName).trim() },
    ];
    var statW = mapW / statItems.length;
    statItems.forEach(function(item, i) {
      var sx = mapX + i * statW + statW / 2;
      var sy = H - 70;
      ctx.textAlign = 'center';
      ctx.font = 'bold 20px DM Sans, sans-serif';
      ctx.fillStyle = textColor;
      var val = item.value.length > 12 ? item.value.slice(0, 12) + '…' : item.value;
      ctx.fillText(val, sx, sy);
      ctx.font = '11px DM Sans, sans-serif';
      ctx.fillStyle = mutedColor;
      ctx.fillText(item.label, sx, sy + 18);
    });

    // Watermark
    ctx.textAlign = 'center';
    ctx.font = '11px DM Sans, sans-serif';
    ctx.fillStyle = mutedColor;
    ctx.fillText('World Explorer Map', W / 2, H - 16);
    ctx.textAlign = 'left';

    // Download
    canvas.toBlob(function(blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'travel-card-' + username + '.png';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Travel card downloaded!', 'travel');
    }, 'image/png');
  }

  // Initial render calls
  if (state.darkMode) applyDarkMode();
  initAuth();
  updateGreeting();
  updateColors();
  updateStats();

// ===== MOBILE NAV =====
document.querySelectorAll('.mobile-nav-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var panel = btn.dataset.panel;
    document.querySelectorAll('.mobile-nav-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var statsEl = document.getElementById('stats-dashboard');
    if (statsEl) statsEl.classList.remove('mobile-open');

    if (panel === 'stats') {
      if (statsEl) statsEl.classList.add('mobile-open');
    } else if (panel === 'sync') {
      if (!state.user) { profileBtn.click(); return; }
      state.couplesMode = !state.couplesMode;
      if (state.couplesMode) {
        state.ratingMode = false;
        ratingToggle.classList.remove('active');
      }
      couplesToggle.classList.toggle('active', state.couplesMode);
      couplesLegend.classList.toggle('hidden', !state.couplesMode);
      colorLegend.classList.add('hidden');
      updateColors();
    } else if (panel === 'profile') {
      profileBtn.click();
    }
  });
});

})();
