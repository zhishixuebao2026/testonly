/* 邦多利角色点评 · 上半部分
   字幕 = 文案原文（ksm / ars / otae / ykn 保留写法）。
   配音 = 对应分段音频，读音按规则（缩写读日语罗马音，中文译名读中文）。
   字幕时间：每段配音的真实时长（audio.duration）按字符数分配，并在标点处加停顿。
   这是“按时长估算的逐字对齐”，不是语音识别的逐字时间戳。 */

const SECTIONS = [
  { file:"audio/s01_intro_ksm_voice.mp3", text:"这期聊聊邦多利里，几个我印象特别深的角色。第一个，必须是ksm。不知道有没有人跟我一样：ksm的声线，尤其是唱歌的时候，有种很特别的感觉。像是笑着说再见。第一次听，我脑子里冒出来的是秋天，还有小学、初中毕业那几天的空气。大家都在笑，可笑容底下，压着一点舍不得。" },
  { file:"audio/s02_mae_e_susume.mp3", text:"最绝的，是这首《前へススメ!》。前半段，是藏在欢乐里的告别，像毕业季，大家笑着挥手。可还没来得及难过，ksm的声音一下子坚定起来，有点像压着嗓子的轻声嘶吼，带着所有人，满怀希望地往前走。这一段，我是真的被戳到了。" },
  { file:"audio/s03_kasumi_distance.mp3", text:"接下来说点可能不太主流的。在我看来，如果你对ksm抱有感情上的喜欢，或者单方面的友情依赖，处境其实会有点尴尬。ksm很外向，爱交朋友，也真心关心每一个朋友。但问题恰恰在这里：她的朋友太多了。真正被她时时惦记、在她心里占着重要位置的，就那么几个人。那几个位置早就坐满了，后来的人很难挤进去。她和你相处，多半要看机会、看场合。于是这份依赖，只会越来越单向。如果你本来就偏内向、心思又敏感，这种尴尬会被无限放大。" },
  { file:"audio/s04_arisa_tsundere.mp3", text:"说到ksm，就绕不开ars。ars，教科书级的傲娇。她和ksm的相处，基本可以叫「条件反射永动机」：一个满嘴奇怪发言，一个负责吐槽；一个偷偷帮忙，一个无意间发现，当场点破；然后ars开始脸红否认。循环往复，永不停机。我甚至觉得，ars就喜欢暗中帮人，再「不小心」被戳穿，嘴上说着才不是，心里其实得意得要命。" },
  { file:"audio/s05_otae_denpa.mp3", text:"再说otae。老实说，一开始我对她没什么印象。直到玩了手游、看了主线和活动剧情，才发现她正是我很喜欢的那类人设。刚接触的时候，我总觉得她有点腹黑：平时不怎么说话，就静静地观察所有人，像在憋什么坏主意。后来才明白，这不是腹黑，是电波系特有的呆。我行我素的作风，再加上一套谁也听不懂的语言系统，简直是专门克制ars这种傲娇的。电波克傲娇，天经地义。otae和ars，是老邦里我最喜欢的组合之一。" },
  { file:"audio/s06_moca_aesthetic.mp3", text:"下一位，摩卡。她是唯二完完全全、彻彻底底踩在我审美上的角色之一。短发，电波系，吉他手。（说起来，峰月律应该不算电波系吧？）摩卡和otae很像，表面呆呆的，时不时冒出一句奇怪又好笑的话。可对上ars、兰这种傲娇，她们天生就带压制力，一个表情、一个小动作，攻势直接拉满。而且摩卡是真的有点呆呆傻傻。她就是那种，看到兰被外人撩了，还要凑上去再调戏兰一下的人。" },
  { file:"audio/s07_ran_contrast.mp3", text:"至于兰：一上舞台，气场全开；一下舞台，随时准备脸红。被夸了、被问了，就别过头说一句：没什么。这种反差，还挺有意思的。" },
  { file:"audio/s08_roselia.mp3", text:"然后是萝团。说实话，我对萝团完全无感，甚至有点抵触。我不太喜欢那种对内氛围过于高压的状态。包括ykn和sayo，对我来说已经超出无感，是有点不喜欢了。我知道她们也有友善、细心的一面，只是这种人设本身，不太合我胃口。我可能还是更偏爱，因为友情和爱好聚在一起的乐队吧。至于lisa，她给我的感觉，像强化版的初华。眼里其实只有ykn一个人，但对其他成员一样关心，更主动，对乐队本身也更上心。" },
  { file:"audio/s09_pastel_palettes.mp3", text:"再说Pastel*Palettes。这是我认识得最慢、最晚的一个团。以前成员经常认不全，乐队名到现在都不会拼。不过玩了手游、又回头看了些老邦片段，印象改观了不少。毕竟每个乐队，都有专属于自己的那一面。maya说话的口音很好玩，像刚学日语不久、逮着机会就要练发音的外乡人，带点粗犷。不过她粗中有细，手游里那期户外节目，我印象很深。" },
  { file:"audio/s10_eve_chisato_outro.mp3", text:"还有，我最近突然挺喜欢伊芙的。本来以为是因为她也是电波系，想想好像又不太对。大概是因为，她是一只会复读武士道的可爱宝可梦吧。千圣的话，我对她从一开始的轻微反感，到现在差不多算无感了。早期的她商业气息太重，满脑子工作和同事关系，入团很久了还是公事公办，把大家当同事，少了朋友之间的那种氛围。不过随着剧情往后推，这一点也慢慢有了改观。上半部分，就先聊到这儿。剩下的角色，我们下期见。" }
];

/* ---------- 字幕逐字对齐（按真实时长） ---------- */
// 把一段文字切成字符单元，标点后加停顿权重
function buildUnits(text) {
  const units = [];
  for (const ch of text) {
    let w = 1;
    if ("，,".includes(ch)) w = 5;
    else if ("。！？!?".includes(ch)) w = 9;
    else if ("、；：:".includes(ch)) w = 4;
    else if (ch === " ") w = 0.5;
    units.push({ ch, w });
  }
  return units;
}

const subEl = document.getElementById("sub");
const barEl = document.getElementById("bar");
const bgm = document.getElementById("bgm");
const stage = document.getElementById("stage");
const scenes = [...document.querySelectorAll(".scene")];
const statusEl = document.getElementById("status");

// 预先渲染字幕 span
const spanCache = SECTIONS.map(s => {
  subEl.innerHTML = "";
  const units = buildUnits(s.text);
  const spans = units.map(u => {
    const sp = document.createElement("span");
    sp.className = "c";
    sp.textContent = u.ch;
    subEl.appendChild(sp);
    return sp;
  });
  return { units, spans };
});
subEl.innerHTML = "";

// 每段的 voice 元素
const voices = SECTIONS.map(s => {
  const a = new Audio(s.file);
  a.preload = "auto";
  return a;
});

let current = -1;
let raf = null;
let playing = false;
let bgmOn = true;
let gapTimer = null;

// 按权重把字符映射到 0..1 的时间轴
function timeline(units) {
  const total = units.reduce((a, u) => a + u.w, 0);
  let acc = 0;
  return units.map(u => { const start = acc / total; acc += u.w; return start; });
}

function showScene(i) {
  scenes.forEach((s, k) => s.classList.toggle("on", k === i));
  // 切换场景时重启该场景的动效
  const sc = scenes[i];
  sc.querySelectorAll("[data-fx]").forEach(el => { el.innerHTML = ""; FX[el.dataset.fx] && FX[el.dataset.fx](el); });
  const rings = sc.querySelector("canvas.fx");
  if (rings) { FX.rings(rings); }
}

function playSection(i) {
  if (i >= SECTIONS.length) { finish(); return; }
  current = i;
  const a = voices[i];
  const { units, spans } = spanCache[i];
  const starts = timeline(units);
  // 清空字幕
  spans.forEach(sp => sp.classList.remove("on"));
  subEl.innerHTML = "";
  spans.forEach(sp => subEl.appendChild(sp));
  showScene(i);
  statusEl.textContent = `第 ${i + 1}/10 段`;

  const tick = () => {
    if (current !== i) return;
    const d = a.duration || 1;
    const p = a.currentTime / d;
    spans.forEach((sp, k) => sp.classList.toggle("on", p >= starts[k]));
    barEl.style.width = ((i + p) / SECTIONS.length * 100) + "%";
    raf = requestAnimationFrame(tick);
  };
  a.onended = () => {
    spans.forEach(sp => sp.classList.add("on"));
    gapTimer = setTimeout(() => playSection(i + 1), 700);
  };
  a.currentTime = 0;
  a.play().catch(() => {});
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
  duck(true);
}

function duck(voiceOn) {
  // 说话时 BGM 压低（闪避），停顿时回升
  const target = bgmOn ? (voiceOn ? 0.035 : 0.12) : 0;
  const step = () => {
    const v = bgm.volume, diff = target - v;
    if (Math.abs(diff) < 0.003) { bgm.volume = target; return; }
    bgm.volume = v + diff * 0.08;
    requestAnimationFrame(step);
  };
  step();
}

function finish() {
  playing = false;
  statusEl.textContent = "播放结束";
  duck(false);
  document.getElementById("play").textContent = "▶ 播放";
}

document.getElementById("play").onclick = () => {
  if (playing) {
    playing = false;
    voices[current] && voices[current].pause();
    bgm.pause();
    clearTimeout(gapTimer);
    document.getElementById("play").textContent = "▶ 继续";
    return;
  }
  playing = true;
  document.getElementById("play").textContent = "❚❚ 暂停";
  document.getElementById("hint").style.display = "none";
  bgm.play().catch(() => {});
  const cur = voices[current];
  if (cur && !cur.ended && cur.currentTime > 0) {
    // 暂停后继续当前段
    cur.play().catch(() => {});
    duck(true);
  } else {
    // 未开始，或当前段已结束：从下一段（或第一段）开始
    playSection(cur && cur.ended ? current + 1 : Math.max(0, current));
  }
};
document.getElementById("restart").onclick = () => {
  voices.forEach(a => { a.pause(); a.currentTime = 0; });
  clearTimeout(gapTimer);
  current = -1; playing = false;
  bgm.currentTime = 0;
  barEl.style.width = "0";
  playSection(0);
  playing = true;
  document.getElementById("play").textContent = "❚❚ 暂停";
  bgm.play().catch(() => {});
};
document.getElementById("bgmToggle").onclick = () => {
  bgmOn = !bgmOn;
  duck(voices[current] && !voices[current].paused);
};

/* ---------- 动效（每段一个专门的可视化） ---------- */
const NS = "http://www.w3.org/2000/svg";
function svg(w, h) {
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", `0 0 ${w} ${h}`);
  s.setAttribute("width", "100%"); s.setAttribute("height", "100%");
  return s;
}
function el(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
const FX = {
  // 01 声音：同心圆 + 秋天的落叶
  rings(canvasOrEl) {
    if (canvasOrEl.tagName !== "CANVAS") return;
    const c = canvasOrEl, g = c.getContext("2d");
    c.width = 1080; c.height = 1920;
    const leaves = Array.from({length: 26}, () => ({ x: Math.random()*1080, y: Math.random()*1920, r: 10+Math.random()*16, s: .6+Math.random()*1.2, a: Math.random()*6 }));
    let t0 = performance.now();
    cancelAnimationFrame(c._raf);
    const draw = (now) => {
      if (!c.isConnected || !c.closest(".scene.on")) { c._raf = requestAnimationFrame(draw); return; }
      const t = Math.max(0, (now - t0) / 1000);
      g.fillStyle = "#0d0f1e"; g.fillRect(0, 0, 1080, 1920);
      // 同心圆：像声音从中心扩散
      for (let k = 0; k < 9; k++) {
        const ph = ((t * 0.45 + k / 9) % 1);
        const rr = 60 + ph * 720;
        g.strokeStyle = `rgba(255,140,190,${(1 - ph) * 0.55})`;
        g.lineWidth = 3 + (1 - ph) * 6;
        g.beginPath(); g.arc(540, 960, rr, 0, Math.PI * 2); g.stroke();
      }
      // 落叶
      leaves.forEach(L => {
        L.y += L.s; L.x += Math.sin(t + L.a) * 0.9;
        if (L.y > 1960) { L.y = -40; L.x = Math.random() * 1080; }
        g.save(); g.translate(L.x, L.y); g.rotate(t + L.a);
        g.fillStyle = "rgba(255,190,110,.75)";
        g.beginPath(); g.ellipse(0, 0, L.r, L.r * .5, 0, 0, Math.PI * 2); g.fill(); g.restore();
      });
      c._raf = requestAnimationFrame(draw);
    };
    c._raf = requestAnimationFrame(draw);
  },
  // 02 前へススメ!：两段式情绪曲线（告别 → 坚定向前）
  song(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    const bgG = el("g", {}, s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#15122b" }, bgG);
    // 时间轴
    el("line", { x1:90, y1:1040, x2:990, y2:1040, stroke:"#6e6a9e", "stroke-width":4 }, s);
    const seg1 = el("rect", { x:90, y:1000, width:0, height:80, rx:40, fill:"#ffb3cf", opacity:.9 }, s);
    const seg2 = el("rect", { x:90, y:1000, width:0, height:80, rx:40, fill:"#7ee0ff", opacity:.9 }, s);
    el("text", { x:90, y:960, fill:"#ffd6e6", "font-size":42, "font-weight":700 }, s).textContent = "告别的笑";
    el("text", { x:990, y:960, fill:"#9fe9ff", "font-size":42, "font-weight":700, "text-anchor":"end" }, s).textContent = "向前走";
    // 波形：前半柔、后半紧
    const wave = el("polyline", { fill:"none", stroke:"#fff", "stroke-width":6, "stroke-linejoin":"round" }, s);
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      const cyc = (t % 14) / 14;
      seg1.setAttribute("width", Math.min(1, cyc * 2) * 450);
      seg2.setAttribute("x", 540);
      seg2.setAttribute("width", Math.max(0, Math.min(1, (cyc - .5) * 2)) * 450);
      let pts = [];
      for (let x = 90; x <= 990; x += 6) {
        const u = (x - 90) / 900;
        const amp = u < .5 ? 40 + 14 * Math.sin(u * 20) : 110 + 60 * Math.sin(u * 60 + t * 6);
        const y = 1300 + Math.sin(u * 26 + t * 2) * amp * .6 + (u < .5 ? 0 : (u - .5) * 60);
        pts.push(`${x},${y.toFixed(1)}`);
      }
      wave.setAttribute("points", pts.join(" "));
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    // 歌词节奏提示：小光点随时间向前滑动
    const dot = el("circle", { cx:90, cy:1040, r:14, fill:"#fff" }, s);
    const dotLoop = (now) => { now = Math.max(now, t0);
      const t = Math.max(0, (now - t0) / 1000);
      dot.setAttribute("cx", 90 + ((t % 14) / 14) * 900);
      requestAnimationFrame(dotLoop);
    };
    requestAnimationFrame(dotLoop);
  },
  // 03 距离：座位表，坐满的椅子 + 门口的访客
  seats(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#101422" }, s);
    // 圆桌
    el("circle", { cx:540, cy:900, r:240, fill:"#1b2140", stroke:"#3b4a7a", "stroke-width":6 }, s);
    el("text", { x:540, y:912, fill:"#8aa0d6", "font-size":40, "text-anchor":"middle" }, s).textContent = "她的圈子";
    const seatCount = 12, seatsG = el("g", {}, s);
    const filled = [0, 2, 5, 8, 10];   // 五个位置早就坐满
    for (let i = 0; i < seatCount; i++) {
      const a = (i / seatCount) * Math.PI * 2 - Math.PI / 2;
      const x = 540 + Math.cos(a) * 320, y = 900 + Math.sin(a) * 320;
      const on = filled.includes(i);
      el("circle", { cx:x, cy:y, r:42, fill: on ? "#ff8fc0" : "#262c4a", stroke: on ? "#ffd6e6" : "#49527a", "stroke-width":4 }, seatsG);
    }
    el("text", { x:540, y:1290, fill:"#ffd6e6", "font-size":38, "text-anchor":"middle" }, s).textContent = "其余的人：排队";
    // 访客：在门口来回
    const v = el("circle", { cx:540, cy:1620, r:34, fill:"#9fe9ff" }, s);
    const lab = el("text", { x:540, y:1690, fill:"#9fe9ff", "font-size":32, "text-anchor":"middle" }, s); lab.textContent = "你";
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      const u = (Math.sin(t * .9) + 1) / 2;
      v.setAttribute("cx", 300 + u * 480);
      lab.setAttribute("x", 300 + u * 480);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 04 永动机：四个环节循环
  loop(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#12101f" }, s);
    const steps = ["满嘴奇怪发言", "负责吐槽", "偷偷帮忙", "当场点破"];
    const cx = 540, cy = 960, R = 380;
    el("circle", { cx, cy, r:R, fill:"none", stroke:"#3a3566", "stroke-width":8, "stroke-dasharray":"16 22" }, s);
    const nodes = steps.map((t, i) => {
      const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      el("circle", { cx:x, cy:y, r:130, fill:"#1f1b3d", stroke:"#7b6fd0", "stroke-width":5 }, s);
      const lines = t.length > 4 ? [t.slice(0,4), t.slice(4)] : [t];
      lines.forEach((l, k) => el("text", { x, y: y + 14 + (k - (lines.length-1)/2) * 42, fill:"#f2eeff", "font-size":36, "font-weight":700, "text-anchor":"middle" }, s).textContent = l);
      return { x, y };
    });
    // 「脸红否认」：循环后的落点
    el("circle", { cx, cy, r:150, fill:"#2a1a33", stroke:"#ff8fc0", "stroke-width":6 }, s);
    el("text", { x:cx, y:cy-6, fill:"#ffd6e6", "font-size":42, "font-weight":700, "text-anchor":"middle" }, s).textContent = "脸红否认";
    el("text", { x:cx, y:cy+44, fill:"#ffd6e6", "font-size":30, "text-anchor":"middle" }, s).textContent = "循环往复";
    const token = el("circle", { r:26, fill:"#ffd166" }, s);
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = (Math.max(0, now - t0) / 1000 / 1.6) % 4;
      const i = Math.floor(t), f = t - i;
      const a = nodes[i], b = nodes[(i + 1) % 4];
      token.setAttribute("cx", a.x + (b.x - a.x) * f);
      token.setAttribute("cy", a.y + (b.y - a.y) * f);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 05 电波 vs 腹黑：标签翻转 + 傲娇对照
  denpa(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#0f1a1f" }, s);
    const left = el("g", { transform:"translate(120,640)" }, s);
    el("rect", { x:0, y:0, width:360, height:520, rx:36, fill:"#243a40" }, left);
    el("text", { x:180, y:250, fill:"#8fe3d0", "font-size":60, "font-weight":700, "text-anchor":"middle" }, left).textContent = "腹黑?";
    el("text", { x:180, y:330, fill:"#8fe3d0", "font-size":36, "text-anchor":"middle" }, left).textContent = "坏主意?";
    const right = el("g", { transform:"translate(600,640)" }, s);
    el("rect", { x:0, y:0, width:360, height:520, rx:36, fill:"#40243a" }, right);
    el("text", { x:180, y:250, fill:"#ffd6e6", "font-size":60, "font-weight":700, "text-anchor":"middle" }, right).textContent = "电波系";
    el("text", { x:180, y:330, fill:"#ffd6e6", "font-size":36, "text-anchor":"middle" }, right).textContent = "特有的呆";
    const eye = el("circle", { cx:540, cy:1400, r:70, fill:"#fff" }, s);
    const pupil = el("circle", { cx:540, cy:1400, r:26, fill:"#0f1a1f" }, s);
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      const k = (Math.sin(t * .6) + 1) / 2;
      left.setAttribute("opacity", 1 - k * .7);
      right.setAttribute("opacity", .3 + k * .7);
      pupil.setAttribute("cx", 540 + Math.sin(t * 1.2) * 30);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 06 摩卡：攻势压制槽拉满
  moca(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#1a1620" }, s);
    el("text", { x:540, y:620, fill:"#ffe2a8", "font-size":46, "font-weight":700, "text-anchor":"middle" }, s).textContent = "攻势";
    el("rect", { x:140, y:680, width:800, height:120, rx:60, fill:"#2a2432", stroke:"#5a4f6e", "stroke-width":4 }, s);
    const fill = el("rect", { x:140, y:680, width:0, height:120, rx:60, fill:"#ffb84d" }, s);
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      fill.setAttribute("width", Math.min(800, (t % 6) / 4.2 * 800));
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    // 摩卡 图片 + 两个“呆”的表情标记
    const img = document.createElementNS(NS, "image");
    img.setAttribute("href", "assets/img/moca.jpg");
    img.setAttribute("x", 290); img.setAttribute("y", 760); img.setAttribute("width", 500); img.setAttribute("height", 500);
    img.setAttribute("preserveAspectRatio", "xMidYMid slice");
    s.appendChild(img);
    el("text", { x:540, y:1330, fill:"#ffe2a8", "font-size":40, "text-anchor":"middle" }, s).textContent = "表面呆呆的，攻势直接拉满";
  },
  // 07 兰：舞台 / 后台 切换
  ran(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:540, height:1920, fill:"#1f2a6b" }, s);
    el("rect", { x:540, y:0, width:540, height:1920, fill:"#fbd7e4" }, s);
    el("text", { x:270, y:900, fill:"#fff", "font-size":60, "font-weight":700, "text-anchor":"middle" }, s).textContent = "舞台";
    el("text", { x:810, y:900, fill:"#c0306a", "font-size":60, "font-weight":700, "text-anchor":"middle" }, s).textContent = "后台";
    const blush = el("circle", { cx:810, cy:1120, r:60, fill:"#ff7ab8", opacity:.6 }, s);
    const spot = el("circle", { cx:270, cy:1120, r:120, fill:"#ffffff", opacity:.25 }, s);
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      const k = (Math.sin(t * 1.4) + 1) / 2;
      blush.setAttribute("r", 40 + k * 60);
      spot.setAttribute("r", 80 + (1 - k) * 80);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 08 萝团：高压计 + Lisa 像强化版的初华（重叠圆）
  roselia(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#141018" }, s);
    // 压力表
    el("path", { d:"M 140 1000 A 400 400 0 0 1 940 1000", fill:"none", stroke:"#3a3040", "stroke-width":50, "stroke-linecap":"round" }, s);
    el("path", { d:"M 140 1000 A 400 400 0 0 1 940 1000", fill:"none", stroke:"#c04848", "stroke-width":50, "stroke-linecap":"round", opacity:.7 }, s);
    el("text", { x:540, y:1100, fill:"#eadfff", "font-size":44, "font-weight":700, "text-anchor":"middle" }, s).textContent = "对内氛围：高压";
    const needle = el("line", { x1:540, y1:1000, x2:540, y2:700, stroke:"#fff", "stroke-width":10, "stroke-linecap":"round" }, s);
    el("circle", { cx:540, cy:1000, r:26, fill:"#fff" }, s);
    // Lisa：强化版的初华（两圆重叠，后者更大）
    el("circle", { cx:330, cy:1480, r:120, fill:"#5b3a74", opacity:.85 }, s);
    el("circle", { cx:500, cy:1480, r:150, fill:"#ff8fc0", opacity:.6 }, s);
    el("text", { x:330, y:1490, fill:"#fff", "font-size":36, "text-anchor":"middle" }, s).textContent = "初华";
    el("text", { x:500, y:1500, fill:"#fff", "font-size":44, "font-weight":700, "text-anchor":"middle" }, s).textContent = "强化版";
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      const a = -Math.PI * (0.8 + 0.1 * Math.sin(t)) + 0; // 指针在高压区附近摆动
      const x2 = 540 + Math.cos(a) * 320, y2 = 1000 + Math.sin(a) * 320;
      needle.setAttribute("x2", x2); needle.setAttribute("y2", y2);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 09 Pastel*Palettes：色块逐个拼合，Maya 的口音 = 色块上的“外乡”小标记
  pastel(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#20172e" }, s);
    const colors = ["#ffb3d1","#c5b3ff","#a8e6ff","#ffe6a8","#b9f5d0","#ffb08a"];
    const tiles = colors.map((c, i) => {
      const x = 120 + (i % 2) * 440, y = 560 + Math.floor(i / 2) * 420;
      const g = el("g", {}, s);
      el("rect", { x:0, y:0, width:400, height:340, rx:40, fill:c }, g);
      g.setAttribute("transform", `translate(${x},${y})`);
      return g;
    });
    el("text", { x:540, y:1560, fill:"#ffe6f2", "font-size":46, "text-anchor":"middle", "font-weight":700 }, s).textContent = "每个乐队，都有专属于自己的那一面";
    const t0 = performance.now();
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      tiles.forEach((g, i) => {
        const ph = Math.min(1, Math.max(0, (t - i * .7) / 1.2));
        const e = 1 - Math.pow(1 - ph, 3);
        const x = 120 + (i % 2) * 440, y = 560 + Math.floor(i / 2) * 420;
        g.setAttribute("transform", `translate(${x},${y - (1 - e) * 200}) scale(${.8 + .2 * e})`);
        g.setAttribute("opacity", e);
      });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },
  // 10 复读：武士道回声
  echo(host) {
    const s = svg(1080, 1920); host.appendChild(s);
    el("rect", { x:0, y:0, width:1080, height:1920, fill:"#101a2c" }, s);
    const t0 = performance.now();
    const pills = Array.from({length:6}, (_, i) => el("text", { x:540, y:820 + i * 0, fill:"#cfe6ff", "font-size":64, "font-weight":700, "text-anchor":"middle" }, s));
    pills.forEach(p => p.textContent = "武士道");
    const loop = (now) => {
      if (!host.closest(".scene.on")) { requestAnimationFrame(loop); return; }
      const t = Math.max(0, (now - t0) / 1000);
      pills.forEach((p, i) => {
        const ph = ((t * .5 + i / 6) % 1);
        p.setAttribute("y", 1000 - ph * 600);
        p.setAttribute("opacity", (1 - ph) * .9);
        p.setAttribute("font-size", 40 + ph * 40);
      });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
};

/* ---------- 自适应缩放（竖屏 1080×1920 等比缩放） ---------- */
function fit() {
  const sc = Math.min(window.innerWidth / 1080, (window.innerHeight - 56) / 1920);
  stage.style.transform = `scale(${sc})`;
}
window.addEventListener("resize", fit);
fit();

// 初始显示第一段，便于检查
showScene(0);
