# Welcome — you're going to build your own AI

By the end of today you'll have a **little AI version of you** — an agent that
chats in *your* voice, runs on *your* laptop, and opens right in your **web
browser** like any website. Then you'll show it on the big screen.

You do **not** need to know how to code. Really. You'll build the whole thing by
typing normal sentences to an AI helper, and it does the typing-of-code for you.

---

## What you'll end up with

A chat window in your browser where you talk to your agent. It will:

- 💬 **Talk like you** — your tone, your humour, your vibe.
- 🧠 **Remember you** — things you tell it stick around.
- 📧 **Help with email** — read your inbox and write replies in your voice.
- ⏰ **Remind you** — "ping me at 7pm" and it does.

You'll get all of this without writing code yourself.

---

## The day, in three simple phases

| Phase | Time | What you do |
|------|------|-------------|
| 1. **Ideate** | ~20 min | Decide who your agent *is* — its name and personality. |
| 2. **Build** | ~2 hours | Bring it to life in your browser and give it its powers. |
| 3. **Demo** | ~15 min | Show it off on the big screen. |

> One rule that makes today work: **you talk, the AI builds.** When something
> breaks, you don't fix it by hand — you tell the AI and it fixes it.

---

## First, two words you'll see a lot

You'll be using an AI helper called **Claude Code** (or **Codex** — same idea).
Think of it as a **super-smart assistant that lives in a little text box on your
computer and can actually do things** — create files, run your agent, fix
mistakes — just by you asking in plain English.

- **The "terminal"** = that text box where you type to Claude. That's it. It looks
  plain, but it's just a place to chat. Don't be scared of it.
- **A "prompt"** = a message you paste to Claude. Throughout this handbook, every
  step gives you a prompt to **copy and paste**. That's how you build.

If you can send a text message, you can do this.

---

## Get ready (about 10 minutes, ideally before you arrive)

You only need a few things installed. If you're stuck, grab a mentor — this part
is the boring bit, and then the fun starts.

1. **A code editor** — install **VS Code** (free): <https://code.visualstudio.com>
2. **Node.js** (this runs your agent) — the LTS version: <https://nodejs.org>
3. **Git** (this downloads the starter) — <https://git-scm.com/downloads>
4. **Claude Code** — open VS Code, open the terminal (top menu → **Terminal → New
   Terminal**), and type:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   Then type `claude` and sign in when the browser opens. (Codex users:
   `npm install -g @openai/codex`, then `codex login`.)

> ✅ You're ready when you can type `claude` in the terminal and it starts.

---

## Get the starter (your agent's body)

We've pre-built the hard parts so you can focus on making the agent *yours*.
In your terminal, start Claude (type `claude` and press Enter), then paste:

> 📋 **Paste this to Claude:**
```text
Please download my agent starter so I can build on it. Run this for me:
git clone https://github.com/luvishg-growthx/personal-ai-agent-starter my-agent
Then open the my-agent folder and tell me, in one friendly line, that it's ready.
```

Now you have a folder called **my-agent** with everything inside — **including the
`ideation.md` and `build.md` guides**, so they're right there in your project to
follow along (your AI can read them too).

**Want the guides on their own?** Download them manually:

- `ideation.md` → <https://raw.githubusercontent.com/luvishg-growthx/personal-ai-agent-starter/main/ideation.md>
- `build.md` → <https://raw.githubusercontent.com/luvishg-growthx/personal-ai-agent-starter/main/build.md>

…or have Claude drop them into your current folder:

> 📋 **Paste this to Claude:**
```text
Download these two guides into my current folder so I can follow them:
curl -O https://raw.githubusercontent.com/luvishg-growthx/personal-ai-agent-starter/main/ideation.md
curl -O https://raw.githubusercontent.com/luvishg-growthx/personal-ai-agent-starter/main/build.md
Then tell me they're saved.
```

Next: give it a personality. 👉 Go to **Ideation**.
