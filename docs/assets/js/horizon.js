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
    wrapNewsItems();
  });
})();
