/* ============================================================
   Cognizant Moment Enhanced — behaviour
   1. Introduction organism: measure the image/headline overlap and
      write it to --intro-split so the two headline layers stay
      complementary at any copy length / viewport size.
   2. Top Nav Bar: adapt item color to whatever surface scrolls
      beneath the sticky bar (white items over dark, navy over white).
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

  function init() {
    initIntroductions();
    initAdaptiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
