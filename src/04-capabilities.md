# Powers — everything your agent can do

You built your agent with the powers you chose. This page is the **full menu** of
what it can do. Each capability is a **drop-down — click to expand it.**

Inside each one is a **prompt you paste to Claude Code** (the builder) that
**makes sure your agent can actually do it** — it connects the right access (like
your Google Calendar or Gmail) or confirms the power is wired in. After that, you
just ask your agent in plain English.

> Why a setup prompt? Some powers need *your* permission — e.g. to touch your
> calendar your agent needs your **Google Calendar** connected; to read mail it
> needs **Gmail** connected. These prompts make Claude Code set that up and check
> it works.

---

## 🧠 Memory

:::capability 🧠 Remember what you tell it
**What it does:** keeps facts you mention (people, preferences, decisions) forever.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can remember things long-term across chats. Confirm the memory
module is wired into agent.js; if it isn't, add it by following build.md. Then test
that it remembers a fact after I restart, and tell me it's working.
```

Then just tell your agent things like *"remember my dog's name is Pixel."*
:::

:::capability 🧠 Recall relevant context automatically
**What it does:** before every reply it quietly pulls up your most relevant past
memories.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent automatically recalls relevant past memories before it replies.
Confirm the memory module is wired into agent.js (add it via build.md if it isn't),
then show me an example where it uses something I told it earlier.
```

Then just chat — it weaves in what it knows. No special phrasing needed.
:::

:::capability 🧠 Answer "what did we discuss about X?"
**What it does:** searches your own history and tells you what was said.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can search its memory of our past conversations. Confirm the
memory module is set up (build.md), then confirm I can ask "what did we discuss
about X" and get a real answer.
```

Then ask your agent, e.g. *"what did we discuss about my launch plan?"*
:::

:::capability 🧠 Get sharper over time
**What it does:** memories you use a lot are kept and prioritised; noise is forgotten.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent's memory improves over time — confirm the memory module and its
nightly clean-up (promote useful memories, forget noise) are set up per build.md.
```

Nothing to type after — it maintains itself as you use it.
:::

---

## 📧 Email

:::capability 📧 Summarize your unread inbox
**What it does:** a one-glance digest of who wants what.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can read and summarize my unread Gmail. Check whether my Gmail
connector is connected and I've granted read access — if not, give me the exact
steps to connect it at claude.ai/customize/connectors. Then confirm the email
module is set up (build.md) and my agent can actually read my inbox.
```

Then ask your agent *"summarize my unread emails."*
:::

:::capability 📧 Draft replies in your voice
**What it does:** a ready-to-review draft for each email worth answering (never sends).

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can read my unread Gmail and draft replies in my voice. Confirm
the Gmail connector is connected with read access (give me steps to connect it at
claude.ai if not) and the email module is set up (build.md). Then confirm it can
produce drafts.
```

Then ask your agent *"read my unread emails and draft replies."*
:::

:::capability 📧 Triage your inbox
**What it does:** separates real human mail from no-reply / marketing noise.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can read my Gmail so it can triage it. Confirm the Gmail
connector is connected with read access (steps to connect at claude.ai if not) and
the email module is set up. Then confirm it can tell which emails need a reply.
```

Then ask your agent *"which of my emails actually need a reply?"*
:::

:::capability 📧 Draft a single reply on demand
**What it does:** paste any message, get one polished reply in your voice.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can draft a reply to any message I paste, in my voice. This uses
my agent's brain + PERSONALITY.md — confirm it works (no extra connector needed).
```

Then paste a message and say *"draft a reply to this in my voice."*
:::

---

## ⏰ Reminders & scheduling

:::capability ⏰ One-off reminder or message
**What it does:** fires a message at a specific time.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can schedule a one-off reminder that fires at a set time. Confirm
the scheduler module is wired in and auto-starts with my agent (build.md). Then have
it schedule a test reminder a minute from now so I can see it fire.
```

Then ask your agent *"remind me at 7pm to call mom."*
:::

:::capability ⏰ Recurring reminder
**What it does:** repeats on a schedule.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can set recurring reminders (e.g. every weekday at 9am). Confirm
the scheduler module is set up per build.md, then confirm a repeating reminder works.
```

Then ask your agent *"every weekday at 9am, remind me about standup."*
:::

:::capability ⏰ Scheduled message
**What it does:** sends a message later (to Slack if Slack is set up, else a notification).

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can send me a message at a future time. Confirm the scheduler
module is set up (build.md). If I want it delivered to Slack, also confirm the Slack
power + my Slack channel are configured.
```

Then ask your agent *"tomorrow at 8am, send me a hype message."*
:::

---

## 📅 Calendar

:::capability 📅 Block time on your calendar
**What it does:** creates a busy block so nobody books over you.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can block time on my Google Calendar. Check whether the Google
Calendar connector is connected and I've granted access — if it isn't, give me the
exact steps to connect it at claude.ai/customize/connectors and grant access. Then
confirm my agent can create a calendar event.
```

Then ask your agent *"block 6–8pm today for deep work."*
:::

:::capability 📅 Check your availability
**What it does:** tells you when you're free.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can read my Google Calendar to check my availability. Confirm the
Google Calendar connector is connected with access (steps to connect at claude.ai if
not), then confirm my agent can tell me when I'm free.
```

Then ask your agent *"am I free Thursday afternoon?"*
:::

:::capability 📅 Create an event
**What it does:** adds a meeting/event to your calendar.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can create events on my Google Calendar. Confirm the Google
Calendar connector is connected and I've granted access (give me the steps to connect
it at claude.ai if not). Then confirm my agent can add an event.
```

Then ask your agent *"add a call with Sam tomorrow at 4pm."*
:::

---

## 💬 Slack

:::capability 💬 Reply to DMs and mentions in your voice
**What it does:** people message your agent in Slack and it replies in-thread, as you.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent works on Slack and replies to DMs/mentions in my voice. Confirm
the Slack module is wired in and walk me through creating the Slack app + the two
tokens it needs (build.md). Then confirm it's connected.
```

Then DM your app in Slack.
:::

:::capability 💬 Summarize a thread or channel
**What it does:** catches you up on a busy conversation.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent (on Slack) can read and summarize a thread or channel. Confirm
the Slack power is set up with the right read permissions (build.md), then confirm it
can summarize a thread.
```

Then in Slack, *"@your-agent summarize this thread."*
:::

:::capability 💬 Send a message on demand
**What it does:** posts a message to a channel or person for you.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can post Slack messages on my behalf. Confirm the Slack power +
send permissions are set up (build.md), then confirm it can post to a channel.
```

Then ask your agent *"post 'standup in 5 🙌' to #general."*
:::

:::capability 💬 Edit or delete a message it sent
**What it does:** fixes or removes a message your agent posted.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can edit and delete its own Slack messages. Confirm the Slack
power is set up with the message tools wired in (build.md), then confirm edit/delete
work.
```

Then ask your agent *"delete that last message you sent."*
:::

---

## 🔗 Combined — powers working together

:::capability 🔗 Read an email → summarize → remember it
**What it does:** turns an email into a saved memory you can recall later.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can read my email AND save things to long-term memory. Confirm
both are set up: Gmail connector connected with access (steps if not) + email module,
and the memory module wired in (build.md). Then confirm it can summarize an email and
remember the key points.
```

Then ask your agent *"summarize my inbox and remember anything important."*
:::

:::capability 🔗 Recall context to write sharper replies
**What it does:** folds what it knows about a person/topic into the reply it drafts.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent uses its memory when it drafts email/Slack replies. Confirm the
memory module is wired in and that email (and/or Slack) is set up (build.md). Then
show me a reply that uses something it remembered.
```

Happens automatically once both powers are on — just ask it to draft a reply.
:::

:::capability 🔗 Scheduled daily digest
**What it does:** every morning, summarizes your unread email (and Slack) and sends it.

> 📋 **Paste this to Claude Code:**
```text
Make sure my agent can send me a scheduled daily digest of my email. Confirm the
scheduler module and the email power (Gmail connector + module) are set up (build.md).
Then set up a recurring 8am job that summarizes my unread email and sends it to me.
```

Then it just arrives each morning (tweak the time by asking).
:::

---

## Module repos (for reference / manual copy)

| Power | Repo |
|------|------|
| 🧠 Memory | https://github.com/luvishg-growthx/long-term-memory-engram-setup-guide-for-your-ai-agent |
| ⏰ Reminders | https://github.com/luvishg-growthx/cronjobs-and-reminders-setup-guide-for-your-ai-agent |
| 📧 Email | https://github.com/luvishg-growthx/reading-your-emails-and-drafting-a-reply-for-them-setup-guide-for-your-ai-agent |
| 💬 Slack | https://github.com/luvishg-growthx/upgrading-your-bot-to-being-a-slack-bot |

👉 Happy with your agent? Head to **Demo**.
