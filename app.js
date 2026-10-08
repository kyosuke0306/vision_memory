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
    retry: '<path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/>',
    cloud: '<path d="M7 18.5h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6 1.6A3.3 3.3 0 0 0 7 18.5z"/>',
    cloudOff: '<path d="M7 18.5h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6 1.6A3.3 3.3 0 0 0 7 18.5z"/><path d="M4 4l16 16"/>',
    folder: '<path d="M3.5 6.5a1.5 1.5 0 0 1 1.5-1.5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z"/>',
    logout: '<path d="M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14M10 16l-4-4 4-4M6 12h10"/>',
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
    toastTimer = setTimeout(() => el.classList.remove('show'), msg.length > 20 ? 4500 : 2400);
  }

  function autosize(ta) {
    const fit = () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
    ta.addEventListener('input', fit);
    fit();
  }

  /* ================= cloud sync (Firebase) ================= */
  // firebase-config.js に設定があればGoogleログインで全端末に自動同期。なければこの端末のみに保存
  const cloud = { enabled: !!window.FIREBASE_CONFIG, api: null, user: null, state: 'off' };
  const ROOT = 'vision_memory_users';
  const plain = (o) => JSON.parse(JSON.stringify(o));
  function syncError(e) {
    console.error(e);
    cloud.state = 'error';
    toast('同期できませんでした。電波状況を確認してください');
  }
  function cloudWrite(kind, item) {
    if (!cloud.user) return;
    const { fs, db } = cloud.api;
    fs.setDoc(fs.doc(db, ROOT, cloud.user.uid, kind, item.id), plain(item)).catch(syncError);
  }
  // 削除は他の端末で復活しないよう「削除済み」として残す
  const cloudDelete = (kind, id) => cloudWrite(kind, { id, deleted: true, updatedAt: Date.now() });
  function cloudSettings(st) {
    if (!cloud.user) return;
    const { fs, db } = cloud.api;
    fs.setDoc(fs.doc(db, ROOT, cloud.user.uid), { settings: plain(st) }, { merge: true }).catch(syncError);
  }

  /* ================= storage (localStorage) ================= */
  const KEY = { visions: 'vm.visions', drafts: 'vm.drafts', oldDraft: 'vm.draft', settings: 'vm.settings' };
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
      cloudWrite('visions', v);
      return save(KEY.visions, list);
    },
    remove(id) {
      cloudDelete('visions', id);
      return save(KEY.visions, store.all().filter((v) => v.id !== id));
    },
    settings: () => ({ apiKey: '', model: 'gemini-flash-latest', ...load(KEY.settings, {}) }),
    saveSettings(st) {
      st.updatedAt = Date.now();
      cloudSettings(st);
      return save(KEY.settings, st);
    },
    // 書きかけの対話（複数可）。発言のあるものだけ保存する
    drafts: () => load(KEY.drafts, []).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)),
    getDraft: (id) => store.drafts().find((d) => d.id === id),
    saveDraft(d) {
      d.updatedAt = Date.now();
      cloudWrite('drafts', d);
      return save(KEY.drafts, [d, ...store.drafts().filter((x) => x.id !== d.id)]);
    },
    removeDraft(id) {
      cloudDelete('drafts', id);
      return save(KEY.drafts, store.drafts().filter((d) => d.id !== id));
    },
    wipe() {
      store.all().forEach((v) => cloudDelete('visions', v.id));
      store.drafts().forEach((d) => cloudDelete('drafts', d.id));
      localStorage.removeItem(KEY.visions);
      localStorage.removeItem(KEY.drafts);
    }
  };
  // 旧形式（書きかけ1件のみ）からの移行
  (() => {
    const old = load(KEY.oldDraft, null);
    if (old && old.msgs) store.saveDraft(old);
    localStorage.removeItem(KEY.oldDraft);
  })();
  async function initCloud() {
    if (!cloud.enabled) return;
    cloud.state = 'loading';
    try {
      const base = 'https://www.gstatic.com/firebasejs/10.12.2/';
      const [appMod, authMod, fs] = await Promise.all([
        import(base + 'firebase-app.js'), import(base + 'firebase-auth.js'), import(base + 'firebase-firestore.js')
      ]);
      const fapp = appMod.initializeApp(window.FIREBASE_CONFIG);
      cloud.api = { auth: authMod.getAuth(fapp), authMod, fs, db: fs.getFirestore(fapp) };
      authMod.onAuthStateChanged(cloud.api.auth, onUser);
    } catch (e) {
      console.error(e);
      cloud.state = 'error';
      refreshView();
    }
  }

  let unsubs = [];
  async function onUser(user) {
    unsubs.forEach((u) => u());
    unsubs = [];
    cloud.user = user;
    cloud.state = user ? 'syncing' : 'off';
    refreshView();
    if (!user) return;
    const { fs, db } = cloud.api;
    try {
      for (const kind of ['visions', 'drafts']) {
        const col = fs.collection(db, ROOT, user.uid, kind);
        const remote = new Map((await fs.getDocs(col)).docs.map((d) => [d.id, d.data()]));
        // この端末にしかないもの・こちらが新しいものをアップロード
        const local = load(KEY[kind], []);
        await Promise.all(local
          .filter((it) => { const r = remote.get(it.id); return !r || (it.updatedAt || 0) > (r.updatedAt || 0); })
          .map((it) => fs.setDoc(fs.doc(col, it.id), plain(it))));
        unsubs.push(fs.onSnapshot(col, (snap) => {
          const items = snap.docs.map((d) => d.data()).filter((x) => !x.deleted);
          if (kind === 'visions') items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
          save(KEY[kind], items);
          cloud.state = 'synced';
          scheduleRefresh();
        }, syncError));
      }
      const uref = fs.doc(db, ROOT, user.uid);
      const us = await fs.getDoc(uref);
      const rs = us.exists() ? us.data().settings : null;
      const ls = load(KEY.settings, {});
      if ((!rs || (ls.updatedAt || 0) > (rs.updatedAt || 0)) && (ls.apiKey || ls.model)) await fs.setDoc(uref, { settings: plain(ls) }, { merge: true });
      unsubs.push(fs.onSnapshot(uref, (d) => {
        const r = d.exists() ? d.data().settings : null;
        const cur = load(KEY.settings, {});
        if (r && ((r.updatedAt || 0) > (cur.updatedAt || 0) || (r.apiKey && !cur.apiKey))) { save(KEY.settings, r); scheduleRefresh(); }
      }, syncError));
    } catch (e) {
      syncError(e);
    }
  }

  async function login() {
    const { auth, authMod } = cloud.api;
    try {
      await authMod.signInWithPopup(auth, new authMod.GoogleAuthProvider());
    } catch (e) {
      if (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request') return;
      toast(e.code === 'auth/popup-blocked' ? 'ポップアップを許可してください' : 'ログインできませんでした');
      console.error(e);
    }
  }

  // 他の端末の変更を反映（入力中は邪魔しない）
  let refreshTimer;
  function scheduleRefresh() { clearTimeout(refreshTimer); refreshTimer = setTimeout(refreshView, 250); }
  function refreshView() {
    const ae = document.activeElement;
    if (ae && /^(INPUT|TEXTAREA)$/.test(ae.tagName)) return;
    const h = location.hash.replace(/^#\/?/, '');
    if (h === '') viewHome();
    else if (h === 'settings') viewSettings();
    else if (h.startsWith('v/') && !sheetEls && $('.v-title')) {
      if (cleanup) { cleanup(); cleanup = null; }
      viewVision(h.split('/')[1]);
    }
  }

  // ブラウザによる自動削除を防ぐ
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

  /* ================= Gemini ================= */
  // 混雑時に順に試すモデル（設定したモデルが最優先）
  const FALLBACK_MODELS = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-flash-lite-latest', 'gemini-2.5-flash-lite'];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function friendlyError(status, msg = '') {
    if (status === 503 || status === 500 || /overload|high demand|unavailable/i.test(msg)) return 'Geminiが混雑中です。少し待って再試行してください';
    if (status === 429) return '利用回数の上限に達しました。しばらく待ってから再試行してください';
    if (/api key|API_KEY/i.test(msg) || status === 401 || status === 403) return 'APIキーが無効です。設定を確認してください';
    if (status === 404) return 'モデルが見つかりません。設定のモデル名を確認してください';
    if (!status) return '通信できませんでした。電波状況を確認してください';
    return `エラーが発生しました (${status})`;
  }

  async function callModel(model, apiKey, body) {
    let res;
    try {
      res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body
      });
    } catch {
      return { status: 0, message: '' };
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { status: res.status, message: data?.error?.message || '' };
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const text = parts.filter((p) => !p.thought).map((p) => p.text || '').join('').trim();
    return text ? { text } : { status: 500, message: 'empty' };
  }

  async function gemini({ system, contents, schema, temperature = 0.8 }) {
    const { apiKey, model } = store.settings();
    if (!apiKey) throw new Error('APIキーが未設定です');
    const generationConfig = { temperature };
    if (schema) { generationConfig.responseMimeType = 'application/json'; generationConfig.responseSchema = schema; }
    const body = JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: mergeTurns(contents), generationConfig });
    const models = [...new Set([model || FALLBACK_MODELS[0], ...FALLBACK_MODELS])];
    let last = { status: 0, message: '' };
    for (const m of models) {
      // 一時的な混雑は同じモデルで1回だけ待って再試行し、だめなら次のモデルへ
      for (let attempt = 0; attempt < 2; attempt++) {
        const r = await callModel(m, apiKey, body);
        if (r.text) return r.text;
        last = r;
        if (r.status === 400 || r.status === 401 || r.status === 403) throw new Error(friendlyError(r.status, r.message));
        if (r.status === 404 || r.status === 429) break;
        if (attempt === 0) await sleep(800);
      }
    }
    throw new Error(friendlyError(last.status, last.message));
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

  const sysSummary = (cats) => `あなたはユーザーとの対話から「ビジョン」を記録としてまとめる編集者です。
目的: 数ヶ月後、技術的な問題や妥協で迷ったユーザーが、これを読んで最初の熱量と目的を思い出せること。
ルール:
- ユーザー自身の言葉・言い回し・熱量をできるだけそのまま残す。誇張しない、美化しない。
- 対話で語られていないことは書かない。不明な項目は空文字にする。
- 一人称（ユーザー視点）で書く。マークダウン・絵文字は使わない。
- title: 20字以内の名前。
- core: ビジョンの核心を1文で（60字以内）。迷った時に最初に読む一文。
- why / excitement / future / inspiration: 各150字以内。
- essentials: 絶対に妥協したくないこと。最大3つ、各40字以内。
- keywords: 最大5つ。
- category: このビジョンの分類。既存カテゴリ「${cats.join(' / ')}」から最も合うものを選ぶ。どれにも合わなければ新しい短い名前（8字以内。例: アプリ作成、動画制作、イベント）。`;

  const SUMMARY_SCHEMA = {
    type: 'OBJECT',
    properties: {
      title: { type: 'STRING' },
      category: { type: 'STRING' },
      core: { type: 'STRING' },
      why: { type: 'STRING' },
      excitement: { type: 'STRING' },
      future: { type: 'STRING' },
      inspiration: { type: 'STRING' },
      essentials: { type: 'ARRAY', items: { type: 'STRING' } },
      keywords: { type: 'ARRAY', items: { type: 'STRING' } }
    },
    required: ['title', 'category', 'core', 'why', 'excitement', 'future', 'inspiration', 'essentials', 'keywords'],
    propertyOrdering: ['title', 'category', 'core', 'why', 'excitement', 'future', 'inspiration', 'essentials', 'keywords']
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
    else if (name === 'd' && id) viewNew(id);
    else if (name === 'v' && id) viewVision(id);
    else if (name === 'settings') viewSettings();
    else viewHome();
  }
  const go = (h) => { location.hash = h; };
  window.addEventListener('hashchange', route);

  /* ================= home ================= */
  const STATUS = { active: '進行中', paused: '休止', done: '完了' };
  const DEFAULT_CATS = ['アプリ作成', '動画制作'];
  const UNCAT = '未分類';
  const catOf = (v) => v.category || UNCAT;
  const categories = () => [...new Set([...store.all().map((v) => v.category).filter(Boolean), ...DEFAULT_CATS])];
  let catFilter = 'all';

  function cardHtml(v) {
    const st = v.status || 'active';
    return `<button class="card ${esc(st)}" data-id="${esc(v.id)}">
      <h3>${esc(v.title || '無題')}</h3>
      <p>${esc(v.core)}</p>
      <div class="meta"><span class="dot ${esc(st)}"></span>${STATUS[st]}<span>·</span>${fmtDate(v.createdAt)}</div>
    </button>`;
  }

  function viewHome() {
    const list = store.all();
    const drafts = store.drafts().filter((d) => d.msgs?.some((m) => m.role === 'me'));
    // カテゴリごとにまとめる（最近のビジョンがあるカテゴリが上、完了は各カテゴリの下）
    const groups = new Map();
    list.forEach((v) => { const c = catOf(v); if (!groups.has(c)) groups.set(c, []); groups.get(c).push(v); });
    groups.forEach((g) => g.sort((a, b) => (a.status === 'done') - (b.status === 'done')));
    if (catFilter !== 'all' && !groups.has(catFilter)) catFilter = 'all';
    const syncIcon = cloud.enabled
      ? `<button class="icon-btn sync ${cloud.user ? 'on' : ''}" data-go="settings" aria-label="同期">${icon(cloud.user ? 'cloud' : 'cloudOff')}</button>` : '';

    app.innerHTML = `
      <header class="bar">
        <div class="brand">${LOGO}<span>VISION</span></div>
        ${syncIcon}
        <button class="icon-btn" data-go="settings" aria-label="設定">${icon('sliders')}</button>
      </header>
      <main class="view-enter">
        ${drafts.length ? `
          <div class="drafts">
            <div class="drafts-head">書きかけ</div>
            ${drafts.map((d) => `
              <button class="draft" data-go="d/${esc(d.id)}">${icon('resume')}
                <span>${esc(d.msgs.find((m) => m.role === 'me').text)}</span>
                <time>${fmtDate(d.updatedAt || d.createdAt)}</time>
              </button>`).join('')}
          </div>` : ''}
        ${list.length ? `
          <div class="cats" role="tablist">
            <button class="${catFilter === 'all' ? 'on' : ''}" data-cat="all">すべて</button>
            ${[...groups.keys()].map((c) => `<button class="${catFilter === c ? 'on' : ''}" data-cat="${esc(c)}">${esc(c)}<span>${groups.get(c).length}</span></button>`).join('')}
          </div>
          ${catFilter === 'all'
            ? [...groups].map(([c, g]) => `
              <section class="group">
                <div class="group-head">${icon('folder')}${esc(c)}</div>
                <div class="list">${g.map(cardHtml).join('')}</div>
              </section>`).join('')
            : `<div class="list">${groups.get(catFilter).map(cardHtml).join('')}</div>`}` : `
          ${drafts.length ? '' : `<div class="empty">${EMPTY_ART}<p>思いついたら、すぐ。</p></div>`}`}
      </main>
      <button class="fab" data-go="new" aria-label="新しいビジョン">${icon('plus')}</button>`;
    $$('[data-go]', app).forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
    $$('[data-cat]', app).forEach((b) => b.addEventListener('click', () => { catFilter = b.dataset.cat; viewHome(); }));
    $$('.card', app).forEach((b) => b.addEventListener('click', () => go('v/' + b.dataset.id)));
  }

  /* ================= new vision (interview) ================= */
  function viewNew(id) {
    const draft = (id && store.getDraft(id)) || { id: uid(), createdAt: Date.now(), msgs: [{ role: 'ai', text: OPENING }] };
    // 最初の発言で保存し、URLを書きかけ用に差し替え（再読み込みしても続きから）
    const persistDraft = () => {
      store.saveDraft(draft);
      if (location.hash !== '#/d/' + draft.id) history.replaceState(null, '', '#/d/' + draft.id);
    };
    const hasKey = !!store.settings().apiKey;

    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title">新しいビジョン</div>
        <button class="icon-btn" data-act="discard" aria-label="破棄">${icon('trash')}</button>
      </header>
      ${hasKey ? '' : `<div class="banner">${icon('key')}<span>Geminiを使うにはAPIキーが必要です</span><a href="#/settings">設定</a></div>`}
      <div class="chat" id="chat"></div>
      ${composerHtml(`<button class="pill" data-act="retry" hidden>${icon('retry')}もう一度聞く</button><button class="pill primary" data-act="summarize" disabled>${icon('spark')}まとめる</button>`)}`;

    app.classList.add('chat-mode');
    const chat = $('#chat');
    const sumBtn = $('[data-act="summarize"]');
    const retryBtn = $('[data-act="retry"]');
    let busy = false;
    const render = () => {
      chat.innerHTML = draft.msgs.map(msgHtml).join('');
      sumBtn.disabled = busy || !draft.msgs.some((m) => m.role === 'me');
      // 返答が来なかった時は、同じ内容を送り直さずに再試行できる
      retryBtn.hidden = busy || !store.settings().apiKey || draft.msgs[draft.msgs.length - 1].role !== 'me';
    };
    const scrollEnd = () => chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
    // キーボード開閉時も最新の質問が見えるように
    const keepEnd = () => { chat.scrollTop = chat.scrollHeight; };
    onViewportChange.push(keepEnd);
    cleanup = () => { onViewportChange.splice(onViewportChange.indexOf(keepEnd), 1); };
    render();
    scrollEnd();

    const ask = async () => {
      if (!store.settings().apiKey) { render(); scrollEnd(); return; }
      busy = true;
      comp.busy(true);
      render();
      chat.insertAdjacentHTML('beforeend', typingHtml);
      scrollEnd();
      try {
        const reply = await gemini({
          system: SYS_INTERVIEW,
          contents: [{ role: 'user', parts: [{ text: '（ビジョンの記録を始めます）' }] }, ...toContents(draft.msgs)]
        });
        draft.msgs.push({ role: 'ai', text: stripMd(reply) });
        persistDraft();
      } catch (e) {
        toast(e.message);
      }
      busy = false;
      comp.busy(false);
      render();
      scrollEnd();
    };
    const comp = wireComposer(app, (text) => {
      draft.msgs.push({ role: 'me', text });
      persistDraft();
      ask();
    });
    retryBtn.addEventListener('click', ask);
    setTimeout(() => comp.ta.focus(), 50);

    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="discard"]').addEventListener('click', () => {
      if (!draft.msgs.some((m) => m.role === 'me') || confirm('この対話を破棄しますか？')) { store.removeDraft(draft.id); go(''); }
    });
    sumBtn.addEventListener('click', async () => {
      const userText = draft.msgs.filter((m) => m.role === 'me').map((m) => m.text);
      let v = {
        id: draft.id, createdAt: draft.createdAt, status: 'active', category: '',
        title: userText[0].slice(0, 20), core: userText[0], why: '', excitement: '', future: '', inspiration: '',
        essentials: [], keywords: [], transcript: draft.msgs, notes: []
      };
      if (store.settings().apiKey) {
        busy = true;
        retryBtn.hidden = true;
        sumBtn.disabled = true;
        sumBtn.innerHTML = `${icon('spark')}まとめています…`;
        try {
          const raw = await gemini({
            system: sysSummary(categories()),
            contents: [...toContents([{ role: 'me', text: '（ビジョンの記録を始めます）' }, ...draft.msgs]), { role: 'user', parts: [{ text: 'ここまでの対話をビジョンとしてまとめてください。' }] }],
            schema: SUMMARY_SCHEMA,
            temperature: 0.4
          });
          Object.assign(v, sanitize(JSON.parse(raw)));
        } catch (e) {
          toast(e.message);
          busy = false;
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
      title: s(o.title), category: s(o.category).slice(0, 12), core: s(o.core), why: s(o.why), excitement: s(o.excitement),
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
      <div class="field"><label><span>${icon('folder')}カテゴリ</span><input class="input" name="category" value="${esc(v.category)}" placeholder="例: アプリ作成"></label>
        <div class="cat-pick">${categories().map((c) => `<button type="button" class="${c === v.category ? 'on' : ''}" data-pick="${esc(c)}">${esc(c)}</button>`).join('')}</div>
      </div>
      <label class="field"><span>${icon('compass')}核心</span><textarea class="input" name="core" rows="2">${esc(v.core)}</textarea></label>
      ${FIELDS.map(([k, l, ic]) => `<label class="field"><span>${icon(ic)}${l}</span><textarea class="input" name="${k}" rows="3">${esc(v[k])}</textarea></label>`).join('')}
      <label class="field"><span>${icon('shield')}譲れないこと</span><textarea class="input" name="essentials" rows="3" placeholder="1行に1つ">${esc((v.essentials || []).join('\n'))}</textarea></label>
      <label class="field"><span>${icon('tag')}キーワード</span><input class="input" name="keywords" value="${esc((v.keywords || []).join('、'))}" placeholder="、区切り"></label>`;
  }
  function readForm(root, v) {
    const val = (n) => $(`[name="${n}"]`, root).value.trim();
    v.title = val('title') || '無題';
    v.category = val('category');
    v.core = val('core');
    FIELDS.forEach(([k]) => (v[k] = val(k)));
    v.essentials = val('essentials').split('\n').map((s) => s.trim()).filter(Boolean);
    v.keywords = val('keywords').split(/[、,]/).map((s) => s.trim()).filter(Boolean);
    return v;
  }

  function wireForm(root) {
    $$('textarea', root).forEach(autosize);
    const cat = $('[name="category"]', root);
    const sync = () => $$('[data-pick]', root).forEach((b) => b.classList.toggle('on', b.dataset.pick === cat.value.trim()));
    $$('[data-pick]', root).forEach((b) => b.addEventListener('click', () => { cat.value = b.dataset.pick; sync(); }));
    cat.addEventListener('input', sync);
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
    wireForm(app);
    $$('[data-act="back"]', app).forEach((b) => b.addEventListener('click', () => viewNew(v.id)));
    $('[data-act="save"]', app).addEventListener('click', () => {
      readForm($('#f'), v);
      if (store.put(v)) {
        store.removeDraft(v.id);
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
        <div class="since"><span class="cat">${esc(catOf(v))}</span><span>·</span>${fmtDate(v.createdAt)}<span>·</span>${d === 0 ? '今日' : d + '日前'}</div>
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
    wireForm(app);
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
            <p class="hint"><a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a> で無料で取得できます。${cloud.user ? 'ログイン中は他の端末にも同期されます。' : 'キーはこの端末にのみ保存されます。'}</p>
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
          <h3>${icon('cloud')}保存と同期</h3>
          ${!cloud.enabled ? `
            <p class="hint" style="margin:0">${count}件をこのブラウザに保存中。同期は未設定です。</p>`
          : cloud.user ? `
            <div class="account"><span>${esc(cloud.user.email || cloud.user.displayName || '')}</span>
              <button class="icon-btn" data-act="logout" aria-label="ログアウト">${icon('logout')}</button></div>
            <p class="hint" style="margin:0">${count}件 · Googleアカウントに自動保存。どの端末でもログインすれば同じ内容が見られます。</p>`
          : cloud.api ? `
            <button class="btn primary block" data-act="login">${icon('cloud')}Googleでログインして同期</button>
            <p class="hint">ログインすると自動で保存・同期されます。今この端末にある${count}件もそのまま引き継がれます。</p>`
          : `<p class="hint" style="margin:0">${cloud.state === 'error' ? '同期の準備に失敗しました。再読み込みしてください。' : '準備中…'}</p>`}
          <details class="backup">
            <summary>${icon('chevron')}手動バックアップ</summary>
            <div class="row" style="margin-top:12px">
              <button class="btn" data-act="export">${icon('download')}書き出し</button>
              <button class="btn" data-act="import">${icon('upload')}読み込み</button>
              <input type="file" id="file" accept="application/json,.json" hidden>
            </div>
          </details>
        </section>

        <section class="panel">
          <button class="btn danger block" data-act="wipe">${icon('trash')}すべてのデータを削除</button>
        </section>
      </main>`;

    const keyIn = $('#apiKey');
    const modelIn = $('#model');
    const persist = () => store.saveSettings({ ...store.settings(), apiKey: keyIn.value.trim(), model: modelIn.value.trim() || 'gemini-flash-latest' });
    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="login"]')?.addEventListener('click', login);
    $('[data-act="logout"]')?.addEventListener('click', () => {
      if (confirm('ログアウトしますか？\nこの端末のデータはそのまま残ります。')) cloud.api.authMod.signOut(cloud.api.auth);
    });
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
        [...map.values()].forEach((v) => cloudWrite('visions', v));
        toast(`${n}件を読み込みました`);
        viewSettings();
      } catch { toast('ファイルを読み込めませんでした'); }
    });
    $('[data-act="wipe"]').addEventListener('click', () => {
      if (!confirm('すべてのビジョンを削除しますか？\n元に戻せません。')) return;
      store.wipe();
      toast('削除しました');
      viewSettings();
    });
  }

  /* ================= boot ================= */
  const ver = window.APP_VERSION || {};
  $('#version').textContent = `ver${ver.version || '0.0.0'} ${ver.deployedAt || ''}`;
  route();
  initCloud();
})();
