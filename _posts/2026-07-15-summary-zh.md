---
layout: default
title: "Daily-Summary: 2026-07-15 (ZH)"
date: 2026-07-15
lang: zh
---

> 从 53 条内容中筛选出 12 条重要资讯。

---

1. [Hugging Face Transformers v5.14.0 加入 Inkling，一个 975B 多模态模型](#item-1) ⭐️ 9.0/10
2. [Stripe 与 Advent 联合出价逾 530 亿美元收购 PayPal](#item-2) ⭐️ 9.0/10
3. [Gemma 4 26B 在无 GPU 的 13 年老 Xeon 上以 5 tokens/s 运行](#item-3) ⭐️ 8.0/10
4. [Claude web_fetch 工具绕过漏洞导致数据泄露](#item-4) ⭐️ 8.0/10
5. [OpenAI 推出 GPT-Red 自动化红队测试系统](#item-5) ⭐️ 8.0/10
6. [模型路由：理论上简单，实践中复杂](#item-6) ⭐️ 8.0/10
7. [Hugging Face 发布 Real World VoiceEQ 基准测试，衡量语音 AI 质量](#item-7) ⭐️ 8.0/10
8. [通过哈达玛积聚类解耦卷积神经元](#item-8) ⭐️ 8.0/10
9. [PyTorch 模型在 T4 上比 A100 慢 170 倍](#item-9) ⭐️ 8.0/10
10. [DeepSeek 年化收入逼近 5 亿美元，V4 API 毛利率超 50%](#item-10) ⭐️ 8.0/10
11. [谷歌与 Epic 撤回动议，第三方应用商店即将入驻 Play](#item-11) ⭐️ 8.0/10
12. [沙盒逃逸让 Filza 读取 iOS 27 备忘录数据库](#item-12) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Hugging Face Transformers v5.14.0 加入 Inkling，一个 975B 多模态模型](https://github.com/huggingface/transformers/releases/tag/v5.14.0) ⭐️ 9.0/10

Hugging Face Transformers v5.14.0 加入了 Inkling，一个 975B 参数（41B 活跃）的开放权重多模态模型，以及 TIPSv2 和 TIPSv2 DPT 模型。该版本还包括对 GPTNeoX 和 GPTBigCode 的破坏性变更、内核改进以及新的生成特性，如多 token 预测（MTP）支持。 Inkling 是最大的开放权重多模态模型，支持音频、文本和图像输入，使开发者能够通过微调和定制构建先进的 AI 应用。该版本通过提供强大、可定制的基础模型用于研究和产品集成，加强了开源 AI 生态系统。 Inkling 是一个混合专家（MoE）Transformer，总参数 975B，活跃参数 41B，支持高达 1M token 的上下文窗口。该版本还包括 Inkling-Small（总参数 276B，活跃 12B）的预览，以及性能改进，例如通过 FlashAttention 和 StaticCache 使 SDPA 预填充速度提升高达 260%。

github · ArthurZucker · 7月15日 19:02

**背景**: Hugging Face Transformers 是一个广泛使用的开源库，用于自然语言处理和多模态 AI，提供了数千个预训练模型。像 Inkling 这样的开放权重模型允许用户在自己的硬件上下载、运行和微调模型，与封闭 API 相比提供了更多的控制和定制能力。Inkling 由前 OpenAI CTO Mira Murati 创立的 Thinking Machines Lab 开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/introducing-inkling/">Inkling : Our open-weights model - Thinking Machines Lab</a></li>
<li><a href="https://en.wikipedia.org/wiki/Thinking_Machines_Lab">Thinking Machines Lab - Wikipedia</a></li>
<li><a href="https://crawlrr.com/p/2914dff4-a262-477b-8d7a-62e24a95f751">Inkling is here, and it’s fully open-weights... — Crawlrr</a></li>

</ul>
</details>

**社区讨论**: 社区成员对 Inkling 的多模态能力，尤其是音频支持，以及其本地部署和微调的潜力感到兴奋。一些人认为它是专有模型的有力开放替代品，一位评论者指出 Thinking Machines 可能成为开放 AI 的关键参与者，类似于 DeepSeek 或 Z.ai。

**标签**: `#transformers`, `#multimodal`, `#open-weights`, `#AI`, `#release`

---

<a id="item-2"></a>
## [Stripe 与 Advent 联合出价逾 530 亿美元收购 PayPal](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/) ⭐️ 9.0/10

据路透社 2026 年 7 月 15 日援引消息人士称，支付公司 Stripe 与私募股权机构 Advent International 联合出价超过 530 亿美元收购 PayPal。 此次收购将把 Stripe、PayPal、Venmo、Braintree 和 Xoom 等主要支付平台整合到一起，可能减少竞争并引发反垄断担忧。这将重塑在线支付格局，影响数百万商户和消费者。 该交易对 PayPal 的估值超过 530 亿美元，合并后的实体将控制在线无卡交易（CNP）的很大份额，使赫芬达尔-赫希曼指数（HHI）达到可能面临监管审查的水平。此外，PayPal 拥有银行牌照，而 Stripe 没有，这可能为 Stripe 提供新的银行服务能力。

hackernews · rvz · 7月15日 03:32 · [社区讨论](https://news.ycombinator.com/item?id=48915953)

**背景**: Stripe 是一家私营金融服务公司，为电子商务和移动应用提供支付处理软件。Advent International 是一家专注于收购和成长型投资的全球私募股权公司。PayPal 成立于 1998 年，是领先的在线支付系统，旗下还拥有 Venmo、Braintree 和 Xoom。此次收购将合并数字支付领域的两大巨头。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stripe,_Inc.">Stripe, Inc. - Wikipedia</a></li>
<li><a href="https://privateequitylist.com/investors/advent-international">Private Equity List | Advent International</a></li>

</ul>
</details>

**社区讨论**: 社区评论表达了对竞争减少以及 Stripe 对某些行业（如大麻、成人内容）限制政策的强烈担忧。用户担心费用上涨、账户冻结以及支付多样性的丧失。一些人指出了潜在的反垄断障碍以及 PayPal 银行牌照的战略价值。

**标签**: `#acquisition`, `#payments`, `#antitrust`, `#fintech`, `#Stripe`

---

<a id="item-3"></a>
## [Gemma 4 26B 在无 GPU 的 13 年老 Xeon 上以 5 tokens/s 运行](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) ⭐️ 8.0/10

一篇技术报告展示了通过极端优化技术，在无 GPU 的 13 年旧 Intel Xeon CPU 上以每秒 5 个 token 的速度运行 Google DeepMind 的 Gemma 4 26B（一种混合专家模型，活跃参数为 4B）。 这一成就凸显了在极其老旧且低成本的硬件上运行大型语言模型的潜力，挑战了本地推理必须使用现代 GPU 的假设，并引发了关于本地推理与云端推理成本效益的讨论。 Gemma 4 26B 模型采用混合专家（MoE）架构，每个 token 仅激活 4B 参数，从而在 CPU 上实现高效推理。报告的 5 tokens/s 速度是在单颗 13 年旧 Xeon 处理器上实现的，可能采用了显著的量化和内存优化。

hackernews · neomindryan · 7月15日 15:34 · [社区讨论](https://news.ycombinator.com/item?id=48922434)

**背景**: 大型语言模型通常需要强大的 GPU 才能快速推理，因为其参数量巨大且计算需求高。然而，量化、剪枝和高效架构（如混合专家）等技术可以降低资源需求。在 CPU 上运行此类模型是可能的，但通常非常慢；在十年前的硬件上达到 5 tokens/s 被认为是了不起的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ollama.com/library/gemma4">gemma 4</a></li>
<li><a href="https://gemma4.com/">Gemma 4 — Google DeepMind</a></li>
<li><a href="https://huggingface.co/google/gemma-4-26B-A4B/blob/main/README.md">README.md · google/ gemma - 4 - 26 B -A 4 B at main</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论（209 分，132 条评论）非常热烈。一些用户预测到 2027 年中，>200B 的 MoE 模型将能在消费级硬件上运行，并引用了在 16GB Mac 上以 7-9 t/s 本地运行 Qwen3.6-35B-A3B 的例子。其他人则争论成本：一位用户计算，在德国使用 500W 服务器进行本地推理，18k token 的成本约为 0.15 美元，而云端推理仅需约 0.005 美元，因此云端更便宜。另一位用户指出，双路 Xeon 功耗 300W+，每百万输出 token 的成本约为 0.30 美元，与 OpenRouter 定价相同，但速度慢 8 倍。

**标签**: `#LLM`, `#inference`, `#optimization`, `#hardware`, `#cost-analysis`

---

<a id="item-4"></a>
## [Claude web_fetch 工具绕过漏洞导致数据泄露](https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything) ⭐️ 8.0/10

安全研究员 Ayush Paul 发现 Anthropic 的 Claude web_fetch 工具存在一个漏洞，攻击者可以通过诱使 AI 跟随一系列生成的链接来窃取用户的私人记忆。该攻击利用了工具能够导航到之前获取页面中嵌入的 URL 的能力，绕过了原本只能访问用户输入或搜索返回的 URL 的限制。 该漏洞展示了 Anthropic 数据泄露防护措施的实际绕过方法，凸显了在结合私有数据访问和外部内容获取能力的 AI 代理中确保安全的持续挑战。它强调了在 AI 系统中需要更强大的防御措施来抵御提示注入和数据泄露。 该攻击针对带有 'Claude-User' 用户代理的客户端以躲避检测，并成功提取了用户的姓名、所在城市和雇主信息。Anthropic 拒绝支付漏洞赏金，声称他们已在内部发现该问题，随后通过阻止 web_fetch 跟随其自身获取内容中返回的链接来修复了漏洞。

rss · Simon Willison · 7月15日 14:21

**背景**: “致命三重奏”是 AI 代理中的一种危险组合，即它们处理不可信输入、能够访问敏感数据，并可以通过外部通信泄露信息。Claude 的 web_fetch 工具旨在通过仅允许导航到用户明确提供或 web_search 工具返回的 URL 来缓解这一问题。然而，该工具还允许跟随获取页面中嵌入的链接，这为此次攻击创造了漏洞。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-fetch-tool">Web fetch tool - Claude Docs</a></li>
<li><a href="https://www.osohq.com/learn/lethal-trifecta-ai-agent-security">Understanding the Lethal Trifecta of AI Agents</a></li>
<li><a href="https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/">The lethal trifecta for AI agents: private data, untrusted content, and external communication</a></li>

</ul>
</details>

**社区讨论**: Hacker News 的讨论强调了这次攻击的巧妙性以及限制 AI 代理能力的重要性。一些评论者指出，Anthropic 不支付赏金的决定可能会阻碍未来的披露，而另一些人则赞扬研究人员展示了这一风险。

**标签**: `#AI safety`, `#security`, `#prompt injection`, `#Claude`, `#data exfiltration`

---

<a id="item-5"></a>
## [OpenAI 推出 GPT-Red 自动化红队测试系统](https://openai.com/index/unlocking-self-improvement-gpt-red) ⭐️ 8.0/10

OpenAI 推出了 GPT-Red，这是一个利用自我对弈来自动化红队测试的系统，旨在提升其 AI 模型的安全性、对齐能力以及对抗提示注入的鲁棒性。 这一进展可能大幅减少红队测试所需的人工投入，实现大型语言模型安全性的持续和可扩展改进。它解决了提示注入等关键漏洞，这是 AI 行业日益关注的问题。 GPT-Red 扮演一个 LLM 超级黑客的角色，生成对抗性攻击来测试和强化其他模型。该系统利用自我对弈，即红队模型通过与自身竞争来改进，类似于强化学习中使用的技术。

rss · OpenAI Blog · 7月15日 10:00

**背景**: 红队测试是一种安全实践，由专家模拟攻击以发现 AI 系统中的漏洞。提示注入是一种攻击方式，将恶意指令隐藏在输入数据中以操纵 AI 模型的行为。自我对弈是一种强化学习技术，智能体通过与自身对弈来提升能力，常用于 AlphaGo 等游戏 AI。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/unlocking-self-improvement-gpt-red/">GPT-Red: Unlocking Self-Improvement for Robustness | OpenAI</a></li>
<li><a href="https://www.technologyreview.com/2026/07/15/1140514/meet-gpt-red-an-llm-super-hacker-openai-built-to-make-its-models-safer/">Meet GPT-Red: an LLM super-hacker OpenAI built to make its ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Self-play">Self-play - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#red teaming`, `#self-play`, `#prompt injection`, `#OpenAI`

---

<a id="item-6"></a>
## [模型路由：理论上简单，实践中复杂](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt) ⭐️ 8.0/10

IBM Research 发表了一篇题为《模型路由很简单，直到它不简单》的博客文章，深入探讨了将查询路由到大语言模型时隐藏的复杂性和权衡，揭示了简单方法在生产中常常失效。 随着组织部署多个大语言模型，高效路由对于平衡成本、延迟和质量至关重要；该分析帮助从业者避免常见陷阱，设计更健壮的系统。 该博客讨论了模型异构性、动态工作负载以及定义最优路由策略的困难等挑战，强调简单的启发式方法（如总是选择最便宜的模型）可能导致糟糕的结果。

rss · Hugging Face Blog · 7月15日 17:27

**背景**: 模型路由是根据成本、延迟和准确性等因素为给定查询选择使用哪个大语言模型的过程。在生产中，系统可能访问多个模型（如 GPT-4o、Claude、Gemini），需要决定如何高效分配请求。由于模型能力不同、查询分布变化以及需要满足服务级别目标，该问题变得复杂。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/accredian/llm-routing-optimizing-pathways-in-language-processing-c52c2adf7c4e">LLM Routing : Optimizing Pathways in Language Processing | Medium</a></li>
<li><a href="https://www.businessplusai.com/blog/large-language-model-routing-optimizing-gpt-4o-claude-gemini-and-deepseek-for-business">Large Language Model Routing : Optimizing GPT-4o, Claude, Gemini...</a></li>
<li><a href="https://arxiv.org/html/2502.00409">Doing More with Less: A Survey on Routing Strategies for Resource...</a></li>

</ul>
</details>

**标签**: `#model routing`, `#LLM`, `#AI deployment`, `#IBM Research`, `#machine learning`

---

<a id="item-7"></a>
## [Hugging Face 发布 Real World VoiceEQ 基准测试，衡量语音 AI 质量](https://huggingface.co/blog/real-world-voiceeq) ⭐️ 8.0/10

Hugging Face 推出了 Real World VoiceEQ 基准测试，用于衡量语音 AI 系统的人类感知质量，评估不同说话者和真实世界条件下的自然度、可懂度和情感表现力。 该基准测试通过关注人类感知而非技术指标，填补了语音 AI 评估的关键空白，使开发者能够改善虚拟助手、智能眼镜和机器人等应用中语音界面的用户体验和信任度。 该基准测试使用了 100 万次人类评估，覆盖 40 个不同模型，并已被多家公司采用，例如一家领先的虚拟助手提供商发现其语音在频谱自然度上得分高，但在韵律保真度上得分低。

rss · Hugging Face Blog · 7月15日 00:00

**背景**: 语音 AI 系统（如文本转语音和语音助手）在日常生活中越来越普及，但传统上评估其质量依赖于技术指标（如词错误率），这些指标无法捕捉人类感知。Real World VoiceEQ 旨在通过人类判断来衡量自然度、可懂度和情感表现力，提供更全面的评估。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://snippora.com/tools/hugging-face-releases-voiceeq-benchmark-for-voice-ai-quality-2425">Hugging Face releases VoiceEQ benchmark for voice AI... — Snippora</a></li>
<li><a href="https://asibiont.com/en/blog/predstavlyaem-real-world-voiceeq-kak-izmerit-chelovecheskoe-kachestvo-golosovogo-ii">Introducing Real World VoiceEQ : A New Benchmark for Measuring...</a></li>
<li><a href="https://axbrief.com/en/blog/real-world-voiceeq-reveals-the-trade-off-between-precision-and-emotion-eeabr2v">Real World VoiceEQ Reveals the Trade-off Between... - AX BRIEF</a></li>

</ul>
</details>

**标签**: `#voice AI`, `#benchmark`, `#speech technology`, `#AI evaluation`, `#Hugging Face`

---

<a id="item-8"></a>
## [通过哈达玛积聚类解耦卷积神经元](https://www.reddit.com/r/MachineLearning/comments/1uwya70/mechanistic_interpretability_a_first_paper_on/) ⭐️ 8.0/10

提出了一种使用哈达玛积聚类的新方法，用于解耦 Inceptionv1 中的单个卷积神经元，揭示了单语义簇（如汽车、猫）以及意外的低值模式（如字母）。 这项工作通过提供一种分析卷积神经元的新技术推进了机制可解释性，这些神经元相比注意力层常被忽视，并可能有助于逆向工程神经网络行为。 该方法对感受野和神经元权重的哈达玛积进行聚类，为已知概念产生清晰的簇，以及额外的低激活簇，其中正负权重均匀分布，暗示梯度下降有意注入噪声。

reddit · r/MachineLearning · /u/narang_27 · 7月15日 06:59

**背景**: 机制可解释性旨在通过分析神经网络的内部结构来逆向工程它们。卷积神经元检测图像中的模式，但理解单个神经元检测什么具有挑战性。输入和权重的哈达玛积（逐元素乘法）可以突出显示神经元“看到”的内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hadamard_product_(matrices)">Hadamard product (matrices) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mechanistic_interpretability">Mechanistic interpretability</a></li>
<li><a href="https://en.wikipedia.org/wiki/Inception_(deep_learning_architecture)">Inception (deep learning architecture) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论中，有人赞赏清晰的视觉化和新颖的方法，但一些评论者指出卷积可解释性不如语言模型工作受欢迎，并鼓励作者将类似方法应用于 Transformer。

**标签**: `#mechanistic interpretability`, `#convolutional neural networks`, `#disentanglement`, `#Inceptionv1`, `#interpretability`

---

<a id="item-9"></a>
## [PyTorch 模型在 T4 上比 A100 慢 170 倍](https://www.reddit.com/r/MachineLearning/comments/1ux6a9x/pytorch_model_running_170x_slower_on_t4_vs_a100/) ⭐️ 8.0/10

一个 PyTorch 点追踪模型在 NVIDIA T4 GPU 上运行耗时 85 秒，而在 A100 上仅需 0.5 秒，速度慢了 170 倍，尽管 T4 的 GPU 利用率达到 99%。 这种极端差距凸显了 GPU 部署中的关键性能陷阱，特别是对于包含 4D 相关体积和 Transformer 的模型，内存带宽和张量核心支持可能主导运行时间。 该模型使用纯 FP32 精度，而 T4 的张量核心仅支持 FP16/INT8，无法加速 FP32；A100 的张量核心则支持 TF32 和 FP32。此外，T4 的内存带宽（320 GB/s）远低于 A100（1.6 TB/s）。

reddit · r/MachineLearning · /u/Future-Structure-296 · 7月15日 13:44

**背景**: NVIDIA T4 和 A100 都是为 AI 工作负载设计的 GPU，但 A100 是更新的高端数据中心 GPU，拥有更多的计算单元、更高的内存带宽和更强的张量核心能力。张量核心是用于矩阵运算的专用硬件，对深度学习至关重要。T4 上的 FP32 运算会回退到 CUDA 核心，速度远慢于张量核心。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.server-parts.eu/post/nvidia-t4-vs-a100-gpu-comparison-ai-deep-learning-data-centers">NVIDIA T4 vs. NVIDIA A100 Comparison: Which GPU Should You ...</a></li>
<li><a href="https://viraajkadam.medium.com/understands-llms-how-do-i-estimate-gpu-memory-requirement-for-loading-a-model-1d176ddd4e56">Understands LLMs : How do I estimate GPU memory requirement ...</a></li>
<li><a href="https://github.com/huggingface/kernels/blob/main/skills/cuda-kernels/references/t4-optimization-guide.md">kernels/skills/cuda-kernels/references/t4-optimization-guide ...</a></li>

</ul>
</details>

**标签**: `#PyTorch`, `#GPU performance`, `#T4 vs A100`, `#deep learning`, `#debugging`

---

<a id="item-10"></a>
## [DeepSeek 年化收入逼近 5 亿美元，V4 API 毛利率超 50%](https://www.theinformation.com/articles/deepseeks-annualized-revenue-nears-500-million-boosting-fundraise-ipo-plans) ⭐️ 8.0/10

DeepSeek 的年化收入已达到 4 亿至 5 亿美元，主要来自企业和开发者的 API 调用，其 V4 API 毛利率超过 50%。该公司计划以 740 亿美元估值融资 74 亿美元。 这些财务指标展示了 DeepSeek 在竞争激烈的 AI API 市场中强大的变现能力和成本效率，对 OpenAI 和 Anthropic 等老牌玩家构成挑战。大规模融资轮表明投资者信心，可能加速 DeepSeek 的增长和市场影响力。 DeepSeek 的 V4 API 毛利率超过 50%，尽管收费远低于 OpenAI 和 Anthropic，这是通过优化基础设施减少所需芯片数量实现的。公司还计划引入中东等海外投资者，并允许使用美元投资。

telegram · zaihuapd · 7月15日 07:04

**背景**: 年化收入是将近期月收入折算为一年的预测值，并非已实现的全年收入。API 服务的毛利率反映了收入与计算基础设施成本之间的差额，是 AI 公司的关键指标。DeepSeek 是一家以高性价比大语言模型闻名的中国 AI 初创公司。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://api-docs.deepseek.com/">Your First API Call | DeepSeek API Docs</a></li>
<li><a href="https://deepseek.ai/deepseek-v4">DeepSeek AI: R1 Reasoning, API & Local Deployment 2026</a></li>

</ul>
</details>

**标签**: `#DeepSeek`, `#AI`, `#funding`, `#revenue`, `#API`

---

<a id="item-11"></a>
## [谷歌与 Epic 撤回动议，第三方应用商店即将入驻 Play](https://www.theverge.com/policy/965792/google-epic-withdraw-injunction-third-party-app-stores-coming-google-play) ⭐️ 8.0/10

谷歌与 Epic Games 已共同撤回修改永久禁令的动议，谷歌将于 7 月 22 日起开始在 Google Play 上托管第三方应用商店。 这标志着 Android 应用分发模式的重大转变，可能增加竞争并为用户提供更多选择，同时也为平台守门人如何处理竞争对手商店树立了先例。 第三方商店需每年支付 5000 美元的安全审查费，并满足不得在美国以外分发、对开发者开放、明确的信任与安全政策等要求。美国以外地区则仍将沿用谷歌计划今年晚些时候推出的侧载“Registered App Store”方案。

telegram · zaihuapd · 7月15日 11:15

**背景**: Epic 诉谷歌反垄断案于 2020 年提起，最终法院命令谷歌向第三方应用商店开放 Android。谷歌此前限制侧载并要求所有应用通过 Google Play 分发，Epic 认为这具有反竞争性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://durovscode.com/4694">Google ordered to open Play Store in Epic Games antitrust case</a></li>
<li><a href="https://www.androidauthority.com/android-changes-third-party-app-stores-3613409/">Google's proposed Android changes won't save sideloading</a></li>

</ul>
</details>

**标签**: `#Android`, `#Google Play`, `#Epic Games`, `#app store policy`, `#antitrust`

---

<a id="item-12"></a>
## [沙盒逃逸让 Filza 读取 iOS 27 备忘录数据库](https://x.com/0xjohnny/status/2077216973256274272) ⭐️ 8.0/10

开发者 @0xjohnny 修改了 iOS 文件管理器 Filza，利用沙盒逃逸漏洞，使其能够在运行 iOS 27 beta 3 的 iPhone 17 Pro Max 上读取备忘录数据库。 这展示了最新 iOS beta 中一个实际的沙盒逃逸漏洞，暴露了备忘录等敏感用户数据。它凸显了 iOS 中持续存在的安全挑战，可能促使苹果在正式版发布前修补该漏洞。 该漏洞利用针对 Filza，这是一款流行的 iOS 文件管理器，适用于越狱和非越狱设备。修改后的版本绕过了应用容器限制，能够访问外部数据，特别是备忘录数据库。

telegram · zaihuapd · 7月15日 14:35

**背景**: iOS 使用沙盒机制将每个应用限制在自己的容器内，防止访问其他应用的数据。沙盒逃逸是指应用突破此容器，通常通过内核或授权缺陷实现。Filza 是一款文件管理器，通常需要越狱或特殊授权才能访问完整文件系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=vB7EN21sxfw">Install Filza File Manager on iOS 18-26 (No Jailbreak) - YouTube</a></li>
<li><a href="https://www.tigisoftware.com/default/?page_id=78">Filza – TIGI Software</a></li>
<li><a href="https://redfoxsecurity.medium.com/locked-in-a-box-how-ios-sandboxing-challenges-pentesters-8207476da296">Locked in a Box : How iOS Sandboxing Challenges Pentesters | Medium</a></li>

</ul>
</details>

**标签**: `#iOS`, `#sandbox escape`, `#security`, `#vulnerability`, `#Filza`

---