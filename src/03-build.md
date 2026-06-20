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
in your browser. That's the foundation. Now give it powers — 👉 head to
**Capabilities**.
