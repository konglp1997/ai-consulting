---
layout: default
title: "Daily-Summary: 2026-10-24 (ZH)"
date: 2026-10-24
lang: zh
---

> 从 47 条内容中筛选出 6 条重要资讯。

---

1. [Moonshot AI 发布 Kimi K3.1 Pro 及 Highspeed 版本](#item-1) ⭐️ 8.0/10
2. [博客宣称成功破解 iPhone，引发越狱与安全研究热议](#item-2) ⭐️ 8.0/10
3. [Block 推出 Dessa：可在本地运行的全双工语音模型](#item-3) ⭐️ 8.0/10
4. [OpenAI 将 Habitat 存储扩展至 10 亿以上 ChatGPT 用户，读取速度提升 12 倍](#item-4) ⭐️ 8.0/10
5. [蜂巢思维等价于单个强化学习智能体：群体动力学与多臂老虎机被证明等价](#item-5) ⭐️ 8.0/10
6. [PHP 基金会建议禁用上传进度功能以缓解 RCE 漏洞](#item-6) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Moonshot AI 发布 Kimi K3.1 Pro 及 Highspeed 版本](https://www.kimi.ai/blog/kimi-k3-1-pro) ⭐️ 8.0/10

Moonshot AI 于 2026 年 10 月 23-24 日发布 Kimi K3.1 Pro，这是其新 K3.1 系列的首款模型，也是其目前最强的三万亿参数级开放权重模型，拥有 100 万 token 的上下文窗口。同时推出了速度更快的 Kimi K3.1 Pro Highspeed 版本，两款模型均可在 Kimi.ai、Kimi Work、Kimi Code 及 API 中使用。 Kimi K3.1 Pro 在编程、3D 创作、金融研究和智能体能力方面有显著提升，独立测试显示其性能接近最强的专有模型。其有竞争力的定价和开放权重策略可能加剧 AI 模型市场的竞争，尤其是在编程智能体和复杂知识工作领域。 该模型通过 API 提供，标识符为 kimi-k3.1-pro 和 kimi-k3.1-pro-highspeed，完整权重承诺于 11 月 4 日前开放。Moonshot AI 指出，K3.1 Pro 的进攻性网络能力被有意控制在专有前沿模型之下，并计划逐步提升开放权重中的网络能力。

hackernews · Jowsey · 10月23日 16:59 · [社区讨论](https://news.ycombinator.com/item?id=50212065)

**背景**: Kimi 是中国 AI 公司 Moonshot AI 开发的一系列大语言模型。K3.1 系列接替早期的 Kimi 模型，强调智能体能力、长上下文和开放权重。开放权重模型允许研究人员和开发者下载并在本地运行模型，这与仅能通过 API 访问的 Claude Sonnet 等专有模型形成对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart">Kimi K3.1 Pro - Kimi API Platform</a></li>
<li><a href="https://www.unite.ai/moonshot-ai-releases-kimi-k3-1-pro-first-model-in-new-k3-1-series/">Moonshot AI Releases Kimi K3.1 Pro, First Model in New K3.1 ...</a></li>
<li><a href="https://habr.com/ru/news/1098732/">Moonshot выпустили Kimi K 3 . 1 Pro : лучше GPT-6 Astra... / Хабр</a></li>

</ul>
</details>

**社区讨论**: Hacker News 评论者指出，与美国模型相比，Kimi 的性格更直率、更好辩，并提到其推理轨迹有时会自称为 ChatGPT 或提及“评估者”。用户还对每月 99 美元订阅计划的速率限制表示担忧，而一项 Pac-Man 基准测试显示 K3.1 Pro 与 Claude Sonnet 5.5 打平，但成本更低（0.68 美元 vs 1.61 美元）且速度更快（11 分钟 vs 14 分钟）。一些人对 Moonshot 承认其可以产生更强的网络能力但选择不发布表示质疑。

**标签**: `#llm`, `#kimi`, `#moonshot-ai`, `#model-release`, `#benchmarks`

---

<a id="item-2"></a>
## [博客宣称成功破解 iPhone，引发越狱与安全研究热议](https://blog.calif.io/p/iphone) ⭐️ 8.0/10

一篇题为“今天，我们成功破解了最初的目标：iPhone”的博客文章描述了成功破解 iPhone 的成果，但具体技术细节较少。该文章在 Hacker News 上引发了大规模讨论，获得 714 分和 467 条评论。 这凸显了人们对 iPhone 越狱和安全研究的持续兴趣，引发了关于苹果生态系统控制和研究访问权限的质疑。讨论反映了对锁定效应和安全研究伦理的更广泛担忧。 博客文章缺乏技术细节，社区成员质疑锁定模式是否能缓解此类漏洞利用。讨论还涉及苹果的安全研究设备计划以及越狱现代 iOS 的挑战。

hackernews · pavel_lishin · 10月23日 16:21 · [社区讨论](https://news.ycombinator.com/item?id=50211474)

**背景**: iOS 越狱利用内核或用户态漏洞绕过苹果的软件限制，允许获取 root 权限并安装未经授权的应用。现代“无根”越狱在不修改只读根文件系统的情况下绕过密封系统卷（SSV）。苹果的安全研究设备计划为研究人员提供特殊设备以发现漏洞，但访问权限有限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/IPhone_jailbreak">IPhone jailbreak</a></li>
<li><a href="https://security.apple.com/research-device/">Security Research Device - Apple Security Research</a></li>

</ul>
</details>

**社区讨论**: 评论者对苹果的生态系统锁定表示不满，指出越狱可能导致失去 iCloud 和 iMessage 访问权限。一些人批评安全研究计划的排他性，另一些人则询问锁定模式对这些漏洞利用的有效性。

**标签**: `#iPhone`, `#jailbreak`, `#security`, `#Apple`, `#hacking`

---

<a id="item-3"></a>
## [Block 推出 Dessa：可在本地运行的全双工语音模型](https://block.xyz/dessa) ⭐️ 8.0/10

Block 推出了 Dessa，一种新的全双工语音模型，能够实现自然、重叠的对话，并可在高端 MacBook（如 MacBook Pro M4 Max）上本地运行。该模型在单个 NVIDIA GB200 NVL72 系统上完成训练。 这具有重要意义，因为能够同时听和说的全双工语音模型是迈向更接近人类的语音助手的关键一步，而在笔记本电脑上本地运行此类模型可以实现私密、低延迟的对话式 AI，无需依赖云端。在单个 GB200 NVL72 上训练也表明，先进的语音模型可能以比先前认为更适中的计算资源实现。 据报道，Dessa 在本地推理时需要 MacBook Pro M4 Max 或更高配置，而其在单个 GB200 NVL72 上的训练值得注意，因为此类系统通常用于大规模训练。该模型的演示展示了富有表现力的重叠语音，但一些听众指出，打断可能显得不自然，且训练数据可能包含播客。

hackernews · dsr12 · 10月23日 19:09 · [社区讨论](https://news.ycombinator.com/item?id=50213925)

**背景**: 全双工语音模型旨在连续处理音频，使 AI 能够同时听和说，而无需等待用户说完，这与传统的轮流式语音助手不同。NVIDIA GB200 NVL72 是一种机架级液冷系统，连接 36 个 Grace CPU 和 72 个 Blackwell GPU，通常用于大规模 AI 训练和推理。随着苹果强大的 M 系列芯片，在 MacBook 等设备上本地运行 AI 模型变得更加可行，从而实现隐私和低延迟。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/gb200-nvl72/">GB200 NVL72 | NVIDIA</a></li>
<li><a href="https://huggingface.co/collections/wrice/full-duplex-speech-models">Full-Duplex Speech Models - a wrice Collection - Hugging Face</a></li>
<li><a href="https://llmpicker.blog/posts/macbook-air-m5-local-llm/">MacBook Air M5 Local LLM Inference: The Ultimate Guide to ...</a></li>

</ul>
</details>

**社区讨论**: 评论者对本地推理和单系统训练印象深刻，有人称其为“'独立'AI 的一项了不起的成就”。然而，一些人批评模型的打断显得不自然，并质疑“史上最真实”的营销说法，还有人指出训练数据可能包含播客，并调侃模型类似人类的特质。

**标签**: `#speech-model`, `#full-duplex`, `#AI`, `#local-inference`, `#machine-learning`

---

<a id="item-4"></a>
## [OpenAI 将 Habitat 存储扩展至 10 亿以上 ChatGPT 用户，读取速度提升 12 倍](https://openai.com/index/scaling-storage-one-billion-users-part-two) ⭐️ 8.0/10

OpenAI 发布了工程博客第二部分，详细介绍了如何扩展其 Habitat 在线存储系统以支持每周超过 10 亿的 ChatGPT 用户。改进包括可靠的多租户架构、全局缓存和 Azure Cosmos DB 集成，使读取速度提升了 12 倍。 这篇深度解析为构建处理海量请求的大规模分布式存储系统提供了实用见解，对设计类似多租户云服务的工程师很有价值。它还强调了 OpenAI 对 Azure Cosmos DB 的依赖以及扩展到数十亿用户时所涉及的权衡。 Habitat 目前每秒处理超过 7000 万次请求，覆盖近 40 个地理区域，团队经历了从单一多租户 Cosmos DB 容器到单租户容器再回到多租户设计的循环过程。博客指出了在大规模设计时在可靠性和效率方面的权衡。

rss · OpenAI Blog · 10月23日 17:00

**背景**: Habitat 是 OpenAI 的内部在线存储平台，为 ChatGPT 等产品提供快速可靠的数据访问。Azure Cosmos DB 是微软的全球分布式 NoSQL 数据库服务，专为高可用性和低延迟设计。多租户是一种架构，其中单个软件实例为多个不同的用户组服务，从而提高资源利用率并降低成本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/scaling-storage-one-billion-users-part-one/">Rapidly scaling online storage to serve over 1 ... - OpenAI</a></li>
<li><a href="https://openai.com/index/scaling-storage-one-billion-users-part-two/">Rapidly scaling online storage to serve over 1 ... - OpenAI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Azure_Cosmos_DB">Azure Cosmos DB</a></li>

</ul>
</details>

**标签**: `#distributed-systems`, `#cloud-storage`, `#scalability`, `#multi-tenancy`, `#caching`

---

<a id="item-5"></a>
## [蜂巢思维等价于单个强化学习智能体：群体动力学与多臂老虎机被证明等价](https://www.reddit.com/r/MachineLearning/comments/1xdhf7r/r_the_hive_mind_is_a_single_reinforcement/) ⭐️ 8.0/10

一篇新论文证明了通过局部模仿进行的集体决策（例如蜜蜂通过摇摆舞选择巢址）与多臂老虎机设置下的单智能体强化学习之间存在精确的数学等价关系，并引入了一种名为 Maynard-Cross Learning (MCL) 的宏观算法。该工作表明，即使个体没有学习能力而只是盲目模仿同伴，种群分布也会按照一种老虎机强化学习算法更新，其中 N 个个体充当 N 个并行的环境采样，有效步长为 α = 1/N。 这一理论结果为“蜂巢思维”智能如何从简单的、无学习能力的个体中涌现提供了形式化机制，弥合了集体决策与强化学习之间的鸿沟。它可能对两个领域产生影响，为分析社会和经济系统中的模仿动力学以及设计可扩展的去中心化群体机器人算法提供新工具。 论文首先表明，遵循经典“模仿成功”协议的人群的演化与 Cross Learning 老虎机算法的期望更新完全相同。将此扩展到蜜蜂摇摆舞的“加权投票者”模型——侦察蜂根据 site 质量成比例地宣传持续时间，而同伴盲目复制第一个遇到的广告——便得到了新的 MCL 算法；该工作通过强化学习和群体实验进行了验证。

reddit · r/MachineLearning · /u/mistlab · 10月23日 15:37

**背景**: 多臂老虎机是最简单的强化学习问题，涉及单一状态、多个动作以及探索-利用权衡。在自然界中，蜜蜂群体通过摇摆舞选择巢址，侦察蜂宣传地点，其他蜜蜂跟随，生物学家将这一过程比作“蜂巢思维”或超个体。本文探究这种集体模仿是否在数学上对应于单个智能体通过试错进行学习。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Multi-armed_bandit">Multi - armed bandit - Wikipedia</a></li>
<li><a href="https://www.alphaxiv.org/abs/2410.17517">The Hive Mind is a Single Reinforcement Learning Agent | alphaXiv</a></li>
<li><a href="https://arxiv.org/html/2410.17517">The Hive Mind is a Single Reinforcement Learning Agent</a></li>

</ul>
</details>

**标签**: `#reinforcement-learning`, `#swarm-intelligence`, `#multi-armed-bandits`, `#collective-decision-making`, `#mathematical-equivalence`

---

<a id="item-6"></a>
## [PHP 基金会建议禁用上传进度功能以缓解 RCE 漏洞](https://x.com/ThePHPF/status/2113580383875019242) ⭐️ 8.0/10

PHP 基金会建议用户在下一个 PHP 版本发布前，将 session.upload_progress.enabled 设为 0，以防范编号为 CVE-2026-115560 的远程代码执行漏洞。只有在运行时将非默认 serialize_handler 切换为“php”的应用可能受影响。 这是针对 PHP 的重要安全公告，PHP 是广泛使用的语言，支撑着大部分 Web 应用，该 RCE 漏洞可能允许未认证攻击者在受影响的服务器上执行任意代码。建议在补丁发布前禁用内置功能，这一措施紧急且影响众多应用。 该漏洞影响从 PHP 5.4 起的几乎所有版本，但利用需要运行时将 session.serialize_handler 切换为“php”（默认是“php_serialize”）。PHP 基金会此前也曾因另一个漏洞 CVE-2026-109619 建议保持该功能禁用。

telegram · zaihuapd · 10月23日 13:46

**背景**: PHP 的 session.upload_progress 功能通过会话跟踪文件上传进度。session.serialize_handler 设置决定会话数据的序列化方式；默认的“php_serialize”更安全，而“php”是遗留处理器，与上传进度结合时可能引入安全风险。CVE-2026-115560 是一个远程代码执行漏洞，利用这一组合允许攻击者在服务器上运行任意代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.php.net/manual/en/session.upload-progress.php">PHP: Session Upload Progress - Manual</a></li>
<li><a href="https://www.php.net/manual/en/session.configuration.php">PHP : Runtime Configuration - Manual</a></li>
<li><a href="https://vulners.com/cve/CVE-2026-115560">CVE-2026-115560 - vulnerability database | Vulners.com</a></li>

</ul>
</details>

**标签**: `#PHP`, `#security`, `#vulnerability`, `#RCE`, `#CVE`

---