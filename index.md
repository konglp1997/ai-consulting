---
layout: default
title: Home
---

<div class="bg-blob"></div>

<div class="hero-section">
  <div class="hero-logo">
    <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00e5ff"/>
          <stop offset="50%" stop-color="#a855f7"/>
          <stop offset="100%" stop-color="#ff2e63"/>
        </linearGradient>
      </defs>
      <path fill="url(#heroLogoGrad)" d="M50 5 L62 38 L95 38 L68 58 L78 92 L50 72 L22 92 L32 58 L5 38 L38 38 Z"/>
    </svg>
  </div>
  <h1 class="hero-title"><span class="brand-gradient">AIHotNews</span></h1>
  <p class="hero-subtitle">每日 AI 前沿资讯 · DeepSeek 驱动 · 多源聚合智能简报</p>
  <div class="hero-stats">
    <div class="hero-stat">
      <span class="hero-stat-value">AI</span>
      <span class="hero-stat-label">DeepSeek Curated</span>
    </div>
    <div class="hero-stat">
      <span class="hero-stat-value">5+</span>
      <span class="hero-stat-label">信息源</span>
    </div>
    <div class="hero-stat">
      <span class="hero-stat-value">每日</span>
      <span class="hero-stat-label">更新</span>
    </div>
  </div>
</div>


<div class="subscribe-section">
  <div class="subscribe-card">
    <div class="subscribe-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    </div>
    <h3 class="subscribe-title">邮件订阅每日简报</h3>
    <p class="subscribe-desc">每日 AI 前沿资讯自动送达你的邮箱，深度中文解读，绝不打扰。</p>
    <div class="subscribe-steps">
      <div class="subscribe-step">
        <span class="step-num">1</span>
        <span>向订阅邮箱发送一封邮件</span>
      </div>
      <div class="subscribe-step">
        <span class="step-num">2</span>
        <span>邮件主题填写「订阅」</span>
      </div>
      <div class="subscribe-step">
        <span class="step-num">3</span>
        <span>收到确认邮件即订阅成功</span>
      </div>
    </div>
    <div class="subscribe-email-hint">
      <span class="hint-label">订阅邮箱</span>
      <code>aihotnews@qq.com</code>
      <span class="hint-note">（即将开放，敬请期待）</span>
    </div>
    <p class="subscribe-unsub-hint">退订只需发送主题为「退订」的邮件即可。</p>
  </div>
</div>

<div class="section-header">
  <span class="section-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  </span>
  <h2>每日速递 <a class="rss-icon" href="{{ '/feed-zh.xml' | relative_url }}" aria-label="订阅"><svg width="14" height="14" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg></a></h2>
</div>

<ul class="post-list">
  {% assign posts = site.posts | sort: date | reverse %}
  {% for post in posts limit:20 %}
    <li>
      <a href="{{ post.url | relative_url }}" class="post-card">
        <div class="post-card-date">{{ post.date | date: "%m-%d" }}</div>
        <div class="post-card-body">
          <div class="post-card-title">{{ post.date | date: "%Y-%m-%d" }} · Daily-Summary</div>
          <div class="post-card-meta">每日 AI 简报 · 点击查看</div>
        </div>
        <div class="post-card-arrow">→</div>
      </a>
    </li>
  {% else %}
    <li><em>暂无内容</em></li>
  {% endfor %}
</ul>
