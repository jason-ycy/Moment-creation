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

   PLAYBOOK MOLECULES (all reduced-motion aware)
     Scroll progress  <div class="progress-top" data-cm-progress><span class="progress-top__bar"></span></div>
     Table of contents <nav class="toc" data-cm-toc><a href="#intro">Intro</a>…</nav>
     Parallax (opt-in)  <div class="decor" data-cm-parallax="0.06" aria-hidden="true"></div>
     Count-up stat     <span class="stat__value" data-cm-count="87" data-cm-count-suffix="%">0</span>
     Meter fill        <span class="meter" data-cm-meter="72"><span class="meter__fill"></span></span>
     Staggered reveal  <div data-cm-stagger><h1 class="reveal">…</h1><p class="reveal">…</p></div>
   ============================================================ */
(function () {
  'use strict';

  // Mark the document as JS-enhanced. The reveal/hide states in the CSS are
  // gated on this class, so if this script never loads (or errors), .reveal
  // and .reveal--clip content stays fully visible instead of hidden/clipped.
  document.documentElement.classList.add('cm-js');

  function prefersReduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

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
    // Cascade: give each staggered child an index the CSS turns into a delay.
    document.querySelectorAll('[data-cm-stagger]').forEach(function (group) {
      var i = 0;
      group.querySelectorAll('.reveal').forEach(function (child) {
        child.style.setProperty('--reveal-i', i++);
      });
    });
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

  /* Scroll-progress bar — scales .progress-top__bar (or the element itself) */
  function initScrollProgress() {
    var bars = document.querySelectorAll('[data-cm-progress]');
    if (!bars.length) return;
    var ticking = false;
    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
      bars.forEach(function (bar) {
        (bar.querySelector('.progress-top__bar') || bar).style.transform = 'scaleX(' + p + ')';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* Table-of-contents scrollspy — toggles .is-active on the matching link */
  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    document.querySelectorAll('[data-cm-toc]').forEach(function (toc) {
      var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
      if (!links.length) return;
      var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
      if (!targets.length) return;
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.remove('is-active'); });
          var link = links.filter(function (a) { return a.getAttribute('href') === '#' + en.target.id; })[0];
          if (link) link.classList.add('is-active');
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      targets.forEach(function (t) { spy.observe(t); });
    });
  }

  /* Subtle opt-in parallax. Publishes the drift as a --cm-parallax-y CSS
     variable (not the whole `transform`) so a layer can keep its own
     centring transform, e.g. transform: translate(-50%, calc(-50% + var(--cm-parallax-y))).
     The offset is 0 when the host is centred in the viewport and drifts a
     little as it scrolls past — so nothing ever sits permanently off-centre. */
  function initParallax() {
    if (prefersReduced()) return;
    var layers = document.querySelectorAll('[data-cm-parallax]');
    if (!layers.length) return;
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      layers.forEach(function (layer) {
        var speed = parseFloat(layer.getAttribute('data-cm-parallax')) || 0.12;
        var host = layer.parentElement || layer;
        var rect = host.getBoundingClientRect();
        var offset = ((rect.top + rect.height / 2) - vh / 2) * speed;
        layer.style.setProperty('--cm-parallax-y', offset.toFixed(1) + 'px');
      });
      ticking = false;
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    update();
  }

  /* Count-up for [data-cm-count] stats — fires once when scrolled into view */
  function initCount() {
    var els = document.querySelectorAll('[data-cm-count]');
    if (!els.length) return;
    function render(el) {
      var target = parseFloat(el.getAttribute('data-cm-count')) || 0;
      var dec = parseInt(el.getAttribute('data-cm-count-decimals') || '0', 10);
      var pre = el.getAttribute('data-cm-count-prefix') || '';
      var suf = el.getAttribute('data-cm-count-suffix') || '';
      el.textContent = pre + Number(target.toFixed(dec)).toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
    }
    function animate(el) {
      var target = parseFloat(el.getAttribute('data-cm-count')) || 0;
      var dec = parseInt(el.getAttribute('data-cm-count-decimals') || '0', 10);
      var pre = el.getAttribute('data-cm-count-prefix') || '';
      var suf = el.getAttribute('data-cm-count-suffix') || '';
      var dur = 1200, start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = (target * eased).toFixed(dec);
        el.textContent = pre + Number(val).toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (prefersReduced() || !('IntersectionObserver' in window)) { els.forEach(render); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) { if (en.isIntersecting) { animate(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Meter fill for [data-cm-meter] — sets width once on reveal */
  function initMeters() {
    var meters = document.querySelectorAll('[data-cm-meter]');
    if (!meters.length) return;
    function fill(el) {
      var v = Math.max(0, Math.min(100, parseFloat(el.getAttribute('data-cm-meter')) || 0));
      (el.querySelector('.meter__fill') || el).style.width = v + '%';
    }
    if (prefersReduced() || !('IntersectionObserver' in window)) { meters.forEach(fill); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) { if (en.isIntersecting) { fill(en.target); obs.unobserve(en.target); } });
    }, { threshold: 0.3 });
    meters.forEach(function (el) { io.observe(el); });
  }

  function init(root) {
    root = root || document;
    initTabs(root);
    initAccordions(root);
    initReveal();
  }

  // Page-global enhancers (attach listeners / observers once per load).
  function initGlobals(root) {
    initCopy(root || document);
    initScrollProgress();
    initScrollSpy();
    initParallax();
    initCount();
    initMeters();
  }

  // Public API for dynamically added content.
  window.CognizantMoment = { init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); initGlobals(document); });
  } else {
    init(document); initGlobals(document);
  }
})();
