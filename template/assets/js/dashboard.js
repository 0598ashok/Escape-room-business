/* ===================================================
   LEXCOUNSEL - Dashboard Interactivity (SaaS Quality)
   =================================================== */

'use strict';

const DashApp = (() => {
  // DOM Elements
  const els = {
    sidebar: document.querySelector('.dash-sidebar'),
    sidebarToggle: document.querySelector('.dash-sidebar-toggle'),
    navLinks: document.querySelectorAll('.dash-nav-link[data-section]'),
    sections: document.querySelectorAll('.dash-section'),
    modals: document.querySelectorAll('.dash-modal'),
    modalTriggers: document.querySelectorAll('[data-modal]'),
    modalCloses: document.querySelectorAll('.modal-close, [data-modal-dismiss]'),
    charts: document.querySelectorAll('.chart-body'),
    kanbanCards: document.querySelectorAll('.kanban-card'),
    kanbanCols: document.querySelectorAll('.kanban-col'),
    chatItems: document.querySelectorAll('.chat-item'),
    chatContainer: document.querySelector('.chat-messages'),
    chatInput: document.querySelector('.chat-input input'),
    chatSend: document.querySelector('.chat-input button'),
  };

  // State
  let state = {
    activeSection: 'overview',
    sidebarCollapsed: false,
    theme: localStorage.getItem('lx-theme') || 'light',
  };

  /* --- Navigation & Sidebar --- */
  function initNavigation() {
    // Sidebar Toggle
    if (els.sidebarToggle) {
      els.sidebarToggle.addEventListener('click', () => {
        state.sidebarCollapsed = !state.sidebarCollapsed;
        els.sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
        document.body.classList.toggle('dash-sidebar-collapsed', state.sidebarCollapsed);
        
        // Mobile handling
        if (window.innerWidth <= 1024) {
          els.sidebar.classList.toggle('mobile-open');
        }
      });
    }

    // Section Switching
    els.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        switchSection(sectionId);
        
        // Close sidebar on mobile after click
        if (window.innerWidth <= 1024) {
          els.sidebar.classList.remove('mobile-open');
        }
      });
    });

    // Check URL hash or default
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(`section-${hash}`)) {
      switchSection(hash);
    }
  }

  function switchSection(id) {
    els.sections.forEach(s => s.classList.remove('active'));
    els.navLinks.forEach(l => l.classList.remove('active'));

    const targetSection = document.getElementById(`section-${id}`);
    const targetLink = document.querySelector(`.dash-nav-link[data-section="${id}"]`);

    if (targetSection && targetLink) {
      targetSection.classList.add('active');
      targetLink.classList.add('active');
      state.activeSection = id;
      window.location.hash = id;
      
      // Update Title
      const pageTitle = document.querySelector('.dash-page-title');
      if (pageTitle) pageTitle.textContent = targetLink.querySelector('.dash-nav-text').textContent;
      
      // Re-render charts if section is overview
      if (id === 'overview') renderCharts();
    }
  }

  /* --- Charts (Pure SVG) --- */
  function renderCharts() {
    els.charts.forEach(container => {
      const type = container.getAttribute('data-type');
      if (type === 'bar') renderBarChart(container);
      if (type === 'line') renderLineChart(container);
    });
  }

  function renderBarChart(container) {
    // Monthly Case Volume (approximate Jan-Dec)
    const data = [12, 18, 15, 24, 21, 28, 22, 19, 25, 30, 28, 35];
    container.innerHTML = '';
    
    data.forEach(val => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      // Scale: Max cases = 40
      const height = (val / 40) * 100;
      bar.style.height = '0%';
      container.appendChild(bar);
      
      setTimeout(() => {
        bar.style.height = `${height}%`;
      }, 100);
    });
  }

  function renderLineChart(container) {
    // Revenue Growth over 12 months (Total should hit ~$48,500)
    // Points: X scale 1-12, Y scale 1-200 (approximate)
    const points = "0,160 30,140 60,155 90,120 120,130 150,110 180,95 210,80 240,70 270,55 300,50 330,40";
    container.innerHTML = `
      <svg viewBox="0 0 330 200" preserveAspectRatio="none" style="width:100%; height:100%; overflow: visible;">
        <path d="M ${points}" fill="none" stroke="var(--clr-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M ${points} V 200 H 0 Z" fill="url(#gradient)" opacity="0.1" />
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="var(--clr-primary)" />
            <stop offset="100%" stop-color="var(--clr-primary)" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    `;
  }

  /* --- Modals --- */
  function initModals() {
    els.modalTriggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
      });
    });

    els.modalCloses.forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.dash-modal');
        if (modal) modal.classList.remove('open');
      });
    });

    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('dash-modal')) {
        e.target.classList.remove('open');
      }
    });
  }

  /* --- Drag & Drop Kanban --- */
  function initKanban() {
    els.kanbanCards.forEach(card => {
      card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });
    });

    els.kanbanCols.forEach(col => {
      col.addEventListener('dragover', (e) => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        col.appendChild(dragging);
      });
    });
  }

  /* --- Messaging --- */
  function initChat() {
    els.chatItems.forEach(item => {
      item.addEventListener('click', () => {
        els.chatItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        // In a real app, load messages for this conversation here
      });
    });

    const sendMessage = () => {
      const text = els.chatInput.value.trim();
      if (!text) return;

      const msg = document.createElement('div');
      msg.className = 'msg-bubble msg-out';
      msg.textContent = text;
      els.chatContainer.appendChild(msg);
      els.chatInput.value = '';
      els.chatContainer.scrollTop = els.chatContainer.scrollHeight;

      // Mock reply
      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'msg-bubble msg-in';
        reply.textContent = "Thank you for the information. I'll review this with the team.";
        els.chatContainer.appendChild(reply);
        els.chatContainer.scrollTop = els.chatContainer.scrollHeight;
      }, 1000);
    };

    if (els.chatSend) els.chatSend.addEventListener('click', sendMessage);
    if (els.chatInput) {
      els.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
      });
    }
  }

  /* --- Toasts & Notifications --- */
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `dash-toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* --- Initialize --- */
  function init() {
    initNavigation();
    initModals();
    initKanban();
    initChat();
    renderCharts();
    
    // Lucide Icons
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  return { init, showToast };
})();

// Initialize on Load
document.addEventListener('DOMContentLoaded', DashApp.init);
