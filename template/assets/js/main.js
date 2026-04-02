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
    heroColor: '#1a1a1a',
    bgImg: 'assets/img/haunted_mansion_1774937219200.png',
    difficulty: 4,
    players: '2-8 Players',
    duration: '60 Minutes',
    theme: 'Horror',
    price: '$25 / Person',
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
    heroColor: '#2c3e50',
    bgImg: 'assets/img/prison_break_1774937239771.png',
    difficulty: 3,
    players: '2-6 Players',
    duration: '60 Minutes',
    theme: 'Action',
    price: '$28 / Person',
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
    heroColor: '#1c2833',
    bgImg: 'assets/img/spy_mission_1774937342913.png',
    difficulty: 5,
    players: '2-4 Players',
    duration: '60 Minutes',
    theme: 'Espionage',
    price: '$30 / Person',
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
    heroColor: '#7d6608',
    bgImg: 'assets/img/treasure_hunt_1774937365746.png',
    difficulty: 2,
    players: '2-8 Players',
    duration: '60 Minutes',
    theme: 'Adventure',
    price: '$25 / Person',
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
    heroColor: '#5d4037',
    bgImg: 'assets/img/lost_tomb_1774937402250.png',
    difficulty: 3,
    players: '2-6 Players',
    duration: '60 Minutes',
    theme: 'Mystery',
    price: '$26 / Person',
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
    heroColor: '#424242',
    bgImg: 'assets/img/asylum_1774937434212.png',
    difficulty: 4,
    players: '4-8 Players',
    duration: '60 Minutes',
    theme: 'Horror',
    price: '$32 / Person',
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
  { id: 1, title: '5 Tips to Beat the Clock in Any Escape Room', cat: 'Pro Tips', date: 'March 15, 2026', author: 'Alex Thorne', readTime: '5 min read', icon: '<i data-lucide="timer"></i>', bgImg: 'assets/img/haunted_mansion_1774937219200.png', excerpt: 'Master the art of time management. From effective communication to organized searching, here is how the experts escape in record time.', content: `
    <p>Time is the one thing you can't get more of in an escape room. Whether you have 60 minutes or a full hour, the clock is your primary adversary. After overseeing thousands of games, I've identified the five habits that separate the escapees from the trapped.</p>
    <h4>1. Search High, Low, and Everywhere In Between</h4>
    <p>The most common reason teams fail is simply missing a clue that was "hiding in plain sight." Don't just look at eye level. Check under rugs, inside hollow books, behind picture frames, and even in the corners of the ceiling. If a drawer is locked, there is a key or a code nearby—keep looking!</p>
    <blockquote>"The best teams don't just solve puzzles; they discover connections." — Alex Thorne</blockquote>
  ` },
  { id: 2, title: 'Why Team Building is Better in an Escape Room', cat: 'Events', date: 'March 8, 2026', author: 'Alex Thorne', readTime: '7 min read', icon: '<i data-lucide="handshake"></i>', bgImg: 'assets/img/prison_break_1774937239771.png', excerpt: 'Corporate puzzles revealed. How collaborative problem-solving translates to better workplace synergy and higher employee morale.', content: `
    <p>Corporate team building used to mean trust falls and awkward icebreakers. But in the modern workplace, teams need to solve complex problems under pressure. That's where escape rooms come in.</p>
    <h4>Real Stakes, Real Cooperation</h4>
    <p>In Sector 9, your team is split into two cells. You literally cannot escape unless you communicate through the bars. This forces people out of their comfort zones and tests their ability to give and receive instructions clearly.</p>
  ` },
  { id: 3, title: 'The Psychology of Fear: Designing the Asylum', cat: 'Behind the Scenes', date: 'Feb 28, 2026', author: 'Alex Thorne', readTime: '9 min read', icon: '<i data-lucide="brain"></i>', bgImg: 'assets/img/asylum_1774937434212.png', excerpt: 'A deep dive into the psychological triggers and atmospheric design used to create our most intense horror experience yet.', content: `
    <p>Designing "The Asylum" wasn't just about jump scares. It was about creating a sense of dread that stays with you. We consulted with psychologists to understand how lighting, sound, and spatial design can trigger the "fight or flight" response.</p>
    <h4>The Power of Soundscape</h4>
    <p>We use infrasound—frequencies just below the range of human hearing—to create a feeling of unease and anxiety. Combined with the distant sound of flickering lights and rhythmic scratching, the atmosphere becomes a character itself.</p>
  ` },
  { id: 4, title: 'Beginner?s Guide to Your First Escape Room', cat: 'Pro Tips', date: 'Feb 20, 2026', author: 'Alex Thorne', readTime: '6 min read', icon: '<i data-lucide="key"></i>', bgImg: 'assets/img/spy_mission_1774937342913.png', excerpt: 'Everything you need to know before your first adventure. No spoilers, just essential strategies for your first 60 minutes of fun.', content: `
    <p>Your first escape room can be intimidating. You're locked in a room (figuratively!) and told to solve mysteries you've never seen before. Here is a survival guide for your first hour of immersive fun.</p>
    <h4>Pick the Right Room</h4>
    <p>Don't start with professional-level rooms like "Spy Mission." Try our "Treasure Hunt" first—it's family-friendly and focuses on visual logic rather than intense pressure.</p>
  ` },
  { id: 5, title: 'Uncovering the Lore: The Blackwood Estate History', cat: 'Deep Lore', date: 'Feb 12, 2026', author: 'Alex Thorne', readTime: '10 min read', icon: '<i data-lucide="home"></i>', bgImg: 'assets/img/haunted_mansion_1774937219200.png', excerpt: 'Read the official backstory of the Haunted Mansion. Discover the hidden details that make this room our players? favorite.', content: `
    <p>The Haunted Mansion is our most requested room, but many players miss the tragic story behind the Blackwood family. The estate wasn't always a place of shadows.</p>
    <h4>The Winter Gala of 1926</h4>
    <p>The official records state the family disappeared during their annual gala. But if you look closely at the letters in the hidden study, you'll find mentions of a secret ritual meant to protect the family from a rising curse.</p>
  ` },
  { id: 6, title: 'Escape Room vs. VR: Which is the Ultimate Adventure?', cat: 'Lifestyle', date: 'Feb 5, 2026', author: 'Alex Thorne', readTime: '5 min read', icon: '<i data-lucide="glasses"></i>', bgImg: 'assets/img/treasure_hunt_1774937365746.png', excerpt: 'Comparing tactile reality with virtual worlds. Why physical interaction and real-life teamwork still reign supreme in the world of puzzles.', content: `
    <p>Virtual Reality has come a long way, but it still hasn't replaced the tactile thrill of a real-life escape room. Here's why getting your hands dirty (metaphorically) is still the ultimate adventure.</p>
    <h4>The Sense of Touch</h4>
    <p>In a real room, when you find a cold iron key and turn it in a mechanical lock, your brain receives sensory feedback that VR simply cannot replicate yet.</p>
  ` }
];

/* ── Common Path Helper ── */
function getAssetPath(subpath) {
  // If we're in a subdirectory of template (like a hypothetical 'pages' folder)
  // this would return the correct relative path.
  // In the current structure, all HTML files are in template/ root.
  const path = window.location.pathname;
  if (path.includes('/pages/') || path.includes('/admin/')) {
    return '../' + subpath;
  }
  return './' + subpath;
}

/* ── Theme Management ── */
const ThemeManager = (() => {
  const HTML = document.documentElement;
  const STORAGE_KEY = 've-theme'; // VaultEscape Theme
  const DARK_CSS_ID = 'dark-mode-css';

  const SELECTORS = {
    btns: '[data-theme-toggle]',
    cbs: '#settings-theme-toggle, #profile-theme-toggle, .theme-checkbox-toggle'
  };

  function loadDarkCSS() {
    if (!$(`#${DARK_CSS_ID}`)) {
      const link = document.createElement('link');
      link.id = DARK_CSS_ID;
      link.rel = 'stylesheet';
      link.href = getAssetPath('assets/css/dark-mode.css');
      document.head.appendChild(link);
    }
  }

  function setTheme(theme) {
    HTML.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    
    if (theme === 'dark') {
      loadDarkCSS();
    }
    
    updateUI(theme);
  }

  function updateUI(theme) {
    const isDark = theme === 'dark';

    // Update buttons
    $$(SELECTORS.btns).forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      } else {
        btn.textContent = isDark ? '☀️' : '🌙';
      }
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    // Sync checkboxes
    $$(SELECTORS.cbs).forEach(cb => {
      cb.checked = isDark;
    });
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    
    // Initial application
    setTheme(theme);

    // Global listener for buttons
    $$(SELECTORS.btns).forEach(btn => {
      on(btn, 'click', (e) => {
        e.preventDefault();
        const current = HTML.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    });

    // Global listener for checkboxes
    $$(SELECTORS.cbs).forEach(cb => {
      on(cb, 'change', () => {
        setTheme(cb.checked ? 'dark' : 'light');
      });
    });
  }

  return { init, setTheme };
})();


/* ── RTL Management ── */
const RTLManager = (() => {
  const HTML = document.documentElement;
  const STORAGE_KEY = 've-dir'; // VaultEscape Direction

  const SELECTORS = {
    btns: '[data-rtl-toggle]',
    cbs: '#settings-rtl-toggle, #profile-rtl-toggle, .rtl-checkbox-toggle'
  };

  function setDir(dir) {
    HTML.setAttribute('dir', dir);
    HTML.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem(STORAGE_KEY, dir);
    updateUI(dir);
  }

  function updateUI(dir) {
    const isRTL = dir === 'rtl';

    // Update buttons
    $$(SELECTORS.btns).forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        btn.title = isRTL ? 'Switch to Left-to-Right' : 'Switch to Arabic/RTL';
        // If it's a dashboard button with an icon, we might want to flip the icon or just keep it
      } else {
        btn.textContent = isRTL ? '← LTR' : 'RTL →';
        btn.title = isRTL ? 'Switch to Left-to-Right' : 'Switch to Arabic/RTL';
      }
      
      // Special case for dashboard toggle icons which might use Lucide
      const lucideIcon = btn.querySelector('[data-lucide="languages"]') || (btn.classList.contains('dash-topbar-btn') && btn.querySelector('i'));
      if (lucideIcon) {
        btn.style.color = isRTL ? 'var(--clr-accent)' : '';
      }
    });

    // Sync checkboxes
    $$(SELECTORS.cbs).forEach(cb => {
      cb.checked = isRTL;
    });
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'ltr';
    setDir(saved);

    // Global listener for buttons
    $$(SELECTORS.btns).forEach(btn => {
      on(btn, 'click', (e) => {
        e.preventDefault();
        const current = HTML.getAttribute('dir') || 'ltr';
        setDir(current === 'rtl' ? 'ltr' : 'rtl');
      });
    });

    // Global listener for checkboxes
    $$(SELECTORS.cbs).forEach(cb => {
      on(cb, 'change', () => {
        setDir(cb.checked ? 'rtl' : 'ltr');
      });
    });
  }

  return { init, setDir };
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
    $$('[data-modal-open], [data-modal]').forEach(btn => {
      on(btn, 'click', () => open(btn.getAttribute('data-modal-open') || btn.getAttribute('data-modal')));
    });
    $$('[data-modal-close], .modal-close').forEach(btn => {
      on(btn, 'click', () => close(btn.closest('.modal, .dash-modal')?.id));
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
  document.title = `${data.title} | VaultEscape`;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.content = data.description.substring(0, 155);

  // Hero
  const heroTitle = $('#sd-title');
  const heroTagline = $('#sd-tagline');
  const heroBg = $('#sd-hero-bg');
  if (heroTitle) heroTitle.textContent = data.title;
  if (heroTagline) heroTagline.textContent = data.tagline;
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${data.bgImg}')`;
  }

  // Stats
  if ($('#sd-stat-difficulty')) $('#sd-stat-difficulty').textContent = `${data.difficulty}/5`;
  if ($('#sd-stat-players')) $('#sd-stat-players').textContent = data.players;
  if ($('#sd-stat-duration')) $('#sd-stat-duration').textContent = data.duration;
  if ($('#sd-price')) $('#sd-price').textContent = data.price.split(' ')[0];
  if ($('#sd-spec-theme')) $('#sd-spec-theme').textContent = data.theme;
  if ($('#sd-spec-age')) $('#sd-spec-age').textContent = data.difficulty >= 4 ? '16+' : '12+';
  if ($('#sd-spec-success')) {
     const rates = { 5: '15%', 4: '35%', 3: '50%', 2: '75%', 1: '90%' };
     $('#sd-spec-success').textContent = rates[data.difficulty] || 'Moderate';
  }

  // Description
  const descEl = $('#sd-description');
  if (descEl) descEl.textContent = data.description;

  // Process
  const processEl = $('#sd-process');
  if (processEl) {
    processEl.innerHTML = data.process.map(p => `
      <div class="sd-process-step reveal">
        <div class="sd-process-num">${p.step}</div>
        <div class="sd-process-content">
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
      <div class="flex align-center gap-2">
        <span class="text-accent">✓</span>
        <span class="fs-sm">${b}</span>
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
          <span class="accordion-icon">▾</span>
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
      <a href="service-details.html?service=${k}" class="related-card reveal">
        <div class="related-img" style="background-image: url('${v.bgImg}')"></div>
        <div class="related-body">
          <h4>${v.title}</h4>
          <p>${v.tagline}</p>
          <div class="flex justify-between align-center">
            <span class="fs-xs fw-700 text-accent uppercase">${v.theme}</span>
            <span class="btn btn-ghost btn-sm" style="padding:0">View <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
          </div>
        </div>
      </a>
    `).join('');
  }
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
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
  const heroBg = $('#bd-hero-bg');
  if (titleEl) titleEl.textContent = blog.title;
  if (heroBg) heroBg.style.backgroundImage = `url('${blog.bgImg}')`;
  document.title = `${blog.title} | VaultEscape`;

  const metaEl = $('#bd-meta');
  if (metaEl) metaEl.innerHTML = `
    <span class="blog-cat-badge">${blog.cat}</span>
    <span class="b-meta"><i data-lucide="user"></i> ${blog.author}</span>
    <span class="b-meta"><i data-lucide="calendar"></i> ${blog.date}</span>
    <span class="b-meta"><i data-lucide="clock"></i> ${blog.readTime}</span>
  `;

  // Content
  const contentEl = $('#bd-content');
  if (contentEl) contentEl.innerHTML = blog.content;

  // Sidebar author
  const authorName = $('#bd-author-name');
  if (authorName) authorName.textContent = blog.author;

  // Related posts
  const relatedEl = $('#bd-related');
  if (relatedEl) {
    const others = BLOGS.filter(b => b.id !== id).slice(0, 3);
    relatedEl.innerHTML = others.map(b => `
      <a href="blog-details.html?id=${b.id}" class="blog-grid-card reveal">
        <div class="grid-blog-img" style="background-image: url('${b.bgImg}')"></div>
        <div class="grid-blog-body" style="padding:24px">
          <span class="blog-cat-badge" style="font-size:0.6rem">${b.cat}</span>
          <h4 style="font-size:1.1rem;margin:8px 0">${b.title}</h4>
          <div class="blog-card-footer" style="padding-top:12px">
            <span class="b-meta"><i data-lucide="calendar"></i> ${b.date}</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
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
    const dir = document.documentElement.getAttribute('dir') || 'ltr';
    const multiplier = dir === 'rtl' ? 1 : -1;
    track.style.transform = `translateX(${multiplier * current * width}px)`;
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
  initBlogList();
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

/* ── Blog List Page ── */
function initBlogList() {
  const container = $('#blog-list-container');
  if (!container) return;

  const featured = BLOGS[0];
  const others = BLOGS.slice(1);

  let html = `
    <!-- Featured Article -->
    <div class="featured-blog-group reveal">
      <a href="blog-details.html?id=${featured.id}" class="featured-blog-card">
        <div class="f-blog-img" style="background-image: url('${featured.bgImg}')"></div>
        <div class="f-blog-content">
          <span class="blog-cat-badge">${featured.cat}</span>
          <h2 class="f-blog-title">${featured.title}</h2>
          <p class="f-blog-excerpt">${featured.excerpt}</p>
          <div class="blog-card-footer">
            <span class="b-meta"><i data-lucide="user"></i> ${featured.author}</span>
            <span class="b-meta"><i data-lucide="calendar"></i> ${featured.date}</span>
            <span class="b-meta"><i data-lucide="clock"></i> ${featured.readTime}</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Article Grid -->
    <div class="blog-grid mt-6">
      ${others.map(b => `
        <a href="blog-details.html?id=${b.id}" class="blog-grid-card reveal" data-blog-cat="${b.cat}">
          <div class="grid-blog-img" style="background-image: url('${b.bgImg}')"></div>
          <div class="grid-blog-body">
            <span class="blog-cat-badge">${b.cat}</span>
            <h4 class="grid-blog-title">${b.title}</h4>
            <p class="grid-blog-excerpt">${b.excerpt.substring(0, 90)}...</p>
            <div class="blog-card-footer">
              <span class="b-meta"><i data-lucide="calendar"></i> ${b.date}</span>
              <span class="b-meta"><i data-lucide="clock"></i> ${b.readTime}</span>
            </div>
          </div>
        </a>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  ScrollReveal.init();
}
