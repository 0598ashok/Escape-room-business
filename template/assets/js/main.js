/* =====================================================
   MIDNIGHT ESCAPES — main.js
   Modular ES6 JavaScript
   ===================================================== */

'use strict';

/* ── Helpers ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

/* ── Services Data ── */
const SERVICES = {
  'haunted-mansion': {
    title: 'Haunted Mansion',
    icon: '🏚️',
    heroColor: '#1a1a1a',
    tagline: 'Uncover the secrets of the Blackwood Estate.',
    description: `The Blackwood Estate has stood silent for eighty years, ever since the mysterious disappearance of the entire family during a winter gala. Local legends speak of flickering lights and ethereal music echoing through the halls. You and your team are paranormal investigators tasked with entering the mansion, finding the family heirlooms, and escaping before the clock strikes midnight. But be warned: some secrets are meant to stay buried, and the spirits within do not take kindly to intruders.`,
    process: [
      { step: 1, title: 'The Briefing', desc: 'Meet your Game Master and receive your investigative tools.' },
      { step: 2, title: 'Infiltration', desc: 'Enter the foyer and begin your search for the first clue.' },
      { step: 3, title: 'The Ritual', desc: 'Solve the mechanical puzzles to unlock the hidden study.' },
      { step: 4, title: 'Escape', desc: 'Exorcise the mansion\'s curse and find the exit before it\'s too late.' }
    ],
    benefits: ['High-Intensity Atmosphere', 'Mechanical Puzzles', 'Non-Linear Gameplay', 'Professional Set Design', 'Thematic Soundscapes', 'Multi-Room Experience'],
    faqs: [
      { q: 'Is it actually scary?', a: 'It features jump scares and high-tension atmosphere. We recommend it for ages 14 and up.' },
      { q: 'What is the success rate?', a: 'Currently, about 35% of teams escape within the 60-minute time limit.' },
      { q: 'Are we actually locked in?', a: 'For safety, all doors feature emergency release buttons, though the "narrative" lock remains until you solve the final puzzle.' }
    ]
  },
  'prison-break': {
    title: 'Prison Break',
    icon: '⛓️',
    heroColor: '#2c3e50',
    tagline: 'Escape the high-security Sector 9 before the guards return.',
    description: `Wrongfully accused and sentenced to life in the notorious Ironclad Penitentiary, your only hope is the legendary "Ghost" inmate who left behind a trail of clues. You have 60 minutes during the scheduled guard rotation to navigate the high-tech security systems, crawl through the ventilation shafts, and reach the yard. It will take physical agility, logical thinking, and perfect coordination to win your freedom. The countdown begins now.`,
    process: [
      { step: 1, title: 'Processing', desc: 'Your team is split into neighboring cells to begin the escape.' },
      { step: 2, title: 'The Breakout', desc: 'Communicate through the walls to unlock each other\'s cells.' },
      { step: 3, title: 'Security Bypass', desc: 'Disable the laser grid and hack the warden\'s terminal.' },
      { step: 4, title: 'Final Run', desc: 'Coordinate the exit sequence to open the main gate.' }
    ],
    benefits: ['Physical Challenges', 'Cooperative Logic', 'High-Tech Props', 'Split-Team Start', 'Immersive Audio', 'Adrenaline Pumping'],
    faqs: [
      { q: 'Does this room require crawling?', a: 'Yes, there is a short crawling section, but an alternative path can be provided upon request.' },
      { q: 'Can we play with just 2 people?', a: 'Yes, but the Difficulty is significantly higher without a full team of 4-6.' },
      { q: 'Is there a dress code?', a: 'We recommend comfortable clothing and closed-toe shoes for the physical sections.' }
    ]
  },
  'spy-mission': {
    title: 'Spy Mission',
    icon: '🕵️',
    heroColor: '#1c2833',
    tagline: 'Infiltrate, Extract, Evade. The world is counting on you.',
    description: `The rogue organization known as "The Kraken" has developed a global blackout device. Your mission: infiltrate their underground base in Zurich, locate the override codes, and disable the device. You'll need to use cutting-edge spy gadgets, decipher encrypted communications, and avoid detection by the AI security system. Every second counts in this high-stakes game of international espionage. Good luck, Agent.`,
    process: [
      { step: 1, title: 'Mission Intel', desc: 'Receive your gadget kit and the targets for infiltration.' },
      { step: 2, title: 'The Breach', desc: 'Hack the outer perimeter and enter the secure laboratory.' },
      { step: 3, title: 'Data Extraction', desc: 'Locate the hidden server and bypass the biometric locks.' },
      { step: 4, title: 'Override', desc: 'Execute the final command and evacuate the facility.' }
    ],
    benefits: ['Logic & Deduction', 'Electronic Gadgets', 'Stealth Elements', 'Multiple Endings', 'High Difficulty', 'Elite Experience'],
    faqs: [
      { q: 'How difficult is this room?', a: 'This is our hardest room, with a 5/5 difficulty rating and a 15% success rate.' },
      { q: 'What gadgets do we get?', a: 'You will use UV lights, signal decoders, and thermal scanners during the mission.' },
      { q: 'Is there an age limit?', a: 'Due to the complexity of the puzzles, we recommend this room for ages 16 and up.' }
    ]
  },
  'treasure-hunt': {
    title: 'Treasure Hunt',
    icon: '💎',
    heroColor: '#7d6608',
    tagline: 'Find the lost Aztec Gold before the jungle swallows you whole.',
    description: `Deep in the heart of the Amazon lies the Temple of the Sun, home to the legendary Golden Idol. Many have sought it, but none have returned. Your team of explorers has found the entrance, but the temple's ancient traps have been triggered. You have 60 minutes to solve the environmental puzzles, navigate the shifting walls, and claim the treasure before the temple collapses forever. Discovery awaits!`,
    process: [
      { step: 1, title: 'Base Camp', desc: 'Gather your equipment and enter the temple ruins.' },
      { step: 2, title: 'The Labyrinth', desc: 'Navigate the maze of mirrors and light-based puzzles.' },
      { step: 3, title: 'The Inner Sanctum', desc: 'Solve the linguistic trials of the Aztec priests.' },
      { step: 4, title: 'The Idol', desc: 'Claim the treasure and find the hidden exit path.' }
    ],
    benefits: ['Family Friendly', 'Visual Puzzles', 'Stunning Decor', 'Large Group Capacity', 'Adventure Feel', 'Exploration Focus'],
    faqs: [
      { q: 'Is this room good for kids?', a: 'Absolutely! It is our most family-friendly experience and relies on visual logic.' },
      { q: 'How many people can play?', a: 'This room can accommodate up to 8 players comfortably.' },
      { q: 'Are there live animals?', a: 'No, all jungle elements and "creatures" are high-quality animatronics/props.' }
    ]
  },
  'lost-tomb': {
    title: 'The Lost Tomb',
    icon: '🔍',
    heroColor: '#5d4037',
    tagline: 'Resurrect the past in the Valley of the Kings.',
    description: `An undiscovered tomb has been unearthed, but the lead archeologist has gone missing. Rumors of an ancient curse surround the site. Your team must enter the burial chamber, decode the hieroglyphics, and find the Ankh of Life to reverse the curse and escape. The air is thin, and the shadows are growing. Will you make history, or become a part of it?`,
    process: [
      { step: 1, title: 'Excavation', desc: 'Search the dig site for clues left by the missing doctor.' },
      { step: 2, title: 'The Chamber', desc: 'Solve the astronomical puzzles to open the tomb.' },
      { step: 3, title: 'The Trial', desc: 'Pass the judgment of Osiris through weight and balance.' },
      { step: 4, title: 'Resurrection', desc: 'Locate the artifact and find the secret corridor out.' }
    ],
    benefits: ['Historical Accuracy', 'Tactile Puzzles', 'Mystery Solving', 'Immersive Lighting', 'Cinematic Reveal', 'Unique Theme'],
    faqs: [
      { q: 'Is it dusty/dirty?', a: 'While the set looks like a dig site, it is cleaned daily and safe for all players.' },
      { q: 'Do we need to know history?', a: 'No outside knowledge is required; everything you need is inside the room.' },
      { q: 'What is the lighting like?', a: 'The room starts dim but features dynamic lighting that changes with your progress.' }
    ]
  },
  'asylum': {
    title: 'The Asylum',
    icon: '🧠',
    heroColor: '#424242',
    tagline: 'Face your darkest fears in Ravensworth Clinic.',
    description: `Abandoned since 1964 following a series of unethical experiments, the Ravensworth Asylum for the Criminally Insane is not as empty as it seems. You and your team are thrill-seekers who have broken in on a dare. Now, the doors have locked, and the "Doctor" is coming for his next subjects. You must navigate the flickering corridors, solve the twisted psychological puzzles, and escape before you become a permanent resident.`,
    process: [
      { step: 1, title: 'The Dare', desc: 'Break into the lobby and realize you aren\'t alone.' },
      { step: 2, title: 'The Ward', desc: 'Navigate the padded cells and find the keys to the lab.' },
      { step: 3, title: 'The Experiment', desc: 'Solve the sensory-deprivation puzzles to progress.' },
      { step: 4, title: 'The Escape', desc: 'Find the hidden emergency exit before the Doctor arrives.' }
    ],
    benefits: ['Horror Elements', 'Psychological Thriller', 'Sensory Puzzles', 'Jumpscares', 'Intense Narrative', 'Highly Immersive'],
    faqs: [
      { q: 'How scary is it?', a: 'This is our most intense horror experience. Expect loud noises, low light, and actors.' },
      { q: 'Can we stop if it\'s too much?', a: 'Yes, all rooms have a "panic button" that immediately ends the game and opens all doors.' },
      { q: 'Is there an age limit?', a: 'Strictly 18+ due to the intensity and nature of the themes.' }
    ]
  }
};

/* ── Blog Data ── */
const BLOGS = [
  { id: 1, title: '5 Tips to Beat the Clock in Any Escape Room', cat: 'Pro Tips', date: 'March 15, 2026', author: 'Alex Thorne', readTime: '5 min read', icon: '⏱️', excerpt: 'Master the art of time management. From effective communication to organized searching, here is how the experts escape in record time.' },
  { id: 2, title: 'Why Team Building is Better in an Escape Room', cat: 'Events', date: 'March 8, 2026', author: 'Alex Thorne', readTime: '7 min read', icon: '🤝', excerpt: 'Corporate puzzles revealed. How collaborative problem-solving translates to better workplace synergy and higher employee morale.' },
  { id: 3, title: 'The Psychology of Fear: Designing the Asylum', cat: 'Behind the Scenes', date: 'Feb 28, 2026', author: 'Alex Thorne', readTime: '9 min read', icon: '🧠', excerpt: 'A deep dive into the psychological triggers and atmospheric design used to create our most intense horror experience yet.' },
  { id: 4, title: 'Beginner?s Guide to Your First Escape Room', cat: 'Pro Tips', date: 'Feb 20, 2026', author: 'Alex Thorne', readTime: '6 min read', icon: '🗝️', excerpt: 'Everything you need to know before your first adventure. No spoilers, just essential strategies for your first 60 minutes of fun.' },
  { id: 5, title: 'Uncovering the Lore: The Blackwood Estate History', cat: 'Deep Lore', date: 'Feb 12, 2026', author: 'Alex Thorne', readTime: '10 min read', icon: '🏚️', excerpt: 'Read the official backstory of the Haunted Mansion. Discover the hidden details that make this room our players? favorite.' },
  { id: 6, title: 'Escape Room vs. VR: Which is the Ultimate Adventure?', cat: 'Lifestyle', date: 'Feb 5, 2026', author: 'Alex Thorne', readTime: '5 min read', icon: '🕶️', excerpt: 'Comparing tactile reality with virtual worlds. Why physical interaction and real-life teamwork still reign supreme in the world of puzzles.' }
];

/* ── Theme Management ── */
const ThemeManager = (() => {
  const HTML = document.documentElement;
  const STORAGE_KEY = 'me-theme';
  const DARK_CSS_ID = 'dark-mode-css';

  function loadDarkCSS() {
    if (!$(`#${DARK_CSS_ID}`)) {
      const link = document.createElement('link');
      link.id = DARK_CSS_ID;
      link.rel = 'stylesheet';
      link.href = getBasePath() + 'assets/css/dark-mode.css';
      document.head.appendChild(link);
    }
  }

  function setTheme(theme) {
    HTML.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (theme === 'dark') loadDarkCSS();
    updateToggleIcons(theme);
  }

  function getBasePath() {
    const depth = (window.location.pathname.match(/\//g) || []).length;
    if (window.location.pathname.includes('/pages/')) return '../';
    return './';
  }

  function updateToggleIcons(theme) {
    $$('[data-theme-toggle]').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(theme);

    $$('[data-theme-toggle]').forEach(btn => {
      on(btn, 'click', () => {
        const current = HTML.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  }

  return { init, setTheme };
})();

/* ── RTL Management ── */
const RTLManager = (() => {
  const HTML = document.documentElement;
  const STORAGE_KEY = 'me-dir';
  const RTL_CSS_ID = 'rtl-css';

  function getBasePath() {
    if (window.location.pathname.includes('/pages/')) return '../';
    return './';
  }

  function loadRTLCSS() {
    if (!$(`#${RTL_CSS_ID}`)) {
      const link = document.createElement('link');
      link.id = RTL_CSS_ID;
      link.rel = 'stylesheet';
      link.href = getBasePath() + 'assets/css/rtl.css';
      document.head.appendChild(link);
    }
  }

  function setDir(dir) {
    HTML.setAttribute('dir', dir);
    HTML.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem(STORAGE_KEY, dir);
    if (dir === 'rtl') loadRTLCSS();
    updateToggleLabels(dir);
  }

  function updateToggleLabels(dir) {
    $$('[data-rtl-toggle]').forEach(btn => {
      btn.textContent = dir === 'rtl' ? '← LTR' : 'RTL →';
      btn.title = dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Arabic/RTL';
    });
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'ltr';
    setDir(saved);

    $$('[data-rtl-toggle]').forEach(btn => {
      on(btn, 'click', () => {
        const current = HTML.getAttribute('dir') || 'ltr';
        setDir(current === 'rtl' ? 'ltr' : 'rtl');
      });
    });
  }

  return { init };
})();

/* ── Navbar ── */
const Navbar = (() => {
  let isOpen = false;

  function init() {
    const navbar = $('#navbar');
    const hamburger = $('#hamburger');
    const drawer = $('#mobile-drawer');

    // Scroll effects
    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
      }
      ScrollProgress.update();
      BackToTop.check();
    }, { passive: true });

    // Hamburger
    on(hamburger, 'click', () => {
      isOpen = !isOpen;
      hamburger.classList.toggle('active', isOpen);
      drawer && drawer.classList.toggle('open', isOpen);
    });

    // Close drawer on outside click
    on(document, 'click', e => {
      if (isOpen && !e.target.closest('#mobile-drawer') && !e.target.closest('#hamburger')) {
        isOpen = false;
        hamburger && hamburger.classList.remove('active');
        drawer && drawer.classList.remove('open');
      }
    });

    // Mobile accordion submenus
    $$('[data-mobile-toggle]').forEach(trigger => {
      on(trigger, 'click', () => {
        const targetId = trigger.getAttribute('data-mobile-toggle');
        const sub = $(`#${targetId}`);
        if (!sub) return;
        const isExpanded = sub.style.display === 'block';
        // Close all
        $$('[data-mobile-sub]').forEach(s => s.style.display = 'none');
        $$('[data-mobile-toggle]').forEach(t => t.classList.remove('open'));
        if (!isExpanded) {
          sub.style.display = 'block';
          trigger.classList.add('open');
        }
      });
    });

    // Active link highlighting
    highlightCurrentPage();
  }

  function highlightCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav-link, .nav-dropdown a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href && href.includes(path) && path !== '') {
        link.classList.add('active');
      }
    });
  }

  return { init };
})();

/* ── Scroll Progress ── */
const ScrollProgress = {
  el: null,
  init() {
    this.el = document.createElement('div');
    this.el.id = 'scroll-progress';
    document.body.prepend(this.el);
  },
  update() {
    if (!this.el) return;
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.el.style.width = `${(scrolled / max) * 100}%`;
  }
};

/* ── Back To Top ── */
const BackToTop = {
  el: null,
  init() {
    this.el = document.createElement('button');
    this.el.id = 'back-to-top';
    this.el.setAttribute('aria-label', 'Back to top');
    this.el.innerHTML = '↑';
    document.body.appendChild(this.el);
    on(this.el, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },
  check() {
    if (!this.el) return;
    this.el.classList.toggle('show', window.scrollY > 400);
  }
};

/* ── Scroll Reveal ── */
const ScrollReveal = (() => {
  function init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
  }
  return { init };
})();

/* ── Accordion ── */
const Accordion = (() => {
  function init() {
    $$('.accordion-trigger').forEach(trigger => {
      on(trigger, 'click', () => {
        const item = trigger.closest('.accordion-item');
        const body = trigger.nextElementSibling;
        const isOpen = body.classList.contains('open');

        // Close all in same group
        const parent = item.parentElement;
        $$('.accordion-trigger.active', parent).forEach(t => {
          t.classList.remove('active');
          t.nextElementSibling.classList.remove('open');
        });

        if (!isOpen) {
          trigger.classList.add('active');
          body.classList.add('open');
        }
      });
    });
  }
  return { init };
})();

/* ── Tabs ── */
const Tabs = (() => {
  function init() {
    $$('.tabs').forEach(tabGroup => {
      const buttons = $$('.tab-btn', tabGroup);
      buttons.forEach(btn => {
        on(btn, 'click', () => {
          const target = btn.getAttribute('data-tab');
          // Deactivate all
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          // Hide all panels
          const container = tabGroup.nextElementSibling || tabGroup.parentElement;
          $$('.tab-panel', container).forEach(p => p.classList.remove('active'));
          const panel = $(`#${target}`, container) || $(`[data-panel="${target}"]`, document);
          if (panel) panel.classList.add('active');
        });
      });
    });
  }
  return { init };
})();

/* ── Modal Management ── */
const Modal = (() => {
  function open(id) {
    const modal = $(`#${id}`);
    if (!modal) return;
    modal.classList.add('open');
    createOverlay(id);
    document.body.style.overflow = 'hidden';
  }

  function close(id) {
    const modal = id ? $(`#${id}`) : $('.modal.open');
    if (!modal) return;
    modal.classList.remove('open');
    removeOverlay();
    document.body.style.overflow = '';
  }

  function createOverlay(modalId) {
    let overlay = $('#modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'modal-overlay';
      overlay.className = 'overlay';
      document.body.appendChild(overlay);
    }
    overlay.classList.add('show');
    on(overlay, 'click', () => close());
  }

  function removeOverlay() {
    const overlay = $('#modal-overlay');
    if (overlay) overlay.classList.remove('show');
  }

  function init() {
    $$('[data-modal-open]').forEach(btn => {
      on(btn, 'click', () => open(btn.getAttribute('data-modal-open')));
    });
    $$('[data-modal-close]').forEach(btn => {
      on(btn, 'click', () => close(btn.closest('.modal')?.id));
    });
    on(document, 'keydown', e => { if (e.key === 'Escape') close(); });
  }

  return { init, open, close };
})();

/* ── Toast Notifications ── */
const Toast = (() => {
  let container;

  function init() {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  function show(message, type = 'default', duration = 3000) {
    if (!container) init();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity .3s';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  return { init, show };
})();

/* ── Form Validation ── */
const FormValidator = (() => {
  const rules = {
    required: (v) => v.trim() !== '' || 'This field is required.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email address.',
    minLength: (min) => (v) => v.length >= min || `Minimum ${min} characters required.`,
    phone: (v) => /^[\d\s\-\+\(\)]{7,}$/.test(v) || 'Please enter a valid phone number.',
    password: (v) => v.length >= 8 || 'Password must be at least 8 characters.',
  };

  function validate(input) {
    const fieldRules = (input.dataset.validate || '').split(',').map(r => r.trim()).filter(Boolean);
    let error = '';
    for (const rule of fieldRules) {
      if (rule === 'required') error = rules.required(input.value) === true ? '' : rules.required(input.value);
      else if (rule === 'email') error = rules.email(input.value) === true ? '' : rules.email(input.value);
      else if (rule === 'phone') error = rules.phone(input.value) === true ? '' : rules.phone(input.value);
      else if (rule === 'password') error = rules.password(input.value) === true ? '' : rules.password(input.value);
      else if (rule.startsWith('min:')) {
        const min = parseInt(rule.split(':')[1]);
        const result = rules.minLength(min)(input.value);
        error = result === true ? '' : result;
      }
      if (error) break;
    }
    showFieldError(input, error);
    return !error;
  }

  function showFieldError(input, message) {
    input.classList.toggle('error', !!message);
    const errorEl = input.parentElement.querySelector('.form-error') ||
                    input.closest('.form-group')?.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle('show', !!message);
    }
  }

  function initForm(form) {
    if (!form) return;
    const inputs = $$('[data-validate]', form);
    inputs.forEach(input => {
      on(input, 'blur', () => validate(input));
      on(input, 'input', () => { if (input.classList.contains('error')) validate(input); });
    });

    on(form, 'submit', e => {
      e.preventDefault();
      let valid = true;
      inputs.forEach(input => { if (!validate(input)) valid = false; });
      if (valid) {
        const submitText = form.dataset.successMsg || 'Message sent successfully! We\'ll be in touch shortly.';
        Toast.show(submitText, 'success');
        form.reset();
        inputs.forEach(input => input.classList.remove('error'));
      } else {
        Toast.show('Please fix the errors above.', 'error');
      }
    });
  }

  function init() {
    $$('form[data-validate-form]').forEach(form => initForm(form));
  }

  return { init, validate, initForm };
})();

/* ── Password Toggle ── */
function initPasswordToggles() {
  $$('[data-password-toggle]').forEach(btn => {
    on(btn, 'click', () => {
      const input = btn.closest('.input-wrap')?.querySelector('input');
      if (!input) return;
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.textContent = isText ? '👁️' : '🙈';
    });
  });
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = $$('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ── Service Details Page ── */
function initServiceDetails() {
  const page = $('#service-detail-page');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('service') || 'divorce-separation';
  const data = SERVICES[slug];

  if (!data) {
    page.innerHTML = '<div class="container section"><h2>Service not found.</h2><a class="btn btn-primary" href="services.html">View All Services</a></div>';
    return;
  }

  // Update page title & meta
  document.title = `${data.title} | Midnight Escapes`;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.content = data.description.substring(0, 155);

  // Hero
  const heroTitle = $('#sd-title');
  const heroTagline = $('#sd-tagline');
  const heroIcon = $('#sd-icon');
  const heroBg = $('#sd-hero');
  if (heroTitle) heroTitle.textContent = data.title;
  if (heroTagline) heroTagline.textContent = data.tagline;
  if (heroIcon) heroIcon.textContent = data.icon;
  if (heroBg) heroBg.style.background = `linear-gradient(135deg, ${data.heroColor} 0%, #144272 100%)`;

  // Description
  const descEl = $('#sd-description');
  if (descEl) descEl.textContent = data.description;

  // Process
  const processEl = $('#sd-process');
  if (processEl) {
    processEl.innerHTML = data.process.map(p => `
      <div class="process-step reveal">
        <div class="process-num">${p.step}</div>
        <div class="process-content">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Benefits
  const benefitsEl = $('#sd-benefits');
  if (benefitsEl) {
    benefitsEl.innerHTML = data.benefits.map(b => `
      <div class="benefit-item">
        <span class="benefit-icon">✓</span>
        <span>${b}</span>
      </div>
    `).join('');
  }

  // FAQs
  const faqsEl = $('#sd-faqs');
  if (faqsEl) {
    faqsEl.innerHTML = data.faqs.map((f, i) => `
      <div class="accordion-item">
        <button class="accordion-trigger" aria-expanded="false">
          ${f.q}
          <span class="accordion-icon">▼</span>
        </button>
        <div class="accordion-body">
          <p>${f.a}</p>
        </div>
      </div>
    `).join('');
    Accordion.init();
  }

  // Related services nav
  const relatedEl = $('#sd-related');
  if (relatedEl) {
    const others = Object.entries(SERVICES).filter(([k]) => k !== slug).slice(0, 3);
    relatedEl.innerHTML = others.map(([k, v]) => `
      <a href="service-details.html?service=${k}" class="related-service-card card reveal">
        <div class="service-icon">${v.icon}</div>
        <h4>${v.title}</h4>
        <p>${v.tagline}</p>
      </a>
    `).join('');
  }

  ScrollReveal.init();
}

/* ── Blog Details Page ── */
function initBlogDetails() {
  const page = $('#blog-detail-page');
  if (!page) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const blog = BLOGS.find(b => b.id === id);
  if (!blog) return;

  const titleEl = $('#bd-title');
  if (titleEl) titleEl.textContent = blog.title;
  document.title = `${blog.title} | LexCounsel`;

  const metaEl = $('#bd-meta');
  if (metaEl) metaEl.innerHTML = `
    <span class="blog-cat">${blog.cat}</span>
    <span>${blog.date}</span>
    <span>·</span>
    <span>${blog.readTime}</span>
  `;

  // Related posts
  const relatedEl = $('#bd-related');
  if (relatedEl) {
    const others = BLOGS.filter(b => b.id !== id).slice(0, 3);
    relatedEl.innerHTML = others.map(b => `
      <a href="blog-details.html?id=${b.id}" class="blog-card card reveal">
        <div class="blog-img">
          <div class="blog-img-inner" style="background:linear-gradient(135deg,#0A2647,#144272)">${b.icon}</div>
        </div>
        <div class="blog-body">
          <div class="blog-meta"><span class="blog-cat">${b.cat}</span><span>${b.date}</span></div>
          <h4>${b.title}</h4>
        </div>
      </a>
    `).join('');
  }

  ScrollReveal.init();
}

/* ── Coming Soon Countdown ── */
function initCountdown() {
  const countdownEl = $('#countdown-timer');
  if (!countdownEl) return;
  const target = new Date('2026-06-01T00:00:00').getTime();

  function tick() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) { countdownEl.textContent = 'We are live!'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    $$('.cd-days', countdownEl)[0] && ($$('.cd-days', countdownEl)[0].querySelector('.cd-num').textContent = d);
    $$('.cd-hours', countdownEl)[0] && ($$('.cd-hours', countdownEl)[0].querySelector('.cd-num').textContent = pad(h));
    $$('.cd-mins', countdownEl)[0] && ($$('.cd-mins', countdownEl)[0].querySelector('.cd-num').textContent = pad(m));
    $$('.cd-secs', countdownEl)[0] && ($$('.cd-secs', countdownEl)[0].querySelector('.cd-num').textContent = pad(s));
  }
  tick();
  setInterval(tick, 1000);
}

/* ── Blog Filter ── */
function initBlogFilter() {
  const filterBtns = $$('[data-blog-filter]');
  const cards = $$('[data-blog-cat]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    on(btn, 'click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-blog-filter');
      cards.forEach(card => {
        const match = cat === 'all' || card.getAttribute('data-blog-cat') === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* ── Smooth Anchor Scroll ── */
function initSmoothAnchors() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ── Testimonial Auto-Scroll ── */
function initTestimonialSlider() {
  const slider = $('#testimonial-slider');
  if (!slider) return;
  const track = slider.querySelector('.testimonial-track');
  if (!track) return;
  let current = 0;
  const cards = $$('.testimonial-card', track);
  const total = cards.length;
  if (total <= 1) return;

  function goTo(index) {
    current = (index + total) % total;
    const width = cards[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${current * width}px)`;
    $$('.testimonial-dot', slider).forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  // Add dots
  const dotsEl = slider.querySelector('.testimonial-dots');
  if (dotsEl) {
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = `testimonial-dot${i === 0 ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i+1}`);
      on(dot, 'click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  $$('[data-testimonial-prev]', slider).forEach(b => on(b, 'click', () => goTo(current - 1)));
  $$('[data-testimonial-next]', slider).forEach(b => on(b, 'click', () => goTo(current + 1)));

  const auto = setInterval(() => goTo(current + 1), 5000);
  on(slider, 'mouseenter', () => clearInterval(auto));
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  ScrollProgress.init();
  BackToTop.init();
  ScrollReveal.init();
  Accordion.init();
  Tabs.init();
  Modal.init();
  Toast.init();
  FormValidator.init();
  initPasswordToggles();
  initCounters();
  initServiceDetails();
  initBlogDetails();
  initCountdown();
  initBlogFilter();
  initSmoothAnchors();
  initTestimonialSlider();
});
