const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BOitCFE3.js","assets/feedback-BFqM3uyA.js","assets/cosmetic-theme-Ddusyf-J.js","assets/snake-BGXtwRgW.js","assets/twenty48-BAxW6VPW.js","assets/minesweeper-B7KJ0VXi.js","assets/sudoku-o2DVkpei.js","assets/sliding-gX4F0wcn.js","assets/pairs-Dy90bkvQ.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const P="modulepreload",A=function(t){return"/ovolar-web/ccc650e0123c9fa1acc5c724c249b52ae4eb61115f51642b/"+t},g={},b=function(e,a,n){let s=Promise.resolve();if(a&&a.length>0){let L=function(l){return Promise.all(l.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=L(a.map(l=>{if(l=A(l),l in g)return;g[l]=!0;const m=l.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${v}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":P,m||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((_,R)=>{u.addEventListener("load",_),u.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},k=[{id:"block",title:"Block",description:"Classic falling-block puzzle",category:"Quick Play",route:"#/block",theme:"aubergine-lime",bestScoreKey:"ovolar.block.best",status:"playable",icon:"▦",load:()=>b(()=>import("./main-BOitCFE3.js"),__vite__mapDeps([0,1,2]))},{id:"snake",title:"Snake",description:"Eat. Grow. Don’t crash.",category:"Quick Play",route:"#/snake",theme:"cranberry-pistachio",bestScoreKey:"ovolar.snake.best",status:"playable",icon:"⌁",load:()=>b(()=>import("./snake-BGXtwRgW.js"),__vite__mapDeps([3,1]))},{id:"2048",title:"2048",description:"Merge tiles. Reach 2048.",category:"Logic & Numbers",route:"#/2048",theme:"olive-milk",bestScoreKey:"ovolar.2048.best",status:"playable",icon:"2048",load:()=>b(()=>import("./twenty48-BAxW6VPW.js"),__vite__mapDeps([4,1,2]))},{id:"minesweeper",title:"Minesweeper",description:"Clear the field, one clue at a time.",category:"Logic & Numbers",route:"#/minesweeper",theme:"terracotta-sand",bestScoreKey:"ovolar.minesweeper.best-time",status:"playable",icon:"⚑",load:()=>b(()=>import("./minesweeper-B7KJ0VXi.js"),__vite__mapDeps([5,2,1]))},{id:"sudoku",title:"Sudoku",description:"A calm number ritual.",category:"Logic & Numbers",route:"#/sudoku",theme:"dusty-blue-oak",status:"playable",icon:"⊞",load:()=>b(()=>import("./sudoku-o2DVkpei.js"),__vite__mapDeps([6,2,1]))},{id:"mahjong-solitaire",title:"Mahjong Solitaire",description:"Pair tiles. Clear the table.",category:"Elegant Classics",theme:"chocolate-ice-blue",status:"coming-soon",icon:"◫"},{id:"solitaire",title:"Solitaire",description:"A familiar deck, unhurried.",category:"Elegant Classics",theme:"graphite-walnut",status:"coming-soon",icon:"♢"},{id:"nonogram",title:"Nonogram",description:"Reveal a picture, one clue at a time.",category:"Brain & Focus",theme:"terracotta-sand",status:"coming-soon",icon:"▧"},{id:"sliding",title:"Sliding Puzzle",description:"Put the numbers back in order.",category:"Brain & Focus",route:"#/sliding",theme:"indigo-apricot",bestScoreKey:"ovolar.sliding.best-moves",status:"playable",icon:"▦",load:()=>b(()=>import("./sliding-gX4F0wcn.js"),__vite__mapDeps([7,1,2]))},{id:"pairs",title:"Match Pairs",description:"Find the calm in every match.",category:"Brain & Focus",route:"#/pairs",theme:"chocolate-ice-blue",bestScoreKey:"ovolar.pairs.best-moves",status:"playable",icon:"◌",load:()=>b(()=>import("./pairs-Dy90bkvQ.js"),__vite__mapDeps([8,2,1]))}],M=t=>k.find(e=>e.route===t),N=["Quick Play","Logic & Numbers","Elegant Classics","Brain & Focus"],C=3,H=(t,e)=>`ovolar.${t}.${e}`,$=t=>{try{return Number.parseInt(localStorage.getItem(t)??"0",10)||0}catch{return 0}},W=(t,e)=>{try{localStorage.setItem(t,String(e))}catch{}},V=()=>{window.location.hash="#/"},Q=t=>{const e=()=>{document.hidden&&t()};return document.addEventListener("visibilitychange",e),window.addEventListener("blur",t),window.addEventListener("ovolar-background",t),()=>{document.removeEventListener("visibilitychange",e),window.removeEventListener("blur",t),window.removeEventListener("ovolar-background",t)}},y=t=>`<div class="lives-card"><span class="label">Lives</span><span id="${t}" class="life-pips" aria-label="3 lives remaining"></span></div>`,Z=(t,e,a=C)=>{t.replaceChildren(...Array.from({length:a},(n,s)=>{const i=document.createElement("i");return i.className=`life-pip${s<e?" is-active":""}`,i.setAttribute("aria-hidden","true"),i})),t.setAttribute("aria-label",`${e} ${e===1?"life":"lives"} remaining`)},f=crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,h=new Set,z=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),p=(t,e={})=>{try{(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&console.debug("[ovolar analytics]",t,{session_id:f,...z(e)})}catch{}},w={track:p,appOpen:()=>p("app_open"),screen:t=>p(t==="home"?"home_view":"game_open",{screen_name:t,game_id:t==="home"?void 0:t}),gameStart:t=>{h.has(t)||(h.add(t),p("game_start",{game_id:t}))},gameEnd:(t,e)=>{h.delete(t)&&p("game_end",{game_id:t,...e})},restart:(t,e={})=>{p("game_restart",{game_id:t,...e}),h.delete(t)},win:(t,e)=>p("game_win",{game_id:t,...e}),loss:(t,e)=>p("game_loss",{game_id:t,...e}),sessionId:f},S="ovolar.appearance",E=()=>{try{return localStorage.getItem(S)==="light"?"light":"neon"}catch{return"neon"}},O=(t,e=!0)=>{if(document.documentElement.dataset.appearance=t,document.body.dataset.appearance=t,e)try{localStorage.setItem(S,t)}catch{}window.dispatchEvent(new CustomEvent("ovolar-appearance-change",{detail:t}))},B=async()=>{try{const t=await fetch("/ovolar-web/ccc650e0123c9fa1acc5c724c249b52ae4eb61115f51642b/build-info.json",{cache:"no-store"});return t.ok?await t.json():null}catch{return null}},d=document.querySelector("#app");if(!d)throw new Error("Ovolar app root is missing.");const I=(t,e)=>t==="block"?'<span class="card-visual block-visual" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>':t==="snake"?'<span class="card-visual snake-visual" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><b></b></span>':t==="2048"?'<span class="card-visual twenty48-visual" aria-hidden="true"><i>2</i><i>4</i><i>8</i><i>16</i></span>':t==="sliding"?'<span class="card-visual sliding-visual" aria-hidden="true"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i></i></span>':t==="pairs"?'<span class="card-visual pairs-visual" aria-hidden="true"><i>✦</i><i>✦</i><i>☾</i><i>☾</i></span>':t==="minesweeper"?'<span class="card-visual mines-visual" aria-hidden="true"><i>1</i><i>⚑</i><i>2</i><i>✹</i></span>':t==="sudoku"?'<span class="card-visual sudoku-visual" aria-hidden="true"><i>5</i><i></i><i>7</i><i></i><i>9</i><i></i><i>2</i><i></i><i>4</i></span>':`<span class="card-visual future-visual" aria-hidden="true">${e}</span>`,T=t=>{const e=t.bestScoreKey?$(t.bestScoreKey):0,a=`${I(t.id,t.icon)}<span class="game-card-copy"><span class="card-kicker">${t.category}</span><span class="card-title">${t.title}</span><span class="card-description">${t.description}</span></span>`;return t.status==="playable"?`<article class="game-entry"><button class="game-card playable-card" type="button" data-game-route="${t.route}" data-theme="${t.theme}" aria-label="Play ${t.title}">${a}<span class="card-best"><small>Best</small><strong>${e}</strong></span><span class="card-affordance">Play <b aria-hidden="true">→</b></span></button></article>`:`<article class="game-entry"><div class="game-card coming-soon-card" data-theme="${t.theme}">${a}<span class="coming-soon"><b aria-hidden="true">⌁</b> Coming soon</span></div></article>`},K=()=>`
  <main class="app-shell home-shell">
    <header class="home-header">
      <div class="home-heading"><div class="brand" aria-label="Ovolar"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span>OVOLAR</span></div><button class="appearance-button" type="button" data-appearance-open aria-label="Appearance settings" title="Appearance">◐</button></div>
      <p>Small games. Good feel.</p>
    </header>

    <div class="library" aria-label="Games">
      ${N.map(t=>{const e=k.filter(a=>a.category===t);return`<section class="library-section" aria-labelledby="category-${t.replace(/ /g,"-").toLowerCase()}">
          <h1 id="category-${t.replace(/ /g,"-").toLowerCase()}" class="category-title">${t}</h1>
          <div class="game-cards">${e.map(T).join("")}</div>
        </section>`}).join("")}
    </div>
    <section class="appearance-panel" data-appearance-panel hidden aria-label="Appearance settings"><div><span class="label">Appearance</span><strong>Make Ovolar yours.</strong><small class="build-info" data-build-info>Build loading…</small></div><div class="appearance-options" role="group" aria-label="Choose appearance"><button type="button" data-appearance="neon">Cyberbank Neon</button><button type="button" data-appearance="light">Light</button></div></section>
  </main>
`,D=`
  <main class="app-shell">
    <header class="topbar">
      <button class="home-button" type="button" data-home aria-label="Return to Ovolar home">
        <span aria-hidden="true">←</span>
        <span>OVOLAR</span>
      </button>
      <span class="game-title">BLOCK</span>
      <div class="header-actions">
        <button id="block-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change Block theme" title="Change theme" hidden>◐</button>
        <button id="pause-button" class="icon-button" type="button" aria-label="Pause game" title="Pause game">Ⅱ</button>
        <button id="restart-top" class="icon-button" type="button" aria-label="Restart game" title="Restart game">↻</button>
      </div>
    </header>

    <section class="game-layout" aria-label="Ovolar Block game">
      <div class="play-column">
        <div class="game-frame">
          <div id="game-root" aria-label="Falling block game board"></div>
          <div id="game-over" class="game-over" hidden>
            <p class="eyebrow">RUN OVER</p>
            <h1>Stack reset.</h1>
            <p>Final score <strong id="final-score">0</strong></p>
            <p class="final-best">Best <strong id="final-best">0</strong></p>
            <button id="restart-overlay" class="primary-button" type="button">Play again</button>
          </div>
          <div id="pause-overlay" class="pause-overlay" hidden>
            <p class="eyebrow">PAUSED</p>
            <h1>Take a breath.</h1>
            <button id="resume-overlay" class="primary-button" type="button">Resume</button>
          </div>
          <div id="line-clear" class="line-clear" aria-live="polite" hidden></div>
        </div>
      </div>

      <aside class="score-panel" aria-label="Game statistics">
        <div class="score-card main-score">
          <span class="label">Score</span>
          <output id="score">0</output>
        </div>
        <div class="score-card">
          <span class="label">Best</span>
          <output id="best-score">0</output>
        </div>
        <div class="stat-row">
          <div><span class="label">Lines</span><output id="lines">0</output></div>
          <div><span class="label">Level</span><output id="level">1</output></div>
          ${y("block-lives")}
        </div>
        <div class="next-card">
          <span class="label">Next</span>
          <div id="next-piece" class="next-piece" aria-label="Next piece"></div>
        </div>
        <p class="gesture-hint">Swipe to move · tap to turn · hold or drag down to drop</p>
        <p class="hint"><kbd>←</kbd><kbd>→</kbd> move &nbsp; <kbd>↑</kbd> turn<br /><kbd>↓</kbd> soft drop &nbsp; <kbd>Space</kbd> slam</p>
      </aside>
    </section>

    <nav class="touch-controls" aria-label="Touch game controls">
      <button class="control-button wide" type="button" data-action="left" aria-label="Move left">←</button>
      <button class="control-button wide" type="button" data-action="right" aria-label="Move right">→</button>
      <button class="control-button accent" type="button" data-action="rotate" aria-label="Rotate clockwise">↻</button>
      <button class="control-button" type="button" data-action="down" aria-label="Soft drop">↓</button>
      <button class="control-button hard-drop" type="button" data-action="drop" aria-label="Hard drop">⇩</button>
    </nav>
  </main>
`,U=`
  <main class="app-shell twenty48-shell">
    <header class="topbar">
      <button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span aria-hidden="true">←</span><span>OVOLAR</span></button>
      <span class="game-title">2048</span>
      <div class="header-actions"><button id="twenty48-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change 2048 theme" title="Change theme" hidden>◐</button><button class="icon-button" type="button" data-twenty48-restart aria-label="Restart 2048" title="Restart 2048">↻</button></div>
    </header>
    <section class="twenty48-layout game-interaction-zone" aria-label="Ovolar 2048 game">
      <div class="twenty48-stats">
        <div class="score-card main-score"><span class="label">Score</span><output id="twenty48-score">0</output></div>
        <div class="score-card"><span class="label">Best</span><output id="twenty48-best">0</output></div>
        ${y("twenty48-lives")}
      </div>
      <div class="twenty48-frame">
        <div id="twenty48-board" class="twenty48-board" aria-label="2048 board"></div>
        <div id="twenty48-event" class="game-event" aria-live="polite" hidden></div>
        <div id="twenty48-overlay" class="twenty48-overlay" hidden>
          <p class="eyebrow">OVOLAR 2048</p><h1 id="twenty48-overlay-title"></h1><p id="twenty48-overlay-text"></p>
          <div class="twenty48-overlay-actions"><button id="twenty48-continue" class="primary-button" type="button">Continue</button><button class="secondary-button" type="button" data-twenty48-restart>Restart</button></div>
        </div>
      </div>
      <p class="twenty48-hint">Swipe any direction to merge</p>
      <p id="twenty48-life-notice" class="life-notice" aria-live="polite" hidden></p>
      <button class="secondary-button twenty48-restart" type="button" data-twenty48-restart>Restart</button>
    </section>
  </main>
`,q=`
  <main class="app-shell snake-shell">
    <header class="topbar">
      <button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span aria-hidden="true">←</span><span>OVOLAR</span></button>
      <span class="game-title">SNAKE</span>
      <div class="header-actions"><button id="snake-theme" class="icon-button snake-theme-button" type="button" aria-label="Change Snake theme" title="Change theme" hidden>◐</button><button id="snake-pause" class="icon-button" type="button" aria-label="Pause game" title="Pause game">Ⅱ</button><button class="icon-button" type="button" data-snake-restart aria-label="Restart Snake" title="Restart Snake">↻</button></div>
    </header>
    <section class="snake-layout game-interaction-zone" aria-label="Ovolar Snake game">
      <div class="snake-stats"><div class="score-card main-score"><span class="label">Score</span><output id="snake-score">0</output></div><div class="score-card"><span class="label">Best</span><output id="snake-best">0</output></div>${y("snake-lives")}</div>
      <div class="snake-frame">
        <div id="snake-board" class="snake-board" aria-label="Snake board"></div>
        <div id="snake-event" class="snake-event" aria-live="polite" hidden></div>
        <div id="snake-overlay" class="snake-overlay" hidden><p class="eyebrow">SNAKE</p><h1 id="snake-overlay-title"></h1><p id="snake-overlay-text"></p><div class="snake-overlay-actions"><button id="snake-resume" class="primary-button" type="button">Resume</button><button class="secondary-button" type="button" data-snake-restart>Restart</button></div></div>
      </div>
      <p class="snake-hint">Swipe to steer</p>
      <button class="secondary-button snake-restart" type="button" data-snake-restart>Restart</button>
    </section>
  </main>
`,j=`
  <main class="app-shell sliding-shell">
    <header class="topbar">
      <button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span aria-hidden="true">←</span><span>OVOLAR</span></button>
      <span class="game-title">SLIDING</span>
      <div class="header-actions"><button id="sliding-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change Sliding Puzzle theme" title="Change theme" hidden>◐</button><button class="icon-button" type="button" data-sliding-restart aria-label="New Sliding Puzzle" title="New Sliding Puzzle">↻</button></div>
    </header>
    <section class="sliding-layout" aria-label="Ovolar Sliding Puzzle game">
      <div class="sliding-stats">
        <div class="score-card main-score"><span class="label">Moves</span><output id="sliding-moves">0</output></div>
        <div class="score-card"><span class="label">Best</span><output id="sliding-best">—</output></div>
        <div class="score-card"><span class="label">Time</span><output id="sliding-time">0:00</output></div>
      </div>
      <div class="sliding-frame">
        <div id="sliding-board" class="sliding-board" aria-label="Sliding Puzzle board"></div>
        <div id="sliding-event" class="game-event" aria-live="polite" hidden></div>
        <div id="sliding-overlay" class="sliding-overlay" hidden><p class="eyebrow">PUZZLE COMPLETE</p><h1>In order.</h1><p id="sliding-result"></p><button class="primary-button" type="button" data-sliding-restart>New puzzle</button></div>
      </div>
      <p class="sliding-hint">Tap a tile beside the open space</p>
      <button class="secondary-button sliding-restart" type="button" data-sliding-restart>New puzzle</button>
    </section>
  </main>
`,x=`
  <main class="app-shell pairs-shell"><header class="topbar"><button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span aria-hidden="true">←</span><span>OVOLAR</span></button><span class="game-title">PAIRS</span><div class="header-actions"><button id="pairs-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change Match Pairs theme" title="Change theme" hidden>◐</button><button class="icon-button" type="button" data-pairs-restart aria-label="New Match Pairs game" title="New game">↻</button></div></header><section class="pairs-layout" aria-label="Match Pairs game"><div class="pairs-stats"><div class="score-card main-score"><span class="label">Moves</span><output id="pairs-moves">0</output></div><div class="score-card"><span class="label">Time</span><output id="pairs-time">0:00</output></div></div><div class="pairs-frame"><div id="pairs-board" class="pairs-board" aria-label="Match Pairs board"></div><div id="pairs-event" class="game-event" aria-live="polite" hidden></div><div id="pairs-overlay" class="pairs-overlay" hidden><p class="eyebrow">PAIRS COMPLETE</p><h1>Well remembered.</h1><p id="pairs-result"></p><button class="primary-button" type="button" data-pairs-restart>New game</button></div></div><p class="pairs-hint">Reveal two cards to find a match</p><button class="secondary-button pairs-restart" type="button" data-pairs-restart>New game</button></section></main>
`,F='<main class="app-shell mines-shell"><header class="topbar"><button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span>←</span><span>OVOLAR</span></button><span class="game-title">MINES</span><div class="header-actions"><button id="mines-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change Minesweeper theme" hidden>◐</button><button class="icon-button" type="button" data-mines-restart aria-label="New Minesweeper game">↻</button></div></header><section class="mines-layout"><div class="mines-stats"><div class="score-card main-score"><span class="label">Mines</span><output id="mines-remaining">15</output></div><div class="score-card"><span class="label">Time</span><output id="mines-time">0:00</output></div></div><div class="mines-frame"><div id="mines-board" class="mines-board" aria-label="Minesweeper board"></div><div id="mines-event" class="game-event" hidden></div><div id="mines-overlay" class="mines-overlay" hidden><p class="eyebrow">MINESWEEPER</p><h1></h1><p id="mines-result"></p><button class="primary-button" data-mines-restart>New game</button></div></div><p class="mines-hint">Tap reveal · hold to flag</p><button class="secondary-button mines-restart" data-mines-restart>New game</button></section></main>',G='<main class="app-shell sudoku-shell"><header class="topbar"><button class="home-button" type="button" data-home aria-label="Return to Ovolar home"><span>←</span><span>OVOLAR</span></button><span class="game-title">SUDOKU</span><div class="header-actions"><button id="sudoku-theme" class="icon-button theme-cycle-button" type="button" aria-label="Change Sudoku theme" hidden>◐</button><button class="icon-button" type="button" data-sudoku-restart aria-label="New Sudoku game">↻</button></div></header><section class="sudoku-layout" aria-label="Ovolar Sudoku game"><div class="sudoku-toolbar" role="group" aria-label="Difficulty"><button data-sudoku-difficulty="easy" type="button">Easy</button><button data-sudoku-difficulty="medium" type="button">Medium</button><button data-sudoku-difficulty="hard" type="button">Hard</button></div><div class="sudoku-stats"><div class="score-card main-score"><span class="label">Mistakes</span><output id="sudoku-mistakes">0/3</output></div><div class="score-card"><span class="label">Time</span><output id="sudoku-time">0:00</output></div></div><div class="sudoku-frame"><div id="sudoku-board" class="sudoku-board" aria-label="Sudoku board"></div><div id="sudoku-event" class="game-event" aria-live="polite" hidden></div><div id="sudoku-overlay" class="sudoku-overlay" hidden><p class="eyebrow">OVOLAR SUDOKU</p><h1></h1><p id="sudoku-result"></p><button class="primary-button" data-sudoku-restart>New game</button></div></div><div id="sudoku-pad" class="sudoku-pad" aria-label="Sudoku number pad"><button data-n="1" type="button">1</button><button data-n="2" type="button">2</button><button data-n="3" type="button">3</button><button data-n="4" type="button">4</button><button data-n="5" type="button">5</button><button data-n="6" type="button">6</button><button data-n="7" type="button">7</button><button data-n="8" type="button">8</button><button data-n="9" type="button">9</button><button data-notes type="button">Notes</button><button data-erase type="button">Erase</button></div><p class="sudoku-hint">Choose a cell, then a number</p></section></main>',r=M(window.location.hash);O(E(),!1);document.body.dataset.route=r?.id??"home";if(r)document.title=r.title,d.innerHTML=r.id==="block"?D:r.id==="2048"?U:r.id==="snake"?q:r.id==="sliding"?j:r.id==="pairs"?x:r.id==="minesweeper"?F:G,d.querySelector("[data-home]")?.addEventListener("click",()=>{V()}),r.load?.();else{document.title="Ovolar",d.innerHTML=K(),d.querySelectorAll("[data-game-route]").forEach(a=>{a.addEventListener("click",()=>{window.location.hash=a.dataset.gameRoute})});const t=d.querySelector("[data-appearance-panel]"),e=a=>d.querySelectorAll("[data-appearance]").forEach(n=>n.classList.toggle("is-selected",n.dataset.appearance===a));e(E()),d.querySelector("[data-appearance-open]")?.addEventListener("click",()=>{t.hidden=!t.hidden}),d.querySelectorAll("[data-appearance]").forEach(a=>a.addEventListener("click",()=>{const n=a.dataset.appearance;O(n),e(n)})),B().then(a=>{const n=d.querySelector("[data-build-info]");n&&a&&(n.textContent=`Version ${a.version} · Build ${a.buildSha.slice(0,7)}`)})}w.appOpen();w.screen(r?.id??"home");window.addEventListener("hashchange",()=>window.location.reload());export{C as M,$ as a,w as b,Q as p,Z as r,H as s,W as w};
