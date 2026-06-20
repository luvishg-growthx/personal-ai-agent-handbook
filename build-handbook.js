// build-handbook.js — converts the handbook markdown into one themed HTML page
// with a sidebar + switchable pages + collapsible capability cards.
// Run: node build-handbook.js   → writes handbook.html

const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "buildathon-handbook");
const FILES = [
  { file: "00-welcome.md", nav: "Welcome", cat: "Start", num: "00" },
  { file: "01-setup.md", nav: "Before You Start", cat: "Start", num: "01" },
  { file: "02-ideation.md", nav: "Ideate", cat: "Build", num: "02" },
  { file: "03-build.md", nav: "Build", cat: "Build", num: "03" },
  { file: "04-capabilities.md", nav: "Capabilities", cat: "Build", num: "04" },
  { file: "05-demo.md", nav: "Demo", cat: "Finish", num: "05" },
  { file: "06-help.md", nav: "Help", cat: "Finish", num: "06" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const stripMd = (s) => s.replace(/\*\*/g, "").replace(/[`*]/g, "").trim();
let promptCount = 0;

function inline(s) {
  const codes = [], links = [];
  s = s.replace(/`([^`]+)`/g, (m, c) => { codes.push(c); return ` C${codes.length - 1} `; });
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, t, u) => { links.push({ t, u }); return ` L${links.length - 1} `; });
  s = s.replace(/<((?:https?:\/\/)[^>\s]+)>/g, (m, u) => { links.push({ t: u, u }); return ` L${links.length - 1} `; });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  s = s.replace(/ C(\d+) /g, (m, i) => `<code>${esc(codes[+i])}</code>`);
  s = s.replace(/ L(\d+) /g, (m, i) => {
    const { t, u } = links[+i];
    return `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`;
  });
  return s;
}

function convert(md) {
  const lines = md.split("\n");
  let html = "", i = 0, pendingLabel = null;

  while (i < lines.length) {
    let line = lines[i];

    if (line.trim() === "") { i++; continue; }

    // collapsible capability:  :::capability TITLE ... :::
    const cap = line.match(/^:::capability\s+(.*)$/);
    if (cap) {
      i++;
      const buf = [];
      while (i < lines.length && lines[i].trim() !== ":::") { buf.push(lines[i]); i++; }
      i++; // closing :::
      const inner = convert(buf.join("\n"));
      html += `<details class="cap"><summary><span class="cap-title">${inline(cap[1])}</span><span class="cap-chev">›</span></summary><div class="cap-body">${inner}</div></details>\n`;
      continue;
    }

    // code fence
    if (line.trim().startsWith("```")) {
      i++;
      const buf = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) { buf.push(lines[i]); i++; }
      i++;
      const code = esc(buf.join("\n"));
      if (pendingLabel) {
        const id = `prompt-${promptCount++}`;
        const label = stripMd(pendingLabel).replace(/📋/g, "").replace(/:\s*$/, "").trim();
        html += `<div class="prompt-block"><div class="prompt-head"><span class="prompt-label">${esc(label)}</span><button class="copy-btn" data-copy="${id}"><span>Copy</span></button></div><pre class="prompt-body" id="${id}">${code}</pre></div>\n`;
        pendingLabel = null;
      } else {
        html += `<pre class="code"><code>${code}</code></pre>\n`;
      }
      continue;
    }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) { html += `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>\n`; i++; continue; }

    if (/^(---|\*\*\*)\s*$/.test(line)) { html += `<hr class="rule"/>\n`; i++; continue; }

    if (line.trim().startsWith(">")) {
      const buf = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) { buf.push(lines[i].replace(/^\s*>\s?/, "")); i++; }
      const text = buf.join("\n").trim();
      if (text.includes("📋")) pendingLabel = text;
      else html += `<div class="callout">${inline(text).replace(/\n/g, "<br/>")}</div>\n`;
      continue;
    }

    if (line.trim().startsWith("|") && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const header = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim())); i++;
      }
      let t = `<div class="table-wrap"><table><thead><tr>${header.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>`;
      for (const r of rows) t += `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`;
      html += t + `</tbody></table></div>\n`;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        let it = lines[i].replace(/^\s*[-*]\s+/, "").replace(/^\[ \]\s*/, "☐ ").replace(/^\[x\]\s*/i, "✅ ");
        items.push(`<li>${inline(it)}</li>`); i++;
      }
      html += `<ul>${items.join("")}</ul>\n`;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { items.push(`<li>${inline(lines[i].replace(/^\s*\d+\.\s+/, ""))}</li>`); i++; }
      html += `<ol>${items.join("")}</ol>\n`;
      continue;
    }

    const para = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("```") &&
      !/^#{1,4}\s/.test(lines[i]) && !lines[i].trim().startsWith(">") && !lines[i].trim().startsWith("|") &&
      !/^\s*[-*]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i]) && !/^(---|\*\*\*)\s*$/.test(lines[i]) &&
      !lines[i].startsWith(":::")) { para.push(lines[i]); i++; }
    if (para.length) html += `<p>${inline(para.join(" "))}</p>\n`;
    else i++;
  }
  return html;
}

// pages + sidebar
let pagesHtml = "", navHtml = "";
const cats = [];
FILES.forEach((f, idx) => {
  const body = convert(fs.readFileSync(path.join(DIR, f.file), "utf8"));
  pagesHtml += `<section class="page${idx === 0 ? " active" : ""}" data-page="${idx}">\n<div class="page-num">${f.num} · ${f.cat}</div>\n${body}\n<div class="page-foot">Personal AI Agent · Builder Handbook</div></section>\n`;
  let c = cats.find((x) => x.name === f.cat);
  if (!c) { c = { name: f.cat, items: [] }; cats.push(c); }
  c.items.push({ idx, nav: f.nav, num: f.num });
});
for (const c of cats) {
  navHtml += `<div class="nav-cat"><div class="nav-cat-label">${c.name}</div>`;
  for (const it of c.items) navHtml += `<button class="nav-item" data-page="${it.idx}"><span>${it.nav}</span><span class="nav-num">${it.num}</span></button>`;
  navHtml += `</div>`;
}

const CSS = `
:root{
  --bg:#08090d;--panel:#11131a;--card:rgba(255,255,255,.045);--card-h:rgba(255,255,255,.08);
  --ink:#f5f6f8;--ink-dim:rgba(245,246,248,.80);--ink-mut:rgba(245,246,248,.60);--ink-soft:rgba(245,246,248,.40);
  --rule:rgba(255,255,255,.12);--rule-2:rgba(255,255,255,.20);
  --accent:#6d8bff;--accent-2:#a779ff;--accent-soft:rgba(109,139,255,.14);--accent-bd:rgba(109,139,255,.42);
  --good:#34d399;
  --serif:'Instrument Serif',Georgia,serif;--sans:'Inter',-apple-system,system-ui,sans-serif;--mono:'DM Mono',ui-monospace,monospace;
  --sbw:268px;--r:12px;
}
:root[data-theme="light"]{
  --bg:#f6f7f9;--panel:#fff;--card:rgba(0,0,0,.035);--card-h:rgba(0,0,0,.06);
  --ink:#0b0c10;--ink-dim:rgba(11,12,16,.82);--ink-mut:rgba(11,12,16,.62);--ink-soft:rgba(11,12,16,.42);
  --rule:rgba(0,0,0,.10);--rule-2:rgba(0,0,0,.18);--accent-soft:rgba(109,139,255,.12);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}

.layout{display:flex;min-height:100vh}

/* sidebar */
.sidebar{position:fixed;top:0;left:0;width:var(--sbw);height:100vh;overflow-y:auto;background:var(--panel);border-right:1px solid var(--rule);padding:22px 16px;z-index:60;transition:transform .25s ease}
.sb-brand{display:flex;align-items:center;gap:9px;padding:4px 8px 16px;font-weight:800;letter-spacing:-.02em}
.sb-brand .bot{font-size:20px}
.sb-sub{font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft);padding:0 8px 16px}
.nav-cat{margin-bottom:18px}
.nav-cat-label{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);padding:0 8px 8px}
.nav-item{display:flex;align-items:center;justify-content:space-between;width:100%;text-align:left;background:none;border:none;color:var(--ink-mut);font-family:var(--sans);font-size:14.5px;font-weight:500;padding:9px 12px;border-radius:9px;cursor:pointer;transition:.15s}
.nav-item:hover{background:var(--card);color:var(--ink)}
.nav-item.active{background:var(--accent-soft);color:var(--ink);border:1px solid var(--accent-bd)}
.nav-num{font-family:var(--mono);font-size:11px;color:var(--ink-soft)}
.sb-theme{margin-top:8px;width:100%;background:var(--card);border:1px solid var(--rule);color:var(--ink);border-radius:9px;padding:9px;font-family:var(--mono);font-size:12px;cursor:pointer}
.sb-theme:hover{background:var(--card-h)}

.backdrop{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:55}

/* content */
.content{margin-left:var(--sbw);flex:1;min-width:0}
.menu-btn{display:none}
.page{display:none;max-width:780px;margin:0 auto;padding:56px 28px 100px;animation:fade .3s ease}
.page.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.page-num{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:16px}
.page-foot{margin-top:54px;padding-top:20px;border-top:1px solid var(--rule);color:var(--ink-soft);font-size:12px;font-family:var(--mono)}

h1,h2,h3,h4{letter-spacing:-.01em;line-height:1.25}
.page h1{font-family:var(--serif);font-weight:400;font-size:clamp(34px,5vw,50px);margin:4px 0 18px}
.page h2{font-size:23px;font-weight:700;margin:38px 0 12px}
.page h3{font-size:18px;font-weight:700;margin:26px 0 10px;color:var(--ink-dim)}
.page h4{font-size:15px;font-weight:700;margin:18px 0 6px;color:var(--ink-mut)}
p{color:var(--ink-dim);margin:12px 0}
ul,ol{margin:12px 0 12px 24px;color:var(--ink-dim)}li{margin:6px 0}
strong{color:var(--ink);font-weight:700}
code{font-family:var(--mono);font-size:.85em;background:var(--card);border:1px solid var(--rule);border-radius:6px;padding:1px 6px}
hr.rule{border:none;border-top:1px solid var(--rule);margin:32px 0}

.table-wrap{overflow-x:auto;margin:18px 0;border:1px solid var(--rule);border-radius:var(--r)}
table{border-collapse:collapse;width:100%;font-size:14.5px}
th,td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--rule);vertical-align:top}
th{font-size:11.5px;text-transform:uppercase;letter-spacing:.05em;color:var(--ink-mut);background:var(--card)}
tr:last-child td{border-bottom:none}
td code{word-break:break-all}

.callout{background:var(--card);border:1px solid var(--rule);border-left:3px solid var(--accent);border-radius:10px;padding:13px 18px;margin:18px 0;color:var(--ink-dim);font-size:15px}

pre.code{background:var(--panel);border:1px solid var(--rule);border-radius:10px;padding:15px 18px;overflow-x:auto;margin:14px 0}
pre.code code{background:none;border:none;padding:0;font-size:12.5px;color:var(--ink-dim);line-height:1.6}

/* prompt block */
.prompt-block{margin:18px 0 26px;border:1px solid var(--accent-bd);border-radius:var(--r);overflow:hidden;background:var(--accent-soft)}
.prompt-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:10px 15px;border-bottom:1px solid var(--rule)}
.prompt-label{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;color:var(--accent)}
.copy-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 13px;background:var(--accent);border:none;color:#fff;border-radius:7px;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;transition:.18s}
.copy-btn:hover{filter:brightness(1.1)}.copy-btn.copied{background:var(--good)}
.prompt-body{margin:0;padding:18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--ink);white-space:pre-wrap;word-break:break-word;background:var(--panel)}

/* collapsible capability */
.cap{border:1px solid var(--rule);border-radius:var(--r);margin:14px 0;background:var(--card);overflow:hidden}
.cap[open]{border-color:var(--accent-bd)}
.cap summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;font-weight:700;font-size:17px;color:var(--ink)}
.cap summary::-webkit-details-marker{display:none}
.cap summary:hover{background:var(--card-h)}
.cap-chev{font-family:var(--mono);color:var(--accent);transition:transform .2s;font-size:18px}
.cap[open] .cap-chev{transform:rotate(90deg)}
.cap-body{padding:2px 18px 18px;border-top:1px solid var(--rule)}
.cap-body>h4:first-child,.cap-body>p:first-child{margin-top:12px}

@media(max-width:860px){
  .sidebar{transform:translateX(-100%)}
  .sidebar.open{transform:none}
  .content{margin-left:0}
  .backdrop.show{display:block}
  .menu-btn{display:inline-flex;align-items:center;gap:8px;position:sticky;top:0;z-index:40;margin:0;width:100%;background:var(--glass,var(--panel));border:none;border-bottom:1px solid var(--rule);color:var(--ink);font-family:var(--mono);font-size:13px;padding:14px 20px;cursor:pointer}
  .page{padding:28px 20px 90px}
}
`;

const JS = `
(function(){
  var root=document.documentElement;
  var pages=[].slice.call(document.querySelectorAll('.page'));
  var items=[].slice.call(document.querySelectorAll('.nav-item'));
  var sidebar=document.getElementById('sidebar');
  var backdrop=document.getElementById('backdrop');
  function closeSb(){sidebar.classList.remove('open');backdrop.classList.remove('show');}
  function show(n){
    pages.forEach(function(p){p.classList.toggle('active', +p.dataset.page===n);});
    items.forEach(function(it){it.classList.toggle('active', +it.dataset.page===n);});
    document.querySelector('.content').scrollTo(0,0);
    window.scrollTo(0,0);
    history.replaceState(null,'','#'+n);
    closeSb();
  }
  items.forEach(function(it){it.addEventListener('click',function(){show(+it.dataset.page);});});
  // internal links / start hash
  var start=parseInt((location.hash||'').replace('#',''),10);
  show(isNaN(start)?0:start);
  // theme
  var tb=document.getElementById('themeBtn');
  function lbl(){tb.textContent=root.getAttribute('data-theme')==='light'?'◐  Dark mode':'◑  Light mode';}
  lbl();
  tb.addEventListener('click',function(){
    if(root.getAttribute('data-theme')==='light'){root.removeAttribute('data-theme');try{localStorage.setItem('gx-hb-theme','dark')}catch(e){}}
    else{root.setAttribute('data-theme','light');try{localStorage.setItem('gx-hb-theme','light')}catch(e){}}
    lbl();
  });
  // copy
  document.querySelectorAll('.copy-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var pre=document.getElementById(b.getAttribute('data-copy'));
      navigator.clipboard.writeText(pre.innerText).then(function(){
        b.classList.add('copied');b.querySelector('span').textContent='Copied ✓';
        setTimeout(function(){b.classList.remove('copied');b.querySelector('span').textContent='Copy';},1600);
      });
    });
  });
  // mobile menu
  var mb=document.getElementById('menuBtn');
  if(mb){mb.addEventListener('click',function(){sidebar.classList.add('open');backdrop.classList.add('show');});}
  backdrop.addEventListener('click',closeSb);
})();
`;

const out = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Build Your Personal AI Agent · Handbook</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<script>(function(){try{if(localStorage.getItem('gx-hb-theme')==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();</script>
<style>${CSS}</style>
</head>
<body>
<div class="layout">
  <aside class="sidebar" id="sidebar">
    <div class="sb-brand"><span class="bot">🤖</span> Personal AI Agent</div>
    <div class="sb-sub">Builder Handbook</div>
    <nav>${navHtml}</nav>
    <button class="sb-theme" id="themeBtn">◑  Light mode</button>
  </aside>
  <div class="backdrop" id="backdrop"></div>
  <main class="content">
    <button class="menu-btn" id="menuBtn">☰  Menu</button>
    ${pagesHtml}
  </main>
</div>
<script>${JS}</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "handbook.html"), out);
console.log("wrote handbook.html — " + out.length + " bytes, " + FILES.length + " pages, " + promptCount + " prompts, " + (out.match(/class="cap"/g) || []).length + " capability cards");
