/* ============================================================
   Cognizant Moment — Component enhancer
   Dependency-free. Load with `defer`. Auto-initialises on load.
   Markup-driven via data- attributes so it never clashes with
   your own scripts. Pairs with brand/css/cognizant-moment.css.

   TABS
     <div class="tabs" data-cm-tabs>
       <button class="tab" data-cm-tab="a">One</button>
       <button class="tab" data-cm-tab="b">Two</button>
     </div>
     <div class="tabpanel" data-cm-panel="a">…</div>
     <div class="tabpanel" data-cm-panel="b" hidden>…</div>

   ACCORDION
     <div class="accordion">
       <button class="accordion__item" data-cm-accordion-item="p1" aria-expanded="false">
         Title <span class="icon-arrow icon-arrow--down"></span>
       </button>
       <div class="accordion__panel" data-cm-panel="p1" hidden>…</div>
     </div>

   COPY-TO-CLIPBOARD
     <button data-cm-copy="#000048">Copy</button>
   ============================================================ */
(function () {
  'use strict';

  function initTabs(root) {
    var groups = root.querySelectorAll('[data-cm-tabs]');
    groups.forEach(function (group) {
      var tabs = group.querySelectorAll('[data-cm-tab]');
      tabs.forEach(function (tab) {
        tab.setAttribute('role', 'tab');
        if (!tab.hasAttribute('aria-selected')) {
          tab.setAttribute('aria-selected', tab.classList.contains('tab--active') ? 'true' : 'false');
        }
        tab.addEventListener('click', function () {
          var id = tab.getAttribute('data-cm-tab');
          tabs.forEach(function (t) {
            var on = t === tab;
            t.classList.toggle('tab--active', on);
            t.setAttribute('aria-selected', on ? 'true' : 'false');
          });
          // Panels can live anywhere in the document.
          document.querySelectorAll('[data-cm-panel]').forEach(function (panel) {
            // only toggle panels that belong to THIS tab group's ids
            var owns = Array.prototype.some.call(tabs, function (t) {
              return t.getAttribute('data-cm-tab') === panel.getAttribute('data-cm-panel');
            });
            if (owns) panel.hidden = panel.getAttribute('data-cm-panel') !== id;
          });
        });
      });
    });
  }

  function initAccordions(root) {
    var items = root.querySelectorAll('[data-cm-accordion-item]');
    items.forEach(function (item) {
      if (!item.hasAttribute('aria-expanded')) item.setAttribute('aria-expanded', 'false');
      item.addEventListener('click', function () {
        var id = item.getAttribute('data-cm-accordion-item');
        var panel = document.querySelector('[data-cm-panel="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
        var open = item.getAttribute('aria-expanded') === 'true';
        item.setAttribute('aria-expanded', String(!open));
        if (panel) panel.hidden = open;
      });
    });
  }

  var copybar;
  function toast(msg) {
    if (!copybar) {
      copybar = document.createElement('div');
      copybar.className = 'cm-copybar';
      document.body.appendChild(copybar);
    }
    copybar.textContent = msg;
    copybar.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { copybar.classList.remove('show'); }, 1400);
  }

  function initCopy(root) {
    root.addEventListener('click', function (e) {
      var el = e.target.closest('[data-cm-copy]');
      if (!el) return;
      var val = el.getAttribute('data-cm-copy');
      if (navigator.clipboard) navigator.clipboard.writeText(val);
      toast('Copied ' + val);
    });
  }

  /* Optional: reveal-on-scroll for elements with class="reveal" */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  function init(root) {
    root = root || document;
    initTabs(root);
    initAccordions(root);
    initReveal();
  }

  // Public API for dynamically added content.
  window.CognizantMoment = { init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); initCopy(document); });
  } else {
    init(document); initCopy(document);
  }
})();
