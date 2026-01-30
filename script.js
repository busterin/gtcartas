:root{
  --bg:#0e1a12;
  --felt:#14341f;
  --felt-2:#0f2a19;
  --ink:#eaf6ed;
  --accent:#7be495;
  --danger:#ff8a8a;
  --slot:#1e3b28;
  --card:#173b2a;
  --card-edge:#2a6d4a;
  --shadow:0 8px 24px rgba(0,0,0,.35);

  --card-w:min(clamp(88px,14vw,120px),clamp(88px,24vh,120px));
  --card-h:calc(var(--card-w)*1.333);
  --slot-h:var(--card-h);
  --gap:clamp(6px,1.6vw,18px);
  --radius:14px;
}

/* ===== FONDO DEL JUEGO ===== */
.game-bg{
  position:fixed; inset:0;
  background: url("assets/Fondo.png") center/cover no-repeat;
  z-index:-1;           
  pointer-events:none;  
}
.game-bg.hidden{ display:none; }

/* Capas del juego */
.topbar, .board, .hand-wrap, .overlay, .zoom, .turn-banner, .modal-overlay { 
  position:relative; 
  z-index:1; 
}

/* PORTADA */
.start-screen {
  position: fixed;
  inset: 0;
  background-color: #6D32FF !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 60;
}

.start-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Pantalla completa sin deformar */
  object-position: center;
  z-index: 1;
}

.start-buttons {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 10vh;
}

.start-button {
  font-weight: 900;
  border: none;
  border-radius: 14px;
  padding: 14px 32px;
  font-size: clamp(1rem, 2.6vw, 1.3rem);
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: transform .2s ease;
}

.start-button.primary {
  background: var(--accent);
  color: #042312;
  animation: pulse-button 2s infinite;
}

@keyframes pulse-button {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.start-button.ghost {
  background: rgba(0,0,0,0.3);
  color: #eaf6ed;
  border: 2px solid rgba(255,255,255,0.4);
  backdrop-filter: blur(4px);
}

*{box-sizing:border-box}
html,body{
  height:100dvh; width:100vw; margin:0;
  overflow:hidden; overscroll-behavior:none;
}
body{
  font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  color:var(--ink); background: #080f0b;
}

.board,.lane,.slot,.hand,.card,.zoom{touch-action:none;}
img{-webkit-user-drag:none;user-select:none;-webkit-user-select:none}
.hidden{display:none !important}

/* --- Cartel de turno --- */
.turn-banner{
  position:fixed;top:10px;left:50%;
  transform:translateX(-50%);
  background:rgba(0,0,0,.55);
  backdrop-filter:blur(4px);
  border:1px solid rgba(255,255,255,.15);
  color:var(--ink);
  padding:8px 14px;border-radius:12px;font-weight:800;z-index:20;
  opacity:0;transition:opacity .25s,transform .25s;
  font-size:clamp(.9rem,2vw,1rem);
}
.turn-banner.show{opacity:1;transform:translateX(-50%)}

/* --- Topbar --- */
.topbar{
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;
  padding:10px clamp(10px,3vw,24px);
  border-bottom:1px solid rgba(255,255,255,.06);
  background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0));
  position:sticky;top:0;z-index:5;
}
.side{display:flex;align-items:center;gap:10px}
.side-right{justify-content:flex-end}
.name{opacity:.9;letter-spacing:.3px;font-size:clamp(.9rem,1.8vw,1rem)}

.pollution{
  width:clamp(42px,6vw,56px);height:clamp(42px,6vw,56px);
  border-radius:50%;display:grid;place-items:center;
  background:radial-gradient(circle at 30% 30%,#2c6b49,#123822);
  box-shadow:inset 0 0 0 3px var(--accent),var(--shadow);
  font-weight:700;font-variant-numeric:tabular-nums;font-size:clamp(.9rem,2.2vw,1rem);
}
.pollution.hit{animation:pop 420ms ease}
@keyframes pop{0%{transform:scale(1)}40%{transform:scale(1.12)}100%{transform:scale(1)}}

.timer-wrap{text-align:center; color: #000;}
.timer-label{opacity:.8;font-size:clamp(.8rem,1.8vw,.9rem); color: #000;}
#timer{font-size:clamp(1.2rem,3vw,1.8rem);font-weight:800;letter-spacing:.5px; color: #000;}
.rule{opacity:.75;font-size:clamp(.75rem,1.7vw,.85rem); color: #000;}

/* --- Tablero --- */
.board{
  max-width:min(1100px,98vw);
  margin:clamp(6px,2.4vw,20px) auto;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.06);
  border-radius:24px;
  padding:clamp(8px,2vw,16px);
  box-shadow:inset 0 0 40px rgba(0,0,0,.2);
  display:flex; flex-direction:column; gap:20px;
}
.lane{
  display:grid;grid-template-columns:repeat(5,1fr);
  gap:var(--gap);
}
.slot{
  position:relative;height:var(--slot-h);border-radius:var(--radius);
  background:linear-gradient(180deg,rgba(255,255,255,.06),transparent 40%),
             linear-gradient(0deg,rgba(0,0,0,.25),rgba(0,0,0,.1));
  outline:2px dashed rgba(255,255,255,.12);outline-offset:-8px;
  display:grid;place-items:center;color:#cfe5d4;user-select:none;overflow:hidden;
}
.slot.flash{animation:slotFlash 420ms ease}
@keyframes slotFlash{0%{box-shadow:0 0 0 0 rgba(123,228,149,0)}40%{box-shadow:0 0 18px 6px rgba(123,228,149,.45)}100%{box-shadow:0 0 0 0 rgba(123,228,149,0)}}

/* --- Cartas --- */
.card{
  position:relative;
  background:var(--card);
  border:4px solid var(--card-edge);
  width:var(--card-w);
  height:var(--card-h);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  cursor:pointer;
  overflow:hidden;
  display:flex;
  transition:transform .12s,box-shadow .12s;
}
.card:hover{transform:translateY(-4px)}
.card-inner{position:relative;width:100%;height:100%;}
.card-img{
  position:absolute;inset:0;
  width:100%;height:100%;
  object-fit:cover;
  object-position:center center;
  border-radius:calc(var(--radius)-2px);
  z-index:1;
  pointer-events:none;
}
.card .number{
  position:absolute;
  top:clamp(6px,1.2vw,10px);
  right:clamp(6px,1.2vw,10px);
  font-size:clamp(1.2rem,2.6vw,1.6rem);
  font-weight:900;
  line-height:1;
  background:rgba(0,0,0,.4);
  padding:4px 8px;
  border-radius:8px;
  z-index:3;
}
.card.in-slot{ width:100%;height:100%; animation:dropBounce 240ms ease; }
@keyframes dropBounce{0%{transform:scale(.9)}55%{transform:scale(1.02)}100%{transform:scale(1)}}

/* --- Mano --- */
.hand-wrap{
  max-width:min(1100px,98vw);
  margin:0 auto clamp(14px,3vh,28px);
  padding:0 clamp(10px,2.6vw,24px)
}
.hand{display:flex;flex-wrap:wrap;gap:clamp(8px,1.6vw,12px);min-height:calc(var(--card-h)+16px)}

/* --- Overlay Final --- */
.overlay{
  position:fixed;inset:0;background:rgba(0,0,0,.6);
  display:grid;place-items:center;z-index:70;
}

/* --- Modal Cómo Jugar --- */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 100;
}
.modal-card {
  position: relative; background: #f2f2f2; color: #000;
  border-radius: 16px; padding: 24px; width: min(90vw, 420px);
  box-shadow: 0 6px 24px rgba(0,0,0,.4);
}
.modal-close {
  position: absolute; top: 10px; right: 14px;
  background: #ccc; border: none; border-radius: 50%;
  width: 28px; height: 28px; cursor: pointer; font-weight: bold;
}

/* --- Efectos Especiales --- */
.slot.sun-pop{ animation: sunPop 450ms ease-out; }
@keyframes sunPop{
  0% { transform:scale(1); }
  35% { box-shadow:0 0 24px 10px rgba(255,210,0,0.45); transform:scale(1.03); }
  100% { transform:scale(1); }
}

.lane.solar-sweep::after {
  content:""; position:absolute; inset:0; pointer-events:none; z-index:1;
  background:linear-gradient(90deg, transparent, rgba(255,220,100,0.3), transparent);
  left:-120%; width:140%; height:100%;
  animation: sweep 600ms ease-out forwards;
}
@keyframes sweep { to { left:120%; } }

@media(max-width:880px){
  :root{--card-w:min(clamp(80px,24vw,110px),clamp(80px,28vh,110px));}
}
