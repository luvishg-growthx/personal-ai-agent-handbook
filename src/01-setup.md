# Before you arrive — get your laptop ready

A few quick installs so you can spend the day building, not setting up. If any
step trips you up, a mentor will sort it in two minutes.

> You'll know each one worked if the check command prints a version (a line of
> text), not an error.

---

## ✅ The fast way — one prompt checks & installs everything

Once you've installed **Claude Code** (Step 6 below) and can run `claude`, you
don't have to do the rest by hand. Start Claude in your project folder and paste
this — it checks what's on your computer and **installs anything missing**:

> 📋 **Paste this to Claude:**
```text
You're my setup assistant for a build-your-own-AI workshop. Check that my computer
has everything I need, and install anything missing. Don't build my agent yet —
just get me ready.

1. Figure out my operating system (macOS or Windows).
2. Check each of these and tell me ✅ have it / ❌ missing (show the version):
   - Node.js (run: node --version) — I need version 20 or higher
   - npm (npm --version)
   - Git (git --version)
   - GitHub CLI (gh --version), and whether I'm logged in (gh auth status)
3. Install anything missing or too old, explaining each step in one simple line
   before you run it:
   - macOS: use Homebrew (e.g. brew install node git gh). If Homebrew isn't
     installed, install it first.
   - Windows: use winget (e.g. winget install OpenJS.NodeJS.LTS Git.Git GitHub.cli).
4. If GitHub CLI is installed but I'm NOT logged in, tell me to run "gh auth login"
   and walk me through it in plain steps (you can't log in for me).
5. Finish with a simple checklist showing everything is ✅ ready, and clearly list
   anything I still need to do myself.

Keep it friendly and simple — assume I'm not a coder.
```

> 🐣 Chicken-and-egg: you need **Claude Code itself** before you can paste that
> prompt — so do **Step 6** first (it's one line), then run this check. Prefer to
> do everything by hand? The steps below walk through each tool.

---

## 1. A code editor

Install **VS Code** (free): <https://code.visualstudio.com>. Open it once so it's
ready. This is where your AI helper and your agent will live.

## 2. Node.js

This runs your agent. Get the **LTS** version: <https://nodejs.org>.
Check it (in VS Code's terminal — **Terminal → New Terminal**):
```
node --version
```

## 3. Git

This lets your AI download and save code. <https://git-scm.com/downloads>.
Check it:
```
git --version
```

## 4. A GitHub account

GitHub is where code lives online. Your agent's starter and its powers are stored
there, and it's how your AI saves your work.

1. Go to <https://github.com> → **Sign up** (free) → verify your email.
2. Remember your username and password.

## 5. GitHub CLI (so your AI can use GitHub for you)

This connects GitHub to your computer so your AI can fetch and save code on your
behalf.

**Install it:**
- **Mac:** `brew install gh`  (no Homebrew? get it at <https://brew.sh> first)
- **Windows:** `winget install GitHub.cli`

**Connect it to your GitHub account** — run this and follow the prompts (choose
**GitHub.com** → **HTTPS** → **Login with a web browser**, then paste the code it
shows):
```
gh auth login
```

Check it worked:
```
gh auth status
```
It should say you're logged in. ✅

## 6. Claude Code (your AI helper)

In the terminal:
```
npm install -g @anthropic-ai/claude-code
```
Then start it and sign in when the browser opens:
```
claude
```
(Using Codex instead? `npm install -g @openai/codex`, then `codex login`.)

---

## Final check

Run these — each should print a version or a "logged in" line, not an error:
```
node --version
git --version
gh auth status
claude --version
```

> ✅ All good? You're ready. You don't clone anything yet — the **Build** step
> downloads your agent's starter for you with a single prompt.
