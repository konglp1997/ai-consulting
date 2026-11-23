---
layout: default
title: "Daily-Summary: 2026-11-23 (ZH)"
date: 2026-11-23
lang: zh
---

> 从 33 条内容中筛选出 3 条重要资讯。

---

1. [Masullo 黎曼假设证明的 Lean 形式化进度图引发争议](#item-1) ⭐️ 8.0/10
2. [OpenAI 将困惑度与模型智能关联，引发热议](#item-2) ⭐️ 8.0/10
3. [报告：Anthropic 2028 年电力 87%来自天然气，11%来自煤炭](#item-3) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Masullo 黎曼假设证明的 Lean 形式化进度图引发争议](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) ⭐️ 8.0/10

Hacker News 上的一场讨论聚焦于 Alessandro Masullo 所声称的黎曼假设证明的 Lean 形式化进度图，评论者对该证明的正确性及其背书可信度提出质疑。 这很重要，因为 Lean 中的形式验证正越来越多地用于评估声称的数学突破，而社区对这一高关注度证明的审视既凸显了此类工具在验证有争议结果方面的前景，也暴露了其局限性。 评论者指出，进度条并不意味着证明大体正确，因为一个漏洞就可能使整个论证失效；一位参与该仓库的数学家提到勘误中有数百个问题，严重程度尚不明确。

hackernews · Qision · 11月22日 23:12 · [社区讨论](https://news.ycombinator.com/item?id=50605045)

**背景**: 黎曼假设由 Bernhard Riemann 于 1859 年提出，是关于素数分布的数论核心未解问题。Lean 是一个交互式定理证明器，拥有名为 Mathlib 的大型数学库，用于形式化证明以便计算机检查。Alessandro Masullo 的手稿声称证明了广义黎曼假设，一个公共仓库正尝试用 Lean 对其进行形式化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://leanprover-community.github.io/">Lean community</a></li>
<li><a href="https://www.arpaia.io/files/mathematics/riemann-hypothesis-masullo.pdf">Alessandro Masullo's Proof of the Riemann Hypothesis</a></li>
<li><a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">Riemann hypothesis - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 讨论持高度批评态度：评论者质疑证明的有效性，指出宣布该声明的 Ravi Vakil 现在表示他并未审阅 Masullo 的文件，而 Brian Conrad 称手稿需要“重大修订”。一些人对 AI 在数学中的作用表示担忧，而一位参与贡献的数学家则呼吁不要过度解读勘误列表。

**标签**: `#Lean`, `#formalization`, `#Riemann Hypothesis`, `#mathematics`, `#proof verification`

---

<a id="item-2"></a>
## [OpenAI 将困惑度与模型智能关联，引发热议](https://openai.com/index/perplexity-and-intelligence/) ⭐️ 8.0/10

OpenAI 发表了一篇分析文章，论证困惑度（即下一词预测损失）与模型智能在不同代际模型间存在强相关性。文章指出，GPT-2 在旧数据集上创下困惑度新低，同时它可以说是首个能持续生成连贯段落的模型。 如果困惑度能可靠地反映模型能力，那么在日益复杂的任务特定指标之外，它提供了一个简单统一的语言模型评估基准。这可能影响实验室报告预训练进展和比较基础模型的方式，微软最近采用 OpenAI 的评估集就是例证。 困惑度衡量模型预测下一词的不确定性，其范围从 1（完美预测）到词表大小（随机猜测）。OpenAI 的文章绘制了对数困惑度，微软的 MAI-2 Base 在 OpenAI 的留出集上报告对数困惑度为 0.819，但批评者指出困惑度依赖于分词器，且并不总是与人类相似性一致。

hackernews · acossta · 11月22日 17:06 · [社区讨论](https://news.ycombinator.com/item?id=50601525)

**背景**: 困惑度是语言建模中的标准指标，源自交叉熵损失，用于量化模型预测词序列的好坏。困惑度越低，意味着模型对实际词赋予更高概率，预测性能更好。压缩（或预测）与智能相关的思想可追溯到早期工作，最近的讨论将其与模型从原始数据中构建世界模型的能力联系起来。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/perplexity-and-intelligence/">Perplexity and Intelligence | OpenAI</a></li>
<li><a href="https://news.ycombinator.com/item?id=50601525">Perplexity and Intelligence | Hacker News</a></li>
<li><a href="https://www.geeksforgeeks.org/nlp/perplexity-for-llm-evaluation/">Perplexity for LLM Evaluation - GeeksforGeeks</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的评论者澄清了困惑度的定义，并对在强化学习趋势下交叉熵损失仍然相关表示惊讶。一些人将这一发现与压缩即智能理论联系起来，引用了 2008 年的一篇论文，还有人提到微软采用了该基准，并质疑分析中为何没有 GPT-4.5。

**标签**: `#AI/ML`, `#language-models`, `#perplexity`, `#model-evaluation`, `#compression`

---

<a id="item-3"></a>
## [报告：Anthropic 2028 年电力 87%来自天然气，11%来自煤炭](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) ⭐️ 8.0/10

2026 年 11 月 16 日，Better Data Center Project 发布案例研究，估计到 2028 年 Anthropic 在美国签约的数据中心约 87%的电力将来自天然气，11%来自煤炭，可再生能源占比接近零。该分析将这些数字与 15 吉瓦的签约算力以及“自带电源”模式下的现场燃气轮机联系起来。 该分析凸显了 AI 数据中心的巨大环境足迹，并引发了关于企业责任和监管必要性的辩论。它表明，尽管 Alphabet 等同行做出了气候承诺，Anthropic 算力的快速扩张可能锁定对化石燃料的依赖，影响当地社区和全球排放。 报告估计在中案情景下，电力使用每年产生 1700 万至 3800 万吨二氧化碳当量，统计了现场燃气电厂和可能满足新增需求的电网电厂。该分析属于评论/估算而非技术突破，确切比例取决于未来电网变化和公司决策。

hackernews · happosai · 11月22日 08:57 · [社区讨论](https://news.ycombinator.com/item?id=50597612)

**背景**: 数据中心，尤其是为 AI 提供动力的数据中心，消耗大量电力，而美国电网电力通常来自天然气和煤炭等化石燃料。“自带电源”（BYOP）指公司建设现场发电设施（通常是燃气轮机）以快速满足需求。Better Data Center Project 是一个非营利研究和倡导组织，致力于研究数据中心的环境影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://explainx.ai/blog/anthropic-data-center-power-gas-coal-byop-2028-better-datacenter-november-2026">Anthropic Power Mix: 87% Gas, 11% Coal by 2028 (Study ...</a></li>
<li><a href="https://www.justaparrot.com/e/anthropic-power-gas-coal-2028/">A research group estimates 87% of Anthropic's 2028 power will ...</a></li>
<li><a href="https://www.winzheng.com/en/article/anthropic-2028-energy-87-gas-11-coal-fossil-fuel-analysis">Anthropic’s 2028 Electricity to Be 87% Fossil Fuel: An ...</a></li>

</ul>
</details>

**社区讨论**: 评论者大多批评 Anthropic 是不良行为者， citing 在孟菲斯租赁 Colossus 1 造成的当地污染以及缺乏美国可再生能源承诺。许多人主张通过监管来解决外部性问题，而其他人则指出数据中心能源使用的巨大规模以及天然气作为石油生产副产品的扭曲激励。

**标签**: `#AI energy consumption`, `#data centers`, `#climate change`, `#corporate accountability`, `#regulation`

---