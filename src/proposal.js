// proposal.js — Standalone Interactive Proposal Logic & Media Customizer

const PRESET_MEDIA_SETS = {
  set1: {
    name: 'Set 1: Fine Art Shrine & Rituals',
    coverArc: [
      './images/niharika/groom-lighting.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/main-shrine-couple.jpg',
      './images/niharika/couple-doorway.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/mandapam-garland.jpg'
    ],
    aboutTop: './images/niharika/doorway-portrait.jpg',
    aboutBottom: './images/niharika/pooja-prayer.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/preview_check.jpg'
  },
  set2: {
    name: 'Set 2: Sacred Ceremonies & Pooja Focus',
    coverArc: [
      './images/niharika/lakshmi-shrine.jpg',
      './images/niharika/pooja-kalasham.jpg',
      './images/niharika/pooja-prayer.jpg',
      './images/niharika/lakshmi-shrine.jpg',
      './images/niharika/pooja-lighting.jpg',
      './images/niharika/preparation.jpg',
      './images/niharika/lotus-portrait.jpg'
    ],
    aboutTop: './images/niharika/pooja-kalasham.jpg',
    aboutBottom: './images/niharika/lakshmi-shrine.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/seek_frame_04.jpg'
  },
  set3: {
    name: 'Set 3: Royal Couple Portraits Focus',
    coverArc: [
      './images/niharika/couple-doorway.jpg',
      './images/niharika/doorway-portrait.jpg',
      './images/niharika/bridal-braid.jpg',
      './images/niharika/main-shrine-couple.jpg',
      './images/niharika/lotus-portrait.jpg',
      './images/niharika/groom-lighting.jpg',
      './images/niharika/mandapam-garland.jpg'
    ],
    aboutTop: './images/niharika/main-shrine-couple.jpg',
    aboutBottom: './images/niharika/couple-doorway.jpg',
    video: './videos/hero-wedding.mp4',
    poster: './videos/seek_frame_02.jpg'
  }
};

let currentMediaState = { ...PRESET_MEDIA_SETS.set1 };

document.addEventListener('DOMContentLoaded', () => {
  initUrlParams();
  initPdfExport();
  initAcceptProposal();
  initMediaCustomizer();
});

function applyMediaState(state) {
  // Update Cover Arc Cards (7 cards)
  const arcCards = document.querySelectorAll('.gallery-arc-card img');
  if (state.coverArc && arcCards.length > 0) {
    state.coverArc.forEach((url, i) => {
      if (arcCards[i] && url) {
        arcCards[i].src = url;
      }
    });
  }

  // Update About Us Photos
  const aboutTop = document.querySelector('.about-photo-top img');
  const aboutBottom = document.querySelector('.about-photo-bottom img');
  if (aboutTop && state.aboutTop) aboutTop.src = state.aboutTop;
  if (aboutBottom && state.aboutBottom) aboutBottom.src = state.aboutBottom;

  // Update Video Element
  const videoEl = document.querySelector('#slice-contact video');
  if (videoEl) {
    if (state.poster) videoEl.poster = state.poster;
    if (state.video) {
      const source = videoEl.querySelector('source');
      if (source) {
        source.src = state.video;
        videoEl.load();
      } else {
        videoEl.src = state.video;
      }
    }
  }

  // Sync Modal Input Fields
  const inputVid = document.getElementById('cust-video-url');
  const inputTop = document.getElementById('cust-about-top');
  const inputBot = document.getElementById('cust-about-bottom');

  if (inputVid && state.video) inputVid.value = state.video;
  if (inputTop && state.aboutTop) inputTop.value = state.aboutTop;
  if (inputBot && state.aboutBottom) inputBot.value = state.aboutBottom;
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
        id="t2-featured-iframe"
        src="${ytEmbed}"
        title="Timemachine & Co. Featured Film"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  } else {
    mediaInner = `
      <video id="t2-featured-video" src="${url}" autoplay muted loop playsinline controls style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>
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

function renderTemplate2Client(data, clientName, priceFormatted) {
  const container = document.getElementById('proposal-interactive-doc');
  if (!container) return;

  container.className = 'proposal-paper-template2';
  container.style.boxShadow = '0 25px 70px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(197, 160, 89, 0.2)';
  container.style.padding = '0';

  const t2 = data.t2 || {};
  const defaultVideo = 'https://youtu.be/OctoMQEqK9E';
  if (!t2.videoUrl) t2.videoUrl = t2.bannerUrl || defaultVideo;
  if (!t2.bannerUrl) t2.bannerUrl = t2.videoUrl;
  const events = data.events || [
    { date: '11 Feb 2027', location: 'Guntur', title: 'Engagement', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '25 Feb 2027', location: 'Hyderabad', title: 'Wedding', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '23 Feb 2027', location: 'Hyderabad', title: 'Pellikoduku', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '23 Feb 2027', location: 'Hyderabad', title: 'Bride Ceremony', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '24 Feb 2027', location: 'Hyderabad', title: 'Haldi', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '24 Feb 2027', location: 'Hyderabad', title: 'Sangeeth', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '25 Feb 2027', location: 'Hyderabad', title: 'Mehendi', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 },
    { date: '26 Feb 2027', location: 'Hyderabad', title: 'Vratham', candidPhoto: 1, candidVideo: 1, tradPhoto: 1, tradVideo: 1 }
  ];

  const starDivider = `
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

  const urlParams = new URLSearchParams(window.location.search);
  const isEditMode = urlParams.get('edit') === 'true' || urlParams.get('mode') === 'admin';

  if (!isEditMode) {
    document.body.classList.add('client-view-mode');
  } else {
    document.body.classList.remove('client-view-mode');
  }

  let currentAddons = t2.addons ? [...t2.addons] : [
    { id: 'led', title: 'LED Wall', price: 25000, desc: 'Digital LED Screens to showcase your Event video from multiple cameras LIVE. Equipped with a P3 display, of about 10 ft width and 8ft height.', selected: false },
    { id: 'weblive', title: 'Web Live', price: 15000, desc: "Live telecasting of your event video footage on the web. You're required to provide a name to generate a custom link that you can share with your friends and family so that they can watch the event remotely.", selected: false },
    { id: 'drone', title: 'Drone', price: 15000, desc: 'If you wish for a drone service for your events it would be chargeable at Rs.15,000/- per event. The drones will be used to cover decor only and are subject to government permissions.', selected: false },
    { id: 'albums', title: 'Print Albums', price: 25000, desc: 'Premium designer album of 40 sheets portraying your wedding story and each costs', selected: false }
  ];

  let basePriceNum = parseInt(priceFormatted.replace(/[^0-9]/g, ''), 10) || 25000;

  function renderInner() {
    let addOnTotal = 0;
    currentAddons.forEach(a => { if (a.selected) addOnTotal += (Number(a.price) || 0); });
    const finalTotal = basePriceNum + addOnTotal;
    const finalTotalFormatted = finalTotal.toLocaleString('en-IN');

    container.innerHTML = `
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
        <div class="t2-hero-client-name inpage-word-editable" contenteditable="true" data-field="clientName">${clientName}</div>
      </div>

      <!-- EDITORIAL CONTENT BODY -->
      <div class="t2-section-body">

        <!-- GREETING (Fixed to only 'Dear', deleted 'Bhavya Alapati') -->
        <div class="t2-greeting-title inpage-word-editable" contenteditable="true" data-field="t2.greetingTitle">${t2.greetingTitle || 'Dear'}</div>
        <div class="t2-greeting-text inpage-word-editable" contenteditable="true" data-field="t2.welcomeText">${t2.welcomeText || 'We appreciate the opportunity to be a part of your special day and capture the timeless moments that will make your wedding a cherished memory.'}</div>

        <!-- FEATURED YOUTUBE / VIDEO (Between Greeting and About Us) -->
        ${!t2.hiddenSections?.video ? renderT2VideoPlayer(t2.videoUrl || t2.bannerUrl || defaultVideo, { showRemove: true }) : ''}

        ${starDivider}

        <!-- ABOUT US -->
        ${!t2.hiddenSections?.about ? `
          <div class="t2-section-wrap" data-section="about">
            <div class="t2-section-header-row" style="margin: 2rem 0 1.25rem 0;">
              <div class="t2-section-title inpage-word-editable" contenteditable="true" data-field="t2.aboutTitle">${t2.aboutTitle || 'About Us'}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="about" title="Remove About Us section">✕</button>
            </div>
            <div class="t2-about-text inpage-word-editable" contenteditable="true" data-field="t2.aboutDesc">${t2.aboutDesc || 'At Timemachine & Co, we freeze fleeting moments to make your forever love story a timeless masterpiece, weaving the magic of your wedding into a tapestry of emotions, traditions, and heirlooms. Embark on your journey with us, and create a visual legacy treasured for generations to come.'}</div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="about" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
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
                <div class="t2-gallery-item">
                  <img class="t2-gallery-img" src="${t2.gallery?.[0] || './images/template2/gallery-1.jpg'}" alt="Gallery Portrait 1">
                </div>
                <div class="t2-gallery-item">
                  <img class="t2-gallery-img" src="${t2.gallery?.[1] || './images/template2/gallery-2.jpg'}" alt="Gallery Portrait 2">
                </div>
              </div>
              <div class="t2-gallery-col">
                <div class="t2-gallery-item">
                  <img class="t2-gallery-img" src="${t2.gallery?.[2] || './images/template2/gallery-3.jpg'}" alt="Gallery Portrait 3">
                </div>
                <div class="t2-gallery-item">
                  <img class="t2-gallery-img" src="${t2.gallery?.[3] || './images/template2/gallery-4.jpg'}" alt="Gallery Portrait 4">
                </div>
              </div>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- YOUR EVENTS (INDIVIDUAL BOX CARDS) -->
        ${!t2.hiddenSections?.events ? `
          <div class="t2-section-wrap" data-section="events">
            <div class="t2-section-header-row" style="margin: 2.75rem 0 1.25rem 0;">
              <div class="t2-section-title" style="margin: 0;">Your Events</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="events" title="Remove entire Events section">✕</button>
            </div>
            <div class="t2-events-container">
              ${events.map(ev => `
                <div class="t2-event-card" data-event-id="${ev.id}">
                  <button type="button" class="t2-remove-btn" data-remove-type="event" data-event-id="${ev.id}" title="Remove this event">✕</button>
                  <div class="t2-event-meta inpage-word-editable" contenteditable="true">${ev.date || 'TBD Date'} | ${ev.location || 'TBD Location'}</div>
                  <div class="t2-event-heading inpage-word-editable" contenteditable="true">${ev.title || ev.name || 'Ceremony'}</div>
                  <div class="t2-crew-line inpage-word-editable" contenteditable="true">
                    • ${ev.candidPhoto ?? 1} Candid Photographer • ${ev.candidVideo ?? 1} Candid Videographer • ${ev.tradPhoto ?? 1} Traditional Photographer • ${ev.tradVideo ?? 1} Traditional Videographer
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="events" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- SERVICES OFFERED -->
        ${!t2.hiddenSections?.services ? `
          <div class="t2-section-wrap" data-section="services">
            <div class="t2-section-header-row" style="margin: 2.75rem 0 1.5rem 0;">
              <div class="t2-section-title" style="margin: 0;">Services Offered</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="services" title="Remove entire Services section">✕</button>
            </div>
            <div class="t2-service-card" data-svc="pictures">
              <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="pictures" title="Remove this service">✕</button>
              <div class="t2-service-card-title inpage-word-editable" contenteditable="true">${t2.services?.pictures?.title || 'Edited Pictures'}</div>
              <div class="t2-service-card-desc inpage-word-editable" contenteditable="true">${t2.services?.pictures?.desc || 'You shall receive 1,000 fully edited images from all events, portraying your wedding story, delivered on the cloud within 60 days from payment clearance.'}</div>
            </div>
            <div class="t2-service-card" data-svc="films">
              <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="films" title="Remove this service">✕</button>
              <div class="t2-service-card-title inpage-word-editable" contenteditable="true">${t2.services?.films?.title || 'Cinematic Wedding Films'}</div>
              <div class="t2-service-card-desc inpage-word-editable" contenteditable="true">${t2.services?.films?.desc || '1 cinematic HD film with the best footage from your events, edited according to our style, to be delivered on cloud within 60 days from payment clearance. You can suggest any number of changes but all at once and within a week of delivery.'}</div>
              <div class="t2-service-card-note inpage-word-editable" contenteditable="true">${t2.services?.films?.note || '*Changes will be accepted only once from 2nd time Rs 15,000 will be charged extra.'}</div>
            </div>
            <div class="t2-service-card" data-svc="albums">
              <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="albums" title="Remove this service">✕</button>
              <div class="t2-service-card-title inpage-word-editable" contenteditable="true">${t2.services?.albums?.title || 'Printed Albums'}</div>
              <div class="t2-service-card-desc inpage-word-editable" contenteditable="true">${t2.services?.albums?.desc || 'You shall receive 3 Printed albums from the best events each album has 40 sheets. An extra sheet will incur an additional charge of ₹600 per sheet.'}</div>
            </div>
            <div class="t2-service-card" data-svc="videos">
              <button type="button" class="t2-remove-btn" data-remove-type="service" data-svc="videos" title="Remove this service">✕</button>
              <div class="t2-service-card-title inpage-word-editable" contenteditable="true">${t2.services?.videos?.title || 'Traditional Videos'}</div>
              <div class="t2-service-card-desc inpage-word-editable" contenteditable="true">${t2.services?.videos?.desc || 'You shall receive 5 long traditional video of all events in documentary style, delivered within 75 days from payment clearance.'}</div>
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="services" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- QUOTE CALLOUT BOX -->
        ${!t2.hiddenSections?.quote ? `
          <div class="t2-section-wrap" data-section="quote" style="background: #F7EFE0; border-radius: 14px; padding: 2.5rem 2rem; text-align: center; margin: 1.5rem 0; position: relative;">
            <button type="button" class="t2-remove-btn" data-remove-type="section" data-section="quote" title="Remove Quote Callout">✕</button>
            <div class="inpage-word-editable" contenteditable="true" style="font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #1A1816; margin-bottom: 0.35rem;">
              ${t2.priceSection?.greeting || 'Dear'}
            </div>
            <div class="inpage-word-editable" contenteditable="true" style="font-family: var(--font-paragraph); font-size: 1.05rem; color: #55524E; margin-bottom: 0.75rem;">
              ${t2.priceSection?.subtitle || 'Your final quote price would be'}
            </div>
            <div id="t2-callout-price" class="inpage-word-editable" contenteditable="true" style="font-family: 'Playfair Display', serif; font-size: 3.2rem; font-weight: 700; color: #1A1816; letter-spacing: -0.01em;">
              ₹ ${finalTotalFormatted}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="quote" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- PAYMENT TIMELINE -->
        ${!t2.hiddenSections?.timeline ? `
          <div class="t2-section-wrap" data-section="timeline">
            <div class="t2-section-header-row" style="margin-bottom: 1.5rem;">
              <div class="t2-section-title" style="margin: 0;">Payment Timeline</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="timeline" title="Remove Payment Timeline section">✕</button>
            </div>
            <div class="t2-term-card t2-term-card-beige">
              <button type="button" class="t2-remove-btn" data-remove-type="term-card" data-term-id="advance" title="Remove advance payment card">✕</button>
              <div class="t2-term-title">${t2.priceSection?.advanceTitle || 'Advance Payment'}</div>
              <div class="t2-term-desc">${t2.priceSection?.advanceText || '50% of the total billing value to be paid as an advance to block the dates.'}</div>
            </div>
            <div class="t2-term-card t2-term-card-cream" style="margin-top: 1rem;">
              <button type="button" class="t2-remove-btn" data-remove-type="term-card" data-term-id="final" title="Remove final payment card">✕</button>
              <div class="t2-term-title">${t2.priceSection?.finalTitle || 'Final Payment'}</div>
              <div class="t2-term-desc">${t2.priceSection?.finalText || 'Remaining 50% payment along with Transportation charges shall be done before/after wedding before receiving Raw footage.'}</div>
            </div>
            <div style="font-size: 0.85rem; color: #55524E; margin-top: 1.25rem; font-style: italic; line-height: 1.6;">
              ${t2.priceSection?.hdNote || "*You're required to provide us 2 units of 4TB Hard Drives to ensure the backup and safety of your data."}
            </div>
            <div style="font-size: 0.88rem; color: #8C6D37; margin-top: 0.6rem; font-weight: 600;">
              ${t2.priceSection?.cancelNote || 'Note : Incase of any cancellation, the advance or the payments cannot be returned.'}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="timeline" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- ADDITIONAL SERVICES -->
        ${!t2.hiddenSections?.addons ? `
          <div class="t2-section-wrap" data-section="addons">
            <div class="t2-section-header-row" style="margin-bottom: 0.4rem;">
              <div class="t2-section-title" style="margin: 0;">Additional Services</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="addons" title="Remove Additional Services section">✕</button>
            </div>
            <div class="t2-section-subtitle">${t2.addonsSubtitle || "If you're interested in expanding your package, we also provide additional services that are not included in the standard package:"}</div>
            <div class="t2-addons-grid" style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1.5rem;">
              ${currentAddons.map(add => `
                <div class="t2-addon-card ${add.selected ? 'selected' : ''}" data-addon-id="${add.id}">
                  <button type="button" class="t2-remove-btn" data-remove-type="addon" data-addon-id="${add.id}" title="Remove this add-on">✕</button>
                  <div class="t2-addon-header">
                    <span class="t2-addon-title">${add.title}</span>
                  </div>
                  <div class="t2-addon-desc">${add.desc}</div>
                  <div class="t2-addon-footer">
                    <span class="t2-addon-price">₹ ${Number(add.price).toLocaleString('en-IN')}</span>
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
          ${starDivider}
        ` : ''}

        <!-- TERMS OF SERVICE (11 CLAUSES) -->
        ${!t2.hiddenSections?.terms ? `
          <div class="t2-section-wrap" data-section="terms">
            <div class="t2-section-header-row" style="margin-bottom: 0.4rem;">
              <div class="t2-section-title" style="margin: 0;">Terms of Service</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="terms" title="Remove Terms of Service section">✕</button>
            </div>
            <div class="t2-section-subtitle">${t2.termsSubtitle || 'Our terms of service, including cancellation policies and copyright information, are detailed below for your review.'}</div>
            <div style="margin-top: 1.5rem;">
              ${(t2.terms && t2.terms[0]?.title === 'Travel Expense' ? t2.terms : [
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
              ]).map((term, tIdx) => `
                <div class="t2-term-card ${tIdx % 2 === 0 ? 't2-term-card-beige' : 't2-term-card-cream'}" data-term-idx="${tIdx}">
                  <button type="button" class="t2-remove-btn" data-remove-type="term" data-term-idx="${tIdx}" title="Remove this clause">✕</button>
                  <div class="t2-term-title">${term.title}</div>
                  <div class="t2-term-desc">${term.desc}</div>
                </div>
              `).join('')}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="terms" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- CUSTOM ADDED SECTIONS -->
        ${(t2.customSections || []).map((cSec) => `
          <div class="t2-section-wrap t2-custom-section" data-section="custom-${cSec.id}">
            <div class="t2-section-header-row" style="margin: 2rem 0 1.25rem 0;">
              <div class="t2-section-title inpage-word-editable" contenteditable="true" data-custom-id="${cSec.id}" data-custom-field="title">${cSec.title || 'Special Highlights'}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="custom-section" data-custom-id="${cSec.id}" title="Remove Section">✕</button>
            </div>
            <div class="t2-about-text inpage-word-editable" contenteditable="true" data-custom-id="${cSec.id}" data-custom-field="desc" style="padding: 1.25rem; background: #FAF7F2; border-radius: 12px; border: 1px solid rgba(197, 160, 89, 0.35);">
              ${cSec.desc || 'Write your section details here...'}
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="custom-${cSec.id}" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        `).join('')}

        <!-- NEXT STEPS -->
        ${!t2.hiddenSections?.nextsteps ? `
          <div class="t2-section-wrap" data-section="nextsteps">
            <div class="t2-section-header-row" style="margin-bottom: 1.25rem;">
              <div class="t2-nextsteps-title" style="margin: 0;">${t2.nextSteps?.title || 'Next Steps'}</div>
              <button type="button" class="t2-remove-btn t2-remove-section-btn" data-remove-type="section" data-section="nextsteps" title="Remove Next Steps section">✕</button>
            </div>
            <div class="t2-nextsteps-desc">${t2.nextSteps?.p1 || 'Please take a moment to review the proposal and attached terms of service. If you have any questions or would like to discuss specific details, feel free to reach out'}</div>
            <div class="t2-nextsteps-desc">${t2.nextSteps?.p2 || 'We eagerly anticipate the opportunity to contribute to your special day and create a visual story that will be cherished for a lifetime.'}</div>
            <div style="font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 700; color: #8C6D37; margin: 1.5rem 0 1.25rem 0;">
              ${t2.nextSteps?.signoff || 'Best regards, Timemachine & Co.'}
            </div>
            <div class="t2-contact-icons">
              <a href="tel:${t2.nextSteps?.phone || '+919705632982'}" class="t2-contact-circle" title="Call Us" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: #1A1816;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="https://wa.me/${(t2.nextSteps?.whatsapp || '+919705632982').replace(/[^0-9]/g, '')}" target="_blank" class="t2-contact-circle" title="WhatsApp" style="display: flex; align-items: center; justify-content: center; text-decoration: none; color: #1A1816;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
            <div class="t2-add-section-row">
              <button type="button" class="t2-add-section-btn" data-after-section="nextsteps" title="Add Section">+</button>
            </div>
          </div>
          ${starDivider}
        ` : ''}

        <!-- FOOTER BRANDING -->
        <div style="text-align: center; padding: 2rem 0 1rem 0;">
          <div style="display: inline-block; border: 1.5px solid #C5A059; padding: 0.35rem 0.9rem; font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.18em; color: #C5A059; font-weight: 700; margin-bottom: 1.25rem;">
            TM &amp; CO
          </div>
          <div>
            <a href="${t2.nextSteps?.website || 'https://www.timemachineworks.com'}" target="_blank" style="font-family: var(--font-paragraph); font-size: 0.95rem; color: #1A1816; font-weight: 600; text-decoration: none;">
              ${(t2.nextSteps?.website || 'https://www.timemachineworks.com').replace(/^https?:\/\//, '')}
            </a>
          </div>
          <div style="font-size: 0.85rem; color: #55524E; margin: 0.4rem 0 1.25rem 0;">
            ${t2.nextSteps?.phone || '+91 97056 32982'}
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

    if (!isEditMode) {
      // In client view mode: completely strip contenteditable so text cannot be edited
      container.querySelectorAll('.inpage-word-editable, [contenteditable]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeAttribute('title');
      });
    } else {
      // Wire up Add-On click toggles (only if in admin edit mode)
      container.querySelectorAll('.t2-addon-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-addon-id');
          const add = currentAddons.find(a => a.id === id);
          if (add) {
            add.selected = !add.selected;
            renderInner();
          }
        });
      });
      // Wire up in-page word editing for custom sections
      container.querySelectorAll('[data-custom-id]').forEach(el => {
        el.addEventListener('blur', () => {
          const cId = el.getAttribute('data-custom-id');
          const field = el.getAttribute('data-custom-field');
          const sec = (t2.customSections || []).find(s => s.id === cId);
          if (sec && field) {
            sec[field] = el.innerText.trim();
          }
        });
      });

      // Wire up X remove buttons
      bindProposalRemoveButtons(container, events, currentAddons, t2, renderInner);

      // Wire up + add section buttons
      bindProposalAddSectionButtons(container, t2, events, renderInner);
    }

    // Wire up Video Unmute controls
    bindVideoUnmuteControls(container);
  }

  renderInner();
}

function showProposalUndoToast(message, onUndo) {
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

function bindProposalRemoveButtons(container, events, currentAddons, t2, renderInner) {
  if (!container) return;
  container.querySelectorAll('.t2-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const removeType = btn.getAttribute('data-remove-type');

      if (removeType === 'event') {
        const eventId = btn.getAttribute('data-event-id');
        const evIdx = events.findIndex(x => x.id === eventId);
        if (evIdx !== -1) {
          const removed = events.splice(evIdx, 1)[0];
          renderInner();
          showProposalUndoToast(`Removed event "${removed.title || removed.name || 'Ceremony'}"`, () => {
            events.splice(evIdx, 0, removed);
            renderInner();
          });
        }
      } else if (removeType === 'service') {
        const svcCard = btn.closest('.t2-service-card');
        if (svcCard) {
          svcCard.style.transition = 'all 0.3s ease';
          svcCard.style.opacity = '0';
          svcCard.style.transform = 'scale(0.95)';
          setTimeout(() => svcCard.remove(), 300);
          showProposalUndoToast('Removed service', () => {
            renderInner();
          });
        }
      } else if (removeType === 'addon') {
        const addonId = btn.getAttribute('data-addon-id');
        const addIdx = currentAddons.findIndex(a => a.id === addonId);
        if (addIdx !== -1) {
          const removed = currentAddons.splice(addIdx, 1)[0];
          renderInner();
          showProposalUndoToast(`Removed "${removed.title}"`, () => {
            currentAddons.splice(addIdx, 0, removed);
            renderInner();
          });
        }
      } else if (removeType === 'term') {
        const termCard = btn.closest('.t2-term-card');
        if (termCard) {
          termCard.style.transition = 'all 0.3s ease';
          termCard.style.opacity = '0';
          termCard.style.transform = 'scale(0.95)';
          setTimeout(() => termCard.remove(), 300);
          showProposalUndoToast('Removed clause', () => {
            renderInner();
          });
        }
      } else if (removeType === 'term-card') {
        const card = btn.closest('.t2-term-card');
        if (card) {
          card.style.transition = 'all 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => card.remove(), 300);
          showProposalUndoToast('Removed payment item', () => {
            renderInner();
          });
        }
      } else if (removeType === 'custom-section') {
        const customId = btn.getAttribute('data-custom-id');
        if (customId && t2?.customSections) {
          const removedIdx = t2.customSections.findIndex(s => s.id === customId);
          if (removedIdx !== -1) {
            const removedSec = t2.customSections.splice(removedIdx, 1)[0];
            renderInner();
            showProposalUndoToast(`Removed "${removedSec.title}"`, () => {
              t2.customSections.splice(removedIdx, 0, removedSec);
              renderInner();
            });
          }
        }
      } else if (removeType === 'section') {
        const secWrap = btn.closest('.t2-section-wrap') || btn.closest('[data-section]');
        const secName = btn.getAttribute('data-section');
        if (secWrap) {
          secWrap.style.transition = 'all 0.3s ease';
          secWrap.style.opacity = '0';
          secWrap.style.transform = 'scale(0.95)';
          setTimeout(() => secWrap.remove(), 300);
          if (secName && t2) {
            t2.hiddenSections = t2.hiddenSections || {};
            t2.hiddenSections[secName] = true;
          }
          showProposalUndoToast('Removed section', () => {
            if (secName && t2?.hiddenSections) {
              delete t2.hiddenSections[secName];
            }
            renderInner();
          });
        }
      }
    });
  });
}

function bindProposalAddSectionButtons(container, t2, events, renderInner) {
  if (!container) return;

  // Global click outside listener for popovers
  if (!window._t2AddSectionClickBound) {
    window._t2AddSectionClickBound = true;
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.t2-add-section-btn') && !e.target.closest('.t2-add-popover')) {
        document.querySelectorAll('.t2-add-popover').forEach(p => p.remove());
      }
    });
  }

  container.querySelectorAll('.t2-add-section-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.querySelectorAll('.t2-add-popover').forEach(p => p.remove());

      const parentRow = btn.closest('.t2-add-section-row');
      if (!parentRow) return;

      const afterSec = btn.getAttribute('data-after-section');

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
            <span>📅</span> Add New Event
          </button>
        `;
      }

      const hiddenKeys = Object.keys(t2?.hiddenSections || {}).filter(k => t2.hiddenSections[k]);
      if (hiddenKeys.length > 0) {
        itemsHtml += `<div style="font-size: 0.72rem; color: #8C6D37; font-weight: 700; padding: 0.35rem 0.6rem; text-transform: uppercase; border-top: 1px solid rgba(197, 160, 89, 0.2); margin-top: 0.3rem;">Restore Hidden:</div>`;
        const sectionLabels = {
          video: 'Featured Video',
          about: 'About Us',
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
            t2.customSections = t2.customSections || [];
            t2.customSections.push({
              id: 'sec_' + Date.now(),
              title: 'Special Highlights & Inclusions',
              desc: 'Write custom arrangements, event deliverables, equipment notes, or client-specific terms here. Click directly on this text to edit.'
            });
            popover.remove();
            renderInner();
            showProposalUndoToast('New section added!');
          } else if (action === 'add-event') {
            events.push({
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
            renderInner();
            showProposalUndoToast('New event card added!');
          } else if (action === 'restore') {
            const secKey = item.getAttribute('data-section');
            if (t2?.hiddenSections && secKey) {
              delete t2.hiddenSections[secKey];
            }
            popover.remove();
            renderInner();
            showProposalUndoToast('Section restored!');
          }
        });
      });
    });
  });
}

function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const client = params.get('client') || params.get('name') || 'Bhavya Alapati';
  const price = params.get('price') || params.get('total') || '';
  const template = params.get('template');

  const docClient = document.getElementById('doc-client-name');
  const calloutClient = document.getElementById('callout-client-name');
  const modalClient = document.getElementById('modal-client-name');
  const priceEl = document.getElementById('live-total-price');

  if (docClient) docClient.textContent = client;
  if (calloutClient) calloutClient.textContent = client;
  if (modalClient) modalClient.textContent = client;

  if (priceEl) {
    const formattedPrice = price ? (price.startsWith('₹') ? price : `₹ ${price}`) : '';
    priceEl.textContent = formattedPrice;
  }

  // Check if Template 2 is requested
  if (template === 'template2') {
    const savedDraft = localStorage.getItem('studio_active_quotation');
    let quoteData = {};
    if (savedDraft) {
      try {
        quoteData = JSON.parse(savedDraft);
        if (quoteData.t2?.greetingTitle === 'Dear Bhavya Alapati') quoteData.t2.greetingTitle = 'Dear';
        if (quoteData.t2?.priceSection?.greeting === 'Dear Bhavya Alapati') quoteData.t2.priceSection.greeting = 'Dear';
      } catch (e) {}
    }
    const videoParam = params.get('video') || params.get('youtube');
    if (videoParam) {
      quoteData.t2 = quoteData.t2 || {};
      quoteData.t2.videoUrl = videoParam;
      quoteData.t2.bannerUrl = videoParam;
    }
    renderTemplate2Client(quoteData, client, price);
    return;
  }

  // Parse Media Theme / Custom URL Overrides for Template 1
  const themeParam = params.get('theme') || params.get('set');
  if (themeParam && PRESET_MEDIA_SETS[themeParam]) {
    currentMediaState = { ...PRESET_MEDIA_SETS[themeParam] };
  }

  const customVid = params.get('video');
  const customPoster = params.get('poster');
  const customAbout1 = params.get('about1');
  const customAbout2 = params.get('about2');

  if (customVid) currentMediaState.video = customVid;
  if (customPoster) currentMediaState.poster = customPoster;
  if (customAbout1) currentMediaState.aboutTop = customAbout1;
  if (customAbout2) currentMediaState.aboutBottom = customAbout2;

  // Custom Cover Arc cards cover1..cover7
  for (let i = 1; i <= 7; i++) {
    const cParam = params.get(`cover${i}`);
    if (cParam) {
      if (!currentMediaState.coverArc) currentMediaState.coverArc = [];
      currentMediaState.coverArc[i - 1] = cParam;
    }
  }

  applyMediaState(currentMediaState);
}


function initMediaCustomizer() {
  const customizerBtns = [document.getElementById('nav-btn-media-customizer'), document.getElementById('nav-btn-media-mobile')].filter(Boolean);
  const modal = document.getElementById('media-customizer-modal');
  if (!modal && customizerBtns.length === 0) return;
  const closeBtn = document.getElementById('btn-close-media-customizer');
  const applyBtn = document.getElementById('btn-apply-media-customizer');
  const copyBtn = document.getElementById('btn-copy-media-link');
  const themeChips = document.querySelectorAll('#media-theme-chips .theme-chip-btn');
  const mobileBar = document.querySelector('.mobile-floating-bar');

  customizerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.add('active');
      if (mobileBar) mobileBar.style.display = 'none';
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }
    });
  }

  // Preset Theme Chips Toggle
  themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      themeChips.forEach(c => {
        c.style.background = 'rgba(255, 255, 255, 0.05)';
        c.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        c.style.color = '#CCC';
        c.classList.remove('active');
      });

      chip.style.background = 'rgba(197, 160, 89, 0.2)';
      chip.style.borderColor = 'var(--gold-accent)';
      chip.style.color = '#FFF';
      chip.classList.add('active');

      const themeKey = chip.getAttribute('data-theme');
      if (PRESET_MEDIA_SETS[themeKey]) {
        currentMediaState = { ...PRESET_MEDIA_SETS[themeKey] };
        applyMediaState(currentMediaState);
      }
    });
  });

  // Apply Custom Inputs to Quotation Page
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const vidVal = document.getElementById('cust-video-url')?.value.trim();
      const topVal = document.getElementById('cust-about-top')?.value.trim();
      const botVal = document.getElementById('cust-about-bottom')?.value.trim();

      if (vidVal) currentMediaState.video = vidVal;
      if (topVal) currentMediaState.aboutTop = topVal;
      if (botVal) currentMediaState.aboutBottom = botVal;

      applyMediaState(currentMediaState);

      if (modal) modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }

      alert('✨ Quotation pictures & video updated successfully!');
    });
  }

  // Copy Custom Shareable Link
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const clientName = document.getElementById('doc-client-name')?.textContent || 'Bhavya Allu';
      const priceText = (document.getElementById('live-total-price')?.textContent || '2,50,000').replace(/[^0-9,]/g, '');

      const activeChip = document.querySelector('#media-theme-chips .theme-chip-btn.active');
      const themeKey = activeChip ? activeChip.getAttribute('data-theme') : 'set1';

      const vidVal = document.getElementById('cust-video-url')?.value.trim();
      const topVal = document.getElementById('cust-about-top')?.value.trim();
      const botVal = document.getElementById('cust-about-bottom')?.value.trim();

      const shareUrl = new URL(window.location.href);
      shareUrl.searchParams.delete('edit');
      shareUrl.searchParams.delete('mode');
      shareUrl.searchParams.set('client', clientName);
      shareUrl.searchParams.set('price', priceText);
      shareUrl.searchParams.set('theme', themeKey);
      if (vidVal) shareUrl.searchParams.set('video', vidVal);
      if (topVal) shareUrl.searchParams.set('about1', topVal);
      if (botVal) shareUrl.searchParams.set('about2', botVal);

      navigator.clipboard.writeText(shareUrl.toString()).then(() => {
        alert('🔗 Custom proposal link copied to clipboard!\n\nLink: ' + shareUrl.toString());
      }).catch(() => {
        prompt('Copy your custom proposal URL:', shareUrl.toString());
      });
    });
  }
}

function initPdfExport() {
  const pdfBtns = [document.getElementById('nav-btn-pdf'), document.getElementById('nav-btn-pdf-mobile')].filter(Boolean);
  if (pdfBtns.length === 0) return;

  pdfBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const element = document.getElementById('proposal-interactive-doc');
      if (!element) return;

      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `⏳ PDF...`;

      // Swap videos for posters during PDF canvas capture
      const videos = element.querySelectorAll('video');
      const videoParents = [];
      videos.forEach(v => {
        const img = document.createElement('img');
        img.src = v.poster || './videos/preview_check.jpg';
        img.style.cssText = v.style.cssText;
        img.style.height = '320px';
        img.className = 'pdf-temp-video-poster';
        v.parentNode.insertBefore(img, v);
        v.style.display = 'none';
        videoParents.push({ video: v, posterImg: img });
      });

      const clientName = (document.getElementById('doc-client-name')?.textContent || 'Bhavya_Allu').replace(/[^a-zA-Z0-9]/g, '_');
      const opt = {
        margin:       [0.3, 0.3, 0.3, 0.3],
        filename:     `Timemachine_Quotation_${clientName}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'] }
      };

      try {
        if (typeof window.html2pdf === 'function') {
          await window.html2pdf().set(opt).from(element).save();
        } else {
          window.print();
        }
      } catch (err) {
        console.warn('PDF export error:', err);
        window.print();
      } finally {
        videoParents.forEach(item => {
          if (item.posterImg && item.posterImg.parentNode) {
            item.posterImg.parentNode.removeChild(item.posterImg);
          }
          item.video.style.display = 'block';
        });
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    });
  });
}

function initAcceptProposal() {
  const acceptBtns = [document.getElementById('nav-btn-accept'), document.getElementById('nav-btn-accept-mobile')].filter(Boolean);
  const modal = document.getElementById('accept-modal-overlay');
  const closeBtn = document.getElementById('btn-modal-close');
  const mobileBar = document.querySelector('.mobile-floating-bar');

  acceptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      triggerGoldConfetti();
      if (modal) modal.classList.add('active');
      if (mobileBar) mobileBar.style.display = 'none';
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      if (mobileBar && window.innerWidth <= 900) {
        mobileBar.style.display = 'flex';
      }
    });
  }
}

function triggerGoldConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#FBBF24', '#FFFFFF']
    });
  }
}
