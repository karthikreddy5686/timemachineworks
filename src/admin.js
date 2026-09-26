import { PORTFOLIO_ITEMS, HERO_VIDEOS, EXHIBITIONS, MONOGRAPHS } from './data/portfolio.js';

const DEFAULT_WEDDING_FILMS = [
  {
    id: "film-niharika",
    title: "Niharika's Lakshmi Devi Vratham",
    location: "Sacred Kalasham Pooja & Blessings",
    duration: "410K Views • Full HD Cinema",
    videoUrl: "./videos/hero-wedding.mp4",
    poster: "./images/niharika/main-shrine-couple.jpg",
    stills: ["./images/niharika/lotus-portrait.jpg", "./images/niharika/pooja-lighting.jpg", "./images/niharika/doorway-portrait.jpg"],
    reviewQuote: "Timemachine & Co captured our sacred Lakshmi Devi Vratham ceremony with incredible warmth and reverence."
  },
  {
    id: "film-maitri-aneesh",
    title: "Maitri & Aneesh",
    location: "Lake Como • Italy",
    duration: "04:15 • 4K Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    poster: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Coastal estate processional film featuring sunset boat entrance over Lake Como."
  },
  {
    id: "film-dhruv-pippa",
    title: "Dhruv & Pippa",
    location: "St. Moritz • Switzerland",
    duration: "05:40 • 8K RAW Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-clouds-over-a-mountain-range-42894-large.mp4",
    poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Highland solitude vows surrounded by snowcapped Swiss alpine peaks."
  },
  {
    id: "film-palak-priya",
    title: "Palak & Priya",
    location: "Amalfi Coast • Italy",
    duration: "03:50 • 4K Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fog-over-a-forest-in-a-mountainous-region-42898-large.mp4",
    poster: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Rose petal shower celebration along Villa Cimbrone cliffside in Ravello."
  },
  {
    id: "film-ira-sameer",
    title: "Ira & Sameer",
    location: "Kyoto • Japan",
    duration: "04:30 • 4K Cinema",
    videoUrl: "./videos/hero-wedding.mp4",
    poster: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Serene bamboo grove sanctuary ceremony in historic Kyoto."
  },
  {
    id: "film-rohan-ananya",
    title: "Rohan & Ananya",
    location: "Santorini • Greece",
    duration: "06:10 • 4K 120fps Cinema",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800",
    stills: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=800"],
    reviewQuote: "Volcanic caldera cliffside sunset vows with intimate dinner reception."
  }
];

// Global state for Admin Panel Content
let activeContent = {
  hero: {
    headline: 'Timemachine & Co',
    subtitle: 'timeless cinematic wedding stories',
    videos: [
      { title: 'Primary Hero Video', videoUrl: './videos/hero-wedding.mp4', poster: './images/niharika/main-shrine-couple.jpg' },
      { title: 'Lake Como Highlight', videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-rocky-shore-42901-large.mp4', poster: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800' }
    ]
  },
  about: {
    tag: 'OUR JOURNEY & STORY',
    title: 'Capturing Love, Joy & Everything In Between',
    paragraphs: [
      "When we started Timemachine & Co, it was more than just about clicking pictures—it was about capturing love, joy, and everything in between. Our shared passion for cinema, art, and visual storytelling brought us together, and the rest, as they say, is history.",
      "Our journey has been nothing short of magical. Inspired by travel, fine art photography, and our love for experimenting with light, we've crafted a unique style—a mix of candid moments, editorial aesthetics, and fashion vibes. It's not just photography for us; it's weaving stories that couples cherish forever.",
      "From being part of 600+ destination weddings to earning titles like 'Wedding Photographer and Filmmaker of the Year,' this adventure has been surreal. And with over 23 million views on our wedding films, we're reminded daily of the love we've been blessed to capture."
    ],
    collageImages: [
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/preparation.jpg'
    ]
  },
  foundersStory: {
    title: 'Celebrating Love with Every Frame',
    foundersImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=85&w=800',
    paragraphs: [
      "When we started Timemachine & Co, it was more than just about clicking pictures—it was about capturing love, joy, and everything in between. Our shared passion for cinema, art, and visual storytelling brought us together, and the rest, as they say, is history.",
      "Our journey has been nothing short of magical. Inspired by travel, fine art photography, and our love for experimenting with light, we've crafted a unique style—a mix of candid moments, editorial aesthetics, and fashion vibes. It's not just photography for us; it's weaving stories that couples cherish forever.",
      "From being part of 600+ destination weddings to earning titles like 'Wedding Photographer and Filmmaker of the Year,' this adventure has been surreal. And with over 23 million views on our wedding films, we're reminded daily of the love we've been blessed to capture."
    ]
  },
  footer: {
    brandName: 'Timemachine & Co',
    tagline: 'Timeless Cinematic Wedding Stories & Fine Art Archive.',
    locations: 'Zürich • Lake Como • Ravello • New York',
    quoteTitle: 'COMMISSION & PRICING',
    quoteDesc: 'Request a custom proposal tailored to your celebration dates and destination.',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me'
  },
  weddingFilms: [...DEFAULT_WEDDING_FILMS],
  portfolio: [...PORTFOLIO_ITEMS]
};

// Undo History Stack & Recent Media State
let historyStack = [];
let recentMedia = JSON.parse(localStorage.getItem('studio_recent_media') || '[]');

if (recentMedia.length === 0) {
  recentMedia = [
    { url: './images/niharika/main-shrine-couple.jpg', type: 'image', timestamp: Date.now() - 50000 },
    { url: './images/niharika/lotus-portrait.jpg', type: 'image', timestamp: Date.now() - 40000 },
    { url: './images/niharika/pooja-lighting.jpg', type: 'image', timestamp: Date.now() - 30000 },
    { url: './images/niharika/bridal-braid.jpg', type: 'image', timestamp: Date.now() - 20000 },
    { url: './images/niharika/preparation.jpg', type: 'image', timestamp: Date.now() - 10000 },
    { url: './videos/hero-wedding.mp4', type: 'video', timestamp: Date.now() }
  ];
  try {
    localStorage.setItem('studio_recent_media', JSON.stringify(recentMedia));
  } catch (e) {}
}

function pushHistorySnapshot() {
  if (historyStack.length >= 30) {
    historyStack.shift();
  }
  historyStack.push(JSON.parse(JSON.stringify(activeContent)));
  updateUndoButtonState();
}

function updateUndoButtonState() {
  const undoBtn = document.getElementById('admin-undo-btn');
  const countEl = document.getElementById('undo-count');
  if (countEl) countEl.textContent = historyStack.length;
  if (undoBtn) {
    undoBtn.disabled = historyStack.length === 0;
  }
}

function handleUndo() {
  if (historyStack.length === 0) return;
  const prevSnapshot = historyStack.pop();
  activeContent = prevSnapshot;
  populateAdminForms();
  localStorage.setItem('studio_content_cache', JSON.stringify(activeContent));
  updateUndoButtonState();
  showToast('Restored previous version snapshot!');
}

function addRecentMedia(url, type = 'image') {
  if (!url || typeof url !== 'string') return;
  url = url.trim();
  if (!url) return;

  recentMedia = recentMedia.filter(m => m.url !== url);
  recentMedia.unshift({ url, type, timestamp: Date.now() });

  if (recentMedia.length > 50) {
    recentMedia = recentMedia.slice(0, 50);
  }

  try {
    localStorage.setItem('studio_recent_media', JSON.stringify(recentMedia));
  } catch (e) {
    console.warn('LocalStorage limit reached for recent media:', e);
  }

  renderMediaModalGrid();
  renderInputMediaChips();
}

function renderInputMediaChips() {
  const thumbRows = document.querySelectorAll('.admin-thumb-row');
  
  thumbRows.forEach(row => {
    const input = row.querySelector('.admin-input');
    if (!input) return;

    let chipsContainer = row.nextElementSibling;
    if (!chipsContainer || !chipsContainer.classList.contains('recent-media-chips')) {
      chipsContainer = document.createElement('div');
      chipsContainer.className = 'recent-media-chips';
      chipsContainer.style.cssText = 'display: flex; gap: 0.4rem; margin-top: 0.5rem; align-items: center; flex-wrap: wrap;';
      row.parentNode.insertBefore(chipsContainer, row.nextSibling);
    }

    const itemsToShow = recentMedia.slice(0, 6);
    if (itemsToShow.length === 0) {
      chipsContainer.innerHTML = '';
      return;
    }

    chipsContainer.innerHTML = `
      <span style="font-size: 0.72rem; color: var(--color-body-muted); font-family: var(--font-ui); font-weight: 500;">Recent:</span>
      ` + itemsToShow.map(item => {
        const isVideo = item.type === 'video' || item.url.match(/\.(mp4|webm|mov)$/i);
        return `
          <div class="recent-media-chip" title="Click to reuse this previous image/video" data-url="${item.url}" style="width: 36px; height: 36px; border-radius: 6px; overflow: hidden; border: 1px solid var(--color-border-light); cursor: pointer; flex-shrink: 0; background: #1A1816; position: relative;">
            ${isVideo
              ? `<video src="${item.url}" muted style="width:100%; height:100%; object-fit:cover; pointer-events:none;"></video>`
              : `<img src="${item.url}" alt="Recent" style="width:100%; height:100%; object-fit:cover; pointer-events:none;" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">`
            }
          </div>
        `;
      }).join('');

    chipsContainer.querySelectorAll('.recent-media-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const url = chip.getAttribute('data-url');
        if (url && input) {
          pushHistorySnapshot();
          input.value = url;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          showToast('Selected previous picture/video!');
        }
      });
    });
  });
}

function initMediaModal() {
  const modalOverlay = document.getElementById('admin-media-modal');
  const openBtn = document.getElementById('open-media-modal-btn');
  const closeBtn = document.getElementById('close-media-modal-btn');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        renderMediaModalGrid();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

function renderMediaModalGrid() {
  const grid = document.getElementById('media-modal-grid');
  if (!grid) return;

  if (recentMedia.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-body-muted);">
        No recent uploads stored yet. Upload or edit an image/video to store it here.
      </div>
    `;
    return;
  }

  grid.innerHTML = recentMedia.map((item, idx) => {
    const isVideo = item.type === 'video' || item.url.match(/\.(mp4|webm|mov)$/i);
    const dateStr = item.timestamp ? new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Stored Asset';

    return `
      <div class="media-modal-card">
        <div class="media-modal-thumb">
          ${isVideo
            ? `<video src="${item.url}" muted loop playsinline autoplay style="width:100%; height:100%; object-fit:cover;"></video>`
            : `<img src="${item.url}" alt="Asset ${idx+1}" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">`
          }
          <span class="admin-thumb-badge" style="position:absolute; top:6px; right:6px;">${isVideo ? 'VIDEO' : 'IMAGE'}</span>
        </div>
        <div class="media-modal-info">
          <span class="media-modal-date">${dateStr}</span>
          <div class="media-modal-actions">
            <button type="button" class="media-modal-btn copy-url-btn" data-url="${item.url}">
              Copy Link
            </button>
            <button type="button" class="media-modal-btn use-asset-btn" data-url="${item.url}">
              Copy & Close
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.copy-url-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = e.currentTarget.getAttribute('data-url');
      if (url) {
        navigator.clipboard.writeText(url);
        showToast('Media URL copied to clipboard!');
      }
    });
  });

  grid.querySelectorAll('.use-asset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = e.currentTarget.getAttribute('data-url');
      if (url) {
        navigator.clipboard.writeText(url);
        showToast('Asset URL copied! Paste it into any picture URL field.');
        const modalOverlay = document.getElementById('admin-media-modal');
        if (modalOverlay) modalOverlay.classList.remove('active');
      }
    });
  });
}

// ==========================================================================
// 1. AUTHENTICATION GATING
// ==========================================================================
function initAdminAuth() {
  const overlay = document.getElementById('admin-auth-overlay');
  const loginForm = document.getElementById('admin-login-form');
  const passInput = document.getElementById('admin-passcode');
  const logoutBtn = document.getElementById('admin-logout-btn');

  const isAuth = localStorage.getItem('studio_admin_auth') === 'true';
  if (isAuth && overlay) {
    overlay.style.display = 'none';
    loadLeads();
    loadContent();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const password = passInput.value.trim();
      if (!password) return;

      try {
        const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? 'http://localhost:5000/api/admin/login'
          : '/api/admin/login';

        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          localStorage.setItem('studio_admin_auth', 'true');
          if (overlay) overlay.style.display = 'none';
          showToast('Access granted. Welcome to Studio Admin.');
          loadLeads();
          loadContent();
        } else {
          alert('Access Denied: ' + (data.error || 'Incorrect admin passcode.'));
          passInput.focus();
        }
      } catch (err) {
        // Fallback offline verification if backend server isn't active
        if (password === 'admin2026') {
          localStorage.setItem('studio_admin_auth', 'true');
          if (overlay) overlay.style.display = 'none';
          showToast('Offline Mode: Admin unlocked.');
          loadLeads();
          loadContent();
        } else {
          alert('Access Denied: Incorrect admin passcode.');
        }
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('studio_admin_auth');
      if (overlay) overlay.style.display = 'flex';
      showToast('Signed out of Studio Portal.');
    });
  }
}

// ==========================================================================
// 2. TAB NAVIGATION
// ==========================================================================
function initAdminTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  const tabPanels = document.querySelectorAll('.admin-panel-section');
  const jumpBtns = document.querySelectorAll('[data-jump]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        if (targetId === 'tab-home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  jumpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const jumpId = btn.getAttribute('data-jump');
      
      // Ensure tab-home is active
      const homeTabBtn = document.querySelector('.admin-tab-btn[data-tab="tab-home"]');
      const homePanel = document.getElementById('tab-home');
      const leadsPanel = document.getElementById('tab-leads');
      
      if (homeTabBtn) {
        tabBtns.forEach(b => b.classList.remove('active'));
        homeTabBtn.classList.add('active');
      }
      if (homePanel) homePanel.classList.add('active');
      if (leadsPanel) leadsPanel.classList.remove('active');

      // Update active jump buttons
      jumpBtns.forEach(b => {
        if (b.getAttribute('data-jump') === jumpId) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      // Scroll target section into view
      const secEl = document.getElementById(jumpId);
      if (secEl) {
        secEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ==========================================================================
// 3. LEADS & QUOTES LOAD + 1-CLICK QUOTATION
// ==========================================================================
let fetchedLeadsCache = [];

async function loadLeads() {
  const tbody = document.getElementById('leads-table-body');
  const badge = document.getElementById('leads-count-badge');
  if (!tbody) return;

  try {
    const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000/api/quotes'
      : '/api/quotes';

    const res = await fetch(apiUrl);
    const data = await res.json();

    if (res.ok && data.success && Array.isArray(data.data)) {
      const quotes = data.data;
      fetchedLeadsCache = quotes;
      if (badge) badge.textContent = quotes.length;

      if (quotes.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
              No quote requests submitted yet.
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = quotes.map((q, idx) => {
        const dateStr = q.createdAt ? new Date(q.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
        const eventsList = (q.events || []).map(e => `
          <div style="font-size: 0.82rem; margin-bottom: 0.35rem; border-left: 2px solid var(--color-sage-border); padding-left: 0.5rem;">
            <strong>${e.name}</strong> • ${e.date || '-'} • ${e.location || 'Location tbd'} (${e.guests || '-'} guests)
          </div>
        `).join('');

        return `
          <tr>
            <td style="font-weight: 500; font-family: var(--font-ui); font-size: 0.8rem;">${dateStr}</td>
            <td style="font-weight: 600; color: var(--color-heading);">${q.clientName || 'Client'}</td>
            <td><strong>Groom:</strong> ${q.groomName || '-'}<br><strong>Bride:</strong> ${q.brideName || '-'}</td>
            <td><a href="tel:${q.countryCode || ''}${q.phone || ''}" style="color: var(--color-heading); text-decoration: underline;">${q.countryCode || ''} ${q.phone || ''}</a></td>
            <td>${eventsList || 'No events listed'}</td>
            <td>
              <button type="button" class="btn-create-quote-from-lead" data-lead-idx="${idx}" style="background: #C5A059; color: #FFFFFF; border: none; padding: 0.45rem 0.75rem; border-radius: 6px; font-family: var(--font-ui); font-size: 0.78rem; font-weight: 600; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 0.35rem;">
                ⚡ Create Quotation
              </button>
            </td>
          </tr>
        `;
      }).join('');

      // Wire up 1-Click Create Quotation buttons
      tbody.querySelectorAll('.btn-create-quote-from-lead').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-lead-idx'), 10);
          const lead = fetchedLeadsCache[idx];
          if (!lead) return;

          activeQuotation.clientName = lead.clientName || 'Client';
          activeQuotation.coupleNames = `Groom: ${lead.groomName || '-'} • Bride: ${lead.brideName || '-'}`;
          activeQuotation.phone = `${lead.countryCode || ''} ${lead.phone || ''}`.trim();
          if (lead.email) activeQuotation.email = lead.email;

          if (Array.isArray(lead.events) && lead.events.length > 0) {
            activeQuotation.events = lead.events.map((e, i) => ({
              id: 'evt-' + Date.now() + '-' + i,
              name: e.name || `Event #${i+1}`,
              date: e.date || 'TBD Date',
              location: e.location || 'TBD Location',
              candidPhoto: 1,
              candidVideo: 1,
              tradPhoto: 1,
              tradVideo: 1,
              dronePilot: 0
            }));
          }

          populateQuotationForm();
          renderQuoteEventsForm();
          renderProposalPreview();

          // Switch tab to tab-quotation
          const quoteTabBtn = document.querySelector('.admin-tab-btn[data-tab="tab-quotation"]');
          if (quoteTabBtn) quoteTabBtn.click();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          showToast(`Quotation auto-populated for ${lead.clientName}!`);
        });
      });
    }
  } catch (err) {
    console.warn('Unable to fetch quotes from server:', err);
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--color-body-muted);">
            Local server on port 5000 is not running. Please start server via "npm run server" to view live leads.
          </td>
        </tr>
      `;
    }
  }
}

// ==========================================================================
// 4. LOAD SITE CONTENT (FROM MONGODB OR DEFAULTS)
// ==========================================================================
async function loadContent() {
  try {
    const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000/api/content'
      : '/api/content';

    const res = await fetch(apiUrl);
    const data = await res.json();

    if (res.ok && data.success && data.data) {
      const c = data.data;
      if (c.hero) activeContent.hero = c.hero;
      if (c.about) activeContent.about = c.about;
      if (c.foundersStory) activeContent.foundersStory = c.foundersStory;
      if (c.footer) activeContent.footer = c.footer;
      if (Array.isArray(c.weddingFilms) && c.weddingFilms.length) activeContent.weddingFilms = c.weddingFilms;
      if (Array.isArray(c.portfolio) && c.portfolio.length) activeContent.portfolio = c.portfolio;
    }
  } catch (err) {
    console.warn('Using default fallback content:', err);
  }

  populateAdminForms();
}

// ==========================================================================
// 5. POPULATE ADMIN FORMS & LISTS
// ==========================================================================
function populateAdminForms() {
  // Hero
  const headlineInput = document.getElementById('hero-headline-input');
  const subtitleInput = document.getElementById('hero-subtitle-input');
  const v1Input = document.getElementById('hero-video-1');
  const v2Input = document.getElementById('hero-video-2');

  if (headlineInput) headlineInput.value = activeContent.hero.headline || '';
  if (subtitleInput) subtitleInput.value = activeContent.hero.subtitle || '';
  if (v1Input && activeContent.hero.videos?.[0]) v1Input.value = activeContent.hero.videos[0].videoUrl || '';
  if (v2Input && activeContent.hero.videos?.[1]) v2Input.value = activeContent.hero.videos[1].videoUrl || '';

  // About
  const tagInput = document.getElementById('about-tag-input');
  const titleInput = document.getElementById('about-title-input');
  const p1Input = document.getElementById('about-p1-input');
  const p2Input = document.getElementById('about-p2-input');
  const p3Input = document.getElementById('about-p3-input');
  const img1Input = document.getElementById('about-img-1');
  const img2Input = document.getElementById('about-img-2');
  const img3Input = document.getElementById('about-img-3');
  const img4Input = document.getElementById('about-img-4');

  if (tagInput) tagInput.value = activeContent.about.tag || '';
  if (titleInput) titleInput.value = activeContent.about.title || '';
  if (p1Input) p1Input.value = activeContent.about.paragraphs?.[0] || '';
  if (p2Input) p2Input.value = activeContent.about.paragraphs?.[1] || '';
  if (p3Input) p3Input.value = activeContent.about.paragraphs?.[2] || '';
  if (img1Input) img1Input.value = activeContent.about.collageImages?.[0] || '';
  if (img2Input) img2Input.value = activeContent.about.collageImages?.[1] || '';
  if (img3Input) img3Input.value = activeContent.about.collageImages?.[2] || '';
  if (img4Input) img4Input.value = activeContent.about.collageImages?.[3] || '';

  // Founders Story (Card 5)
  const storyTitle = document.getElementById('story-title-input');
  const storyImg = document.getElementById('story-img-input');
  const storyP1 = document.getElementById('story-p1-input');
  const storyP2 = document.getElementById('story-p2-input');
  const storyP3 = document.getElementById('story-p3-input');
  const storyImgPrev = document.getElementById('story-img-preview');
  const storyImgBtn = document.getElementById('upload-btn-story-img');

  if (storyTitle) storyTitle.value = activeContent.foundersStory?.title || '';
  if (storyImg) storyImg.value = activeContent.foundersStory?.foundersImage || '';
  if (storyImgPrev && storyImg?.value) storyImgPrev.src = storyImg.value;
  if (storyP1) storyP1.value = activeContent.foundersStory?.paragraphs?.[0] || '';
  if (storyP2) storyP2.value = activeContent.foundersStory?.paragraphs?.[1] || '';
  if (storyP3) storyP3.value = activeContent.foundersStory?.paragraphs?.[2] || '';

  if (storyImg) {
    storyImg.addEventListener('input', (e) => {
      if (storyImgPrev) storyImgPrev.src = e.target.value.trim();
    });
  }
  setupFileUploadButton(storyImgBtn, storyImg, storyImgPrev);

  // Footer (Card 6)
  const footerBrand = document.getElementById('footer-brand-input');
  const footerLocs = document.getElementById('footer-locations-input');
  const footerTagline = document.getElementById('footer-tagline-input');
  const footerQTitle = document.getElementById('footer-quote-title-input');
  const footerQDesc = document.getElementById('footer-quote-desc-input');
  const footerInsta = document.getElementById('footer-instagram-input');
  const footerYt = document.getElementById('footer-youtube-input');
  const footerWa = document.getElementById('footer-whatsapp-input');

  if (footerBrand) footerBrand.value = activeContent.footer?.brandName || '';
  if (footerLocs) footerLocs.value = activeContent.footer?.locations || '';
  if (footerTagline) footerTagline.value = activeContent.footer?.tagline || '';
  if (footerQTitle) footerQTitle.value = activeContent.footer?.quoteTitle || '';
  if (footerQDesc) footerQDesc.value = activeContent.footer?.quoteDesc || '';
  if (footerInsta) footerInsta.value = activeContent.footer?.instagram || '';
  if (footerYt) footerYt.value = activeContent.footer?.youtube || '';
  if (footerWa) footerWa.value = activeContent.footer?.whatsapp || '';

  // Update Hero video preview sources
  const v1Prev = document.getElementById('hero-video-1-preview');
  const v2Prev = document.getElementById('hero-video-2-preview');
  if (v1Prev && v1Input?.value) v1Prev.src = v1Input.value;
  if (v2Prev && v2Input?.value) v2Prev.src = v2Input.value;

  // Update About collage image preview sources
  for (let i = 1; i <= 4; i++) {
    const inp = document.getElementById(`about-img-${i}`);
    const prv = document.getElementById(`about-img-${i}-preview`);
    if (inp && prv && inp.value) prv.src = inp.value;
  }

  // Wedding Films
  renderFilmsManager();

  // Portfolio
  renderPortfolioManager();

  // Attach live input listeners
  initLiveMediaPreviewListeners();

  // Render clickable recent media chips below image/video inputs
  renderInputMediaChips();

  // Sync Undo Button status
  updateUndoButtonState();
}

function setupFileUploadButton(btn, inputEl, previewEl1, previewEl2) {
  if (!btn || !inputEl) return;

  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'file';
  hiddenInput.accept = 'image/*,video/*';
  hiddenInput.style.display = 'none';
  document.body.appendChild(hiddenInput);

  btn.addEventListener('click', () => {
    hiddenInput.click();
  });

  hiddenInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const originalBtnHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
      Processing...
    `;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const dataUrl = evt.target.result;
      pushHistorySnapshot();
      inputEl.value = dataUrl;
      inputEl.dispatchEvent(new Event('input', { bubbles: true }));

      if (previewEl1) previewEl1.src = dataUrl;
      if (previewEl2) previewEl2.src = dataUrl;

      const isVideo = file.type ? file.type.startsWith('video') : dataUrl.startsWith('data:video');
      addRecentMedia(dataUrl, isVideo ? 'video' : 'image');

      btn.disabled = false;
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Uploaded!
      `;
      setTimeout(() => {
        btn.innerHTML = originalBtnHTML;
      }, 2500);

      showToast('File uploaded and saved to recent pictures history!');
    };

    reader.readAsDataURL(file);
  });
}

function initLiveMediaPreviewListeners() {
  const hv1 = document.getElementById('hero-video-1');
  const hv2 = document.getElementById('hero-video-2');
  const hv1Btn = document.getElementById('upload-btn-hero-1');
  const hv2Btn = document.getElementById('upload-btn-hero-2');
  const v1Prev = document.getElementById('hero-video-1-preview');
  const v2Prev = document.getElementById('hero-video-2-preview');

  if (hv1) {
    hv1.addEventListener('input', (e) => {
      if (v1Prev) v1Prev.src = e.target.value.trim();
    });
  }
  if (hv2) {
    hv2.addEventListener('input', (e) => {
      if (v2Prev) v2Prev.src = e.target.value.trim();
    });
  }

  setupFileUploadButton(hv1Btn, hv1, v1Prev);
  setupFileUploadButton(hv2Btn, hv2, v2Prev);

  for (let i = 1; i <= 4; i++) {
    const input = document.getElementById(`about-img-${i}`);
    const img = document.getElementById(`about-img-${i}-preview`);
    const btn = document.getElementById(`upload-btn-about-${i}`);

    if (input) {
      input.addEventListener('input', (e) => {
        if (img) img.src = e.target.value.trim();
      });
    }

    setupFileUploadButton(btn, input, img);
  }
}

function renderFilmsManager() {
  const container = document.getElementById('films-list-container');
  if (!container) return;

  container.innerHTML = activeContent.weddingFilms.map((film, idx) => `
    <div class="admin-item-box" data-film-index="${idx}">
      <div class="admin-item-header">
        <div style="display:flex; align-items:center; gap: 1rem;">
          <div class="admin-media-preview-box" style="width: 90px; height: 60px;">
            <img class="film-thumb-preview-${idx}" src="${film.poster || './images/niharika/main-shrine-couple.jpg'}" alt="${film.title || 'Film Poster'}" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">
            <span class="admin-thumb-badge">FILM</span>
          </div>
          <div>
            <h4 class="admin-item-title" style="margin:0; font-size: 1.15rem;">${film.title || 'Untitled Film'}</h4>
            <span style="font-size: 0.8rem; color: var(--color-body-muted);">${film.location || 'Destination Film'}</span>
          </div>
        </div>
        <button type="button" class="admin-btn-delete delete-film-btn" data-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Delete Film
        </button>
      </div>

      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label class="admin-label">Couple / Title</label>
          <input type="text" class="admin-input film-title" value="${film.title || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Location / Venue</label>
          <input type="text" class="admin-input film-location" value="${film.location || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Film Duration & Quality</label>
          <input type="text" class="admin-input film-duration" value="${film.duration || '04:15 • 4K Cinema'}">
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Video URL (.mp4 file link)</label>
          <div class="admin-thumb-row">
            <input type="text" class="admin-input film-videourl" value="${film.videoUrl || ''}">
            <button type="button" class="admin-upload-btn btn-upload-film-video" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Video
            </button>
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Cover Poster Image URL</label>
          <div class="admin-thumb-row">
            <div class="admin-media-preview-box">
              <img class="film-poster-preview-${idx}" src="${film.poster || './images/niharika/main-shrine-couple.jpg'}" alt="Poster Preview" onerror="this.src='./images/niharika/main-shrine-couple.jpg'">
              <span class="admin-thumb-badge">POSTER</span>
            </div>
            <input type="text" class="admin-input film-poster" data-preview-target="film-poster-preview-${idx}" value="${film.poster || ''}">
            <button type="button" class="admin-upload-btn btn-upload-film-poster" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Poster
            </button>
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Stills Gallery Image URLs (comma separated)</label>
          <input type="text" class="admin-input film-stills" value="${(film.stills || []).join(', ')}">
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Client Review Quote</label>
          <textarea class="admin-textarea film-review">${film.reviewQuote || ''}</textarea>
        </div>
      </div>
    </div>
  `).join('');

  // Live Poster Input Listeners & Upload Buttons
  container.querySelectorAll('.admin-item-box').forEach(box => {
    const posterInput = box.querySelector('.film-poster');
    const posterBtn = box.querySelector('.btn-upload-film-poster');
    const videoInput = box.querySelector('.film-videourl');
    const videoBtn = box.querySelector('.btn-upload-film-video');
    const idx = box.getAttribute('data-film-index');
    const imgPreview = box.querySelector(`.film-poster-preview-${idx}`);
    const thumbPreview = box.querySelector(`.film-thumb-preview-${idx}`);

    if (posterInput) {
      posterInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (imgPreview) imgPreview.src = val;
        if (thumbPreview) thumbPreview.src = val;
      });
    }

    setupFileUploadButton(posterBtn, posterInput, imgPreview, thumbPreview);
    setupFileUploadButton(videoBtn, videoInput);
  });

  container.querySelectorAll('.delete-film-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this film from your archive?')) {
        pushHistorySnapshot();
        activeContent.weddingFilms.splice(idx, 1);
        renderFilmsManager();
        showToast('Film deleted. Click "Undo Edit" to restore it anytime.');
      }
    });
  });
}

function renderPortfolioManager() {
  const container = document.getElementById('portfolio-list-container');
  if (!container) return;

  container.innerHTML = activeContent.portfolio.map((item, idx) => `
    <div class="admin-item-box" data-port-index="${idx}">
      <div class="admin-item-header">
        <div style="display:flex; align-items:center; gap: 1rem;">
          <div class="admin-media-preview-box" style="width: 75px; height: 75px;">
            <img class="port-header-preview-${idx}" src="${item.image || './images/niharika/lotus-portrait.jpg'}" alt="${item.title || 'Still'}" onerror="this.src='./images/niharika/lotus-portrait.jpg'">
            <span class="admin-thumb-badge">${(item.category || 'STILL').toUpperCase()}</span>
          </div>
          <div>
            <h4 class="admin-item-title" style="margin:0; font-size: 1.1rem;">${item.title || 'Untitled Still'}</h4>
            <span style="font-size: 0.8rem; color: var(--color-body-muted);">${item.location || 'Portfolio Gallery Image'}</span>
          </div>
        </div>
        <button type="button" class="admin-btn-delete delete-port-btn" data-index="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Delete Item
        </button>
      </div>

      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label class="admin-label">Title</label>
          <input type="text" class="admin-input port-title" value="${item.title || ''}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Category Filter</label>
          <select class="admin-select port-category">
            <option value="stories" ${item.category === 'stories' || item.category === 'wedding' ? 'selected' : ''}>Wedding Stories</option>
            <option value="films" ${item.category === 'films' ? 'selected' : ''}>Wedding Films</option>
            <option value="couple" ${item.category === 'couple' ? 'selected' : ''}>Couple Shoot</option>
            <option value="editorial" ${item.category === 'editorial' ? 'selected' : ''}>Editorial Fine Art</option>
          </select>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Aspect Ratio</label>
          <select class="admin-select port-aspect">
            <option value="4/5" ${item.aspectRatio === '4/5' ? 'selected' : ''}>Portrait (4/5)</option>
            <option value="16/9" ${item.aspectRatio === '16/9' ? 'selected' : ''}>Landscape (16/9)</option>
            <option value="1/1" ${item.aspectRatio === '1/1' ? 'selected' : ''}>Square (1/1)</option>
          </select>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Image URL</label>
          <div class="admin-thumb-row">
            <div class="admin-media-preview-box">
              <img class="port-img-preview-${idx}" src="${item.image || './images/niharika/lotus-portrait.jpg'}" alt="Preview" onerror="this.src='./images/niharika/lotus-portrait.jpg'">
              <span class="admin-thumb-badge">IMAGE</span>
            </div>
            <input type="text" class="admin-input port-image" data-preview-header="port-header-preview-${idx}" data-preview-target="port-img-preview-${idx}" value="${item.image || ''}">
            <button type="button" class="admin-upload-btn btn-upload-port-img" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Image
            </button>
          </div>
        </div>
        <div class="admin-form-group col-full">
          <label class="admin-label">Video URL (Optional Motion Still)</label>
          <div class="admin-thumb-row">
            <input type="text" class="admin-input port-videourl" value="${item.videoUrl || ''}">
            <button type="button" class="admin-upload-btn btn-upload-port-video" data-index="${idx}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Video
            </button>
          </div>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">EXIF Camera</label>
          <input type="text" class="admin-input port-camera" value="${item.exif?.camera || 'Leica M11'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">EXIF Lens</label>
          <input type="text" class="admin-input port-lens" value="${item.exif?.lens || 'Noctilux-M 50mm f/0.95'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Aperture</label>
          <input type="text" class="admin-input port-aperture" value="${item.exif?.aperture || 'f/1.2'}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Focal Length</label>
          <input type="text" class="admin-input port-focal" value="${item.exif?.focal || '50mm'}">
        </div>
      </div>
    </div>
  `).join('');

  // Live Image Input Listeners & Upload Buttons
  container.querySelectorAll('.admin-item-box').forEach(box => {
    const imgInput = box.querySelector('.port-image');
    const imgBtn = box.querySelector('.btn-upload-port-img');
    const videoInput = box.querySelector('.port-videourl');
    const videoBtn = box.querySelector('.btn-upload-port-video');
    const idx = box.getAttribute('data-port-index');
    const imgPreview = box.querySelector(`.port-img-preview-${idx}`);
    const headerPreview = box.querySelector(`.port-header-preview-${idx}`);

    if (imgInput) {
      imgInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (imgPreview) imgPreview.src = val;
        if (headerPreview) headerPreview.src = val;
      });
    }

    setupFileUploadButton(imgBtn, imgInput, imgPreview, headerPreview);
    setupFileUploadButton(videoBtn, videoInput);
  });

  container.querySelectorAll('.delete-port-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      if (confirm('Are you sure you want to remove this item from your portfolio?')) {
        pushHistorySnapshot();
        activeContent.portfolio.splice(idx, 1);
        renderPortfolioManager();
        showToast('Portfolio item deleted. Click "Undo Edit" to restore it anytime.');
      }
    });
  });
}

// ==========================================================================
// 6. SAVE ALL CONTENT TO MONGODB ATLAS
// ==========================================================================
function initSaveContent() {
  const saveBtn = document.getElementById('admin-save-all-btn');
  const undoBtn = document.getElementById('admin-undo-btn');
  const refreshLeadsBtn = document.getElementById('refresh-leads-btn');
  const addFilmBtn = document.getElementById('add-film-btn');
  const addPortBtn = document.getElementById('add-portfolio-btn');

  if (undoBtn) {
    undoBtn.addEventListener('click', handleUndo);
  }

  if (refreshLeadsBtn) {
    refreshLeadsBtn.addEventListener('click', loadLeads);
  }

  if (addFilmBtn) {
    addFilmBtn.addEventListener('click', () => {
      pushHistorySnapshot();
      activeContent.weddingFilms.unshift({
        id: 'film-' + Date.now(),
        title: 'New Couple Title',
        location: 'Lake Como, Italy',
        venue: 'Villa d\'Este',
        duration: '04:15 • 4K Cinema',
        videoUrl: './videos/hero-wedding.mp4',
        poster: './images/niharika/main-shrine-couple.jpg',
        stills: ['./images/niharika/lotus-portrait.jpg', './images/niharika/doorway-portrait.jpg'],
        reviewQuote: 'Working with Timemachine & Co was an absolute dream experience.',
        reviewAuthor: '— Bride & Groom'
      });
      renderFilmsManager();
      showToast('New Film item added! Use Undo if you wish to revert.');
    });
  }

  if (addPortBtn) {
    addPortBtn.addEventListener('click', () => {
      pushHistorySnapshot();
      activeContent.portfolio.unshift({
        id: 'work-' + Date.now(),
        title: 'New Ceremony Still',
        subtitle: 'Lake Como',
        category: 'stories',
        aspectRatio: '4/5',
        image: './images/niharika/lotus-portrait.jpg',
        location: 'Lake Como, Italy',
        exif: { camera: 'Leica M11', lens: 'Noctilux 50mm', aperture: 'f/1.2', focal: '50mm', shutter: '1/2000s', iso: 'ISO 100', format: 'Digital RAW' }
      });
      renderPortfolioManager();
      showToast('New Portfolio item added! Use Undo if you wish to revert.');
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      pushHistorySnapshot();

      // Gather Hero
      activeContent.hero.headline = document.getElementById('hero-headline-input')?.value || 'Timemachine & Co';
      activeContent.hero.subtitle = document.getElementById('hero-subtitle-input')?.value || '';
      const hv1 = document.getElementById('hero-video-1')?.value || './videos/hero-wedding.mp4';
      const hv2 = document.getElementById('hero-video-2')?.value || './videos/hero-wedding.mp4';
      activeContent.hero.videos = [
        { title: 'Primary Hero', videoUrl: hv1 },
        { title: 'Lake Como Highlight', videoUrl: hv2 }
      ];
      if (hv1) addRecentMedia(hv1, 'video');
      if (hv2) addRecentMedia(hv2, 'video');

      // Gather About
      activeContent.about.tag = document.getElementById('about-tag-input')?.value || '';
      activeContent.about.title = document.getElementById('about-title-input')?.value || '';
      activeContent.about.paragraphs = [
        document.getElementById('about-p1-input')?.value || '',
        document.getElementById('about-p2-input')?.value || '',
        document.getElementById('about-p3-input')?.value || ''
      ];
      const abImgs = [
        document.getElementById('about-img-1')?.value || '',
        document.getElementById('about-img-2')?.value || '',
        document.getElementById('about-img-3')?.value || '',
        document.getElementById('about-img-4')?.value || ''
      ];
      activeContent.about.collageImages = abImgs;
      abImgs.forEach(url => { if (url) addRecentMedia(url, 'image'); });

      // Gather Films
      const filmBoxes = document.querySelectorAll('#films-list-container .admin-item-box');
      filmBoxes.forEach((box, idx) => {
        if (activeContent.weddingFilms[idx]) {
          activeContent.weddingFilms[idx].title = box.querySelector('.film-title')?.value || '';
          activeContent.weddingFilms[idx].location = box.querySelector('.film-location')?.value || '';
          activeContent.weddingFilms[idx].duration = box.querySelector('.film-duration')?.value || '';
          const vUrl = box.querySelector('.film-videourl')?.value || '';
          const pUrl = box.querySelector('.film-poster')?.value || '';
          activeContent.weddingFilms[idx].videoUrl = vUrl;
          activeContent.weddingFilms[idx].poster = pUrl;
          activeContent.weddingFilms[idx].reviewQuote = box.querySelector('.film-review')?.value || '';
          const stillsStr = box.querySelector('.film-stills')?.value || '';
          activeContent.weddingFilms[idx].stills = stillsStr.split(',').map(s => s.trim()).filter(Boolean);

          if (vUrl) addRecentMedia(vUrl, 'video');
          if (pUrl) addRecentMedia(pUrl, 'image');
        }
      });

      // Gather Portfolio
      const portBoxes = document.querySelectorAll('#portfolio-list-container .admin-item-box');
      portBoxes.forEach((box, idx) => {
        if (activeContent.portfolio[idx]) {
          activeContent.portfolio[idx].title = box.querySelector('.port-title')?.value || '';
          activeContent.portfolio[idx].category = box.querySelector('.port-category')?.value || 'stories';
          activeContent.portfolio[idx].aspectRatio = box.querySelector('.port-aspect')?.value || '4/5';
          const pImg = box.querySelector('.port-image')?.value || '';
          const pVid = box.querySelector('.port-videourl')?.value || '';
          activeContent.portfolio[idx].image = pImg;
          activeContent.portfolio[idx].videoUrl = pVid;
          
          if (!activeContent.portfolio[idx].exif) activeContent.portfolio[idx].exif = {};
          activeContent.portfolio[idx].exif.camera = box.querySelector('.port-camera')?.value || 'Leica M11';
          activeContent.portfolio[idx].exif.lens = box.querySelector('.port-lens')?.value || 'Noctilux-M 50mm';
          activeContent.portfolio[idx].exif.aperture = box.querySelector('.port-aperture')?.value || 'f/1.2';
          activeContent.portfolio[idx].exif.focal = box.querySelector('.port-focal')?.value || '50mm';

          if (pImg) addRecentMedia(pImg, 'image');
          if (pVid) addRecentMedia(pVid, 'video');
        }
      });

      // Gather Founders Story (Card 5)
      if (!activeContent.foundersStory) activeContent.foundersStory = {};
      activeContent.foundersStory.title = document.getElementById('story-title-input')?.value || '';
      const storyImgUrl = document.getElementById('story-img-input')?.value || '';
      activeContent.foundersStory.foundersImage = storyImgUrl;
      activeContent.foundersStory.paragraphs = [
        document.getElementById('story-p1-input')?.value || '',
        document.getElementById('story-p2-input')?.value || '',
        document.getElementById('story-p3-input')?.value || ''
      ];
      if (storyImgUrl) addRecentMedia(storyImgUrl, 'image');

      // Gather Footer (Card 6)
      if (!activeContent.footer) activeContent.footer = {};
      activeContent.footer.brandName = document.getElementById('footer-brand-input')?.value || '';
      activeContent.footer.locations = document.getElementById('footer-locations-input')?.value || '';
      activeContent.footer.tagline = document.getElementById('footer-tagline-input')?.value || '';
      activeContent.footer.quoteTitle = document.getElementById('footer-quote-title-input')?.value || '';
      activeContent.footer.quoteDesc = document.getElementById('footer-quote-desc-input')?.value || '';
      activeContent.footer.instagram = document.getElementById('footer-instagram-input')?.value || '';
      activeContent.footer.youtube = document.getElementById('footer-youtube-input')?.value || '';
      activeContent.footer.whatsapp = document.getElementById('footer-whatsapp-input')?.value || '';

      // Save to local cache for instant local site reflection
      localStorage.setItem('studio_content_cache', JSON.stringify(activeContent));

      // Save via API
      saveBtn.disabled = true;
      saveBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        Saving to MongoDB...
      `;

      try {
        const apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? 'http://localhost:5000/api/content'
          : '/api/content';

        const res = await fetch(apiUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(activeContent)
        });

        const data = await res.json();
        if (res.ok && data.success) {
          showToast('Website content saved successfully to MongoDB Atlas!');
        } else {
          alert('Save warning: ' + (data.error || 'Server did not acknowledge save.'));
        }
      } catch (err) {
        console.error('Error saving content:', err);
        showToast('Saved locally in browser memory.');
      } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
          Save All Content Changes
        `;
      }
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  const toastText = document.getElementById('admin-toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================================================
// 7. QUOTATION GENERATOR & LUXURY PROPOSAL BUILDER (TEMPLATE 2 + TEMPLATE 1)
// ==========================================================================
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let activeQuotation = {
  clientName: 'Bhavya Alapati',
  coupleNames: 'Groom: Anish • Bride: Bhavya Alapati',
  clientPhone: '+91 97056 32982',
  clientEmail: 'bhavya.alapati@wedding.com',
  basePrice: '',
  selectedTemplate: 'template2',
  events: [
    { id: 'e1', date: '11 Feb 2027', location: 'Guntur', title: 'Engagement', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e2', date: '25 Feb 2027', location: 'Hyderabad', title: 'Wedding', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e3', date: '23 Feb 2027', location: 'Hyderabad', title: 'Pellikoduku', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e4', date: '23 Feb 2027', location: 'Hyderabad', title: 'Bride Ceremony', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e5', date: '24 Feb 2027', location: 'Hyderabad', title: 'Haldi', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e6', date: '24 Feb 2027', location: 'Hyderabad', title: 'Sangeeth', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e7', date: '25 Feb 2027', location: 'Hyderabad', title: 'Mehendi', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { id: 'e8', date: '26 Feb 2027', location: 'Hyderabad', title: 'Vratham', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 }
  ],
  t2: {
    heroBg: './images/template2/hero-card-bg.jpg',
    heroSubtitle: 'Because Every Frame Has a Story to Tell',
    greetingTitle: 'Dear',
    welcomeText: 'We appreciate the opportunity to be a part of your special day and capture the timeless moments that will make your wedding a cherished memory.',
    aboutTitle: 'About Us',
    aboutDesc: 'At Timemachine & Co, we freeze fleeting moments to make your forever love story a timeless masterpiece, weaving the magic of your wedding into a tapestry of emotions, traditions, and heirlooms. Embark on your journey with us, and create a visual legacy treasured for generations to come.',
    bannerUrl: 'https://youtu.be/OctoMQEqK9E',
    videoUrl: 'https://youtu.be/OctoMQEqK9E',
    gallery: [
      './images/template2/gallery-1.jpg',
      './images/template2/gallery-2.jpg',
      './images/template2/gallery-3.jpg',
      './images/template2/gallery-4.jpg'
    ],
    services: {
      pictures: {
        included: true,
        title: 'Edited Pictures',
        desc: 'You shall receive 1,000 fully edited images from all events, portraying your wedding story, delivered on the cloud within 60 days from payment clearance.'
      },
      films: {
        included: true,
        title: 'Cinematic Wedding Film',
        desc: '1 cinematic HD film with the best footage from your events, edited according to our style, to be delivered on cloud within 60 days from payment clearance. You can suggest any number of changes but all at once and within a week of delivery.',
        note: '*Changes will be accepted only once from 2nd time Rs 15,000 will be charged extra.'
      },
      albums: {
        included: true,
        title: 'Printed Albums',
        desc: 'You shall receive 3 Printed albums from the best events each album has 40 sheets. An extra sheet will incur an additional charge of ₹600 per sheet.'
      },
      videos: {
        included: true,
        title: 'Traditional Videos',
        desc: 'You shall receive 5 long traditional video of all events in documentary style, delivered within 75 days from payment clearance.'
      }
    },
    priceSection: {
      greeting: 'Dear Bhavya Alapati',
      subtitle: 'Your final quote price would be',
      advanceTitle: 'Advance Payment',
      advanceText: '50% of the total billing value to be paid as an advance to block the dates.',
      finalTitle: 'Final Payment',
      finalText: 'Remaining 50% payment along with Transportation charges shall be done before/after wedding before receiving Raw footage.',
      hdNote: "*You're required to provide us 2 units of 4TB Hard Drives to ensure the backup and safety of your data.",
      cancelNote: 'Note : Incase of any cancellation, the advance or the payments cannot be returned.'
    },
    addonsSubtitle: "If you're interested in expanding your package, we also provide additional services that are not included in the standard package:",
    addons: [
      { id: 'led', title: 'LED Wall', price: 25000, desc: 'Digital LED Screens to showcase your Event video from multiple cameras LIVE. Equipped with a P3 display, of about 10 ft width and 8ft height.', selected: false },
      { id: 'weblive', title: 'Web Live', price: 15000, desc: "Live telecasting of your event video footage on the web. You're required to provide a name to generate a custom link that you can share with your friends and family so that they can watch the event remotely.", selected: false },
      { id: 'drone', title: 'Drone', price: 15000, desc: 'If you wish for a drone service for your events it would be chargeable at Rs.15,000/- per event. The drones will be used to cover decor only and are subject to government permissions.', selected: false },
      { id: 'albums', title: 'Print Albums', price: 25000, desc: 'Premium designer album of 40 sheets portraying your wedding story and each costs', selected: false }
    ],
    termsSubtitle: 'Our terms of service, including cancellation policies and copyright information, are detailed below for your review.',
    terms: [
      {
        title: 'Travel Expense',
        desc: 'You shall arrange for the travel and accommodation of our shoot crew for all your events occurring in places away from hyderabad.'
      },
      {
        title: 'Project Cancellation',
        desc: 'If you cancel the project after the advance payment & reserving team schedules for you, the payments cannot be returned.'
      },
      {
        title: 'Delivery Timeline',
        desc: 'We strictly adhere to deliveries on the mentioned timeline. We do not entertain any early requests, as it will hamper timelines of other deliverables.'
      },
      {
        title: 'Change of Plans -',
        desc: 'Any change of plans or postponement of events will be accommodated with the best team available on the new dates and chargeable depending on the type of events and crew required.'
      },
      {
        title: 'Shoot Permissions',
        desc: 'Please note that all the required government permissions for any couple shoot shall be attained by the clients and the team is no way responsible for it. In case of any fines/ inconvenience to the shoot, we are not to be held responsible.'
      },
      {
        title: 'Print Albums',
        desc: 'Photos selection has to be given by the client and that is mandatory. After the selection has been given it will take 25-30 days for the team to send you the layouts and once the approval has been made from the client, then it will take a week to hand over the albums\nIf selections are not made for more than 7 months from the date of the event then each album will be charged Rs. 15,000/- extra'
      },
      {
        title: 'Security for Loss',
        desc: 'Client agrees to indemnify and hold harmless to the crew for any liability, damage or loss, related to technological failure, including data loss.'
      },
      {
        title: 'Data Safety',
        desc: 'Although we’ve never lost any event’s data in the past 12 years, in the rarest probability of any data loss, we are liable to shoot another event for free or deduct the corresponding event charges.'
      },
      {
        title: 'Additional Services Quality',
        desc: 'We don’t take responsibility for the quality of Web-live, LED walls and other services, since they are provided by 3rd party vendors. Our primary focus lies on great work with our photos & videos.'
      },
      {
        title: 'Video Revisions Timeline:',
        desc: 'Any requests for video changes must be communicated within 20-30days from the date of final output delivery.'
      },
      {
        title: 'Final Payment & Editing:',
        desc: 'Post-event editing work will begin only after the final payment has been successfully completed. This ensures a streamlined workflow and helps us maintain our quality standards.'
      }
    ],
    nextSteps: {
      title: 'Next Steps',
      p1: 'Please take a moment to review the proposal and attached terms of service. If you have any questions or would like to discuss specific details, feel free to reach out',
      p2: 'We eagerly anticipate the opportunity to contribute to your special day and create a visual story that will be cherished for a lifetime.',
      signoff: 'Best regards, Timemachine & Co.',
      phone: '+919705632982',
      whatsapp: '+919705632982',
      website: 'https://www.timemachineworks.com',
      instagram: 'https://instagram.com/TimemachineandCo',
      facebook: 'https://facebook.com',
      pinterest: 'https://pinterest.com'
    }
  }
};

function getCalculatedTotalPrice() {
  let base = 0;
  if (typeof activeQuotation.basePrice === 'number') {
    base = activeQuotation.basePrice;
  } else if (typeof activeQuotation.basePrice === 'string' && activeQuotation.basePrice.trim() !== '') {
    const parsed = parseInt(activeQuotation.basePrice.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(parsed)) base = parsed;
  }

  let addOnTotal = 0;
  if (activeQuotation.t2 && Array.isArray(activeQuotation.t2.addons)) {
    activeQuotation.t2.addons.forEach(add => {
      if (add.selected) {
        addOnTotal += Number(add.price) || 0;
      }
    });
  }

  return base + addOnTotal;
}

function updateClientProposalLink() {
  const linkEl = document.getElementById('btn-view-client-proposal');
  if (!linkEl) return;
  const clientParam = encodeURIComponent(activeQuotation.clientName || 'Client');
  const priceParam = encodeURIComponent(getCalculatedTotalPrice().toLocaleString('en-IN'));
  const templateParam = encodeURIComponent(activeQuotation.selectedTemplate || 'template2');
  const vidParam = encodeURIComponent(activeQuotation.t2?.videoUrl || activeQuotation.t2?.bannerUrl || 'https://youtu.be/OctoMQEqK9E');
  linkEl.href = `proposal.html?template=${templateParam}&client=${clientParam}&price=${priceParam}&video=${vidParam}`;
}

function populateQuotationForm() {
  // Client Info
  const cName = document.getElementById('quote-client-name');
  const cCouple = document.getElementById('quote-couple-names');
  const cPhone = document.getElementById('quote-client-phone');
  const cEmail = document.getElementById('quote-client-email');
  const cPrice = document.getElementById('quote-total-price');
  const tplSelect = document.getElementById('quote-template-select');

  if (cName) cName.value = activeQuotation.clientName || '';
  if (cCouple) cCouple.value = activeQuotation.coupleNames || '';
  if (cPhone) cPhone.value = activeQuotation.clientPhone || activeQuotation.phone || '';
  if (cEmail) cEmail.value = activeQuotation.clientEmail || activeQuotation.email || '';
  if (cPrice) {
    if (typeof activeQuotation.basePrice === 'number' && activeQuotation.basePrice > 0) {
      cPrice.value = activeQuotation.basePrice.toLocaleString('en-IN');
    } else if (typeof activeQuotation.basePrice === 'string' && activeQuotation.basePrice.trim() !== '' && activeQuotation.basePrice !== '25,000') {
      cPrice.value = activeQuotation.basePrice;
    } else {
      cPrice.value = '';
    }
  }
  if (tplSelect) tplSelect.value = activeQuotation.selectedTemplate || 'template2';

  // Card 1: Hero & Greeting
  const hSubtitle = document.getElementById('quote-t2-hero-subtitle');
  const gTitle = document.getElementById('quote-t2-greeting-title');
  const wText = document.getElementById('quote-t2-welcome-text');
  const hBg = document.getElementById('quote-t2-hero-bg');

  if (hSubtitle) hSubtitle.value = activeQuotation.t2?.heroSubtitle || '';
  if (gTitle) gTitle.value = activeQuotation.t2?.greetingTitle || 'Dear';
  if (wText) wText.value = activeQuotation.t2?.welcomeText || '';
  if (hBg) hBg.value = activeQuotation.t2?.heroBg || '';

  // Card 3: About Us
  const abTitle = document.getElementById('quote-t2-about-title');
  const abDesc = document.getElementById('quote-t2-about-desc');
  const abBanner = document.getElementById('quote-t2-banner-url');

  if (abTitle) abTitle.value = activeQuotation.t2?.aboutTitle || '';
  if (abDesc) abDesc.value = activeQuotation.t2?.aboutDesc || '';
  const currentVid = activeQuotation.t2?.videoUrl || activeQuotation.t2?.bannerUrl || 'https://youtu.be/OctoMQEqK9E';
  if (abBanner) abBanner.value = currentVid;

  const quoteVid = document.getElementById('quote-t2-video-url');
  const quoteVidBtn = document.getElementById('btn-open-video-link');
  if (quoteVid) quoteVid.value = currentVid;
  if (quoteVidBtn) quoteVidBtn.href = currentVid || '#';

  // Card 4: Gallery (4 Photos)
  if (activeQuotation.t2?.gallery) {
    for (let i = 1; i <= 4; i++) {
      const gInput = document.getElementById(`quote-t2-gallery-${i}`);
      const gThumb = document.getElementById(`thumb-t2-gal-${i}`);
      const url = activeQuotation.t2.gallery[i - 1] || '';
      if (gInput) gInput.value = url;
      if (gThumb && url) gThumb.src = url;
    }
  }

  // Card 5: Services Offered
  const svcs = activeQuotation.t2?.services || {};
  const chkPic = document.getElementById('svc-pictures-check');
  const tPic = document.getElementById('quote-svc-pictures-title');
  const dPic = document.getElementById('quote-svc-pictures-desc');
  if (chkPic) chkPic.checked = svcs.pictures?.included !== false;
  if (tPic) tPic.value = svcs.pictures?.title || 'Edited Pictures';
  if (dPic) dPic.value = svcs.pictures?.desc || '';

  const chkFilm = document.getElementById('svc-films-check');
  const tFilm = document.getElementById('quote-svc-films-title');
  const dFilm = document.getElementById('quote-svc-films-desc');
  const nFilm = document.getElementById('quote-svc-films-note');
  if (chkFilm) chkFilm.checked = svcs.films?.included !== false;
  if (tFilm) tFilm.value = svcs.films?.title || 'Cinematic Wedding Films';
  if (dFilm) dFilm.value = svcs.films?.desc || '';
  if (nFilm) nFilm.value = svcs.films?.note || '';

  const chkAlb = document.getElementById('svc-albums-check');
  const tAlb = document.getElementById('quote-svc-albums-title');
  const dAlb = document.getElementById('quote-svc-albums-desc');
  if (chkAlb) chkAlb.checked = svcs.albums?.included !== false;
  if (tAlb) tAlb.value = svcs.albums?.title || 'Printed Albums';
  if (dAlb) dAlb.value = svcs.albums?.desc || '';

  const chkVid = document.getElementById('svc-videos-check');
  const tVid = document.getElementById('quote-svc-videos-title');
  const dVid = document.getElementById('quote-svc-videos-desc');
  if (chkVid) chkVid.checked = svcs.videos?.included !== false;
  if (tVid) tVid.value = svcs.videos?.title || 'Traditional Videos';
  if (dVid) dVid.value = svcs.videos?.desc || '';

  // Card 6: Quote Price & Payment Timeline
  const ps = activeQuotation.t2?.priceSection || {};
  const pgGreet = document.getElementById('quote-t2-price-greeting');
  const pgSub = document.getElementById('quote-t2-price-subtitle');
  const advTitle = document.getElementById('quote-t2-advance-title');
  const advText = document.getElementById('quote-t2-advance-text');
  const finTitle = document.getElementById('quote-t2-final-title');
  const finText = document.getElementById('quote-t2-final-text');
  const hdNote = document.getElementById('quote-hd-note');
  const cnlNote = document.getElementById('quote-t2-cancel-note');

  if (pgGreet) pgGreet.value = ps.greeting || 'Dear';
  if (pgSub) pgSub.value = ps.subtitle || '';
  if (advTitle) advTitle.value = ps.advanceTitle || 'Advance Payment';
  if (advText) advText.value = ps.advanceText || '';
  if (finTitle) finTitle.value = ps.finalTitle || 'Final Payment';
  if (finText) finText.value = ps.finalText || '';
  if (hdNote) hdNote.value = ps.hdNote || '';
  if (cnlNote) cnlNote.value = ps.cancelNote || '';

  // Card 7: Add-Ons
  const addSub = document.getElementById('quote-t2-addons-subtitle');
  if (addSub) addSub.value = activeQuotation.t2?.addonsSubtitle || '';
  const addons = activeQuotation.t2?.addons || [];
  const ledAddon = addons.find(a => a.id === 'led');
  const webAddon = addons.find(a => a.id === 'weblive');
  const droneAddon = addons.find(a => a.id === 'drone');
  const albAddon = addons.find(a => a.id === 'albums');

  if (ledAddon) {
    const chk = document.getElementById('addon-led-check');
    const t = document.getElementById('quote-addon-led-title');
    const p = document.getElementById('quote-addon-led-price');
    const d = document.getElementById('quote-addon-led-desc');
    if (chk) chk.checked = !!ledAddon.selected;
    if (t) t.value = ledAddon.title;
    if (p) p.value = ledAddon.price;
    if (d) d.value = ledAddon.desc;
  }
  if (webAddon) {
    const chk = document.getElementById('addon-weblive-check');
    const t = document.getElementById('quote-addon-weblive-title');
    const p = document.getElementById('quote-addon-weblive-price');
    const d = document.getElementById('quote-addon-weblive-desc');
    if (chk) chk.checked = !!webAddon.selected;
    if (t) t.value = webAddon.title;
    if (p) p.value = webAddon.price;
    if (d) d.value = webAddon.desc;
  }
  if (droneAddon) {
    const chk = document.getElementById('addon-drone-check');
    const t = document.getElementById('quote-addon-drone-title');
    const p = document.getElementById('quote-addon-drone-price');
    const d = document.getElementById('quote-addon-drone-desc');
    if (chk) chk.checked = !!droneAddon.selected;
    if (t) t.value = droneAddon.title;
    if (p) p.value = droneAddon.price;
    if (d) d.value = droneAddon.desc;
  }
  if (albAddon) {
    const chk = document.getElementById('addon-albums-check');
    const t = document.getElementById('quote-addon-albums-title');
    const p = document.getElementById('quote-addon-albums-price');
    const d = document.getElementById('quote-addon-albums-desc');
    if (chk) chk.checked = !!albAddon.selected;
    if (t) t.value = albAddon.title;
    if (p) p.value = albAddon.price;
    if (d) d.value = albAddon.desc;
  }

  // Card 8: Terms Subtitle
  const tSub = document.getElementById('quote-t2-terms-subtitle');
  if (tSub) tSub.value = activeQuotation.t2?.termsSubtitle || '';

  // Card 9: Next Steps & Contact
  const ns = activeQuotation.t2?.nextSteps || {};
  const nsTitle = document.getElementById('quote-t2-nextsteps-title');
  const nsP1 = document.getElementById('quote-t2-nextsteps-p1');
  const nsP2 = document.getElementById('quote-t2-nextsteps-p2');
  const nsSign = document.getElementById('quote-t2-nextsteps-signoff');
  const nsPhone = document.getElementById('quote-t2-phone');
  const nsWa = document.getElementById('quote-t2-whatsapp');
  const nsWeb = document.getElementById('quote-t2-website');
  const nsInsta = document.getElementById('quote-t2-instagram');
  const nsFb = document.getElementById('quote-t2-facebook');
  const nsPin = document.getElementById('quote-t2-pinterest');

  if (nsTitle) nsTitle.value = ns.title || 'Next Steps';
  if (nsP1) nsP1.value = ns.p1 || '';
  if (nsP2) nsP2.value = ns.p2 || '';
  if (nsSign) nsSign.value = ns.signoff || '';
  if (nsPhone) nsPhone.value = ns.phone || '';
  if (nsWa) nsWa.value = ns.whatsapp || '';
  if (nsWeb) nsWeb.value = ns.website || '';
  if (nsInsta) nsInsta.value = ns.instagram || '';
  if (nsFb) nsFb.value = ns.facebook || '';
  if (nsPin) nsPin.value = ns.pinterest || '';

  // Render Sub-lists
  renderQuoteEventsForm();
  renderQuoteTermsForm();
  updateClientProposalLink();
}

function renderQuoteEventsForm() {
  const container = document.getElementById('quote-events-list');
  if (!container) return;

  container.innerHTML = activeQuotation.events.map((evt, idx) => `
    <div class="event-item-card" data-evt-idx="${idx}">
      <div class="event-item-header">
        <strong style="color: var(--color-heading); font-size: 0.95rem;">
          Event #${idx + 1}: ${escapeHtml(evt.title || evt.name || 'Ceremony')}
        </strong>
        <button type="button" class="admin-btn-delete btn-delete-quote-event" data-idx="${idx}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Remove
        </button>
      </div>

      <div class="admin-form-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="admin-form-group">
          <label class="admin-label">Event Title / Ceremony</label>
          <input type="text" class="admin-input evt-field-title" value="${escapeHtml(evt.title || evt.name || '')}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Date & Time</label>
          <input type="text" class="admin-input evt-field-date" value="${escapeHtml(evt.date || '')}">
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Location / City / Venue</label>
          <input type="text" class="admin-input evt-field-location" value="${escapeHtml(evt.location || '')}">
        </div>
      </div>

      <div style="margin-top: 1rem; border-top: 1px dashed var(--color-border-light); padding-top: 0.85rem;">
        <label class="admin-label" style="margin-bottom: 0.5rem; display: block;">Crew Staffing Breakdown</label>
        <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
          <div class="crew-counter-group">
            <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-body);">Candid Photo:</span>
            <button type="button" class="crew-btn btn-crew-dec" data-idx="${idx}" data-field="candidPhoto">-</button>
            <span style="font-weight: 700; font-size: 0.85rem; min-width: 14px; text-align: center;">${evt.candidPhoto ?? 1}</span>
            <button type="button" class="crew-btn btn-crew-inc" data-idx="${idx}" data-field="candidPhoto">+</button>
          </div>
          <div class="crew-counter-group">
            <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-body);">Candid Video:</span>
            <button type="button" class="crew-btn btn-crew-dec" data-idx="${idx}" data-field="candidVideo">-</button>
            <span style="font-weight: 700; font-size: 0.85rem; min-width: 14px; text-align: center;">${evt.candidVideo ?? 1}</span>
            <button type="button" class="crew-btn btn-crew-inc" data-idx="${idx}" data-field="candidVideo">+</button>
          </div>
          <div class="crew-counter-group">
            <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-body);">Trad Photo:</span>
            <button type="button" class="crew-btn btn-crew-dec" data-idx="${idx}" data-field="tradPhoto">-</button>
            <span style="font-weight: 700; font-size: 0.85rem; min-width: 14px; text-align: center;">${evt.tradPhoto ?? 1}</span>
            <button type="button" class="crew-btn btn-crew-inc" data-idx="${idx}" data-field="tradPhoto">+</button>
          </div>
          <div class="crew-counter-group">
            <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-body);">Trad Video:</span>
            <button type="button" class="crew-btn btn-crew-dec" data-idx="${idx}" data-field="tradVideo">-</button>
            <span style="font-weight: 700; font-size: 0.85rem; min-width: 14px; text-align: center;">${evt.tradVideo ?? 1}</span>
            <button type="button" class="crew-btn btn-crew-inc" data-idx="${idx}" data-field="tradVideo">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Wire up event card field listeners
  container.querySelectorAll('.event-item-card').forEach(card => {
    const idx = parseInt(card.getAttribute('data-evt-idx'), 10);
    const titleInp = card.querySelector('.evt-field-title');
    const dateInp = card.querySelector('.evt-field-date');
    const locInp = card.querySelector('.evt-field-location');

    if (titleInp) {
      titleInp.addEventListener('input', (e) => {
        activeQuotation.events[idx].title = e.target.value;
        activeQuotation.events[idx].name = e.target.value;
        renderProposalPreview();
      });
    }
    if (dateInp) {
      dateInp.addEventListener('input', (e) => {
        activeQuotation.events[idx].date = e.target.value;
        renderProposalPreview();
      });
    }
    if (locInp) {
      locInp.addEventListener('input', (e) => {
        activeQuotation.events[idx].location = e.target.value;
        renderProposalPreview();
      });
    }
  });

  // Delete event
  container.querySelectorAll('.btn-delete-quote-event').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
      if (activeQuotation.events.length <= 1) {
        alert('You must have at least 1 celebration event in the proposal.');
        return;
      }
      activeQuotation.events.splice(idx, 1);
      renderQuoteEventsForm();
      renderProposalPreview();
    });
  });

  // Crew Counters inc/dec
  container.querySelectorAll('.btn-crew-dec').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
      const field = e.currentTarget.getAttribute('data-field');
      if (activeQuotation.events[idx] && activeQuotation.events[idx][field] > 0) {
        activeQuotation.events[idx][field]--;
        renderQuoteEventsForm();
        renderProposalPreview();
      }
    });
  });

  container.querySelectorAll('.btn-crew-inc').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
      const field = e.currentTarget.getAttribute('data-field');
      if (activeQuotation.events[idx]) {
        activeQuotation.events[idx][field] = (activeQuotation.events[idx][field] || 0) + 1;
        renderQuoteEventsForm();
        renderProposalPreview();
      }
    });
  });
}

function renderQuoteTermsForm() {
  const container = document.getElementById('quote-terms-list');
  if (!container || !activeQuotation.t2?.terms) return;

  container.innerHTML = activeQuotation.t2.terms.map((term, idx) => `
    <div style="background: #FAF8F5; border: 1px solid var(--color-border-light); padding: 1.25rem; border-radius: 8px;" data-term-idx="${idx}">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
        <strong style="color: var(--color-heading); font-size: 0.92rem;">Clause #${idx + 1}: ${escapeHtml(term.title)}</strong>
        <button type="button" class="admin-btn-delete btn-delete-quote-term" data-idx="${idx}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Remove Clause
        </button>
      </div>
      <div class="admin-form-group" style="margin-bottom: 0.5rem;">
        <label class="admin-label">Clause Title</label>
        <input type="text" class="admin-input term-field-title" value="${escapeHtml(term.title)}">
      </div>
      <div class="admin-form-group">
        <label class="admin-label">Clause Description</label>
        <textarea class="admin-textarea term-field-desc" style="min-height: 55px;">${escapeHtml(term.desc)}</textarea>
      </div>
    </div>
  `).join('');

  // Wire up term input listeners
  container.querySelectorAll('[data-term-idx]').forEach(box => {
    const idx = parseInt(box.getAttribute('data-term-idx'), 10);
    const titleInp = box.querySelector('.term-field-title');
    const descInp = box.querySelector('.term-field-desc');

    if (titleInp) {
      titleInp.addEventListener('input', (e) => {
        activeQuotation.t2.terms[idx].title = e.target.value;
        renderProposalPreview();
      });
    }
    if (descInp) {
      descInp.addEventListener('input', (e) => {
        activeQuotation.t2.terms[idx].desc = e.target.value;
        renderProposalPreview();
      });
    }
  });

  // Delete term
  container.querySelectorAll('.btn-delete-quote-term').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
      activeQuotation.t2.terms.splice(idx, 1);
      renderQuoteTermsForm();
      renderProposalPreview();
    });
  });
}

function getYouTubeEmbedUrl(url, autoplay = true, mute = true) {
  if (!url) return null;
  const str = String(url).trim();
  const ytMatch = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i);
  if (ytMatch) {
    const ytId = ytMatch[1];
    const autoParam = autoplay ? '1' : '0';
    const muteParam = mute ? '1' : '0';
    return `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=${autoParam}&mute=${muteParam}&enablejsapi=1&playsinline=1&controls=1&loop=1&playlist=${ytId}&rel=0&modestbranding=1`;
  }
  return null;
}

function renderT2VideoPlayer(videoUrl, options = {}) {
  const url = (videoUrl || '').trim();
  if (!url) return '';

  const ytEmbed = getYouTubeEmbedUrl(url, true, true);
  let mediaInner = '';
  if (ytEmbed) {
    mediaInner = `
      <iframe
        id="t2-preview-featured-iframe"
        src="${ytEmbed}"
        title="Timemachine & Co. Featured Film"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  } else {
    mediaInner = `
      <video id="t2-preview-featured-video" src="${url}" autoplay muted loop playsinline controls style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>
    `;
  }

  const removeBtn = options.showRemove !== false ? `
    <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="video" title="Remove Video Section">✕</button>
  ` : '';

  return `
    <div class="t2-section-wrap t2-video-wrap" data-section="video" style="position: relative; margin: 1.75rem 0 2.25rem 0;">
      ${removeBtn}
      <div class="t2-banner-card" style="position: relative;">
        ${mediaInner}
      </div>
      <div class="t2-add-section-row">
        <button type="button" class="t2-add-section-btn" data-after-section="video" title="Add Section">+</button>
      </div>
    </div>
  `;
}

function bindVideoUnmuteControls(container) {
  if (!container) return;
  const videoWraps = container.querySelectorAll('.t2-video-wrap');
  videoWraps.forEach(wrap => {
    const overlay = wrap.querySelector('.t2-video-unmute-overlay');
    const toggleBtn = wrap.querySelector('.t2-sound-toggle-btn');
    const label = toggleBtn ? toggleBtn.querySelector('.t2-sound-state-label') : null;
    const iframe = wrap.querySelector('iframe');
    const video = wrap.querySelector('video');

    let isMuted = true;

    function unmuteVideo() {
      isMuted = false;
      if (overlay) {
        overlay.classList.add('unmuted');
      }
      if (label) label.textContent = '🔊 Sound On';

      // YouTube postMessage commands
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'unMute',
          args: []
        }), '*');
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'setVolume',
          args: [100]
        }), '*');
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: []
        }), '*');
      }

      // HTML5 video
      if (video) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
      }
    }

    function muteVideo() {
      isMuted = true;
      if (overlay) {
        overlay.classList.remove('unmuted');
      }
      if (label) label.textContent = '🔈 Muted';

      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'mute',
          args: []
        }), '*');
      }
      if (video) {
        video.muted = true;
      }
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        unmuteVideo();
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isMuted) {
          unmuteVideo();
        } else {
          muteVideo();
        }
      });
    }
  });
}

function bindGalleryPhotoEditControls(container) {
  if (!container) return;
  const items = container.querySelectorAll('.t2-gallery-item');
  items.forEach(item => {
    const idx = parseInt(item.getAttribute('data-gal-idx'), 10);
    const editBtn = item.querySelector('.t2-gallery-edit-btn');

    const triggerChange = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentUrl = activeQuotation.t2?.gallery?.[idx] || `./images/template2/gallery-${idx + 1}.jpg`;
      const newUrl = prompt(`Enter new image URL or path for Photo ${idx + 1}:`, currentUrl);
      if (newUrl !== null && newUrl.trim() !== '') {
        const trimmed = newUrl.trim();
        if (!activeQuotation.t2) activeQuotation.t2 = {};
        if (!activeQuotation.t2.gallery) activeQuotation.t2.gallery = [];
        activeQuotation.t2.gallery[idx] = trimmed;

        // Sync with left admin form input and thumbnail preview
        const gInput = document.getElementById(`quote-t2-gallery-${idx + 1}`);
        const gThumb = document.getElementById(`thumb-t2-gal-${idx + 1}`);
        if (gInput) gInput.value = trimmed;
        if (gThumb) gThumb.src = trimmed;

        renderProposalPreview();
        updateClientProposalLink();
        try {
          localStorage.setItem('studio_active_quotation', JSON.stringify(activeQuotation));
        } catch (err) {}
        showUndoToast(`Gallery Photo ${idx + 1} updated!`);
      }
    };

    if (editBtn) {
      editBtn.addEventListener('click', triggerChange);
    }
    item.addEventListener('click', (e) => {
      if (!e.target.closest('.t2-remove-btn') && !item.closest('.admin-client-view-active')) {
        triggerChange(e);
      }
    });
  });
}

function renderProposalPreview() {
  const previewContainer = document.getElementById('proposal-template-preview');
  if (!previewContainer) return;

  const wasClientView = previewContainer.classList.contains('admin-client-view-active');
  const total = getCalculatedTotalPrice();
  const totalPriceFormatted = total.toLocaleString('en-IN');
  const clientName = activeQuotation.clientName || 'Bhavya Alapati';

  if (activeQuotation.selectedTemplate === 'template2') {
    previewContainer.className = wasClientView ? 'proposal-paper-template2 admin-client-view-active' : 'proposal-paper-template2';
    const t2 = activeQuotation.t2;

    const starDividerSvg = `
      <div class="t2-star-divider">
        <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="12" x2="85" y2="12" stroke="#C5A059" stroke-width="1" stroke-dasharray="2 2" />
          <circle cx="95" cy="12" r="2.5" fill="#C5A059" />
          <path d="M110 5L112.5 10.5L118 12L112.5 13.5L110 19L107.5 13.5L102 12L107.5 10.5L110 5Z" fill="#C5A059" />
          <circle cx="125" cy="12" r="2.5" fill="#C5A059" />
          <line x1="135" y1="12" x2="220" y2="12" stroke="#C5A059" stroke-width="1" stroke-dasharray="2 2" />
        </svg>
      </div>
    `;

    previewContainer.innerHTML = `
      <!-- TOP HEADER BAR (Clean, no 25,000 text) -->
      <div class="t2-top-header">
        <span class="t2-top-header-title inpage-word-editable" contenteditable="true" data-field="t2.headerTitle" title="Click to edit header">Proposal</span>
        <div class="t2-top-header-logo">TM &amp; CO</div>
        <div class="t2-top-header-right">
          <span class="t2-top-header-tag inpage-word-editable" contenteditable="true" data-field="t2.headerTag" title="Click to edit header tag">Wedding Proposal</span>
        </div>
      </div>

      <!-- HERO COVER ARTWORK -->
      <div class="t2-hero-card" style="background-image: url('${t2.heroBg || './images/template2/hero-card-bg.jpg'}');">
        <div class="t2-hero-client-name inpage-word-editable" contenteditable="true" data-field="clientName" data-sync-input="quote-client-name" title="Click to edit client name like Word">${escapeHtml(clientName)}</div>
      </div>

      <!-- EDITORIAL CONTENT BODY -->
      <div class="t2-section-body">

        <!-- GREETING (Fixed to only 'Dear', deleted 'Bhavya Alapati') -->
        <div class="t2-greeting-title inpage-word-editable" contenteditable="true" data-field="t2.greetingTitle" data-sync-input="quote-t2-greeting-title" title="Click to edit greeting">${escapeHtml(t2.greetingTitle || 'Dear')}</div>
        <div class="t2-greeting-text inpage-word-editable" contenteditable="true" data-field="t2.welcomeText" data-sync-input="quote-t2-welcome-text" title="Click to edit welcome text">${escapeHtml(t2.welcomeText || '')}</div>

        <!-- FEATURED YOUTUBE / VIDEO (Between Greeting and About Us) -->
        ${!t2.hiddenSections?.video && (t2.videoUrl || t2.bannerUrl) ? renderT2VideoPlayer(t2.videoUrl || t2.bannerUrl, { showRemove: true }) : ''}

        ${starDividerSvg}

        <!-- ABOUT US -->
        ${!t2.hiddenSections?.about ? `
          <div class="t2-section-wrap" data-section="about">
            <div class="t2-section-header-row" style="margin: 2rem 0 1.25rem 0;">
              <div class="t2-section-title inpage-word-editable" contenteditable="true" data-field="t2.aboutTitle" data-sync-input="quote-t2-about-title" title="Click to edit title">${escapeHtml(t2.aboutTitle || 'About Us')}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="about" title="Remove About Us section">✕</button>
            </div>
            <div class="t2-about-text inpage-word-editable" contenteditable="true" data-field="t2.aboutDesc" data-sync-input="quote-t2-about-desc" title="Click to edit description">${escapeHtml(t2.aboutDesc || '')}</div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="about" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- PHOTO GALLERY (4 PHOTOS) -->
        ${!t2.hiddenSections?.gallery ? `
          <div class="t2-section-wrap" data-section="gallery">
            <div class="t2-section-header-row" style="margin: 1.5rem 0 0.75rem 0;">
              <div class="t2-section-title" style="font-size: 1.25rem; margin: 0;">Showcase Gallery</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="gallery" title="Remove Gallery section">✕</button>
            </div>
            <div class="t2-gallery-grid">
              <div class="t2-gallery-col">
                <div class="t2-gallery-item" data-gal-idx="0">
                  <img class="t2-gallery-img" src="${t2.gallery?.[0] || './images/template2/gallery-1.jpg'}" alt="Gallery Portrait 1">
                  <button type="button" class="t2-gallery-edit-btn" data-gal-idx="0" title="Change Photo 1">📷 Change Photo</button>
                </div>
                <div class="t2-gallery-item" data-gal-idx="1">
                  <img class="t2-gallery-img" src="${t2.gallery?.[1] || './images/template2/gallery-2.jpg'}" alt="Gallery Portrait 2">
                  <button type="button" class="t2-gallery-edit-btn" data-gal-idx="1" title="Change Photo 2">📷 Change Photo</button>
                </div>
              </div>
              <div class="t2-gallery-col">
                <div class="t2-gallery-item" data-gal-idx="2">
                  <img class="t2-gallery-img" src="${t2.gallery?.[2] || './images/template2/gallery-3.jpg'}" alt="Gallery Portrait 3">
                  <button type="button" class="t2-gallery-edit-btn" data-gal-idx="2" title="Change Photo 3">📷 Change Photo</button>
                </div>
                <div class="t2-gallery-item" data-gal-idx="3">
                  <img class="t2-gallery-img" src="${t2.gallery?.[3] || './images/template2/gallery-4.jpg'}" alt="Gallery Portrait 4">
                  <button type="button" class="t2-gallery-edit-btn" data-gal-idx="3" title="Change Photo 4">📷 Change Photo</button>
                </div>
              </div>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- YOUR EVENTS (INDIVIDUAL BOX CARDS) -->
        ${!t2.hiddenSections?.events ? `
          <div class="t2-section-wrap" data-section="events">
            <div class="t2-section-header-row" style="margin: 2.75rem 0 1.25rem 0;">
              <div class="t2-section-title" style="margin: 0;">Your Events</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="events" title="Remove entire Events section">✕</button>
            </div>
            <div class="t2-events-container">
              ${activeQuotation.events.map(ev => `
                <div class="t2-event-card" data-event-id="${ev.id}">
                  <button type="button" class="t2-remove-btn" data-remove-type="event" data-event-id="${ev.id}" title="Remove this event">✕</button>
                  <div class="t2-event-meta inpage-word-editable" contenteditable="true" data-event-id="${ev.id}" data-event-prop="meta" title="Click to edit date & location">${escapeHtml(ev.date || 'TBD Date')} | ${escapeHtml(ev.location || 'TBD Location')}</div>
                  <div class="t2-event-heading inpage-word-editable" contenteditable="true" data-event-id="${ev.id}" data-event-prop="title" title="Click to edit event title">${escapeHtml(ev.title || ev.name || 'Ceremony')}</div>
                  <div class="t2-crew-line inpage-word-editable" contenteditable="true" data-event-id="${ev.id}" data-event-prop="crewLine" title="Click to edit crew line">
                    • ${ev.candidPhoto ?? 1} Candid Photographer • ${ev.candidVideo ?? 1} Candid Videographer • ${ev.tradPhoto ?? 1} Traditional Photographer • ${ev.tradVideo ?? 1} Traditional Videographer
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="events" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- SERVICES OFFERED -->
        ${!t2.hiddenSections?.services ? `
          <div class="t2-section-wrap" data-section="services">
            <div class="t2-section-header-row" style="margin: 2.75rem 0 1.5rem 0;">
              <div class="t2-section-title" style="margin: 0;">Services Offered</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="services" title="Remove entire Services section">✕</button>
            </div>
            ${t2.services?.pictures?.included !== false ? `
              <div class="t2-service-card" data-svc="pictures">
                <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="pictures" title="Remove this service">✕</button>
                <div class="t2-service-card-title inpage-word-editable" contenteditable="true" data-svc="pictures" data-svc-prop="title" data-sync-input="quote-svc-pictures-title">${escapeHtml(t2.services.pictures.title || 'Edited Pictures')}</div>
                <div class="t2-service-card-desc inpage-word-editable" contenteditable="true" data-svc="pictures" data-svc-prop="desc" data-sync-input="quote-svc-pictures-desc">${escapeHtml(t2.services.pictures.desc || '')}</div>
              </div>
            ` : ''}
            ${t2.services?.films?.included !== false ? `
              <div class="t2-service-card" data-svc="films">
                <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="films" title="Remove this service">✕</button>
                <div class="t2-service-card-title inpage-word-editable" contenteditable="true" data-svc="films" data-svc-prop="title" data-sync-input="quote-svc-films-title">${escapeHtml(t2.services.films.title || 'Cinematic Wedding Films')}</div>
                <div class="t2-service-card-desc inpage-word-editable" contenteditable="true" data-svc="films" data-svc-prop="desc" data-sync-input="quote-svc-films-desc">${escapeHtml(t2.services.films.desc || '')}</div>
                ${t2.services.films.note ? `<div class="t2-service-card-note inpage-word-editable" contenteditable="true" data-svc="films" data-svc-prop="note" data-sync-input="quote-svc-films-note">${escapeHtml(t2.services.films.note)}</div>` : ''}
              </div>
            ` : ''}
            ${t2.services?.albums?.included !== false ? `
              <div class="t2-service-card" data-svc="albums">
                <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="albums" title="Remove this service">✕</button>
                <div class="t2-service-card-title inpage-word-editable" contenteditable="true" data-svc="albums" data-svc-prop="title" data-sync-input="quote-svc-albums-title">${escapeHtml(t2.services.albums.title || 'Printed Albums')}</div>
                <div class="t2-service-card-desc inpage-word-editable" contenteditable="true" data-svc="albums" data-svc-prop="desc" data-sync-input="quote-svc-albums-desc">${escapeHtml(t2.services.albums.desc || '')}</div>
              </div>
            ` : ''}
            ${t2.services?.videos?.included !== false ? `
              <div class="t2-service-card" data-svc="videos">
                <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="videos" title="Remove this service">✕</button>
                <div class="t2-service-card-title inpage-word-editable" contenteditable="true" data-svc="videos" data-svc-prop="title" data-sync-input="quote-svc-videos-title">${escapeHtml(t2.services.videos.title || 'Traditional Videos')}</div>
                <div class="t2-service-card-desc inpage-word-editable" contenteditable="true" data-svc="videos" data-svc-prop="desc" data-sync-input="quote-svc-videos-desc">${escapeHtml(t2.services.videos.desc || '')}</div>
              </div>
            ` : ''}
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="services" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- QUOTE CALLOUT BOX -->
        ${!t2.hiddenSections?.quote ? `
          <div class="t2-section-wrap" data-section="quote" style="background: #F7EFE0; border-radius: 14px; padding: 2.5rem 2rem; text-align: center; margin: 1.5rem 0; position: relative;">
            <button type="button" class="t2-remove-btn" data-remove-type="section" data-section="quote" title="Remove Quote Callout">✕</button>
            <div class="inpage-word-editable" contenteditable="true" data-field="t2.priceSection.greeting" data-sync-input="quote-t2-price-greeting" style="font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #1A1816; margin-bottom: 0.35rem;" title="Click to edit greeting">
              ${escapeHtml(t2.priceSection?.greeting || 'Dear')}
            </div>
            <div class="inpage-word-editable" contenteditable="true" data-field="t2.priceSection.subtitle" data-sync-input="quote-t2-price-subtitle" style="font-family: var(--font-paragraph); font-size: 1.05rem; color: #55524E; margin-bottom: 0.75rem;" title="Click to edit subtitle">
              ${escapeHtml(t2.priceSection?.subtitle || 'Your final quote price would be')}
            </div>
            <div id="t2-callout-price" class="inpage-word-editable" contenteditable="true" data-field="basePrice" data-sync-input="quote-total-price" style="font-family: 'Playfair Display', serif; font-size: 3.2rem; font-weight: 700; color: #1A1816; letter-spacing: -0.01em;" title="Click to edit base price directly">
              ₹ ${total > 0 ? totalPriceFormatted : '0'}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="quote" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- PAYMENT TIMELINE -->
        ${!t2.hiddenSections?.timeline ? `
          <div class="t2-section-wrap" data-section="timeline">
            <div class="t2-section-header-row" style="margin-bottom: 1.5rem;">
              <div class="t2-section-title" style="margin: 0;">Payment Timeline</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="timeline" title="Remove Payment Timeline section">✕</button>
            </div>
            ${!t2.hiddenSections?.advance ? `
              <div class="t2-term-card t2-term-card-beige">
                <button type="button" class="t2-remove-btn" data-remove-type="term-card" data-term-id="advance" title="Remove advance payment card">✕</button>
                <div class="t2-term-title inpage-word-editable" contenteditable="true" data-field="t2.priceSection.advanceTitle" data-sync-input="quote-t2-advance-title">${escapeHtml(t2.priceSection?.advanceTitle || 'Advance Payment')}</div>
                <div class="t2-term-desc inpage-word-editable" contenteditable="true" data-field="t2.priceSection.advanceText" data-sync-input="quote-t2-advance-text">${escapeHtml(t2.priceSection?.advanceText || '')}</div>
              </div>
            ` : ''}
            ${!t2.hiddenSections?.final ? `
              <div class="t2-term-card t2-term-card-cream" style="margin-top: 1rem;">
                <button type="button" class="t2-remove-btn" data-remove-type="term-card" data-term-id="final" title="Remove final payment card">✕</button>
                <div class="t2-term-title inpage-word-editable" contenteditable="true" data-field="t2.priceSection.finalTitle" data-sync-input="quote-t2-final-title">${escapeHtml(t2.priceSection?.finalTitle || 'Final Payment')}</div>
                <div class="t2-term-desc inpage-word-editable" contenteditable="true" data-field="t2.priceSection.finalText" data-sync-input="quote-t2-final-text">${escapeHtml(t2.priceSection?.finalText || '')}</div>
              </div>
            ` : ''}
            <div class="inpage-word-editable" contenteditable="true" data-field="t2.priceSection.hdNote" data-sync-input="quote-hd-note" style="font-size: 0.85rem; color: #55524E; margin-top: 1.25rem; font-style: italic; line-height: 1.6;">
              ${escapeHtml(t2.priceSection?.hdNote || '')}
            </div>
            <div class="inpage-word-editable" contenteditable="true" data-field="t2.priceSection.cancelNote" data-sync-input="quote-t2-cancel-note" style="font-size: 0.88rem; color: #8C6D37; margin-top: 0.6rem; font-weight: 600;">
              ${escapeHtml(t2.priceSection?.cancelNote || '')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="timeline" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- ADDITIONAL SERVICES -->
        ${!t2.hiddenSections?.addons ? `
          <div class="t2-section-wrap" data-section="addons">
            <div class="t2-section-header-row" style="margin-bottom: 0.4rem;">
              <div class="t2-section-title" style="margin: 0;">Additional Services</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="addons" title="Remove Additional Services section">✕</button>
            </div>
            <div class="t2-section-subtitle">${escapeHtml(t2.addonsSubtitle || '')}</div>
            <div class="t2-addons-grid" style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1.5rem;">
              ${(t2.addons || []).filter(add => !add.hidden).map(add => `
                <div class="t2-addon-card ${add.selected ? 'selected' : ''}" data-addon-id="${add.id}">
                  <button type="button" class="t2-remove-btn" data-remove-type="addon" data-addon-id="${add.id}" title="Remove this add-on">✕</button>
                  <div class="t2-addon-header">
                    <span class="t2-addon-title inpage-word-editable" contenteditable="true" data-addon-id="${add.id}" data-addon-prop="title">${escapeHtml(add.title)}</span>
                  </div>
                  <div class="t2-addon-desc inpage-word-editable" contenteditable="true" data-addon-id="${add.id}" data-addon-prop="desc">${escapeHtml(add.desc)}</div>
                  <div class="t2-addon-footer">
                    <span class="t2-addon-price inpage-word-editable" contenteditable="true" data-addon-id="${add.id}" data-addon-prop="price">₹ ${Number(add.price).toLocaleString('en-IN')}</span>
                    <button type="button" class="t2-addon-btn ${add.selected ? 'active' : ''}" data-addon-id="${add.id}">
                      ${add.selected ? 'Selected ✓' : 'Select'}
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="addons" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- TERMS OF SERVICE (11 CLAUSES) -->
        ${!t2.hiddenSections?.terms ? `
          <div class="t2-section-wrap" data-section="terms">
            <div class="t2-section-header-row" style="margin-bottom: 0.4rem;">
              <div class="t2-section-title" style="margin: 0;">Terms of Service</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="terms" title="Remove Terms of Service section">✕</button>
            </div>
            <div class="t2-section-subtitle">${escapeHtml(t2.termsSubtitle || '')}</div>
            <div style="margin-top: 1.5rem;">
              ${(t2.terms || []).map((term, tIdx) => `
                <div class="t2-term-card ${tIdx % 2 === 0 ? 't2-term-card-beige' : 't2-term-card-cream'}" data-term-idx="${tIdx}">
                  <button type="button" class="t2-remove-btn" data-remove-type="term" data-term-idx="${tIdx}" title="Remove this clause">✕</button>
                  <div class="t2-term-title inpage-word-editable" contenteditable="true" data-term-idx="${tIdx}" data-term-prop="title">${escapeHtml(term.title)}</div>
                  <div class="t2-term-desc inpage-word-editable" contenteditable="true" data-term-idx="${tIdx}" data-term-prop="desc">${escapeHtml(term.desc)}</div>
                </div>
              `).join('')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="terms" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        <!-- CUSTOM ADDED SECTIONS -->
        ${(activeQuotation.t2?.customSections || []).map((cSec) => `
          <div class="t2-section-wrap t2-custom-section" data-section="custom-${cSec.id}">
            <div class="t2-section-header-row" style="margin: 2rem 0 1.25rem 0;">
              <div class="t2-section-title inpage-word-editable" contenteditable="true" data-custom-id="${cSec.id}" data-custom-field="title">${escapeHtml(cSec.title || 'Special Highlights')}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="custom-section" data-custom-id="${cSec.id}" title="Remove Section">✕</button>
            </div>
            <div class="t2-about-text inpage-word-editable" contenteditable="true" data-custom-id="${cSec.id}" data-custom-field="desc" style="padding: 1.25rem; background: #FAF7F2; border-radius: 12px; border: 1px solid rgba(197, 160, 89, 0.35);">
              ${escapeHtml(cSec.desc || 'Write your section details here...')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="custom-${cSec.id}" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        `).join('')}

        <!-- NEXT STEPS -->
        ${!t2.hiddenSections?.nextsteps ? `
          <div class="t2-section-wrap" data-section="nextsteps">
            <div class="t2-section-header-row" style="margin-bottom: 1.25rem;">
              <div class="t2-nextsteps-title inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.title" data-sync-input="quote-t2-nextsteps-title" style="margin: 0;">${escapeHtml(t2.nextSteps?.title || 'Next Steps')}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="nextsteps" title="Remove Next Steps section">✕</button>
            </div>
            <div class="t2-nextsteps-desc inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.p1" data-sync-input="quote-t2-nextsteps-p1">${escapeHtml(t2.nextSteps?.p1 || '')}</div>
            <div class="t2-nextsteps-desc inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.p2" data-sync-input="quote-t2-nextsteps-p2">${escapeHtml(t2.nextSteps?.p2 || '')}</div>
            <div class="inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.signoff" data-sync-input="quote-t2-signoff" style="font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 700; color: #8C6D37; margin: 1.5rem 0 1.25rem 0;">
              ${escapeHtml(t2.nextSteps?.signoff || 'Best regards, Timemachine & Co.')}
            </div>
            <div class="t2-contact-icons">
              <a href="tel:${t2.nextSteps?.phone || '+919705632982'}" class="t2-contact-circle" title="Call Us" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: #1A1816;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="https://wa.me/${(t2.nextSteps?.whatsapp || '+919705632982').replace(/[^0-9]/g, '')}" target="_blank" class="t2-contact-circle" title="WhatsApp" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: #1A1816;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="nextsteps" title="Add Section">+</button>
            </div>
          </div>
          ${starDividerSvg}
        ` : ''}

        ${Object.keys(t2.hiddenSections || {}).filter(k => t2.hiddenSections[k]).length > 0 ? `
          <div style="background: rgba(197, 160, 89, 0.15); border: 1px dashed #C5A059; border-radius: 10px; padding: 0.9rem 1.25rem; margin: 1.5rem 0; display: flex; align-items: center; justify-content: space-between; font-size: 0.88rem; color: #8C6D37;">
            <span>${Object.keys(t2.hiddenSections).filter(k => t2.hiddenSections[k]).length} section(s) currently hidden</span>
            <button type="button" id="t2-restore-all-sections-btn" style="background: #1A1816; color: #FAF7F2; border: none; border-radius: 999px; padding: 0.4rem 1rem; font-size: 0.8rem; font-weight: 600; cursor: pointer;">Restore All Sections</button>
          </div>
        ` : ''}

        ${starDividerSvg}

        <!-- FOOTER BRANDING -->
        <div style="text-align: center; padding: 2rem 0 1rem 0;">
          <div style="display: inline-block; border: 1.5px solid #C5A059; padding: 0.35rem 0.9rem; font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.18em; color: #C5A059; font-weight: 700; margin-bottom: 1.25rem;">
            TM &amp; CO
          </div>
          <div>
            <a href="${t2.nextSteps?.website || 'https://www.timemachineworks.com'}" target="_blank" class="inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.website" data-sync-input="quote-t2-website" style="font-family: var(--font-paragraph); font-size: 0.95rem; color: #1A1816; font-weight: 600; text-decoration: none;">
              ${(t2.nextSteps?.website || 'https://www.timemachineworks.com').replace(/^https?:\/\//, '')}
            </a>
          </div>
          <div class="inpage-word-editable" contenteditable="true" data-field="t2.nextSteps.phone" data-sync-input="quote-t2-phone" style="font-size: 0.85rem; color: #55524E; margin: 0.4rem 0 1.25rem 0;">
            ${escapeHtml(t2.nextSteps?.phone || '+91 97056 32982')}
          </div>
          <div style="display: flex; justify-content: center; gap: 1.25rem; align-items: center;">
            <a href="${t2.nextSteps?.instagram || 'https://instagram.com/TimemachineandCo'}" target="_blank" style="color: #1A1816; text-decoration: none;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="${t2.nextSteps?.facebook || 'https://facebook.com'}" target="_blank" style="color: #1A1816; text-decoration: none;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="${t2.nextSteps?.pinterest || 'https://pinterest.com'}" target="_blank" style="color: #1A1816; text-decoration: none;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12c.5 1.5 1.5 2 2 2s1.5-.5 2-2c.5-1.5 0-3-1-3s-2.5 1-3 3z"></path></svg>
            </a>
          </div>
          <div style="margin-top: 1.5rem; font-size: 0.75rem; color: #8C867D; letter-spacing: 0.05em;">
            © 2026 Timemachine &amp; Co. All Rights Reserved.
          </div>
        </div>

      </div>
    `;

    // Attach click listeners to Add-On Select buttons
    previewContainer.querySelectorAll('.t2-addon-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const addonId = e.currentTarget.getAttribute('data-addon-id');
        const addon = activeQuotation.t2.addons.find(a => a.id === addonId);
        if (addon) {
          addon.selected = !addon.selected;

          // Sync checkbox in Card 7
          const chkMap = {
            'led': 'addon-led-check',
            'weblive': 'addon-weblive-check',
            'drone': 'addon-drone-check',
            'albums': 'addon-albums-check'
          };
          const formChk = document.getElementById(chkMap[addonId]);
          if (formChk) formChk.checked = addon.selected;

          // Re-render preview to update totals and button states
          renderProposalPreview();
          updateClientProposalLink();
        }
      });
    });

    // Initialize Word-style In-Page Live Editing on all elements
    initInPageWordEditing(previewContainer);

    // Bind X remove buttons across all cards and sections
    bindProposalRemoveButtons(previewContainer);

    // Bind Video Unmute controls
    bindVideoUnmuteControls(previewContainer);

    // Bind Gallery Photo Edit controls
    bindGalleryPhotoEditControls(previewContainer);

    const restoreBtn = previewContainer.querySelector('#t2-restore-all-sections-btn');
    if (restoreBtn) {
      restoreBtn.addEventListener('click', () => {
        activeQuotation.t2.hiddenSections = {};
        (activeQuotation.t2.addons || []).forEach(a => a.hidden = false);
        renderProposalPreview();
        showUndoToast('All hidden sections restored');
      });
    }

    // Bind Add Section buttons (+)
    bindAdminAddSectionControls(previewContainer);

    if (wasClientView) {
      previewContainer.querySelectorAll('.inpage-word-editable').forEach(el => el.setAttribute('contenteditable', 'false'));
    }

  } else {
    // Template 1: Fine Art Warm Cream
    previewContainer.className = 'proposal-paper';
    previewContainer.innerHTML = `
      <div style="text-align: center; margin-bottom: 2rem;">
        <span class="proposal-header-logo-badge">Timemachine &amp; Co</span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #1A1816; margin: 0.75rem 0 0.25rem 0;">Fine Art Wedding Proposal</h2>
        <p style="font-size: 0.95rem; color: var(--color-body-muted); margin: 0;">Prepared with care for <strong style="color: #1A1816;">${escapeHtml(clientName)}</strong></p>
      </div>

      <div class="proposal-divider-star">✦ ✦ ✦</div>

      <div class="proposal-section-page">
        <h3 style="font-family: var(--font-heading); font-size: 1.45rem; color: #1A1816; margin-bottom: 1.25rem;">Celebration Schedule</h3>
        <div class="proposal-card-grid">
          ${activeQuotation.events.map(ev => `
            <div class="proposal-event-card">
              <h4 class="proposal-event-title">${escapeHtml(ev.title || ev.name || 'Ceremony')}</h4>
              <div class="proposal-event-meta">${escapeHtml(ev.date || 'TBD')} • ${escapeHtml(ev.location || 'Location TBD')}</div>
              <div style="font-size: 0.8rem; color: var(--color-body); line-height: 1.5;">
                • ${ev.candidPhoto ?? 1} Candid Photo<br>
                • ${ev.candidVideo ?? 1} Candid Video<br>
                • ${ev.tradPhoto ?? 1} Trad Photo<br>
                • ${ev.tradVideo ?? 1} Trad Video
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="proposal-price-box">
        <div style="font-size: 0.82rem; font-family: var(--font-ui); letter-spacing: 0.15em; text-transform: uppercase; color: #C5A059; font-weight: 700;">Total Investment</div>
        <div class="proposal-price-val">₹ ${totalPriceFormatted}</div>
        <div style="font-size: 0.85rem; color: var(--color-body-muted);">Inclusive of all celebration coverage, editing, color grading &amp; deliverables</div>
      </div>
    `;
  }

  updateClientProposalLink();
}

function bindQuotationEvents() {
  // Template Select
  const tplSelect = document.getElementById('quote-template-select');
  if (tplSelect) {
    tplSelect.addEventListener('change', (e) => {
      activeQuotation.selectedTemplate = e.target.value;
      renderProposalPreview();
    });
  }

  // Client Info
  const cName = document.getElementById('quote-client-name');
  const cCouple = document.getElementById('quote-couple-names');
  const cPhone = document.getElementById('quote-client-phone');
  const cEmail = document.getElementById('quote-client-email');
  const cPrice = document.getElementById('quote-total-price');

  if (cName) {
    cName.addEventListener('input', (e) => {
      activeQuotation.clientName = e.target.value;
      // Note: Greeting is fixed to 'Dear', do not auto-append client name!
      const heroClient = document.querySelector('.t2-hero-client-name');
      if (heroClient) heroClient.innerText = e.target.value;
      updateClientProposalLink();
    });
  }

  if (cCouple) {
    cCouple.addEventListener('input', (e) => {
      activeQuotation.coupleNames = e.target.value;
    });
  }

  if (cPhone) {
    cPhone.addEventListener('input', (e) => {
      activeQuotation.clientPhone = e.target.value;
      activeQuotation.phone = e.target.value;
    });
  }

  if (cEmail) {
    cEmail.addEventListener('input', (e) => {
      activeQuotation.clientEmail = e.target.value;
      activeQuotation.email = e.target.value;
    });
  }

  if (cPrice) {
    cPrice.addEventListener('input', (e) => {
      activeQuotation.basePrice = e.target.value;
      renderProposalPreview();
    });
  }

  // Card 1: Hero & Greeting
  const hSubtitle = document.getElementById('quote-t2-hero-subtitle');
  const gTitle = document.getElementById('quote-t2-greeting-title');
  const wText = document.getElementById('quote-t2-welcome-text');
  const hBg = document.getElementById('quote-t2-hero-bg');

  if (hSubtitle) {
    hSubtitle.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.heroSubtitle = e.target.value;
      renderProposalPreview();
    });
  }
  if (gTitle) {
    gTitle.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.greetingTitle = e.target.value;
      renderProposalPreview();
    });
  }
  if (wText) {
    wText.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.welcomeText = e.target.value;
      renderProposalPreview();
    });
  }
  if (hBg) {
    hBg.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.heroBg = e.target.value;
      renderProposalPreview();
    });
  }

  // Card 2: Add Event
  const btnAddEvt = document.getElementById('btn-add-quote-event');
  if (btnAddEvt) {
    btnAddEvt.addEventListener('click', () => {
      activeQuotation.events.push({
        id: 'evt-' + Date.now(),
        date: '28 Feb 2027',
        location: 'Hyderabad',
        title: 'New Ceremony',
        candidPhoto: 1,
        candidVideo: 1,
        tradPhoto: 1,
        tradVideo: 1
      });
      renderQuoteEventsForm();
      renderProposalPreview();
      showToast('New event ceremony added to schedule!');
    });
  }

  // Card 3: About Us & Video Link
  const abTitle = document.getElementById('quote-t2-about-title');
  const abDesc = document.getElementById('quote-t2-about-desc');
  const abBanner = document.getElementById('quote-t2-banner-url');
  const quoteVid = document.getElementById('quote-t2-video-url');
  const quoteVidBtn = document.getElementById('btn-open-video-link');

  if (quoteVid) {
    quoteVid.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (activeQuotation.t2) {
        activeQuotation.t2.videoUrl = val;
        activeQuotation.t2.bannerUrl = val;
        if (activeQuotation.t2.hiddenSections) {
          delete activeQuotation.t2.hiddenSections.video;
        }
      }
      if (abBanner && abBanner.value !== val) abBanner.value = val;
      if (quoteVidBtn) quoteVidBtn.href = val || '#';
      renderProposalPreview();
      updateClientProposalLink();
      saveQuotationDraft();
    });
  }

  if (abTitle) {
    abTitle.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.aboutTitle = e.target.value;
      renderProposalPreview();
    });
  }
  if (abDesc) {
    abDesc.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.aboutDesc = e.target.value;
      renderProposalPreview();
    });
  }
  if (abBanner) {
    abBanner.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (activeQuotation.t2) {
        activeQuotation.t2.bannerUrl = val;
        activeQuotation.t2.videoUrl = val;
        if (activeQuotation.t2.hiddenSections) {
          delete activeQuotation.t2.hiddenSections.video;
        }
      }
      if (quoteVid && quoteVid.value !== val) quoteVid.value = val;
      if (quoteVidBtn) quoteVidBtn.href = val || '#';
      renderProposalPreview();
      updateClientProposalLink();
      saveQuotationDraft();
    });
  }

  // Card 4: Gallery (4 Photos)
  for (let i = 1; i <= 4; i++) {
    const gInput = document.getElementById(`quote-t2-gallery-${i}`);
    const gThumb = document.getElementById(`thumb-t2-gal-${i}`);
    if (gInput) {
      gInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (activeQuotation.t2) {
          if (!activeQuotation.t2.gallery) activeQuotation.t2.gallery = [];
          activeQuotation.t2.gallery[i - 1] = val;
        }
        if (gThumb && val) gThumb.src = val;
        renderProposalPreview();
      });
    }
  }

  // Card 5: Services Offered
  const chkPic = document.getElementById('svc-pictures-check');
  const tPic = document.getElementById('quote-svc-pictures-title');
  const dPic = document.getElementById('quote-svc-pictures-desc');
  if (chkPic) {
    chkPic.addEventListener('change', (e) => {
      if (activeQuotation.t2?.services?.pictures) activeQuotation.t2.services.pictures.included = e.target.checked;
      renderProposalPreview();
    });
  }
  if (tPic) {
    tPic.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.pictures) activeQuotation.t2.services.pictures.title = e.target.value;
      renderProposalPreview();
    });
  }
  if (dPic) {
    dPic.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.pictures) activeQuotation.t2.services.pictures.desc = e.target.value;
      renderProposalPreview();
    });
  }

  const chkFilm = document.getElementById('svc-films-check');
  const tFilm = document.getElementById('quote-svc-films-title');
  const dFilm = document.getElementById('quote-svc-films-desc');
  const nFilm = document.getElementById('quote-svc-films-note');
  if (chkFilm) {
    chkFilm.addEventListener('change', (e) => {
      if (activeQuotation.t2?.services?.films) activeQuotation.t2.services.films.included = e.target.checked;
      renderProposalPreview();
    });
  }
  if (tFilm) {
    tFilm.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.films) activeQuotation.t2.services.films.title = e.target.value;
      renderProposalPreview();
    });
  }
  if (dFilm) {
    dFilm.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.films) activeQuotation.t2.services.films.desc = e.target.value;
      renderProposalPreview();
    });
  }
  if (nFilm) {
    nFilm.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.films) activeQuotation.t2.services.films.note = e.target.value;
      renderProposalPreview();
    });
  }

  const chkAlb = document.getElementById('svc-albums-check');
  const tAlb = document.getElementById('quote-svc-albums-title');
  const dAlb = document.getElementById('quote-svc-albums-desc');
  if (chkAlb) {
    chkAlb.addEventListener('change', (e) => {
      if (activeQuotation.t2?.services?.albums) activeQuotation.t2.services.albums.included = e.target.checked;
      renderProposalPreview();
    });
  }
  if (tAlb) {
    tAlb.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.albums) activeQuotation.t2.services.albums.title = e.target.value;
      renderProposalPreview();
    });
  }
  if (dAlb) {
    dAlb.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.albums) activeQuotation.t2.services.albums.desc = e.target.value;
      renderProposalPreview();
    });
  }

  const chkVid = document.getElementById('svc-videos-check');
  const tVid = document.getElementById('quote-svc-videos-title');
  const dVid = document.getElementById('quote-svc-videos-desc');
  if (chkVid) {
    chkVid.addEventListener('change', (e) => {
      if (activeQuotation.t2?.services?.videos) activeQuotation.t2.services.videos.included = e.target.checked;
      renderProposalPreview();
    });
  }
  if (tVid) {
    tVid.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.videos) activeQuotation.t2.services.videos.title = e.target.value;
      renderProposalPreview();
    });
  }
  if (dVid) {
    dVid.addEventListener('input', (e) => {
      if (activeQuotation.t2?.services?.videos) activeQuotation.t2.services.videos.desc = e.target.value;
      renderProposalPreview();
    });
  }

  // Card 6: Price Section
  const pgGreet = document.getElementById('quote-t2-price-greeting');
  const pgSub = document.getElementById('quote-t2-price-subtitle');
  const advTitle = document.getElementById('quote-t2-advance-title');
  const advText = document.getElementById('quote-t2-advance-text');
  const finTitle = document.getElementById('quote-t2-final-title');
  const finText = document.getElementById('quote-t2-final-text');
  const hdNote = document.getElementById('quote-hd-note');
  const cnlNote = document.getElementById('quote-t2-cancel-note');

  if (pgGreet) pgGreet.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.greeting = e.target.value; renderProposalPreview(); });
  if (pgSub) pgSub.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.subtitle = e.target.value; renderProposalPreview(); });
  if (advTitle) advTitle.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.advanceTitle = e.target.value; renderProposalPreview(); });
  if (advText) advText.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.advanceText = e.target.value; renderProposalPreview(); });
  if (finTitle) finTitle.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.finalTitle = e.target.value; renderProposalPreview(); });
  if (finText) finText.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.finalText = e.target.value; renderProposalPreview(); });
  if (hdNote) hdNote.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.hdNote = e.target.value; renderProposalPreview(); });
  if (cnlNote) cnlNote.addEventListener('input', (e) => { if (activeQuotation.t2?.priceSection) activeQuotation.t2.priceSection.cancelNote = e.target.value; renderProposalPreview(); });

  // Card 7: Add-Ons
  const addSub = document.getElementById('quote-t2-addons-subtitle');
  if (addSub) addSub.addEventListener('input', (e) => { if (activeQuotation.t2) activeQuotation.t2.addonsSubtitle = e.target.value; renderProposalPreview(); });

  const setupAddonBinding = (id, chkId, tId, pId, dId) => {
    const chk = document.getElementById(chkId);
    const t = document.getElementById(tId);
    const p = document.getElementById(pId);
    const d = document.getElementById(dId);
    const addon = activeQuotation.t2?.addons?.find(a => a.id === id);
    if (!addon) return;

    if (chk) {
      chk.addEventListener('change', (e) => {
        addon.selected = e.target.checked;
        renderProposalPreview();
      });
    }
    if (t) {
      t.addEventListener('input', (e) => {
        addon.title = e.target.value;
        renderProposalPreview();
      });
    }
    if (p) {
      p.addEventListener('input', (e) => {
        addon.price = parseInt(e.target.value, 10) || 0;
        renderProposalPreview();
      });
    }
    if (d) {
      d.addEventListener('input', (e) => {
        addon.desc = e.target.value;
        renderProposalPreview();
      });
    }
  };

  setupAddonBinding('led', 'addon-led-check', 'quote-addon-led-title', 'quote-addon-led-price', 'quote-addon-led-desc');
  setupAddonBinding('weblive', 'addon-weblive-check', 'quote-addon-weblive-title', 'quote-addon-weblive-price', 'quote-addon-weblive-desc');
  setupAddonBinding('drone', 'addon-drone-check', 'quote-addon-drone-title', 'quote-addon-drone-price', 'quote-addon-drone-desc');
  setupAddonBinding('albums', 'addon-albums-check', 'quote-addon-albums-title', 'quote-addon-albums-price', 'quote-addon-albums-desc');

  // Card 8: Terms Subtitle & Add Term
  const tSub = document.getElementById('quote-t2-terms-subtitle');
  if (tSub) {
    tSub.addEventListener('input', (e) => {
      if (activeQuotation.t2) activeQuotation.t2.termsSubtitle = e.target.value;
      renderProposalPreview();
    });
  }

  const btnAddTerm = document.getElementById('btn-add-quote-term');
  if (btnAddTerm) {
    btnAddTerm.addEventListener('click', () => {
      if (!activeQuotation.t2) return;
      if (!activeQuotation.t2.terms) activeQuotation.t2.terms = [];
      activeQuotation.t2.terms.push({
        title: 'New Custom Term',
        desc: 'Specify your customized client clause, delivery constraint, or operational condition here.'
      });
      renderQuoteTermsForm();
      renderProposalPreview();
      showToast('Custom terms clause added!');
    });
  }

  // Card 9: Next Steps & Contact
  const nsTitle = document.getElementById('quote-t2-nextsteps-title');
  const nsP1 = document.getElementById('quote-t2-nextsteps-p1');
  const nsP2 = document.getElementById('quote-t2-nextsteps-p2');
  const nsSign = document.getElementById('quote-t2-nextsteps-signoff');
  const nsPhone = document.getElementById('quote-t2-phone');
  const nsWa = document.getElementById('quote-t2-whatsapp');
  const nsWeb = document.getElementById('quote-t2-website');
  const nsInsta = document.getElementById('quote-t2-instagram');
  const nsFb = document.getElementById('quote-t2-facebook');
  const nsPin = document.getElementById('quote-t2-pinterest');

  if (nsTitle) nsTitle.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.title = e.target.value; renderProposalPreview(); });
  if (nsP1) nsP1.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.p1 = e.target.value; renderProposalPreview(); });
  if (nsP2) nsP2.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.p2 = e.target.value; renderProposalPreview(); });
  if (nsSign) nsSign.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.signoff = e.target.value; renderProposalPreview(); });
  if (nsPhone) nsPhone.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.phone = e.target.value; renderProposalPreview(); });
  if (nsWa) nsWa.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.whatsapp = e.target.value; renderProposalPreview(); });
  if (nsWeb) nsWeb.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.website = e.target.value; renderProposalPreview(); });
  if (nsInsta) nsInsta.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.instagram = e.target.value; renderProposalPreview(); });
  if (nsFb) nsFb.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.facebook = e.target.value; renderProposalPreview(); });
  if (nsPin) nsPin.addEventListener('input', (e) => { if (activeQuotation.t2?.nextSteps) activeQuotation.t2.nextSteps.pinterest = e.target.value; renderProposalPreview(); });

  // Toolbar Actions: Save Draft
  const btnSaveDraft = document.getElementById('btn-save-quote-draft');
  if (btnSaveDraft) {
    btnSaveDraft.addEventListener('click', () => {
      try {
        localStorage.setItem('studio_active_quotation', JSON.stringify(activeQuotation));
        showToast('Quotation draft saved to browser storage!');
      } catch (e) {
        showToast('Draft saved!');
      }
    });
  }

  // Toolbar Actions: Copy Text
  const btnCopyText = document.getElementById('btn-copy-quote-text');
  if (btnCopyText) {
    btnCopyText.addEventListener('click', () => {
      const total = getCalculatedTotalPrice();
      const text = [
        `*TIMEMACHINE & CO — LUXURY WEDDING PROPOSAL*`,
        `Client: ${activeQuotation.clientName}`,
        `Couple: ${activeQuotation.coupleNames}`,
        ``,
        `*Events Schedule:*`,
        ...activeQuotation.events.map(ev => `• ${ev.date} (${ev.location}): ${ev.title || ev.name}`),
        ``,
        `*Total Investment:* ₹ ${total.toLocaleString('en-IN')}`,
        ``,
        `Interactive Web Proposal: ${window.location.origin}/proposal.html?template=${activeQuotation.selectedTemplate}&client=${encodeURIComponent(activeQuotation.clientName)}&price=${encodeURIComponent(total.toLocaleString('en-IN'))}`,
        ``,
        `Best regards,`,
        `Timemachine & Co.`
      ].join('\n');

      navigator.clipboard.writeText(text);
      showToast('Quotation summary copied to clipboard!');
    });
  }

  // Toolbar Actions: Send WhatsApp
  const btnSendWa = document.getElementById('btn-send-whatsapp');
  if (btnSendWa) {
    btnSendWa.addEventListener('click', () => {
      const total = getCalculatedTotalPrice();
      const phoneClean = (activeQuotation.clientPhone || activeQuotation.phone || '').replace(/[^0-9]/g, '');
      const clientUrl = `${window.location.origin}/proposal.html?template=${activeQuotation.selectedTemplate}&client=${encodeURIComponent(activeQuotation.clientName)}&price=${encodeURIComponent(total.toLocaleString('en-IN'))}`;

      const msg = encodeURIComponent(
        `Hello ${activeQuotation.clientName},\n\nIt was a pleasure speaking with you! We have prepared your personalized luxury wedding proposal with Timemachine & Co:\n\nTotal Investment: ₹ ${total.toLocaleString('en-IN')}\n\nYou can review your interactive proposal, deliverables, and package options here:\n${clientUrl}\n\nPlease let us know if you have any questions!\n\nWarm regards,\nTimemachine & Co.`
      );

      const waUrl = phoneClean ? `https://wa.me/${phoneClean}?text=${msg}` : `https://wa.me/?text=${msg}`;
      window.open(waUrl, '_blank');
    });
  }

  // Toolbar Actions: Print / PDF
  const btnPrintPdf = document.getElementById('btn-print-proposal');
  if (btnPrintPdf) {
    btnPrintPdf.addEventListener('click', () => {
      const element = document.getElementById('proposal-template-preview');
      if (!element) return;

      const opt = {
        margin: [5, 5, 5, 5],
        filename: `Timemachine-Proposal-${(activeQuotation.clientName || 'Client').replace(/\s+/g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      if (window.html2pdf) {
        showToast('Generating high-resolution PDF proposal...');
        window.html2pdf().set(opt).from(element).save().then(() => {
          showToast('PDF downloaded successfully!');
        }).catch(err => {
          console.warn('html2pdf fallback to print:', err);
          window.print();
        });
      } else {
        window.print();
      }
    });
  }

  // Toolbar Actions: Copy Clean Client Link (Edit & admin controls hidden for client)
  const btnCopyProposalUrl = document.getElementById('btn-copy-proposal-url');
  if (btnCopyProposalUrl) {
    btnCopyProposalUrl.addEventListener('click', () => {
      const total = getCalculatedTotalPrice();
      const vidParam = encodeURIComponent(activeQuotation.t2?.videoUrl || activeQuotation.t2?.bannerUrl || 'https://youtu.be/OctoMQEqK9E');
      const clientUrl = `${window.location.origin}/proposal.html?template=${encodeURIComponent(activeQuotation.selectedTemplate || 'template2')}&client=${encodeURIComponent(activeQuotation.clientName || 'Client')}&price=${encodeURIComponent(total.toLocaleString('en-IN'))}&video=${vidParam}`;
      navigator.clipboard.writeText(clientUrl).then(() => {
        showToast('Clean client proposal link copied! (All editing options hidden for client)');
      }).catch(() => {
        prompt('Copy this client proposal link:', clientUrl);
      });
    });
  }

  // Toolbar Actions: Preview Client View Toggle (hides X, +, select, and disables editing)
  const btnToggleClientView = document.getElementById('btn-toggle-client-view');
  const previewPaper = document.getElementById('proposal-template-preview');
  if (btnToggleClientView && previewPaper) {
    btnToggleClientView.addEventListener('click', () => {
      previewPaper.classList.toggle('admin-client-view-active');
      const isActive = previewPaper.classList.contains('admin-client-view-active');
      previewPaper.querySelectorAll('.inpage-word-editable').forEach(el => {
        el.setAttribute('contenteditable', isActive ? 'false' : 'true');
      });
      const toggleText = document.getElementById('client-view-toggle-text');
      if (toggleText) {
        toggleText.textContent = isActive ? '✏️ Return to Admin Edit View' : '👁️ Preview Client View';
      }
      showToast(isActive ? 'Client View active: editing controls hidden' : 'Admin Edit View active: editing controls visible');
    });
  }
}

function initInPageWordEditing(container) {
  if (!container || container._wordEditInit) return;
  container._wordEditInit = true;

  // Real-time two-way synchronization from in-page typing to left-side form & state
  container.addEventListener('input', (e) => {
    const el = e.target.closest('.inpage-word-editable');
    if (!el) return;

    const rawVal = el.innerText;
    const textVal = rawVal.trim();

    // 1. Sync activeQuotation state field
    const fieldPath = el.getAttribute('data-field');
    if (fieldPath) {
      if (fieldPath === 'clientName') {
        activeQuotation.clientName = rawVal;
      } else if (fieldPath === 'basePrice') {
        const num = parseInt(textVal.replace(/[^0-9]/g, ''), 10);
        activeQuotation.basePrice = isNaN(num) ? 0 : num;
      } else if (fieldPath.startsWith('t2.')) {
        const parts = fieldPath.split('.');
        let obj = activeQuotation;
        for (let i = 0; i < parts.length - 1; i++) {
          if (!obj[parts[i]]) obj[parts[i]] = {};
          obj = obj[parts[i]];
        }
        obj[parts[parts.length - 1]] = rawVal;
      }
    }

    // 2. Sync to matching left-side form input
    const syncInputId = el.getAttribute('data-sync-input');
    if (syncInputId) {
      const leftInp = document.getElementById(syncInputId);
      if (leftInp && leftInp.value !== rawVal) {
        if (fieldPath === 'basePrice') {
          leftInp.value = typeof activeQuotation.basePrice === 'number' && activeQuotation.basePrice > 0 ? activeQuotation.basePrice.toLocaleString('en-IN') : textVal;
        } else {
          leftInp.value = rawVal;
        }
      }
    }

    // 3. Events synchronization
    const eventId = el.getAttribute('data-event-id');
    const eventProp = el.getAttribute('data-event-prop');
    if (eventId && eventProp && activeQuotation.events) {
      const ev = activeQuotation.events.find(item => item.id === eventId);
      if (ev) {
        if (eventProp === 'title') ev.title = rawVal;
        else if (eventProp === 'meta') {
          const parts = rawVal.split('|').map(s => s.trim());
          if (parts[0]) ev.date = parts[0];
          if (parts[1]) ev.location = parts[1];
        }
      }
    }

    // 4. Services synchronization
    const svcKey = el.getAttribute('data-svc');
    const svcProp = el.getAttribute('data-svc-prop');
    if (svcKey && svcProp && activeQuotation.t2?.services?.[svcKey]) {
      activeQuotation.t2.services[svcKey][svcProp] = rawVal;
    }

    // 5. Add-ons synchronization
    const addonId = el.getAttribute('data-addon-id');
    const addonProp = el.getAttribute('data-addon-prop');
    if (addonId && addonProp && activeQuotation.t2?.addons) {
      const add = activeQuotation.t2.addons.find(a => a.id === addonId);
      if (add) {
        if (addonProp === 'price') {
          const p = parseInt(textVal.replace(/[^0-9]/g, ''), 10);
          if (!isNaN(p)) add.price = p;
        } else {
          add[addonProp] = rawVal;
        }
      }
    }

    // 6. Terms synchronization
    const termIdx = el.getAttribute('data-term-idx');
    const termProp = el.getAttribute('data-term-prop');
    if (termIdx !== null && termProp && activeQuotation.t2?.terms) {
      const idx = parseInt(termIdx, 10);
      if (activeQuotation.t2.terms[idx]) {
        activeQuotation.t2.terms[idx][termProp] = rawVal;
        const leftTermBox = document.querySelector(`[data-term-idx="${idx}"]`);
        if (leftTermBox) {
          const targetInp = leftTermBox.querySelector(termProp === 'title' ? '.term-field-title' : '.term-field-desc');
          if (targetInp) targetInp.value = rawVal;
        }
      }
    }

    // Auto-save changes to localStorage
    try {
      localStorage.setItem('studio_active_quotation', JSON.stringify(activeQuotation));
    } catch (err) {}

    updateClientProposalLink();
  });

  // Focusout listener to recalculate price display when numbers change
  container.addEventListener('focusout', (e) => {
    const el = e.target.closest('.inpage-word-editable');
    if (!el) return;
    const fieldPath = el.getAttribute('data-field');
    if (fieldPath === 'basePrice' || el.getAttribute('data-addon-prop') === 'price') {
      const total = getCalculatedTotalPrice();
      const calloutEl = document.getElementById('t2-callout-price');
      if (calloutEl && !calloutEl.matches(':focus')) {
        calloutEl.innerText = `₹ ${total > 0 ? total.toLocaleString('en-IN') : '0'}`;
      }
      updateClientProposalLink();
    }
  });
}

function showUndoToast(message, onUndo) {
  const existing = document.getElementById('t2-undo-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 't2-undo-toast';
  toast.className = 't2-undo-toast';
  toast.innerHTML = `
    <span>${message}</span>
    ${onUndo ? '<button type="button" id="t2-undo-btn">Undo</button>' : ''}
  `;
  document.body.appendChild(toast);

  const undoBtn = toast.querySelector('#t2-undo-btn');
  if (undoBtn && onUndo) {
    undoBtn.addEventListener('click', () => {
      onUndo();
      toast.remove();
    });
  }

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 6000);
}


function bindProposalRemoveButtons(container) {
  if (!container) return;
  container.querySelectorAll('.t2-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const removeType = btn.getAttribute('data-remove-type');

      if (removeType === 'event') {
        const eventId = btn.getAttribute('data-event-id');
        const evIdx = activeQuotation.events.findIndex(x => x.id === eventId);
        if (evIdx !== -1) {
          const removed = activeQuotation.events.splice(evIdx, 1)[0];
          renderQuoteEventsForm();
          renderProposalPreview();
          updateClientProposalLink();
          showUndoToast(`Removed "${removed.title || removed.name || 'Event'}"`, () => {
            activeQuotation.events.splice(evIdx, 0, removed);
            renderQuoteEventsForm();
            renderProposalPreview();
            updateClientProposalLink();
          });
        }
      } else if (removeType === 'service') {
        const svcKey = btn.getAttribute('data-svc');
        if (activeQuotation.t2?.services?.[svcKey]) {
          activeQuotation.t2.services[svcKey].included = false;
          renderProposalPreview();
          showUndoToast(`Removed service "${activeQuotation.t2.services[svcKey].title || svcKey}"`, () => {
            activeQuotation.t2.services[svcKey].included = true;
            renderProposalPreview();
          });
        }
      } else if (removeType === 'addon') {
        const addonId = btn.getAttribute('data-addon-id');
        const add = (activeQuotation.t2?.addons || []).find(a => a.id === addonId);
        if (add) {
          add.hidden = true;
          renderProposalPreview();
          showUndoToast(`Removed add-on "${add.title}"`, () => {
            add.hidden = false;
            renderProposalPreview();
          });
        }
      } else if (removeType === 'term') {
        const tIdx = parseInt(btn.getAttribute('data-term-idx'), 10);
        if (activeQuotation.t2?.terms && activeQuotation.t2.terms[tIdx]) {
          const removedTerm = activeQuotation.t2.terms.splice(tIdx, 1)[0];
          renderProposalPreview();
          showUndoToast(`Removed "${removedTerm.title}"`, () => {
            activeQuotation.t2.terms.splice(tIdx, 0, removedTerm);
            renderProposalPreview();
          });
        }
      } else if (removeType === 'term-card') {
        const termId = btn.getAttribute('data-term-id');
        activeQuotation.t2.hiddenSections = activeQuotation.t2.hiddenSections || {};
        activeQuotation.t2.hiddenSections[termId] = true;
        renderProposalPreview();
        showUndoToast(`Removed payment card`, () => {
          delete activeQuotation.t2.hiddenSections[termId];
          renderProposalPreview();
        });
      } else if (removeType === 'section') {
        const sectionKey = btn.getAttribute('data-section');
        activeQuotation.t2.hiddenSections = activeQuotation.t2.hiddenSections || {};
        activeQuotation.t2.hiddenSections[sectionKey] = true;
        renderProposalPreview();
        showUndoToast(`Removed section`, () => {
          delete activeQuotation.t2.hiddenSections[sectionKey];
          renderProposalPreview();
        });
      } else if (removeType === 'custom-section') {
        const customId = btn.getAttribute('data-custom-id');
        if (customId && activeQuotation.t2?.customSections) {
          const removedIdx = activeQuotation.t2.customSections.findIndex(s => s.id === customId);
          if (removedIdx !== -1) {
            const removedSec = activeQuotation.t2.customSections.splice(removedIdx, 1)[0];
            renderProposalPreview();
            showUndoToast(`Removed "${removedSec.title}"`, () => {
              activeQuotation.t2.customSections.splice(removedIdx, 0, removedSec);
              renderProposalPreview();
            });
          }
        }
      }
    });
  });
}

function bindAdminAddSectionControls(container) {
  if (!container) return;

  container.querySelectorAll('.t2-add-section-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close any other open popovers
      container.querySelectorAll('.t2-add-popover').forEach(p => p.remove());

      const afterSec = btn.getAttribute('data-after-section');
      const parentRow = btn.closest('.t2-add-section-row');
      if (!parentRow) return;

      const popover = document.createElement('div');
      popover.className = 't2-add-popover';

      let itemsHtml = `
        <button type="button" class="t2-add-popover-item" data-action="add-custom">
          <span>➕</span> Add New Section
        </button>
      `;

      if (afterSec === 'events') {
        itemsHtml += `
          <button type="button" class="t2-add-popover-item" data-action="add-event">
            <span>📅</span> Add New Event Card
          </button>
        `;
      }

      const hiddenKeys = Object.keys(activeQuotation.t2?.hiddenSections || {}).filter(k => activeQuotation.t2.hiddenSections[k]);
      if (hiddenKeys.length > 0) {
        const sectionLabels = {
          video: 'Cinematic Film Player',
          about: 'About Us / Timemachine & Co',
          gallery: 'Showcase Gallery',
          events: 'Your Events',
          services: 'Services Offered',
          quote: 'Quote Callout',
          timeline: 'Payment Timeline',
          addons: 'Additional Services',
          terms: 'Terms of Service',
          nextsteps: 'Next Steps'
        };
        hiddenKeys.forEach(k => {
          itemsHtml += `
            <button type="button" class="t2-add-popover-item" data-action="restore" data-section="${k}">
              <span>🔄</span> Restore ${sectionLabels[k] || k}
            </button>
          `;
        });
      }

      popover.innerHTML = itemsHtml;
      parentRow.appendChild(popover);

      popover.querySelectorAll('.t2-add-popover-item').forEach(item => {
        item.addEventListener('click', (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          const action = item.getAttribute('data-action');
          if (action === 'add-custom') {
            activeQuotation.t2.customSections = activeQuotation.t2.customSections || [];
            activeQuotation.t2.customSections.push({
              id: 'sec_' + Date.now(),
              title: 'Special Highlights & Inclusions',
              desc: 'Write custom arrangements, event deliverables, equipment notes, or client-specific terms here. Click directly on this text to edit.'
            });
            popover.remove();
            renderProposalPreview();
            showUndoToast('New section added!');
          } else if (action === 'add-event') {
            activeQuotation.events.push({
              id: 'ev_' + Date.now(),
              title: 'New Ceremony / Event',
              date: 'TBD Date',
              location: 'Hyderabad',
              candidPhoto: 1,
              candidVideo: 1,
              tradPhoto: 1,
              tradVideo: 1
            });
            popover.remove();
            renderQuoteEventsForm();
            renderProposalPreview();
            updateClientProposalLink();
            showUndoToast('New event card added!');
          } else if (action === 'restore') {
            const secKey = item.getAttribute('data-section');
            if (activeQuotation.t2?.hiddenSections && secKey) {
              delete activeQuotation.t2.hiddenSections[secKey];
            }
            popover.remove();
            renderProposalPreview();
            showUndoToast('Section restored!');
          }
        });
      });
    });
  });

  // Close popover when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.t2-add-popover') && !e.target.closest('.t2-add-section-btn')) {
      container.querySelectorAll('.t2-add-popover').forEach(p => p.remove());
    }
  });
}

function initQuotationGenerator() {
  // Try restoring saved draft
  const savedDraft = localStorage.getItem('studio_active_quotation');
  if (savedDraft) {
    try {
      const parsed = JSON.parse(savedDraft);
      if (parsed && typeof parsed === 'object') {
        // Deep merge draft with activeQuotation defaults
        activeQuotation = { ...activeQuotation, ...parsed };
        if (parsed.t2) activeQuotation.t2 = { ...activeQuotation.t2, ...parsed.t2 };

        // Normalize if previous draft had "Dear Bhavya Alapati" or inbuilt 25,000
        if (activeQuotation.t2?.greetingTitle === 'Dear Bhavya Alapati') {
          activeQuotation.t2.greetingTitle = 'Dear';
        }
        if (activeQuotation.t2?.priceSection?.greeting === 'Dear Bhavya Alapati') {
          activeQuotation.t2.priceSection.greeting = 'Dear';
        }
        if (activeQuotation.basePrice === 25000 || activeQuotation.basePrice === '25,000') {
          activeQuotation.basePrice = '';
        }
        if (!activeQuotation.t2) activeQuotation.t2 = {};
        if (!activeQuotation.t2.videoUrl) {
          activeQuotation.t2.videoUrl = activeQuotation.t2.bannerUrl || 'https://youtu.be/OctoMQEqK9E';
        }
        if (!activeQuotation.t2.bannerUrl) {
          activeQuotation.t2.bannerUrl = activeQuotation.t2.videoUrl;
        }

        // Normalize Terms of Service to exactly match report-qqlpopap.pdf
        if (activeQuotation.t2?.terms?.[0]?.title === 'Travel & Accommodation' || !activeQuotation.t2?.terms || activeQuotation.t2.terms[0]?.title !== 'Travel Expense') {
          activeQuotation.t2.terms = [
            {
              title: 'Travel Expense',
              desc: 'You shall arrange for the travel and accommodation of our shoot crew for all your events occurring in places away from hyderabad.'
            },
            {
              title: 'Project Cancellation',
              desc: 'If you cancel the project after the advance payment & reserving team schedules for you, the payments cannot be returned.'
            },
            {
              title: 'Delivery Timeline',
              desc: 'We strictly adhere to deliveries on the mentioned timeline. We do not entertain any early requests, as it will hamper timelines of other deliverables.'
            },
            {
              title: 'Change of Plans -',
              desc: 'Any change of plans or postponement of events will be accommodated with the best team available on the new dates and chargeable depending on the type of events and crew required.'
            },
            {
              title: 'Shoot Permissions',
              desc: 'Please note that all the required government permissions for any couple shoot shall be attained by the clients and the team is no way responsible for it. In case of any fines/ inconvenience to the shoot, we are not to be held responsible.'
            },
            {
              title: 'Print Albums',
              desc: 'Photos selection has to be given by the client and that is mandatory. After the selection has been given it will take 25-30 days for the team to send you the layouts and once the approval has been made from the client, then it will take a week to hand over the albums\nIf selections are not made for more than 7 months from the date of the event then each album will be charged Rs. 15,000/- extra'
            },
            {
              title: 'Security for Loss',
              desc: 'Client agrees to indemnify and hold harmless to the crew for any liability, damage or loss, related to technological failure, including data loss.'
            },
            {
              title: 'Data Safety',
              desc: 'Although we’ve never lost any event’s data in the past 12 years, in the rarest probability of any data loss, we are liable to shoot another event for free or deduct the corresponding event charges.'
            },
            {
              title: 'Additional Services Quality',
              desc: 'We don’t take responsibility for the quality of Web-live, LED walls and other services, since they are provided by 3rd party vendors. Our primary focus lies on great work with our photos & videos.'
            },
            {
              title: 'Video Revisions Timeline:',
              desc: 'Any requests for video changes must be communicated within 20-30days from the date of final output delivery.'
            },
            {
              title: 'Final Payment & Editing:',
              desc: 'Post-event editing work will begin only after the final payment has been successfully completed. This ensures a streamlined workflow and helps us maintain our quality standards.'
            }
          ];
        }

        if (activeQuotation.t2?.services?.films) {
          activeQuotation.t2.services.films.title = 'Cinematic Wedding Film';
        }
      }
    } catch (e) {
      console.warn('Could not parse stored quotation draft:', e);
    }
  }

  populateQuotationForm();
  renderProposalPreview();
  bindQuotationEvents();
  updateClientProposalLink();
}

// Init Admin App
document.addEventListener('DOMContentLoaded', () => {
  initAdminAuth();
  initAdminTabs();
  initMediaModal();
  initSaveContent();
  initQuotationGenerator();
});


