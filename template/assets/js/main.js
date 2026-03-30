/* =====================================================
   LEXCOUNSEL — main.js
   Modular ES6 JavaScript
   ===================================================== */

'use strict';

/* ── Helpers ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

/* ── Services Data ── */
const SERVICES = {
  'divorce-separation': {
    title: 'Divorce & Separation',
    icon: '⚖️',
    heroColor: '#0A2647',
    tagline: 'Protecting your rights through life\'s most difficult transitions.',
    description: `Divorce is one of the most emotionally and legally complex events in a person's life. At LexCounsel, Jonathan M. Hargrove, Esq. brings over two decades of experience to help clients navigate property division, spousal support, and the dissolution of marriage with clarity and compassion. We work to secure equitable outcomes while minimizing conflict and protecting your financial future.`,
    process: [
      { step: 1, title: 'Initial Consultation', desc: 'We assess your case, goals, and legal options in a confidential session.' },
      { step: 2, title: 'Filing & Documentation', desc: 'We prepare and file all necessary legal documents with the court.' },
      { step: 3, title: 'Negotiation / Mediation', desc: 'We advocate for your best interests in settlement discussions.' },
      { step: 4, title: 'Court Representation', desc: 'If required, we provide strong litigation representation.' }
    ],
    benefits: ['Fair asset division', 'Spousal support guidance', 'Minimized court time', 'Confidential process', 'Post-divorce modifications', 'Compassionate counsel'],
    faqs: [
      { q: 'How long does a divorce take?', a: 'Uncontested divorces may resolve in 3–6 months. Contested cases can take 1–2 years depending on complexity.' },
      { q: 'Will I have to go to court?', a: 'Many cases are settled through mediation without a trial. We always seek the most efficient resolution.' },
      { q: 'How is property divided in divorce?', a: 'Property division follows equitable distribution principles, considering contributions, duration of marriage, and financial circumstances.' }
    ]
  },
  'child-custody': {
    title: 'Child Custody',
    icon: '👨‍👧',
    heroColor: '#144272',
    tagline: 'Putting your children\'s best interests first, always.',
    description: `Child custody disputes require a delicate balance of legal advocacy and emotional sensitivity. LexCounsel provides experienced representation in both physical and legal custody matters, parenting plan negotiations, and modification proceedings. We place the welfare of your children at the center of every decision.`,
    process: [
      { step: 1, title: 'Case Evaluation', desc: 'We evaluate current circumstances and define the ideal custody arrangement.' },
      { step: 2, title: 'Parenting Plan', desc: 'We draft a comprehensive, child-centered parenting plan.' },
      { step: 3, title: 'Mediation', desc: 'We facilitate constructive dialogue to reach mutually agreeable terms.' },
      { step: 4, title: 'Court Order', desc: 'We finalize and enforce legally binding custody orders.' }
    ],
    benefits: ['Child-centered approach', 'Parenting plan drafting', 'Modification proceedings', 'Guardian ad litem coordination', 'Relocation disputes', 'Emergency custody orders'],
    faqs: [
      { q: 'What is the difference between legal and physical custody?', a: 'Legal custody concerns decision-making authority; physical custody determines where the child primarily lives.' },
      { q: 'Can custody orders be modified?', a: 'Yes. If there has been a material change in circumstances, the court may modify existing custody orders.' },
      { q: 'How does the court determine custody?', a: 'Courts use the "best interests of the child" standard, considering factors like stability, parental fitness, and the child\'s preferences.' }
    ]
  },
  'adoption': {
    title: 'Adoption Services',
    icon: '🏠',
    heroColor: '#0d3157',
    tagline: 'Building families through expert legal guidance.',
    description: `The adoption process is a joyful journey that requires careful legal navigation. Jonathan M. Hargrove, Esq. guides families through domestic, international, and stepparent adoptions, ensuring every legal requirement is met with precision and care. We make the path to expanding your family as smooth as possible.`,
    process: [
      { step: 1, title: 'Adoption Assessment', desc: 'We determine the appropriate adoption pathway for your family.' },
      { step: 2, title: 'Home Study', desc: 'We coordinate with agencies for required home study processes.' },
      { step: 3, title: 'Petition Filing', desc: 'We file adoption petitions and handle all court documentation.' },
      { step: 4, title: 'Finalization', desc: 'We attend finalization hearings and secure the adoption decree.' }
    ],
    benefits: ['Domestic adoption', 'Stepparent adoption', 'Foster-to-adopt', 'Home study coordination', 'Consent termination', 'Post-adoption support'],
    faqs: [
      { q: 'How long does adoption take?', a: 'Timelines vary: domestic newborn adoption averages 1–2 years; stepparent adoptions can finalize in 3–6 months.' },
      { q: 'What rights do birth parents have?', a: 'Birth parents must voluntarily terminate or have parental rights legally terminated before adoption can proceed.' },
      { q: 'Can same-sex couples adopt?', a: 'Yes. Same-sex couples have equal adoption rights. We proudly serve all families.' }
    ]
  },
  'wills-trusts': {
    title: 'Wills & Trusts',
    icon: '📜',
    heroColor: '#0A2647',
    tagline: 'Securing your legacy for the generations ahead.',
    description: `Creating a comprehensive estate plan with a well-drafted will and trust structure is the most responsible gift you can leave your loved ones. LexCounsel designs customized wills, revocable and irrevocable trusts, and living wills that reflect your wishes and protect your assets from unnecessary probate and taxation.`,
    process: [
      { step: 1, title: 'Estate Review', desc: 'We audit your assets, beneficiaries, and specific wishes.' },
      { step: 2, title: 'Plan Design', desc: 'We design the optimal will and trust structure for your estate.' },
      { step: 3, title: 'Document Drafting', desc: 'We draft legally sound documents tailored to your situation.' },
      { step: 4, title: 'Execution & Storage', desc: 'We oversee proper signing, witnessing, and secure storage.' }
    ],
    benefits: ['Custom will drafting', 'Revocable living trusts', 'Irrevocable trusts', 'Pour-over wills', 'Healthcare directives', 'Power of attorney'],
    faqs: [
      { q: 'Do I need both a will and a trust?', a: 'It depends on your estate size and goals. Many clients benefit from both: a trust for major assets and a will as a safety net.' },
      { q: 'What happens without a will?', a: 'Your estate passes via intestate succession laws, which may not reflect your wishes and can be costly.' },
      { q: 'Can I change my will after signing?', a: 'Yes. Wills can be amended via codicil or fully revoked and replaced at any time.' }
    ]
  },
  'estate-planning': {
    title: 'Estate Planning',
    icon: '🏛️',
    heroColor: '#144272',
    tagline: 'Comprehensive strategies that protect what you\'ve built.',
    description: `Estate planning goes beyond a will. LexCounsel develops holistic strategies encompassing tax planning, business succession, asset protection, and charitable giving. Jonathan M. Hargrove, Esq. works closely with financial advisors and CPAs to create plans that minimize estate taxes and maximize your legacy.`,
    process: [
      { step: 1, title: 'Financial Assessment', desc: 'Complete review of assets, liabilities, and tax exposure.' },
      { step: 2, title: 'Strategy Development', desc: 'Designing a tax-efficient, comprehensive estate plan.' },
      { step: 3, title: 'Legal Drafting', desc: 'Preparation of all required legal instruments and documents.' },
      { step: 4, title: 'Ongoing Review', desc: 'Annual reviews to adjust for life changes and new legislation.' }
    ],
    benefits: ['Tax minimization', 'Business succession', 'Asset protection trusts', 'Charitable planning', 'Life insurance trusts', 'Annual plan reviews'],
    faqs: [
      { q: 'When should I start estate planning?', a: 'As soon as you have assets, dependents, or specific wishes. Estate planning is not just for the wealthy or elderly.' },
      { q: 'How can I minimize estate taxes?', a: 'Strategies include irrevocable trusts, lifetime gifting, charitable planning, and proper beneficiary designations.' },
      { q: 'What is a power of attorney?', a: 'A POA designates someone to manage your financial or medical decisions if you become incapacitated.' }
    ]
  },
  'probate': {
    title: 'Probate Administration',
    icon: '⚡',
    heroColor: '#0d3157',
    tagline: 'Efficient estate administration with compassionate guidance.',
    description: `The probate process can be lengthy and burdensome without proper legal guidance. LexCounsel streamlines probate administration for executors and beneficiaries, handling creditor claims, court filings, asset distribution, and dispute resolution. We handle the legal complexities so you can focus on what matters.`,
    process: [
      { step: 1, title: 'Petition Filing', desc: 'Filing the petition for probate and appointment of executor.' },
      { step: 2, title: 'Asset Inventory', desc: 'Identifying, valuing, and securing all estate assets.' },
      { step: 3, title: 'Creditor Resolution', desc: 'Notifying creditors and resolving valid claims against the estate.' },
      { step: 4, title: 'Distribution', desc: 'Distributing remaining assets to beneficiaries per the will or law.' }
    ],
    benefits: ['Executor representation', 'Beneficiary advocacy', 'Creditor negotiations', 'Will contests', 'Estate tax filings', 'Multi-state probate'],
    faqs: [
      { q: 'How long does probate take?', a: 'Simple estates may close in 6–9 months. Complex estates or disputes can extend proceedings to 2+ years.' },
      { q: 'Can probate be avoided?', a: 'Yes — through living trusts, joint ownership, beneficiary designations, and payable-on-death accounts.' },
      { q: 'What are executor duties?', a: 'Executors must inventory assets, notify creditors, file taxes, and distribute assets according to the will.' }
    ]
  }
};

/* ── Blog Data ── */
const BLOGS = [
  { id: 1, title: 'Understanding Equitable Distribution in Divorce', cat: 'Family Law', date: 'March 15, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '7 min read', icon: '⚖️', excerpt: 'A comprehensive guide to how courts divide marital property and what factors influence the outcome of asset division proceedings.' },
  { id: 2, title: 'Creating a Comprehensive Estate Plan in 2026', cat: 'Estate Law', date: 'March 8, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '9 min read', icon: '📜', excerpt: 'Why estate planning is more critical than ever, and the five cornerstone documents every adult should have in place.' },
  { id: 3, title: 'Child Custody: What the Courts Really Consider', cat: 'Family Law', date: 'Feb 28, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '6 min read', icon: '👨‍👧', excerpt: 'Breaking down the "best interests of the child" standard and how judges evaluate custody arrangements.' },
  { id: 4, title: 'Revocable vs. Irrevocable Trusts: Which Is Right for You?', cat: 'Estate Law', date: 'Feb 20, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '8 min read', icon: '🏛️', excerpt: 'A side-by-side comparison of trust types to help you make an informed estate planning decision.' },
  { id: 5, title: 'The Adoption Journey: Step-by-Step Legal Guide', cat: 'Family Law', date: 'Feb 12, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '11 min read', icon: '🏠', excerpt: 'From home study to finalization, a detailed walkthrough of the legal steps in domestic adoption.' },
  { id: 6, title: 'Probate vs. Non-Probate Assets: Key Differences', cat: 'Estate Law', date: 'Feb 5, 2026', author: 'Jonathan M. Hargrove, Esq.', readTime: '5 min read', icon: '📋', excerpt: 'Understanding which assets pass through your will and which transfer outside probate can save your heirs time and money.' }
];

/* ── Theme Management ── */
const ThemeManager = (() => {
  const HTML = document.documentElement;
  const STORAGE_KEY = 'lx-theme';
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
  const STORAGE_KEY = 'lx-dir';
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
  document.title = `${data.title} | LexCounsel`;
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
