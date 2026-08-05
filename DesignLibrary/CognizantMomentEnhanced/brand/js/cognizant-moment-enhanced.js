/* ============================================================
   Cognizant Moment Enhanced — behaviour
   1. Introduction organism: measure the image/headline overlap and
      write it to --intro-split so the two headline layers stay
      complementary at any copy length / viewport size.
   2. Top Nav Bar: adapt item color to whatever surface scrolls
      beneath the sticky bar (white items over dark, navy over white).
   3. Notch Outline: rebuild the polygon's points/viewBox in real
      pixel units so its 1px stroke renders evenly on every edge
      regardless of the container's aspect ratio.
   ============================================================ */
(function () {
  'use strict';

  /* ---- 1. Introduction split measurement ------------------ */
  function measureIntroSplit(intro) {
    // Dark Navy variant has a single white headline (no base/overlay pair
    // to keep in sync), so it needs no split measurement — skip it.
    if (intro.classList.contains('cme-introduction--navy')) return;
    var wrap = intro.querySelector('.headline-wrap');
    var imageBox = intro.querySelector('.image-box');
    if (!wrap || !imageBox) return;

    var wrapRect = wrap.getBoundingClientRect();
    if (wrapRect.width === 0) return;

    var imgLeft = imageBox.getBoundingClientRect().left - wrapRect.left;
    var percent = (imgLeft / wrapRect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    wrap.style.setProperty('--intro-split', percent + '%');
  }

  function initIntroductions() {
    var intros = document.querySelectorAll('.cme-introduction');
    if (!intros.length) return;

    function measureAll() {
      intros.forEach(measureIntroSplit);
    }

    measureAll();
    window.addEventListener('resize', measureAll);

    // Re-measure once fonts load (line-wrapping shifts the geometry).
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measureAll);
    }
    window.addEventListener('load', measureAll);
  }

  /* ---- 2. Nav surface-adaptive color ---------------------- */
  function initAdaptiveNav() {
    var nav = document.querySelector('.cme-nav[data-adaptive]');
    if (!nav) return;

    var sections = Array.prototype.slice.call(
      document.querySelectorAll('[data-nav-surface]')
    );
    if (!sections.length) return;

    function updateNav() {
      var probeY = nav.getBoundingClientRect().bottom;
      var current = null;
      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = section;
        }
      });
      var surface = current ? current.getAttribute('data-nav-surface') : 'navy';
      nav.classList.toggle('cme-nav--on-navy', surface === 'navy');
      nav.classList.toggle('cme-nav--on-white', surface === 'white');
    }

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
  }

  /* ---- 3. Notch Outline precise sizing --------------------- */
  function pctVar(el, name, fallback) {
    var raw = getComputedStyle(el).getPropertyValue(name).trim();
    var num = parseFloat(raw);
    return isNaN(num) ? fallback : num / 100;
  }

  function sizeNotchOutline(svg) {
    var rect = svg.getBoundingClientRect();
    var w = rect.width, h = rect.height;
    if (!w || !h) return;

    var topX = pctVar(svg, '--notch-outline-top-x', 0.8) * w;
    var leftY = pctVar(svg, '--notch-outline-left-y', 0.4) * h;
    var bottomX = pctVar(svg, '--notch-outline-bottom-x', 0.6) * w;
    var rightY = pctVar(svg, '--notch-outline-right-y', 0.5) * h;

    // viewBox now matches the element's real pixel size exactly (scale 1:1
    // in both axes) — this is what makes the 1px stroke render evenly on
    // every edge; the static markup's stretched 0-100 viewBox is only a
    // no-JS fallback.
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);

    var poly = svg.querySelector('polygon');
    if (!poly) return;
    poly.setAttribute('points', [
      w + ',0',
      topX + ',0',
      '0,' + leftY,
      '0,' + h,
      bottomX + ',' + h,
      w + ',' + rightY
    ].join(' '));
  }

  function initNotchOutlines() {
    var outlines = document.querySelectorAll('.cme-notch-outline');
    if (!outlines.length) return;

    function sizeAll() {
      outlines.forEach(sizeNotchOutline);
    }

    sizeAll();
    window.addEventListener('resize', sizeAll);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sizeAll);
    }
    window.addEventListener('load', sizeAll);
  }

  function init() {
    initIntroductions();
    initAdaptiveNav();
    initNotchOutlines();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
