# Phase 2 — Build

Now bring your agent to life in the browser. Your starter came with a short
`build.md` guide — just point Claude at it and it does the heavy lifting.

> Make sure you finished **Ideate** first — this uses the `PERSONALITY.md` it
> wrote.

This is **Iteration 1: your web interface.** Once your agent is chatting in your
voice, you'll build it up power-by-power in **Iterations 2–5** (the Capabilities
page).

---

## The Build prompt

> 📋 **Paste this to Claude:**
```text
Read build.md and build my agent (Iteration 1): apply my PERSONALITY.md, set my
agent's name in the web page, and start the website in the background. Then give
me the exact link to open in my browser, and keep it running.
```

---

## See it talk (your magic moment)

Open the link Claude gives you (something like **http://localhost:3000**) in your
browser. You'll see a chat box. **Say hi.** It should answer in *your* voice. 🎉

Doesn't sound quite like you yet?

> 📋 **Paste this to Claude:**
```text
That reply didn't sound like me — it was too [formal / stiff / generic]. Update
PERSONALITY.md to be more [what you want], then I'll test again.
```

(No restart needed — it reads your personality fresh on every reply.)

> 💾 **Save your progress.** Paste `checkpoint` and Claude saves your work so you
> can always come back to this exact point.

---

## Iteration 1 complete ✅

A real agent that **chats like you** and **remembers the conversation**, running
in your browser. That's the foundation. Now build it up — add powers in order
below. **Click each iteration**, paste its prompt to Claude, and test before
moving on.

---

## Add your powers — Iterations 2–5

> Each of these tells Claude to follow your bundled `build.md` guide — it clones
> the right module and wires it into `agent.js`. Add **Memory** first.

:::capability Iteration 2 · 🧠 Memory — remember across chats
Gives your agent long-term memory (not just the current conversation).

> 📋 **Paste this to Claude:**
```text
Add the Memory power to my agent (Iteration 2). Follow build.md: clone the memory
module, wire it INTO agent.js (its "twin.js" = my agent.js, "CLAUDE.md"/"PERSONA.md"
= my PERSONALITY.md), delete the module folder when done, then restart my agent and
give me the link.
```

**Test it:** tell it *"my dog's name is Pixel,"* restart, open a fresh chat, ask
*"what's my dog's name?"* Then paste `checkpoint`.
:::

:::capability Iteration 3 · ⏰ Reminders — send me things later
Lets your agent send timed and recurring messages.

> 📋 **Paste this to Claude:**
```text
Add the Reminders power to my agent (Iteration 3). Follow build.md: clone the
scheduler module, wire it into agent.js and make it auto-start from server.js, delete
the module folder, then restart my agent and give me the link.
```

**Test it:** in your chat, *"send me a hi message in 2 minutes."* Then `checkpoint`.
:::

:::capability Iteration 4 · 📧 Email — draft replies in your voice
Lets your agent read your unread Gmail and draft replies (never sends).

> 📋 **Paste this to Claude:**
```text
Add the Email power to my agent (Iteration 4). First check whether my Gmail
connector is connected; if it isn't, give me the exact steps to connect it at
claude.ai/customize/connectors and grant read access. Then follow build.md: clone
the email module and set it up for my agent. Delete the module folder when done.
```

**Test it:** in your chat, *"read my unread emails and draft replies."* Then `checkpoint`.
:::

:::capability Iteration 5 (optional) · 💬 Slack — and deploy on Slack
Reach your agent from Slack. Needs a Slack account + two tokens.

> 📋 **Paste this to Claude:**
```text
Add the Slack power to my agent and help me deploy it (Iteration 5). Follow build.md:
clone the slack module, wire it into agent.js alongside my website, then walk me step
by step through creating the Slack app and getting my two tokens so I can DM my agent
in Slack. Delete the module folder when done.
```

**Test it:** DM your app in Slack — it replies in your voice. Then `checkpoint`.
:::

---

## Done building ✅

Your agent is live with the powers you chose. Now 👉 explore everything it can do
on the **Capabilities** page.
