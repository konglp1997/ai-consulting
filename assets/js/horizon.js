(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag/source lines */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Wrap page-header h1 text in a gradient span */
  function brandifyHeader() {
    var h1 = document.querySelector('.page-header h1');
    if (!h1) return;
    var text = h1.textContent.trim();
    if (text && !h1.querySelector('.brand-gradient')) {
      h1.innerHTML = '<span class="brand-gradient">' + text + '</span>';
    }
  }

  /** Add scroll-progress bar */
  function setupScrollProgress() {
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;width:0%;background:linear-gradient(90deg,#06b6d4,#8b5cf6,#ef4444);z-index:9999;transition:width 0.1s;';
    document.body.appendChild(bar);
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = scrolled + '%';
    });
  }

  /** Inject AIHotNews logo + title at the top of detail pages */
  function injectDetailHeader() {
    // Only on detail pages (URL contains /summary-)
    if (!location.pathname.match(/\/summary-/)) return;
    var main = document.querySelector('.main-content');
    if (!main || main.querySelector('.detail-hero')) return;

    // Derive home URL from current path (strip date segments)
    // e.g. /ai-consulting/2026/07/09/summary-zh.html -> /ai-consulting/
    var parts = location.pathname.split('/').filter(Boolean);
    var baseParts = [];
    for (var i = 0; i < parts.length; i++) {
      if (/^\d{4}$/.test(parts[i])) break;
      baseParts.push(parts[i]);
    }
    var homeUrl = '/' + baseParts.join('/') + '/';

    var hero = document.createElement('div');
    hero.className = 'detail-hero';
    hero.innerHTML =
      '<a href="' + homeUrl + '" class="detail-hero-link">' +
      '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="detailLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="#06b6d4"/>' +
      '<stop offset="50%" stop-color="#8b5cf6"/>' +
      '<stop offset="100%" stop-color="#ef4444"/>' +
      '</linearGradient></defs>' +
      '<path fill="url(#detailLogoGrad)" d="M50 5 L62 38 L95 38 L68 58 L78 92 L50 72 L22 92 L32 58 L5 38 L38 38 Z"/>' +
      '</svg>' +
      '<span class="detail-hero-title">AIHotNews</span>' +
      '</a>';
    main.insertBefore(hero, main.firstChild);
  }

  /** Wrap each news item (starting at `<a id="item-N">`) in a glass card */
  function wrapNewsItems() {
    var main = document.querySelector('.main-content');
    if (!main) return;
    var anchors = Array.from(main.querySelectorAll('a[id^="item-"]'));
    if (anchors.length === 0) return;

    anchors.forEach(function (anchor, idx) {
      var nextAnchor = anchors[idx + 1];
      var wrapper = document.createElement('div');
      wrapper.className = 'news-item-glass';
      anchor.parentNode.insertBefore(wrapper, anchor);
      wrapper.appendChild(anchor);
      var node = wrapper.nextSibling;
      while (node && node !== nextAnchor) {
        var next = node.nextSibling;
        if (node.nodeType === 1 && node.tagName === 'HR') {
          node = next;
          continue;
        }
        wrapper.appendChild(node);
        node = next;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    brandifyHeader();
    setupScrollProgress();
    injectDetailHeader();
    wrapNewsItems();
  });
})();
