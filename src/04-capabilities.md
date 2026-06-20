# Powers — everything your agent can do

Your web agent (Iteration 1) chats like you and remembers. Now give it powers to
**automate your workflows**. Each capability below is its own **drop-down — click
to expand it** and see exactly how to switch it on and use it.

Most capabilities come from a ready-made **power** (a module you add once) or a
**connector** (a one-time web sign-in). Adding one power often unlocks several
capabilities. **Memory** is the best first one.

> "Switch it on" prompts tell Claude to follow the `build.md` guide that came with
> your starter — it clones the right module and wires it into `agent.js`. After
> it's on, the **Try it** prompts work in your browser chat.

---

## 🧠 Memory

:::capability 🧠 Remember what you tell it
**What it does:** keeps facts you mention (people, preferences, decisions) forever.
**Switch it on:** tell Claude — *"Add the Memory power, follow build.md, then restart my agent."*
**Try it:**

> 📋 **Type this to your agent:**
```text
Remember that my dog's name is Pixel.
```
…then restart, open a fresh chat, and ask *"what's my dog's name?"*
:::

:::capability 🧠 Recall relevant context automatically
**What it does:** before every reply it quietly pulls up your most relevant past
memories, so it never starts from zero.
**Switch it on:** needs the **Memory** power (above).
**Try it:** nothing to type — just chat. The more history it has, the more it
weaves in.
:::

:::capability 🧠 Answer "what did we discuss about X?"
**What it does:** searches your own history and tells you what was said.
**Switch it on:** needs the **Memory** power.
**Try it:**

> 📋 **Type this to your agent:**
```text
What did we discuss about my launch plan?
```
:::

:::capability 🧠 Get sharper over time
**What it does:** memories you use a lot get kept and prioritised; the noise is
forgotten — so recall improves the longer you run it.
**Switch it on:** needs the **Memory** power. It then maintains itself.
:::

---

## 📧 Email

> All four need: **Gmail connected** (one-time — <https://claude.ai/customize/connectors> → Gmail → Connect) **and** the **Email** power (tell Claude *"Add the Email power, follow build.md"*). It only ever **drafts** — never sends.

:::capability 📧 Summarize your unread inbox
**What it does:** a one-glance digest of who wants what.
**Try it:**

> 📋 **Type this to your agent:**
```text
Summarize my unread emails.
```
:::

:::capability 📧 Draft replies in your voice
**What it does:** writes a ready-to-review draft for each email worth answering.
**Try it:**

> 📋 **Type this to your agent:**
```text
Read my unread emails and draft replies to the ones a human would reply to, in my
voice. Save them to a file and tell me where.
```
:::

:::capability 📧 Triage your inbox
**What it does:** separates real human mail from no-reply / marketing noise.
**Try it:**

> 📋 **Type this to your agent:**
```text
Go through my inbox and tell me which emails actually need a reply from me.
```
:::

:::capability 📧 Draft a single reply on demand
**What it does:** paste any message, get one polished reply in your voice.
**Try it:**

> 📋 **Type this to your agent:**
```text
Draft a reply to this in my voice: "Hey, are we still on for Thursday at 3?"
```
:::

---

## ⏰ Reminders & scheduling

> These need the **Reminders** power (tell Claude *"Add the Reminders power, follow build.md"*). Reminders pop up as a desktop notification while your agent is running.

:::capability ⏰ One-off reminder or message
**What it does:** fires a message at a specific time.
**Try it:**

> 📋 **Type this to your agent:**
```text
Send me a hi message in 2 minutes.
```
:::

:::capability ⏰ Recurring reminder
**What it does:** repeats on a schedule.
**Try it:**

> 📋 **Type this to your agent:**
```text
Every weekday at 9am, remind me about standup.
```
:::

:::capability ⏰ Scheduled message to a channel
**What it does:** posts a message later (delivered to Slack if you've added the
Slack power, otherwise as a notification).
**Try it:**

> 📋 **Type this to your agent:**
```text
Tomorrow at 8am, send me a short hype message to start the day.
```
:::

---

## 📅 Calendar

> These need **Google Calendar connected** (one-time — <https://claude.ai/customize/connectors> → Google Calendar → Connect). No module to add — once it's connected, just ask.

:::capability 📅 Block time on your calendar
**What it does:** creates a busy block so people can't book over you.
**Try it:**

> 📋 **Type this to your agent:**
```text
Block my calendar from 6pm to 8pm today for deep work, titled "Focus".
```
:::

:::capability 📅 Check your availability
**What it does:** tells you when you're free.
**Try it:**

> 📋 **Type this to your agent:**
```text
Am I free Thursday afternoon?
```
:::

:::capability 📅 Create an event
**What it does:** adds a meeting/event to your calendar.
**Try it:**

> 📋 **Type this to your agent:**
```text
Add a call with Sam tomorrow at 4pm for 30 minutes.
```
:::

---

## 💬 Slack

> These need the **Slack** power (tell Claude *"Add the Slack power and help me deploy, follow build.md"*) — it walks you through creating a Slack app and two tokens. This is also how you **deploy** your agent on Slack.

:::capability 💬 Reply to DMs and mentions in your voice
**What it does:** people message your agent in Slack and it replies in-thread, as you.
**Try it:** in Slack, find your app and **DM it** — it answers in your voice.
:::

:::capability 💬 Summarize a thread or channel
**What it does:** catches you up on a busy conversation.
**Try it:** in Slack, *"@your-agent summarize this thread for me."*
:::

:::capability 💬 Send a message on demand
**What it does:** posts a message to a channel or person for you.
**Try it:**

> 📋 **Type this to your agent:**
```text
Post "standup in 5 minutes 🙌" to #general.
```
:::

:::capability 💬 Edit or delete a message it sent
**What it does:** fixes or removes a message your agent posted.
**Try it:**

> 📋 **Type this to your agent:**
```text
Change that last message to 10 minutes — actually, delete it.
```
:::

---

## 🔗 Combined — powers working together

:::capability 🔗 Read an email → summarize → remember it
**What it does:** turns an email into a saved memory you can recall later.
**Needs:** the **Email** + **Memory** powers.
**Try it:**

> 📋 **Type this to your agent:**
```text
Summarize my unread emails and remember anything important for later.
```
:::

:::capability 🔗 Recall context to write sharper replies
**What it does:** folds what it knows about a person/topic into the reply it drafts.
**Needs:** **Memory** + **Email** (or **Slack**). Happens automatically when it drafts.
:::

:::capability 🔗 Scheduled daily digest
**What it does:** every morning, summarizes your unread email (and Slack) and sends
it to you.
**Needs:** **Reminders** + **Email** (and **Slack** for the Slack part).
**Try it:**

> 📋 **Type this to your agent:**
```text
Every morning at 8am, summarize my unread email and send it to me.
```
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
