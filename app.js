(() => {
  'use strict';

  /* ================= icons ================= */
  const P = {
    plus: '<path d="M12 5v14M5 12h14"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    send: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M18.5 16.5l.6 1.6 1.4.4-1.4.6-.6 1.4-.5-1.4-1.5-.6 1.5-.4z"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    pencil: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 16V5M7 10l5-5 5 5M5 20h14"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8.5-8.5M16 7l3 3M14 9l2 2"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    horizon: '<path d="M3 17h18M6 20.5h12"/><path d="M7 17a5 5 0 0 1 10 0"/><path d="M12 6.5V9M5.6 9.6l1.6 1.6M18.4 9.6l-1.6 1.6"/>',
    bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
    shield: '<path d="M12 3l7 3v6c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
    note: '<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
    database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
    resume: '<path d="M4 20h4L19 9l-4-4L4 16z"/>'
  };
  const icon = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;
  const LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="16" r="3.2" fill="var(--accent)"/></svg>';
  const EMPTY_ART = `<svg class="art" viewBox="0 0 140 140" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
    <path d="M20 98h100" opacity=".5"/><path d="M38 106h64" opacity=".3"/>
    <path d="M44 98a26 26 0 0 1 52 0" stroke="var(--accent)" stroke-width="1.6"/>
    <path d="M70 52v-12M45 62l-8-8M95 62l8-8M30 82H18M110 82h12" opacity=".6"/>
    <circle cx="70" cy="98" r="3" fill="var(--accent)" stroke="none"/></svg>`;

  /* ================= utils ================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const pad = (n) => String(n).padStart(2, '0');
  const fmtDate = (t) => { const d = new Date(t); return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`; };
  const fmtDateTime = (t) => { const d = new Date(t); return `${fmtDate(t)} ${pad(d.getHours())}:${pad(d.getMinutes())}`; };
  const daysSince = (t) => Math.floor((Date.now() - t) / 86400000);
  const stripMd = (s) => String(s || '').replace(/\*\*(.+?)\*\*/g, '$1').replace(/^#+\s*/gm, '').replace(/^\s*[-*]\s+/gm, '・').trim();

  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function autosize(ta) {
    const fit = () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
    ta.addEventListener('input', fit);
    fit();
  }

  /* ================= storage (localStorage) ================= */
  const KEY = { visions: 'vm.visions', draft: 'vm.draft', settings: 'vm.settings' };
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
  const save = (k, v) => {
    try { localStorage.setItem(k, JSON.stringify(v)); return true; }
    catch { toast('保存できませんでした（容量不足の可能性）'); return false; }
  };

  const store = {
    all: () => load(KEY.visions, []),
    get: (id) => store.all().find((v) => v.id === id),
    put(v) {
      const list = store.all();
      const i = list.findIndex((x) => x.id === v.id);
      v.updatedAt = Date.now();
      if (i >= 0) list[i] = v; else list.unshift(v);
      return save(KEY.visions, list);
    },
    remove: (id) => save(KEY.visions, store.all().filter((v) => v.id !== id)),
    settings: () => ({ apiKey: '', model: 'gemini-flash-latest', ...load(KEY.settings, {}) }),
    saveSettings: (s) => save(KEY.settings, s),
    draft: () => load(KEY.draft, null),
    saveDraft: (d) => save(KEY.draft, d),
    clearDraft: () => localStorage.removeItem(KEY.draft)
  };
  // ブラウザによる自動削除を防ぐ
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

  /* ================= Gemini ================= */
  async function gemini({ system, contents, schema, temperature = 0.8 }) {
    const { apiKey, model } = store.settings();
    if (!apiKey) throw new Error('APIキーが未設定です');
    const generationConfig = { temperature };
    if (schema) { generationConfig.responseMimeType = 'application/json'; generationConfig.responseSchema = schema; }
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model || 'gemini-flash-latest')}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: mergeTurns(contents), generationConfig })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error?.message || `通信エラー (${res.status})`);
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const text = parts.filter((p) => !p.thought).map((p) => p.text || '').join('').trim();
    if (!text) throw new Error('応答が空でした。もう一度お試しください');
    return text;
  }
  // 同じroleが連続しないようにまとめる
  function mergeTurns(contents) {
    const out = [];
    for (const c of contents) {
      const last = out[out.length - 1];
      if (last && last.role === c.role) last.parts = [{ text: last.parts[0].text + '\n\n' + c.parts[0].text }];
      else out.push({ role: c.role, parts: [{ text: c.parts[0].text }] });
    }
    return out;
  }
  const toContents = (msgs) => msgs.map((m) => ({ role: m.role === 'ai' ? 'model' : 'user', parts: [{ text: m.text }] }));

  const OPENING = '何を思いつきましたか。\n一言でも、断片でも大丈夫です。';

  const SYS_INTERVIEW = `あなたは、ユーザーが「思いついた瞬間のビジョン」を言葉にするのを手伝う聞き手です。
ユーザーは何かを作る・始めることを思いついたばかりで、熱量はあるが、うまく説明できていません。
後でプロジェクトに迷った時、ユーザーが原点に立ち返れる記録を残すことが目的です。

ルール:
- 一度に質問は1つだけ。質問は60字以内で短く。
- 質問の前に、相手の言葉を20字以内で受け止める一文を添える。
- 次の観点を、会話の流れに合わせて自然に掘り下げる: 何を作る/始めるのか、なぜやりたいのか（原動力）、何にワクワクしているのか、実現した未来の情景（誰が、どう使い、どう感じるか）、思いついたきっかけ、絶対に妥協したくないこと。
- 技術的な実現性・コスト・難しさの話はしない。否定・評価・助言はしない。熱量を引き出すことに集中する。
- 抽象的な答えには、具体的な場面や感覚を尋ねる。
- 5〜7問ほど聞けたら「ここまでをまとめましょうか」と提案する。
- マークダウン、絵文字、箇条書きは使わない。日本語の自然な話し言葉で。`;

  const SYS_SUMMARY = `あなたはユーザーとの対話から「ビジョン」を記録としてまとめる編集者です。
目的: 数ヶ月後、技術的な問題や妥協で迷ったユーザーが、これを読んで最初の熱量と目的を思い出せること。
ルール:
- ユーザー自身の言葉・言い回し・熱量をできるだけそのまま残す。誇張しない、美化しない。
- 対話で語られていないことは書かない。不明な項目は空文字にする。
- 一人称（ユーザー視点）で書く。マークダウン・絵文字は使わない。
- title: 20字以内の名前。
- core: ビジョンの核心を1文で（60字以内）。迷った時に最初に読む一文。
- why / excitement / future / inspiration: 各150字以内。
- essentials: 絶対に妥協したくないこと。最大3つ、各40字以内。
- keywords: 最大5つ。`;

  const SUMMARY_SCHEMA = {
    type: 'OBJECT',
    properties: {
      title: { type: 'STRING' },
      core: { type: 'STRING' },
      why: { type: 'STRING' },
      excitement: { type: 'STRING' },
      future: { type: 'STRING' },
      inspiration: { type: 'STRING' },
      essentials: { type: 'ARRAY', items: { type: 'STRING' } },
      keywords: { type: 'ARRAY', items: { type: 'STRING' } }
    },
    required: ['title', 'core', 'why', 'excitement', 'future', 'inspiration', 'essentials', 'keywords'],
    propertyOrdering: ['title', 'core', 'why', 'excitement', 'future', 'inspiration', 'essentials', 'keywords']
  };

  const sysReturn = (v) => `あなたは、プロジェクトの途中で迷っているユーザーを「原点」に立ち返らせる相談相手です。
以下は、ユーザーがこのプロジェクトを思いついた瞬間に記録したビジョンです（${fmtDate(v.createdAt)} 記録）。

タイトル: ${v.title}
核心: ${v.core}
なぜ: ${v.why}
ワクワク: ${v.excitement}
描く未来: ${v.future}
きっかけ: ${v.inspiration}
譲れないこと: ${(v.essentials || []).join(' / ')}
${(v.notes || []).length ? '\nその後の記録:\n' + v.notes.slice(-10).map((n) => `${fmtDate(n.at)} ${n.text}`).join('\n') : ''}

ルール:
- ユーザーの悩みを、当時のビジョンの言葉と照らし合わせる。ビジョンの言葉を「」で短く引用する。
- 妥協しようとしている点が「譲れないこと」に触れるなら、はっきり指摘する。触れないなら、柔軟にしてよいと伝える。
- 答えを押し付けず、判断の軸を示し、最後に問いを1つ返す。
- 200字以内。マークダウン・絵文字・箇条書きは使わない。`;

  /* ================= speech input ================= */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function attachMic(btn, ta) {
    if (!SR) { btn.remove(); return; }
    let rec = null;
    btn.addEventListener('click', () => {
      if (rec) { rec.stop(); return; }
      rec = new SR();
      rec.lang = 'ja-JP';
      rec.interimResults = true;
      rec.continuous = true;
      const base = ta.value;
      rec.onresult = (e) => {
        let s = '';
        for (const r of e.results) s += r[0].transcript;
        ta.value = base + s;
        ta.dispatchEvent(new Event('input'));
      };
      rec.onend = () => { rec = null; btn.classList.remove('on'); };
      rec.onerror = () => { toast('音声入力を開始できませんでした'); };
      rec.start();
      btn.classList.add('on');
    });
  }

  /* ================= chat component ================= */
  function msgHtml(m) {
    return `<div class="msg ${m.role}">${esc(m.text)}</div>`;
  }
  const typingHtml = '<div class="msg ai typing-wrap"><span class="typing"><i></i><i></i><i></i></span></div>';

  function composerHtml(extraActions = '', placeholder = '思いつくままに') {
    return `<div class="composer">
      <div class="actions">${extraActions}</div>
      <div class="inputbox">
        <textarea rows="1" placeholder="${placeholder}" aria-label="メッセージ"></textarea>
        <button class="icon-btn mic" aria-label="音声入力">${icon('mic')}</button>
        <button class="icon-btn send" aria-label="送信" disabled>${icon('send')}</button>
      </div>
    </div>`;
  }

  function wireComposer(root, onSend) {
    const ta = $('textarea', root);
    const send = $('.send', root);
    autosize(ta);
    attachMic($('.mic', root), ta);
    const sync = () => { send.disabled = !ta.value.trim(); };
    ta.addEventListener('input', sync);
    const fire = () => {
      const text = ta.value.trim();
      if (!text || send.dataset.busy) return;
      ta.value = '';
      ta.dispatchEvent(new Event('input'));
      onSend(text);
    };
    send.addEventListener('click', fire);
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); fire(); }
    });
    return {
      ta,
      busy(b) { if (b) send.dataset.busy = '1'; else delete send.dataset.busy; }
    };
  }

  /* ================= viewport (キーボード対応) ================= */
  // iOSではキーボード表示時にレイアウトが縮まないため、visualViewportに合わせる
  let maxVH = 0;
  const onViewportChange = [];
  function syncViewport() {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    const t = vv ? vv.offsetTop : 0;
    maxVH = Math.max(maxVH, h);
    const rs = document.documentElement.style;
    rs.setProperty('--vvh', h + 'px');
    rs.setProperty('--vvt', t + 'px');
    document.body.classList.toggle('kb', h < maxVH * 0.8);
    onViewportChange.forEach((f) => f());
  }
  if (window.visualViewport) {
    visualViewport.addEventListener('resize', syncViewport);
    visualViewport.addEventListener('scroll', syncViewport);
  }
  window.addEventListener('orientationchange', () => { maxVH = 0; setTimeout(syncViewport, 300); });
  syncViewport();

  /* ================= router ================= */
  const app = $('#app');
  let cleanup = null;

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    closeSheet();
    app.classList.remove('chat-mode');
    const h = location.hash.replace(/^#\/?/, '');
    const [name, id] = h.split('/');
    window.scrollTo(0, 0);
    if (name === 'new') viewNew();
    else if (name === 'v' && id) viewVision(id);
    else if (name === 'settings') viewSettings();
    else viewHome();
  }
  const go = (h) => { location.hash = h; };
  window.addEventListener('hashchange', route);

  /* ================= home ================= */
  let filter = 'all';
  const STATUS = { active: '進行中', paused: '休止', done: '完了' };

  function viewHome() {
    const list = store.all();
    const draft = store.draft();
    const shown = filter === 'all' ? list : list.filter((v) => (v.status || 'active') === filter);
    app.innerHTML = `
      <header class="bar">
        <div class="brand">${LOGO}<span>VISION</span></div>
        <button class="icon-btn" data-go="settings" aria-label="設定">${icon('sliders')}</button>
      </header>
      <main class="view-enter">
        ${draft && draft.msgs?.some((m) => m.role === 'me') ? `<button class="draft" data-go="new">${icon('resume')}<span>書きかけのビジョンがあります</span>${icon('back', 'flip')}</button>` : ''}
        ${list.length ? `
          <div class="seg" role="tablist">
            ${[['all', 'すべて'], ['active', '進行中'], ['paused', '休止'], ['done', '完了']].map(([k, l]) => `<button class="${filter === k ? 'on' : ''}" data-filter="${k}">${l}</button>`).join('')}
          </div>
          <div class="list">
            ${shown.map((v) => `
              <button class="card" data-id="${esc(v.id)}">
                <h3>${esc(v.title || '無題')}</h3>
                <p>${esc(v.core)}</p>
                <div class="meta"><span class="dot ${esc(v.status || 'active')}"></span>${STATUS[v.status || 'active']}<span>·</span>${fmtDate(v.createdAt)}</div>
              </button>`).join('') || '<div class="empty"><p>該当なし</p></div>'}
          </div>` : `
          <div class="empty">${EMPTY_ART}<p>思いついたら、すぐ。</p></div>`}
      </main>
      <button class="fab" data-go="new" aria-label="新しいビジョン">${icon('plus')}</button>`;
    $$('.flip', app).forEach((s) => (s.style.transform = 'rotate(180deg)'));
    $$('[data-go]', app).forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
    $$('[data-filter]', app).forEach((b) => b.addEventListener('click', () => { filter = b.dataset.filter; viewHome(); }));
    $$('.card', app).forEach((b) => b.addEventListener('click', () => go('v/' + b.dataset.id)));
  }

  /* ================= new vision (interview) ================= */
  function viewNew() {
    let draft = store.draft() || { id: uid(), createdAt: Date.now(), msgs: [{ role: 'ai', text: OPENING }] };
    const hasKey = !!store.settings().apiKey;

    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title">新しいビジョン</div>
        <button class="icon-btn" data-act="discard" aria-label="破棄">${icon('trash')}</button>
      </header>
      ${hasKey ? '' : `<div class="banner">${icon('key')}<span>Geminiを使うにはAPIキーが必要です</span><a href="#/settings">設定</a></div>`}
      <div class="chat" id="chat"></div>
      ${composerHtml(`<button class="pill primary" data-act="summarize" disabled>${icon('spark')}まとめる</button>`)}`;

    app.classList.add('chat-mode');
    const chat = $('#chat');
    const sumBtn = $('[data-act="summarize"]');
    const render = () => {
      chat.innerHTML = draft.msgs.map(msgHtml).join('');
      sumBtn.disabled = !draft.msgs.some((m) => m.role === 'me');
    };
    const scrollEnd = () => chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
    // キーボード開閉時も最新の質問が見えるように
    const keepEnd = () => { chat.scrollTop = chat.scrollHeight; };
    onViewportChange.push(keepEnd);
    cleanup = () => { onViewportChange.splice(onViewportChange.indexOf(keepEnd), 1); };
    render();
    scrollEnd();

    const comp = wireComposer(app, async (text) => {
      draft.msgs.push({ role: 'me', text });
      store.saveDraft(draft);
      render();
      if (!store.settings().apiKey) { scrollEnd(); return; }
      comp.busy(true);
      chat.insertAdjacentHTML('beforeend', typingHtml);
      scrollEnd();
      try {
        const reply = await gemini({
          system: SYS_INTERVIEW,
          contents: [{ role: 'user', parts: [{ text: '（ビジョンの記録を始めます）' }] }, ...toContents(draft.msgs)]
        });
        draft.msgs.push({ role: 'ai', text: stripMd(reply) });
        store.saveDraft(draft);
      } catch (e) {
        toast(e.message);
      }
      comp.busy(false);
      render();
      scrollEnd();
    });
    setTimeout(() => comp.ta.focus(), 50);

    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="discard"]').addEventListener('click', () => {
      if (!draft.msgs.some((m) => m.role === 'me') || confirm('この対話を破棄しますか？')) { store.clearDraft(); go(''); }
    });
    sumBtn.addEventListener('click', async () => {
      const userText = draft.msgs.filter((m) => m.role === 'me').map((m) => m.text);
      let v = {
        id: draft.id, createdAt: draft.createdAt, status: 'active',
        title: userText[0].slice(0, 20), core: userText[0], why: '', excitement: '', future: '', inspiration: '',
        essentials: [], keywords: [], transcript: draft.msgs, notes: []
      };
      if (store.settings().apiKey) {
        sumBtn.disabled = true;
        sumBtn.innerHTML = `${icon('spark')}まとめています…`;
        try {
          const raw = await gemini({
            system: SYS_SUMMARY,
            contents: [...toContents([{ role: 'me', text: '（ビジョンの記録を始めます）' }, ...draft.msgs]), { role: 'user', parts: [{ text: 'ここまでの対話をビジョンとしてまとめてください。' }] }],
            schema: SUMMARY_SCHEMA,
            temperature: 0.4
          });
          Object.assign(v, sanitize(JSON.parse(raw)));
        } catch (e) {
          toast('まとめに失敗しました: ' + e.message);
          sumBtn.disabled = false;
          sumBtn.innerHTML = `${icon('spark')}まとめる`;
          return;
        }
      }
      viewPreview(v);
    });
  }

  function sanitize(o) {
    const s = (x) => stripMd(typeof x === 'string' ? x : '');
    const a = (x) => (Array.isArray(x) ? x.map(s).filter(Boolean) : []);
    return {
      title: s(o.title), core: s(o.core), why: s(o.why), excitement: s(o.excitement),
      future: s(o.future), inspiration: s(o.inspiration), essentials: a(o.essentials).slice(0, 5), keywords: a(o.keywords).slice(0, 8)
    };
  }

  /* ================= vision form ================= */
  const FIELDS = [
    ['why', 'なぜやりたいのか', 'target'],
    ['excitement', 'ワクワクすること', 'spark'],
    ['future', '思い描く未来', 'horizon'],
    ['inspiration', 'きっかけ', 'bolt']
  ];

  function formHtml(v) {
    return `
      <label class="field"><span>タイトル</span><input class="input" name="title" value="${esc(v.title)}"></label>
      <label class="field"><span>${icon('compass')}核心</span><textarea class="input" name="core" rows="2">${esc(v.core)}</textarea></label>
      ${FIELDS.map(([k, l, ic]) => `<label class="field"><span>${icon(ic)}${l}</span><textarea class="input" name="${k}" rows="3">${esc(v[k])}</textarea></label>`).join('')}
      <label class="field"><span>${icon('shield')}譲れないこと</span><textarea class="input" name="essentials" rows="3" placeholder="1行に1つ">${esc((v.essentials || []).join('\n'))}</textarea></label>
      <label class="field"><span>${icon('tag')}キーワード</span><input class="input" name="keywords" value="${esc((v.keywords || []).join('、'))}" placeholder="、区切り"></label>`;
  }
  function readForm(root, v) {
    const val = (n) => $(`[name="${n}"]`, root).value.trim();
    v.title = val('title') || '無題';
    v.core = val('core');
    FIELDS.forEach(([k]) => (v[k] = val(k)));
    v.essentials = val('essentials').split('\n').map((s) => s.trim()).filter(Boolean);
    v.keywords = val('keywords').split(/[、,]/).map((s) => s.trim()).filter(Boolean);
    return v;
  }

  function viewPreview(v) {
    if (cleanup) { cleanup(); cleanup = null; }
    app.classList.remove('chat-mode');
    window.scrollTo(0, 0);
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="対話に戻る">${icon('back')}</button>
        <div class="title">確認</div>
      </header>
      <main class="view-enter" style="padding-bottom:0">
        <div class="preview-head">${icon('spark')}自分の言葉になっているか確認して保存</div>
        <form id="f">${formHtml(v)}</form>
        <div class="sticky-actions">
          <button class="btn" data-act="back">対話に戻る</button>
          <button class="btn primary" data-act="save">${icon('check')}保存</button>
        </div>
      </main>`;
    $$('textarea', app).forEach(autosize);
    $$('[data-act="back"]', app).forEach((b) => b.addEventListener('click', () => viewNew()));
    $('[data-act="save"]', app).addEventListener('click', () => {
      readForm($('#f'), v);
      if (store.put(v)) {
        store.clearDraft();
        toast('ビジョンを記録しました');
        go('v/' + v.id);
      }
    });
  }

  /* ================= vision detail ================= */
  function viewVision(id) {
    const v = store.get(id);
    if (!v) { go(''); return; }
    v.notes = v.notes || [];
    const d = daysSince(v.createdAt);

    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title"></div>
        <button class="icon-btn" data-act="edit" aria-label="編集">${icon('pencil')}</button>
        <button class="icon-btn danger" data-act="del" aria-label="削除">${icon('trash')}</button>
      </header>
      <main class="view-enter">
        <div class="since">${fmtDate(v.createdAt)}<span>·</span>${d === 0 ? '今日' : d + '日前'}</div>
        <h1 class="v-title">${esc(v.title)}</h1>
        ${v.core ? `<p class="core">${esc(v.core)}</p>` : ''}
        ${FIELDS.filter(([k]) => v[k]).map(([k, l, ic]) => `
          <section class="sec">${icon(ic)}<h4>${l}</h4><div class="body">${esc(v[k])}</div></section>`).join('')}
        ${(v.essentials || []).length ? `
          <section class="sec">${icon('shield')}<h4>譲れないこと</h4><ul>${v.essentials.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></section>` : ''}
        ${(v.keywords || []).length ? `<div class="chips">${v.keywords.map((k) => `<span class="chip">${esc(k)}</span>`).join('')}</div>` : ''}

        <button class="return-btn" data-act="return">${icon('compass')}原点に立ち返る</button>
        <div class="status-row">
          ${Object.entries(STATUS).map(([k, l]) => `<button class="${(v.status || 'active') === k ? 'on' : ''}" data-status="${k}">${l}</button>`).join('')}
        </div>

        <div class="block-title">${icon('note')}記録</div>
        <div class="notes">
          ${v.notes.map((n) => `
            <div class="note"><div class="tl"></div><div><time>${fmtDateTime(n.at)}</time><div class="txt">${esc(n.text)}</div></div>
            <button class="icon-btn" data-note-del="${esc(n.id)}" aria-label="記録を削除">${icon('x')}</button></div>`).join('')}
        </div>
        <div class="note-add">
          <textarea class="input" rows="1" placeholder="進捗、迷い、決めたこと"></textarea>
          <button class="icon-btn send" data-act="note" aria-label="記録を追加" disabled>${icon('plus')}</button>
        </div>

        ${(v.transcript || []).length ? `
          <div class="block-title">${icon('bookmark')}最初の対話</div>
          <details class="log"><summary>${icon('chevron')}${v.transcript.filter((m) => m.role === 'me').length}件の発言</summary>
            <div class="chat">${v.transcript.map(msgHtml).join('')}</div>
          </details>` : ''}
      </main>`;

    // タイトルはスクロールしたらヘッダーに表示
    const titleEl = $('.bar .title', app);
    const onScroll = () => { titleEl.textContent = window.scrollY > 80 ? v.title : ''; };
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanup = () => window.removeEventListener('scroll', onScroll);

    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="del"]').addEventListener('click', () => {
      if (confirm('このビジョンを削除しますか？\n元に戻せません。')) { store.remove(v.id); toast('削除しました'); go(''); }
    });
    $('[data-act="edit"]').addEventListener('click', () => viewEdit(v));
    $('[data-act="return"]').addEventListener('click', () => openReturn(v));
    $$('[data-status]').forEach((b) => b.addEventListener('click', () => { v.status = b.dataset.status; store.put(v); viewVision(v.id); }));
    $$('[data-note-del]').forEach((b) => b.addEventListener('click', () => {
      if (!confirm('この記録を削除しますか？')) return;
      v.notes = v.notes.filter((n) => n.id !== b.dataset.noteDel);
      store.put(v);
      viewVision(v.id);
    }));
    const nta = $('.note-add textarea');
    const nbtn = $('[data-act="note"]');
    autosize(nta);
    nta.addEventListener('input', () => (nbtn.disabled = !nta.value.trim()));
    nbtn.addEventListener('click', () => {
      const text = nta.value.trim();
      if (!text) return;
      v.notes.push({ id: uid(), at: Date.now(), text });
      store.put(v);
      viewVision(v.id);
      toast('記録しました');
    });
  }

  function viewEdit(v) {
    if (cleanup) { cleanup(); cleanup = null; }
    window.scrollTo(0, 0);
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="キャンセル">${icon('x')}</button>
        <div class="title">編集</div>
      </header>
      <main class="view-enter" style="padding-bottom:0">
        <form id="f">${formHtml(v)}</form>
        <div class="sticky-actions">
          <button class="btn" data-act="back">キャンセル</button>
          <button class="btn primary" data-act="save">${icon('check')}保存</button>
        </div>
      </main>`;
    $$('textarea', app).forEach(autosize);
    $$('[data-act="back"]', app).forEach((b) => b.addEventListener('click', () => viewVision(v.id)));
    $('[data-act="save"]', app).addEventListener('click', () => {
      readForm($('#f'), v);
      store.put(v);
      toast('保存しました');
      viewVision(v.id);
    });
  }

  /* ================= 原点に立ち返る (sheet) ================= */
  let sheetEls = null;
  function closeSheet() {
    if (!sheetEls) return;
    onViewportChange.length = 0;
    sheetEls.forEach((e) => e.remove());
    sheetEls = null;
    document.body.style.overflow = '';
  }

  function openReturn(v) {
    const msgs = [{ role: 'ai', text: '何に迷っていますか。\n今の状況をそのまま書いてください。' }];
    const bg = document.createElement('div');
    bg.className = 'sheet-bg';
    const sh = document.createElement('div');
    sh.className = 'sheet';
    sh.innerHTML = `
      <header class="bar">
        <div class="title">原点に立ち返る</div>
        <button class="icon-btn" data-act="close" aria-label="閉じる">${icon('x')}</button>
      </header>
      <div class="scroll">
        ${v.core ? `<div class="anchor"><b>${fmtDate(v.createdAt)} の核心</b>${esc(v.core)}</div>` : ''}
        <div class="chat"></div>
      </div>
      ${composerHtml('', '今の迷い')}`;
    document.body.append(bg, sh);
    document.body.style.overflow = 'hidden';
    sheetEls = [bg, sh];
    // 閉じたら詳細を再描画（記録が増えている可能性）
    const close = () => { closeSheet(); if (location.hash.endsWith(v.id)) viewVision(v.id); };
    bg.addEventListener('click', close);
    $('[data-act="close"]', sh).addEventListener('click', close);

    const chat = $('.chat', sh);
    const scroller = $('.scroll', sh);
    const keepEnd = () => { if (sheetEls) scroller.scrollTop = scroller.scrollHeight; };
    onViewportChange.push(keepEnd);
    const render = () => {
      chat.innerHTML = msgs.map((m, i) => msgHtml(m) + (m.role === 'ai' && i > 0 ? `<button class="save-note" data-i="${i}">${icon('plus')}記録に残す</button>` : '')).join('');
      $$('.save-note', chat).forEach((b) => b.addEventListener('click', () => {
        const i = +b.dataset.i;
        const q = msgs[i - 1]?.role === 'me' ? msgs[i - 1].text : '';
        v.notes = v.notes || [];
        v.notes.push({ id: uid(), at: Date.now(), text: (q ? `迷い: ${q}\n` : '') + `振り返り: ${msgs[i].text}` });
        store.put(v);
        b.remove();
        toast('記録に残しました');
      }));
      scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
    };
    render();

    const comp = wireComposer(sh, async (text) => {
      msgs.push({ role: 'me', text });
      render();
      if (!store.settings().apiKey) { toast('設定でAPIキーを入力してください'); return; }
      comp.busy(true);
      chat.insertAdjacentHTML('beforeend', typingHtml);
      scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
      try {
        const reply = await gemini({
          system: sysReturn(v),
          contents: [{ role: 'user', parts: [{ text: '（相談を始めます）' }] }, ...toContents(msgs)],
          temperature: 0.6
        });
        msgs.push({ role: 'ai', text: stripMd(reply) });
      } catch (e) {
        toast(e.message);
      }
      comp.busy(false);
      if (sheetEls) render();
    });
    setTimeout(() => comp.ta.focus(), 300);
  }

  /* ================= settings ================= */
  function viewSettings() {
    const s = store.settings();
    const count = store.all().length;
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title">設定</div>
      </header>
      <main class="view-enter">
        <section class="panel">
          <h3>${icon('key')}Gemini</h3>
          <label class="field"><span>APIキー</span>
            <div class="keywrap">
              <input class="input" id="apiKey" type="password" autocomplete="off" spellcheck="false" value="${esc(s.apiKey)}" placeholder="AIza...">
              <button class="icon-btn" data-act="toggle" aria-label="表示切替">${icon('eye')}</button>
            </div>
            <p class="hint"><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a> で無料で取得できます。キーはこの端末にのみ保存されます。</p>
          </label>
          <label class="field" style="margin-bottom:12px"><span>モデル</span>
            <input class="input" id="model" list="models" value="${esc(s.model)}" spellcheck="false">
            <datalist id="models">
              <option value="gemini-flash-latest"><option value="gemini-flash-lite-latest"><option value="gemini-2.5-flash"><option value="gemini-2.5-flash-lite"><option value="gemini-2.5-pro">
            </datalist>
          </label>
          <div class="row"><button class="btn primary" data-act="save">${icon('check')}保存</button><button class="btn" data-act="test">接続テスト</button></div>
        </section>

        <section class="panel">
          <h3>${icon('database')}データ</h3>
          <p class="hint" style="margin:0 0 14px">${count}件のビジョンをこのブラウザに保存中。機種変更やブラウザのデータ削除に備えて、定期的に書き出してください。</p>
          <div class="row">
            <button class="btn" data-act="export">${icon('download')}書き出し</button>
            <button class="btn" data-act="import">${icon('upload')}読み込み</button>
            <input type="file" id="file" accept="application/json,.json" hidden>
          </div>
        </section>

        <section class="panel">
          <button class="btn danger block" data-act="wipe">${icon('trash')}すべてのデータを削除</button>
        </section>
      </main>`;

    const keyIn = $('#apiKey');
    const modelIn = $('#model');
    const persist = () => store.saveSettings({ ...store.settings(), apiKey: keyIn.value.trim(), model: modelIn.value.trim() || 'gemini-flash-latest' });
    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="toggle"]').addEventListener('click', (e) => { e.preventDefault(); keyIn.type = keyIn.type === 'password' ? 'text' : 'password'; });
    $('[data-act="save"]').addEventListener('click', () => { persist(); toast('保存しました'); });
    $('[data-act="test"]').addEventListener('click', async (e) => {
      persist();
      const b = e.currentTarget;
      b.disabled = true; b.textContent = 'テスト中…';
      try {
        await gemini({ system: '短く返答してください。', contents: [{ role: 'user', parts: [{ text: 'OKとだけ返してください' }] }], temperature: 0 });
        toast('接続できました');
      } catch (err) { toast(err.message); }
      b.disabled = false; b.textContent = '接続テスト';
    });
    $('[data-act="export"]').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ app: 'vision-memory', exportedAt: new Date().toISOString(), visions: store.all() }, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `vision-memory-${fmtDate(Date.now()).replace(/\./g, '')}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    const file = $('#file');
    $('[data-act="import"]').addEventListener('click', () => file.click());
    file.addEventListener('change', async () => {
      const f = file.files[0];
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        const incoming = Array.isArray(data) ? data : data.visions;
        if (!Array.isArray(incoming)) throw new Error();
        const map = new Map(store.all().map((v) => [v.id, v]));
        let n = 0;
        incoming.forEach((v) => {
          if (!v || !v.id) return;
          const cur = map.get(v.id);
          if (!cur || (v.updatedAt || 0) > (cur.updatedAt || 0)) { map.set(v.id, v); n++; }
        });
        save(KEY.visions, [...map.values()].sort((a, b) => b.createdAt - a.createdAt));
        toast(`${n}件を読み込みました`);
        viewSettings();
      } catch { toast('ファイルを読み込めませんでした'); }
    });
    $('[data-act="wipe"]').addEventListener('click', () => {
      if (!confirm('すべてのビジョンを削除しますか？\n元に戻せません。')) return;
      localStorage.removeItem(KEY.visions);
      store.clearDraft();
      toast('削除しました');
      viewSettings();
    });
  }

  /* ================= boot ================= */
  const ver = window.APP_VERSION || {};
  $('#version').textContent = `ver${ver.version || '0.0.0'} ${ver.deployedAt || ''}`;
  route();
})();
