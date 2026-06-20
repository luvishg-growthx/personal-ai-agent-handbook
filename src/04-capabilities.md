# Powers — everything your agent can do

Your web agent (Iteration 1) chats like you and remembers. Now give it powers to
**automate your workflows**. Each power is a **ready-made module or connector** —
you don't build it, you just ask Claude (it follows the `build.md` guide that came
with your starter) and it wires it in.

**Click a power to see what it unlocks and how to switch it on.** Add the ones
you'd actually use — easiest in order — and **test each by talking to your
agent**. **Memory** is the best first one.

> Everything wires into your agent's brain (`agent.js`), so each power works in
> your browser chat the moment it's added.

---

:::capability Iteration 2 · 🧠 Memory — remembers across chats
**What it unlocks:**
- Remembers facts you tell it (people, preferences, decisions) — forever.
- Pulls up relevant past context automatically before replying.
- Answers *"what did we discuss about X?"* from your own history.
- Gets sharper over time (useful memories kept, noise forgotten).

**Switch it on:**

> 📋 **Paste this to Claude:**
```text
Add the Memory power to my agent — follow the Memory (Iteration 2) steps in
build.md, wire it into agent.js, then restart my agent and give me the link.
```

**Try it:** tell it *"my dog's name is Pixel,"* restart, open a fresh chat, and
ask *"what's my dog's name?"* — it remembers. 🧠
:::

:::capability Iteration 3 · ⏰ Reminders — sends you things later
**What it unlocks:**
- One-off reminders/messages — *"send me a hi at 7:30pm."*
- Recurring reminders — *"every weekday at 9am, nudge me about standup."*
- Scheduled messages to a channel (once Slack is added).

**Switch it on:**

> 📋 **Paste this to Claude:**
```text
Add the Reminders power to my agent — follow the Reminders (Iteration 3) steps in
build.md, wire it into agent.js + auto-start from server.js, then restart and
give me the link.
```

**Try it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Send me a hi message in 2 minutes.
```
:::

:::capability Iteration 4 · 📧 Email — drafts replies in your voice
**What it unlocks:**
- Summarizes your unread inbox (who wants what, at a glance).
- Drafts replies in your voice (**never sends** — only drafts you review).
- Triages real human mail vs no-reply/marketing noise.
- Drafts a single reply on demand from any message you paste.

**Connect Gmail first (one-time, on the web):** go to
<https://claude.ai/customize/connectors> → **Gmail** → **Connect** → sign in →
allow read access.

**Switch it on:**

> 📋 **Paste this to Claude:**
```text
Add the Email power to my agent — follow the Email (Iteration 4) steps in build.md.
```

**Try it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Read my unread emails and draft replies to the ones a human would reply to, in my
voice. Save them to a file and tell me where.
```
:::

:::capability 📅 Calendar — block time & manage events
**What it unlocks:**
- Block time — *"block 6–8pm today for deep work."*
- Check availability — *"am I free Thursday afternoon?"*
- Create events — *"add a call with Sam tomorrow at 4pm."*

**Switch it on (one-time, on the web — no code module needed):** go to
<https://claude.ai/customize/connectors> → **Google Calendar** → **Connect** →
sign in → **Allow** access. Make sure it shows **Connected**.

**Try it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Block my calendar from 6pm to 8pm today for deep work, and title it "Focus".
```
:::

:::capability Iteration 5 (optional) · 💬 Slack — and deploy on Slack
**What it unlocks:**
- Replies to DMs/mentions in your voice, in-thread.
- Summarizes a busy thread or channel to catch you up.
- Sends a message on demand — *"post 'standup in 5' to #general."*
- Edits or deletes a message it sent.

This is also where you **deploy** your agent on a real chat app. It needs a Slack
account and two tokens, so add it only if you're comfortable / ahead of time.

**Switch it on (this also walks you through deploying):**

> 📋 **Paste this to Claude:**
```text
Add the Slack power to my agent and help me deploy it — follow the Slack
(Iteration 5) steps in build.md. Walk me step by step through creating the Slack
app, getting my two tokens, and running it so I can message my agent in Slack.
```

When it's done, open Slack, find your app, and DM it. 🎉
:::

:::capability 🔗 Combined — powers working together
Once you've added a few powers, your agent can chain them:
- **Read an email → summarize it → remember the key facts** for later.
- **Recall what it knows** about a person/topic to write sharper email or Slack replies.
- **Scheduled daily digest** — each morning, summarize your unread email (and
  Slack) and send it to you.

Just ask — e.g. *"every morning at 8am, summarize my unread email and send it to me."*
:::

---

## Module repos (for reference / manual copy)

| Power | Repo |
|------|------|
| 🧠 Memory | https://github.com/luvishg-growthx/long-term-memory-engram-setup-guide-for-your-ai-agent |
| ⏰ Reminders | https://github.com/luvishg-growthx/cronjobs-and-reminders-setup-guide-for-your-ai-agent |
| 📧 Email | https://github.com/luvishg-growthx/reading-your-emails-and-drafting-a-reply-for-them-setup-guide-for-your-ai-agent |
| 💬 Slack | https://github.com/luvishg-growthx/upgrading-your-bot-to-being-a-slack-bot |

> 💾 After each power works, paste `checkpoint` so Claude saves your progress.

👉 When you've built up the powers you want, head to **Demo**.
