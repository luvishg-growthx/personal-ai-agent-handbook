# Before you arrive — get your laptop ready

A few quick installs so you can spend the day building, not setting up. If any
step trips you up, a mentor will sort it in two minutes.

> You'll know each one worked if the check command prints a version (a line of
> text), not an error.

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
