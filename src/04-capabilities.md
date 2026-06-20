# Powers — teach your agent to *do* things

Your agent already chats like you and remembers. Now give it real powers. Each
one is a **ready-made module** — you don't build it, you just paste a prompt and
your AI wires it in.

**Click any power below to open its steps.** Add one, test it by talking to your
agent, then add the next. You don't need all of them — pick what you'd actually
use. **Memory** is the best first one.

> Every power wires into your agent's brain (`agent.js`), so it works in your
> browser chat automatically once it's added.

---

:::capability 🧠 Memory — remember things forever
**What it does:** your agent remembers things across every chat, not just the one
you're in.

**Add it:**

> 📋 **Paste this to Claude:**
```text
Add long-term memory to my agent. First clone the module, then follow its guide:
git clone https://github.com/luvishg-growthx/long-term-memory-engram-setup-guide-for-your-ai-agent memory-module
Read memory-module's guide and do everything it needs (including any installs),
wiring it INTO my agent's brain (my-agent/agent.js) — its "twin.js" means my
agent.js, its "CLAUDE.md"/"PERSONA.md" mean my PERSONALITY.md. Don't make a
second brain file. When it's wired in, delete the memory-module folder, restart
my agent, and give me the link.
```

**Test it:** tell your agent something ("my dog's name is Pixel"). Ask Claude to
*"restart my agent"*, open a fresh chat, and ask *"what's my dog's name?"* — it
remembers. 🧠
:::

:::capability 📧 Email — draft replies in your voice
**What it does:** reads your unread Gmail and writes draft replies in your voice.
It **never sends** anything — it only drafts, for you to check.

**Connect Gmail first (one-time, on the web):** go to
<https://claude.ai/customize/connectors> → **Gmail** → **Connect** → sign in →
allow read access.

**Add it:**

> 📋 **Paste this to Claude:**
```text
Add the email reply-drafting power to my agent. First clone the module, then
follow its guide:
git clone https://github.com/luvishg-growthx/reading-your-emails-and-drafting-a-reply-for-them-setup-guide-for-your-ai-agent email-module
Read email-module's guide and set it up for my agent (its "twin.js" = my agent's
brain my-agent/agent.js, "CLAUDE.md"/"PERSONA.md" = my PERSONALITY.md). Delete
the email-module folder when done.
```

**Test it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Read my unread emails and draft replies to the ones a human would reply to, in
my voice. Save the drafts to a file and tell me where.
```
:::

:::capability ⏰ Reminders — send me things later
**What it does:** "remind me at 7pm" or "every weekday at 9am send me a hype
message" — it pops up on time, in your voice.

**Add it:**

> 📋 **Paste this to Claude:**
```text
Add the scheduler/reminders power to my agent. First clone the module, then
follow its guide:
git clone https://github.com/luvishg-growthx/cronjobs-and-reminders-setup-guide-for-your-ai-agent scheduler-module
Read scheduler-module's guide and wire it into my agent — its "twin.js" = my
agent's brain my-agent/agent.js; make the scheduler auto-start from
my-agent/server.js so reminders fire whenever my agent runs. Delete the
scheduler-module folder when done, then restart my agent and give me the link.
```

**Test it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Send me a hi message in 2 minutes.
```
:::

:::capability 📅 Calendar — block time & create events
**What it does:** your agent can check your calendar and block time or add events
— e.g. *"block my calendar 6–8pm tonight for deep work."*

**Connect your calendar first (one-time, on the web):** this power uses Claude's
**Google Calendar connector** — you have to switch it on:
1. Go to <https://claude.ai/customize/connectors>
2. Find **Google Calendar** → **Connect** → sign in to Google → **Allow** access.
3. Make sure it shows as **Connected**.

That's it — no code module needed. Once it's connected, just ask your agent.

**Try it** — in your browser chat:

> 📋 **Type this to your agent:**
```text
Block my calendar from 6pm to 8pm today for deep work, and title it "Focus".
```

(It works for *"am I free Thursday afternoon?"* and *"add a call with Sam tomorrow
at 4pm"* too.)
:::

:::capability 💬 Slack (advanced) — reach your agent from Slack
**What it does:** message your agent from Slack too. This one needs a Slack
account and a couple of tokens, so add it only if you're comfortable / ahead of
time.

**Add it:**

> 📋 **Paste this to Claude:**
```text
Add the Slack power to my agent. First clone the module, then follow its guide:
git clone https://github.com/luvishg-growthx/upgrading-your-bot-to-being-a-slack-bot slack-module
Read slack-module's guide and wire Slack into my agent alongside my website (its
"twin.js" = my agent's brain my-agent/agent.js) — don't replace my website. Walk
me through any accounts or tokens I need. Delete the slack-module folder when done.
```
:::

---

> 💾 After each power works, paste `checkpoint` so Claude saves your progress.

👉 When you've added the powers you want, head to **Demo**.
