# Phase 2 — Build

Now bring your agent to life in the browser. One prompt does the heavy lifting:
it downloads the ready-made starter, pours in the personality you designed, and
opens your agent in your browser.

> Make sure you finished **Ideate** first — this step uses the `ideation.md` it
> created.

---

## The Build prompt

In the same Claude window (the one in your `my-agent`… er, your project folder),
paste this:

> 📋 **Paste this to Claude:**
```text
You're building my personal AI agent from a ready-made starter. Do all of this,
in order, in this folder:

1. Download the starter:
   git clone https://github.com/luvishg-growthx/personal-ai-agent-starter my-agent

2. Read my ideation.md (the personality I designed). Use it to write
   my-agent/PERSONALITY.md in my voice, and set my agent's NAME everywhere it
   shows — in my-agent/PERSONALITY.md and the title + header in
   my-agent/public/index.html.

3. Remember these names for the rest of the project: agent.js is the BRAIN (the
   only file that talks to the AI), server.js runs the website, PERSONALITY.md is
   the voice. If a power I add later mentions "twin.js" it means agent.js, and
   "CLAUDE.md"/"PERSONA.md" mean PERSONALITY.md. Always wire powers INTO agent.js
   — never make a second brain file.

4. Start my-agent's website in the background and tell me the exact link to open
   in my browser. Keep it running.

Then tell me in one line that my agent is live and where to click.
```

---

## See it talk (your magic moment)

Open the link Claude gives you (something like **http://localhost:3000**) in your
browser. You'll see a chat box. **Say hi.** It should answer in *your* voice. 🎉

Doesn't sound quite like you yet?

> 📋 **Paste this to Claude:**
```text
That reply didn't sound like me — it was too [formal / stiff / generic]. Update
my-agent/PERSONALITY.md to be more [what you want], then I'll test again.
```

(No restart needed — it reads your personality fresh on every reply.)

> 💾 **Save your progress.** Paste `checkpoint` and Claude saves your work so you
> can always come back to this exact point.

---

## What you have now

A real agent that **chats like you** and **remembers the conversation**, running
in your browser. That's the core. Next, give it real powers. 👉 Go to
**Capabilities**.
