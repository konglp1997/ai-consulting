# 邮件订阅配置指南

## 概述

AIHotNews 支持邮件订阅功能，用户通过发送邮件订阅每日 AI 简报，系统自动将每日简报发送到订阅者邮箱。

## 工作流程

```
用户发邮件（主题：订阅）→ AIHotNews IMAP 收取 → 添加到订阅列表 → 确认回复邮件
                                    ↓
每日定时任务 → 生成简报 → SMTP 发送给所有订阅者
```

## 一、准备邮箱

推荐使用 QQ 邮箱（国内访问快，免费）。

### 1. 开启 IMAP/SMTP 服务

1. 登录 [QQ 邮箱设置](https://mail.qq.com) → 设置 → 账户
2. 找到「IMAP/SMTP 服务」，点击「开启」
3. 按提示发送短信验证，获得**授权码**（16位字符）
4. 保存授权码，这是你的邮箱密码

### 2. 记录邮箱信息

| 项目 | 值 |
|------|-----|
| 邮箱地址 | `你的QQ号@qq.com` |
| 授权码 | 短信验证后获得的16位字符 |
| SMTP 服务器 | `smtp.qq.com:465` |
| IMAP 服务器 | `imap.qq.com:993` |

## 二、配置 GitHub Secrets

在 GitHub 仓库 `konglp1997/ai-consulting` 中添加以下 Secrets：

1. 进入 **Settings → Secrets and variables → Actions**
2. 点击 **New repository secret**，添加：

| Secret 名称 | 值 |
|-------------|-----|
| `EMAIL_PASSWORD` | 你的QQ邮箱授权码 |
| `AIHOTNEWS_EMAIL_ADDRESS` | `你的QQ号@qq.com` |

## 三、配置文件说明

`data/config.github.json` 中的 email 配置段：

```json
{
  "email": {
    "enabled": true,
    "smtp_server": "smtp.qq.com",
    "smtp_port": 465,
    "imap_server": "imap.qq.com",
    "imap_port": 993,
    "imap_enabled": true,
    "email_address": "${AIHOTNEWS_EMAIL_ADDRESS}",
    "password_env": "EMAIL_PASSWORD",
    "sender_name": "AIHotNews Daily",
    "subscribe_keyword": "订阅",
    "unsubscribe_keyword": "退订"
  }
}
```

### 字段说明

| 字段 | 说明 |
|------|------|
| `enabled` | 是否启用邮件功能 |
| `smtp_server` / `smtp_port` | SMTP 发信服务器 |
| `imap_server` / `imap_port` | IMAP 收信服务器 |
| `imap_enabled` | 是否开启自动收取订阅邮件 |
| `email_address` | 邮箱地址（`${ENV_VAR}` 引用环境变量） |
| `password_env` | 存放密码/授权码的环境变量名 |
| `sender_name` | 发件人显示名称 |
| `subscribe_keyword` | 订阅关键词（邮件主题） |
| `unsubscribe_keyword` | 退订关键词（邮件主题） |

## 四、用户订阅方式

### 订阅

1. 用任意邮箱向 `你的QQ号@qq.com` 发送一封邮件
2. 邮件主题填写：`订阅`
3. 系统自动收取并添加到订阅列表
4. 收到确认邮件即订阅成功

### 退订

1. 向同一邮箱发送邮件
2. 邮件主题填写：`退订`
3. 系统自动移除并回复确认

## 五、使用其他邮箱服务

### Gmail

```json
{
  "smtp_server": "smtp.gmail.com",
  "smtp_port": 465,
  "imap_server": "imap.gmail.com",
  "imap_port": 993
}
```

需要：开启两步验证 → 生成应用专用密码

### 163 邮箱

```json
{
  "smtp_server": "smtp.163.com",
  "smtp_port": 465,
  "imap_server": "imap.163.com",
  "imap_port": 993
}
```

需要：开启 IMAP/SMTP 服务 → 获取授权码

### Outlook

```json
{
  "smtp_server": "smtp-mail.outlook.com",
  "smtp_port": 587,
  "imap_server": "outlook.office365.com",
  "imap_port": 993
}
```

## 六、自动运行

邮件订阅随每日定时任务自动运行（UTC 22:00）：

1. **收取订阅邮件**：检查 IMAP 收件箱中的订阅/退订邮件
2. **生成简报**：采集 → AI 分析 → 生成中文简报
3. **发送简报**：通过 SMTP 向所有订阅者发送当日简报

## 七、故障排查

| 问题 | 解决方案 |
|------|---------|
| 邮件未发送 | 检查 `EMAIL_PASSWORD` 和 `AIHOTNEWS_EMAIL_ADDRESS` Secret 是否设置 |
| 订阅未生效 | 确认邮箱 IMAP 服务已开启，授权码正确 |
| 被判为垃圾邮件 | 建议用户将发件邮箱加入白名单 |
| SMTP 连接失败 | 确认 smtp_server 和 smtp_port 配置正确 |
