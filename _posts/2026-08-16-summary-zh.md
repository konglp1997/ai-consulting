---
layout: default
title: "Daily-Summary: 2026-08-16 (ZH)"
date: 2026-08-16
lang: zh
---

> 从 38 条内容中筛选出 7 条重要资讯。

---

1. [Anthropic 公开 Claude 系统提示词，引发社区分析](#item-1) ⭐️ 8.0/10
2. [AI 模型正有意减少知识储备，转而更依赖工具使用](#item-2) ⭐️ 8.0/10
3. [Cloudflare 在切换域名服务器时静默注入分析脚本](#item-3) ⭐️ 8.0/10
4. [NIH 终止针对青年临床研究者的关键资助](#item-4) ⭐️ 8.0/10
5. [Qwen 3.8 27B：功能强大但默认过度思考](#item-5) ⭐️ 8.0/10
6. [SSOG-Attention：通过可分离高斯实现次二次注意力](#item-6) ⭐️ 8.0/10
7. [Anthropic 第二季营收暴涨 14 倍至 115 亿美元，实现盈利](#item-7) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Anthropic 公开 Claude 系统提示词，引发社区分析](https://platform.claude.com/docs/en/release-notes/system-prompts) ⭐️ 8.0/10

Anthropic 在其平台文档中发布了 Claude 模型使用的系统提示词，揭示了塑造模型行为的操作指南和安全指令。这是一次罕见的透明度举措，使外部能够审视前沿 AI 的内部指令。 此次发布为人们提供了前所未有的视角，了解领先 AI 模型是如何被引导的，这对 AI 研究人员、从业者和政策制定者意义重大。它也引发了关于 AI 安全、行为塑造以及透明度与专有保密之间平衡的讨论。 系统提示词包含诸如在危机情况下优先考虑用户福祉、以及验证图像是否存在而非假设其存在等指令。社区成员如 Simon Willison 创建了 git 历史分析，以追踪模型版本之间的变化，突出显示了诸如引用“Claude Fable 5”和“Claude Mythos 5”等新增内容。

hackernews · tosh · 8月16日 12:48 · [社区讨论](https://news.ycombinator.com/item?id=49319556)

**背景**: 系统提示词是在对话开始前给予 AI 模型的初始指令，为整个会话设定基调、限制和行为准则。它们是塑造模型行为的分层系统的一部分，与宪法 AI 和安全过滤器等技术相辅相成。Anthropic 发布这些提示词是 AI 开发中透明度更广泛趋势的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.claude.com/docs/en/release-notes/system-prompts">System Prompts - Claude Platform Docs</a></li>
<li><a href="https://github.com/Piebald-AI/claude-code-system-prompts">GitHub - Piebald-AI/claude-code-system-prompts: All parts of Claude Code's system prompt, 27 builtin tool descriptions, sub agent prompts (Plan/Explore/Task), utility prompts (CLAUDE.md, compact, statusline, magic docs, WebFetch, Bash cmd, security review, agent creation). Updated for each Claude Code version. · GitHub</a></li>
<li><a href="https://tactiq.io/learn/claude-system-prompt">Claude System Prompt Explained: What's Inside and Why It Matters</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一：一些人赞赏这种透明度并利用提示词进行分析，而另一些人则对论坛管理和此类指令的含义表示担忧。值得注意的评论包括 Simon Willison 的 git 历史分析，以及关于这些提示词是否反映真正智能或仅仅是常识的辩论。

**标签**: `#AI`, `#Claude`, `#system prompts`, `#transparency`, `#Anthropic`

---

<a id="item-2"></a>
## [AI 模型正有意减少知识储备，转而更依赖工具使用](https://w4g1.dev/blog/models-are-getting-dumber-on-purpose) ⭐️ 8.0/10

文章认为，AI 模型正有意减少知识储备，转而更依赖工具使用，这一转变可能重新定义模型能力和基准。这一趋势表明，模型正从在权重中存储事实转向依赖外部工具进行信息检索。 这一转变可能深刻影响 AI 模型的设计、评估和使用方式，可能导致更小、更高效的模型利用外部知识库。同时，它也引发了对 SimpleQA 等基准测试的未来以及事实回忆在模型能力中作用的质疑。 文章引用了 SimpleQA（一个不允许使用工具的事实回忆基准），当前领先者是 Gemini 2.5 Pro，得分 53%，表明即使最好的模型也会漏掉一半问题。作者认为，随着模型更依赖工具，知识截止日期可能变得不那么重要，幻觉也可能减少。

hackernews · hruvhwe · 8月16日 19:04 · [社区讨论](https://news.ycombinator.com/item?id=49322695)

**背景**: 大型语言模型（LLM）传统上在训练期间将知识存储在参数中，这导致知识截止日期固定且可能产生幻觉。一种新的范式正在出现，即模型被设计为使用外部工具和知识库，将规划和工具使用等能力内化到模型参数中，如“模型原生”范式所示。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/pdf/2510.16720v2">Beyond Pipelines: A Survey of the Paradigm Shift toward Model-native ...</a></li>
<li><a href="https://www.ibm.com/think/topics/large-language-models">What Are Large Language Models (LLMs)? | IBM</a></li>
<li><a href="https://cacm.acm.org/research/the-paradigm-shifts-in-artificial-intelligence/">The Paradigm Shifts in Artificial Intelligence</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达了多种观点：有人设想可插拔知识库以实现模块化专业知识，也有人批评文章数据过时，指出 Gemini 2.5 Pro 已是十六个月前的模型。还有人对所描述未来的可行性表示怀疑，一位评论者称其为科幻小说，并就推理与事实是否真正可分离展开辩论。

**标签**: `#AI`, `#LLM`, `#model design`, `#tool use`, `#knowledge bases`

---

<a id="item-3"></a>
## [Cloudflare 在切换域名服务器时静默注入分析脚本](https://news.ycombinator.com/item?id=49322107) ⭐️ 8.0/10

有用户报告称，在将域名服务器切换到 Cloudflare 后，该服务静默地向其纯 HTML、无 JavaScript 的网站注入了 Web Analytics JavaScript 片段，用户需要通过 Analytics 仪表板手动选择退出。 这凸显了大型 CDN 提供商默认行为的隐私侵入性，影响了许多可能未意识到 Cloudflare 未经明确同意就注入分析脚本的用户。这引发了对透明度和用户对其网站上第三方脚本控制权的担忧。 注入的脚本来自 static.cloudflareinsights.com/beacon.min.js，并带有包含 token 的 data-cf-beacon 属性。用户可以通过 Cloudflare 仪表板的 Analytics 部分禁用它，但退出选项并不明显。社区成员建议使用 Content-Security-Policy meta 标签来阻止此类脚本。

hackernews · stagas · 8月16日 17:49

**背景**: Cloudflare 提供 Web Analytics 作为传统分析的隐私友好替代方案，但当网站通过 Cloudflare 代理时，该功能默认启用。当用户将域名服务器切换到 Cloudflare 时，他们可能无意中启用了代理，从而允许 Cloudflare 向 HTML 响应中注入脚本。此行为在 Cloudflare 社区论坛中有记录，但许多用户并未意识到。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://community.cloudflare.com/t/cant-disable-web-analytics-for-coudflare-pages-site/761716">Can't disable Web Analytics for Coudflare Pages site - Cloudflare Community</a></li>
<li><a href="https://community.cloudflare.com/t/why-does-cloudflare-insert-javascript-and-what-does-it-do/262478">Why does cloudflare insert javascript and what does it do? - SSL / TLS - Cloudflare Community</a></li>
<li><a href="https://www.cloudflare.com/web-analytics/">Cloudflare Web Analytics</a></li>

</ul>
</details>

**社区讨论**: 评论者表达了担忧并提供了解决方法。有人建议使用 Content-Security-Policy meta 标签来限制脚本来源。另一个人确认看到了注入的脚本并分享了其细节。有人质疑当仅使用 DNS 时 Cloudflare 如何注入代码，指出必须启用代理。还有人提出了关于未经授权注入代码的法律担忧。

**标签**: `#Cloudflare`, `#privacy`, `#analytics`, `#DNS`, `#security`

---

<a id="item-4"></a>
## [NIH 终止针对青年临床研究者的关键资助](https://www.science.org/content/article/nih-ending-key-grant-budding-clinical-researchers) ⭐️ 8.0/10

美国国立卫生研究院（NIH）决定终止一项旨在支持早期职业临床研究者的关键资助项目，此举可能扰乱美国青年科学人才的培养渠道。 这一决定可能导致青年研究者出现代际流失，削弱美国的研究事业及其全球竞争力。它不仅影响当前的受助者，也影响生物医学创新和公共卫生的未来。 该资助项目专门针对初出茅庐的临床研究者，提供关键的早期职业资金。终止决定正值对 NIH 管理和资金不稳定的广泛担忧之际，许多实验室面临资金削减，研究人员纷纷离开该领域。

hackernews · brandonb · 8月16日 16:14 · [社区讨论](https://news.ycombinator.com/item?id=49321353)

**背景**: NIH 是美国生物医学研究的主要联邦机构，资助数千个项目。早期职业资助对于帮助青年科学家建立独立研究项目至关重要，失去这些资助可能对科学进步产生长期影响。

**社区讨论**: 评论者深表担忧，一些人认为此举是蓄意削弱美国科学的恶意行为，而另一些人则将其归因于无能和治理不善。许多人强调了实际影响，如青年研究人员离开美国、有前景的研究被搁置。

**标签**: `#NIH`, `#science funding`, `#research policy`, `#clinical research`, `#academia`

---

<a id="item-5"></a>
## [Qwen 3.8 27B：功能强大但默认过度思考](https://simonwillison.net/2026/Aug/16/qwen-38-27b/) ⭐️ 8.0/10

阿里巴巴 Qwen 实验室发布了采用 Apache 2 许可证的 27B 参数视觉语言模型 Qwen 3.8 27B，其基准测试表现优于前代和更大的闭源模型。然而，其默认的“xhigh”推理强度导致过多的 token 消耗和缓慢的响应。 此次发布对 AI 社区意义重大，因为它提供了一个可在消费级硬件上运行的开源权重模型，支持本地部署和定制。默认的过度思考行为凸显了推理深度与效率之间的权衡，这可能影响用户在实际中如何配置此类模型。 该模型默认使用“xhigh”推理强度，在处理简单任务时可能耗尽 8,192 个 token 的上下文限制，用户需要将上下文长度增加到 262,144 个 token。在一次测试中，生成一个 SVG 耗时 21 分钟，使用了 22,276 个推理 token 生成 3,223 个输出 token，尽管结果质量很高。

rss · Simon Willison · 8月16日 22:00

**背景**: Qwen 3.8 27B 是一个视觉语言模型，能够处理图像和视频，并具有灵活的思考控制。它是 Qwen 系列的一部分，该系列以采用 Apache 2.0 等宽松许可证的开源权重模型而闻名，允许商业使用和本地部署。该模型旨在以更高的可靠性处理复杂的多步骤任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/Qwen/Qwen3.8-27B">Qwen/Qwen3.8-27B · Hugging Face</a></li>
<li><a href="https://www.yottalabs.ai/post/qwen-3-8-27b-specs-hardware-requirements-how-to-run-2026">Qwen 3.8 27B: Specs, Hardware Requirements, and How to Run It (2026) | Yotta Labs</a></li>
<li><a href="https://www.amd.com/en/blogs/2026/run-qwen-3-8-27b-on-amd-ryzen-ai-max-and-radeon-graphics-cards-day-0.html">Run Qwen 3.8 27B on AMD Ryzen™ AI Max Agentic PCs and Radeon ™ GPUs</a></li>

</ul>
</details>

**标签**: `#LLM`, `#Qwen`, `#open-source`, `#AI`, `#local deployment`

---

<a id="item-6"></a>
## [SSOG-Attention：通过可分离高斯实现次二次注意力](https://www.reddit.com/r/MachineLearning/comments/1vpt6ay/ssogattention_sum_of_separable_gaussians_as_a/) ⭐️ 8.0/10

SSOG-Attention 提出了一种新颖的注意力机制，通过为每个头学习少量可分离的高斯原子，并根据查询令牌对其进行几何引导，将标准缩放点积注意力（SDPA）的二次复杂度替换为次二次的 O(N·√N·d) 复杂度。实验表明，它在 CIFAR-100 上优于 SDPA，在 ImageNet-1k 上性能相当且收敛更快，同时在规模增大时更节省内存且速度更快。 这项工作解决了 Transformer 模型的一个关键瓶颈——注意力随序列长度二次缩放的问题，提供了一种实用的次二次替代方案，同时保持了有竞争力的准确性。它可能使视觉和语言模型支持更长的上下文窗口和更高的图像分辨率，从而惠及高分辨率图像处理和长文档理解等应用。 该方法将注意力分解为可分离高斯之和，将复杂度从 O(N²·d) 降低到 O(N·√N·d)。作者提供了博客文章和开源代码仓库，包含代码和消融实验，并指出部分代码和写作使用了 AI 辅助，但他们为结果负责。

reddit · r/MachineLearning · /u/4rtemi5 · 8月16日 10:06

**背景**: 标准缩放点积注意力（SDPA）计算所有查询和键令牌之间的相似度分数，导致 O(N²) 复杂度，这在长序列上变得难以承受。次二次注意力方法旨在降低这种复杂度同时保持准确性，通常使用稀疏模式、低秩近似或基于核的方法。SSOG-Attention 属于这一类，它通过可分离高斯之和来近似注意力，由于高斯函数的可分解结构，可以高效计算。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2501.02040">A Separable Self-attention Inspired by the State Space Model for Computer Vision</a></li>
<li><a href="https://www.lesswrong.com/posts/kpSXeMcthtHgnwMx3/debunking-claims-about-subquadratic-attention">Debunking claims about subquadratic attention</a></li>
<li><a href="https://arxiv.org/html/2406.09827v1">HiP Attention: Sparse Sub-Quadratic Attention with Hierarchical Attention Pruning</a></li>

</ul>
</details>

**社区讨论**: 未提供 Reddit 讨论内容，但高分（8/10）表明反响积极。社区成员可能欣赏这种新颖方法和开源发布，但也可能有人质疑其实际加速效果和可扩展性声明，因为没有与其他次二次方法进行直接比较。

**标签**: `#attention`, `#efficient-transformers`, `#machine-learning`, `#computer-vision`

---

<a id="item-7"></a>
## [Anthropic 第二季营收暴涨 14 倍至 115 亿美元，实现盈利](https://www.cnbc.com/2026/08/15/anthropic-revenue-jumps-to-over-11point5-billion-in-q2-report.html) ⭐️ 8.0/10

Anthropic 第二季初步营收超过 115 亿美元，同比增长逾 14 倍，调整后营业利润转正。公司正筹备可能在今秋启动的 IPO。 这一财务里程碑表明 AI 具有强大的商业吸引力，预示着主要 AI 实验室能够实现显著的营收增长和盈利。同时，这也为一场备受瞩目的 IPO 奠定了基础，可能重塑 AI 投资格局。 这些数字为初步数据，仍可能调整。第二季营收与去年同期的 7.87 亿美元和 2026 年第一季的 47.3 亿美元相比，显示出快速的环比增长。

telegram · zaihuapd · 8月16日 07:26

**背景**: Anthropic 是一家专注于 AI 安全的美国 AI 公益公司，以其 Claude 大型语言模型而闻名。调整后营业利润是一种非 GAAP 指标，排除了某些一次性或非营业项目，能更清晰地反映核心业务的盈利能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anthropic">Anthropic - 維基百科，自由的百科全書</a></li>
<li><a href="https://zh.wikipedia.org/zh-hans/商业与财务术语缩写列表">商业与财务术语缩写列表 - 维基百科，自由的百科全书</a></li>
<li><a href="https://www.lawinsider.com/dictionary/adjusted-operating-profit">Adjusted Operating Profit Definition | Law Insider</a></li>

</ul>
</details>

**标签**: `#Anthropic`, `#AI`, `#business`, `#revenue`, `#IPO`

---