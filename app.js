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
    wall: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 9.7h18M3 14.3h18M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.4M12 16.8v.2"/>',
    scale: '<path d="M12 4v16M7 20h10M5 7h14M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    swap: '<path d="M7 7h12l-3-3M17 17H5l3 3"/>',
    resume: '<path d="M4 20h4L19 9l-4-4L4 16z"/>'
  };
  const icon = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;
  const LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="16" r="3.2" fill="var(--accent)"/></svg>';
  const WALL_LOGO = '<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-linecap="round"><rect x="5.5" y="7.5" width="21" height="17" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M5.5 13.2h21M5.5 18.8h21M12.5 7.5v5.7M19.5 7.5v5.7M16 13.2v5.6M12.5 18.8v5.7M19.5 18.8v5.7" stroke="var(--accent)" stroke-width="1.6"/></svg>';
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
  const KEY = { visions: 'vm.visions', walls: 'vm.walls', drafts: 'vm.drafts', oldDraft: 'vm.draft', settings: 'vm.settings', page: 'vm.page' };
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
    // WALL（プロジェクトで出てきた壁）。visionId でビジョンと対応づける
    walls: () => load(KEY.walls, []),
    getWall: (id) => store.walls().find((w) => w.id === id),
    wallsOf: (visionId) => store.walls().filter((w) => w.visionId === visionId),
    putWall(w) {
      const list = store.walls();
      const i = list.findIndex((x) => x.id === w.id);
      w.updatedAt = Date.now();
      if (i >= 0) list[i] = w; else list.unshift(w);
      cloudWrite('walls', w);
      return save(KEY.walls, list);
    },
    removeWall(id) {
      cloudDelete('walls', id);
      return save(KEY.walls, store.walls().filter((w) => w.id !== id));
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
      store.walls().forEach((w) => cloudDelete('walls', w.id));
      localStorage.removeItem(KEY.visions);
      localStorage.removeItem(KEY.walls);
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
      for (const kind of ['visions', 'walls', 'drafts']) {
        const col = fs.collection(db, ROOT, user.uid, kind);
        const remote = new Map((await fs.getDocs(col)).docs.map((d) => [d.id, d.data()]));
        // この端末にしかないもの・こちらが新しいものをアップロード
        const local = load(KEY[kind], []);
        await Promise.all(local
          .filter((it) => { const r = remote.get(it.id); return !r || (it.updatedAt || 0) > (r.updatedAt || 0); })
          .map((it) => fs.setDoc(fs.doc(col, it.id), plain(it))));
        unsubs.push(fs.onSnapshot(col, (snap) => {
          const items = snap.docs.map((d) => d.data()).filter((x) => !x.deleted);
          if (kind !== 'drafts') items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
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
    } else if (h.startsWith('w/') && !sheetEls && $('.v-title')) viewWall(h.split('/')[1]);
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

  // 記録に必要な情報（requiredがすべて埋まったら自動で記録へ）
  const ASPECTS = [
    ['what', '何を作る・始めるのか（具体的なもの）', true],
    ['why', 'なぜやりたいのか（原動力）', true],
    ['excitement', '何にワクワクしているのか', true],
    ['future', '実現した未来の情景（誰が、どう使い、どう感じるか）', true],
    ['essentials', '絶対に妥協したくないこと', true],
    ['inspiration', '思いついたきっかけ', false]
  ];
  const MAX_TURNS = 12; // これ以上は聞かずに記録へ

  // 聞き取りの共通ルール（VISION / WALL）
  const interviewRules = (aspects) => `
${aspects.map(([k, l, r]) => `- ${k}: ${l}${r ? '' : '（任意。会話の中で自然に出なければ聞かなくてよい）'}`).join('\n')}

毎回のやり方:
1. これまでの会話全体を読み、各項目が十分に語られたかを判定して covered に入れる。1つの答えで複数の項目が埋まることもある。
2. ユーザーがすでに話した内容は、二度と質問しない。
3. 「十分」とは、後で本人が読んで当時の気持ちを思い出せる程度に具体的なこと。抽象的なだけなら、具体的な場面や感覚を尋ねて深掘りする（同じ項目の深掘りは1回まで）。
4. ユーザーが「特にない」「わからない」と答えた項目は、聞き直さず埋まったとみなす。
5. まだ埋まっていない項目のうち、会話の流れで最も自然なものを1つだけ質問する。
6. 必須項目（任意以外）がすべて埋まった時、またはユーザーが終えたい様子の時は done を true にする。その時の reply は質問せず、30字以内の短い締めの言葉にする。`;

  const SYS_INTERVIEW = `あなたは、ユーザーが「思いついた瞬間のビジョン」を言葉にするのを手伝う聞き手です。
ユーザーは何かを作る・始めることを思いついたばかりで、熱量はあるが、うまく説明できていません。
目的は、後でプロジェクトに迷った時に原点へ立ち返れる記録を作ることです。そのために次の情報を集めます。
${interviewRules(ASPECTS)}

reply の書き方:
- 相手の言葉を20字以内で受け止める一文 + 60字以内の質問1つ。
- 技術的な実現性・コスト・難しさの話はしない。否定・評価・助言はしない。熱量を引き出す。
- マークダウン・絵文字・箇条書きは使わない。日本語の自然な話し言葉で。`;

  const interviewSchema = (aspects) => ({
    type: 'OBJECT',
    properties: {
      covered: { type: 'OBJECT', properties: Object.fromEntries(aspects.map(([k]) => [k, { type: 'BOOLEAN' }])), required: aspects.map(([k]) => k) },
      done: { type: 'BOOLEAN' },
      reply: { type: 'STRING' }
    },
    required: ['covered', 'done', 'reply'],
    propertyOrdering: ['covered', 'done', 'reply']
  });

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

  const visionText = (v) => `タイトル: ${v.title}
VISION（核心）: ${v.core}
なぜ: ${v.why}
ワクワク: ${v.excitement}
描く未来: ${v.future}
きっかけ: ${v.inspiration}
譲れないこと: ${(v.essentials || []).join(' / ')}`;

  const wallText = (w) => `壁: ${w.wall}
状況: ${w.situation}
原因: ${w.cause}
ビジョンとの関係: ${w.relation}
妥協しそうなこと: ${w.compromise}
今の気持ち: ${w.feeling}
試したこと: ${w.tried}`;

  const sysReturn = (v, w) => `あなたは、プロジェクトの途中で迷っているユーザーを「原点」に立ち返らせる相談相手です。
以下は、ユーザーがこのプロジェクトを思いついた瞬間に記録したビジョンです（${fmtDate(v.createdAt)} 記録）。

${visionText(v)}
${(v.notes || []).length ? '\nその後の記録:\n' + v.notes.slice(-10).map((n) => `${fmtDate(n.at)} ${n.text}`).join('\n') : ''}
${w ? `\n今ぶつかっている壁（${fmtDate(w.createdAt)} 記録）:\n${wallText(w)}\n${(w.notes || []).length ? 'その後の記録:\n' + w.notes.slice(-10).map((n) => `${fmtDate(n.at)} ${n.text}`).join('\n') : ''}` : ''}

ルール:
- ユーザーの悩みを、当時のビジョンの言葉と照らし合わせる。ビジョンの言葉を「」で短く引用する。
- 妥協しようとしている点が「譲れないこと」に触れるなら、はっきり指摘する。触れないなら、柔軟にしてよいと伝える。
- 答えを押し付けず、判断の軸を示し、最後に問いを1つ返す。
- 200字以内。マークダウン・絵文字・箇条書きは使わない。`;

  /* ================= WALL（壁）の聞き取り ================= */
  const WALL_OPENING = 'どんな壁にぶつかっていますか。\n思うままに書いてください。';
  const WALL_ASPECTS = [
    ['what', '何が起きているのか（壁の具体的な中身）', true],
    ['cause', 'なぜそれが壁になっているのか（技術・人・時間・お金・気持ちなど）', true],
    ['impact', 'ビジョンのどこに関わるのか（どの想いや譲れないことにぶつかっているか）', true],
    ['compromise', '今考えている妥協や選択肢', true],
    ['feeling', '今どう感じているか', true],
    ['tried', 'すでに試したこと', false]
  ];
  // ビジョンの項目（WALLとの対応づけに使う）
  const VTARGETS = { core: 'VISION', why: 'なぜやりたいのか', excitement: 'ワクワクすること', future: '思い描く未来', essentials: '譲れないこと', inspiration: 'きっかけ' };

  const sysWallInterview = (v) => `あなたは、プロジェクトの途中で「壁」にぶつかったユーザーの話を聞き、記録を手伝う聞き手です。
ユーザーは以前、このプロジェクトについて次のビジョンを刻みました（${fmtDate(v.createdAt)}）。

${visionText(v)}

目的は、ビジョンと今の壁を並べて見られる記録を作り、ユーザーが原点を忘れずに判断できるようにすることです。そのために次の情報を集めます。
${interviewRules(WALL_ASPECTS)}

reply の書き方:
- 相手の言葉を20字以内で受け止める一文 + 60字以内の質問1つ。
- 解決策・助言・評価はしない。責めない。壁の正体と、ビジョンとの関係をはっきりさせることに集中する。
- impact を聞く時は、ビジョンの言葉を「」で短く引用して、どこに関わるかを尋ねてよい。
- マークダウン・絵文字・箇条書きは使わない。日本語の自然な話し言葉で。`;

  const sysWallSummary = (v) => `あなたはユーザーとの対話から「壁（プロジェクトの障害）」の記録をまとめる編集者です。
ユーザーのビジョン:
${visionText(v)}

目的: ビジョンと並べて見た時に、何が起きていて、ビジョンのどこにぶつかっているのかが一目でわかること。
ルール:
- ユーザー自身の言葉をできるだけそのまま残す。誇張しない。対話で語られていないことは書かない（不明は空文字）。
- 一人称（ユーザー視点）で書く。マークダウン・絵文字は使わない。
- title: 20字以内の名前。
- wall: 壁を1文で（60字以内）。
- situation（状況）/ cause（原因）/ compromise（妥協しそうなこと・迷っている選択肢）/ feeling（今の気持ち）/ tried（試したこと）: 各120字以内。
- targets: この壁が関わるビジョンの項目を ${Object.keys(VTARGETS).join(', ')} から1〜3個。
- relation: ビジョンのどこと、どうぶつかっているかを1文で（60字以内）。ビジョンの言葉を「」で引用してよい。`;

  const WALL_SUMMARY_SCHEMA = {
    type: 'OBJECT',
    properties: {
      title: { type: 'STRING' },
      wall: { type: 'STRING' },
      relation: { type: 'STRING' },
      targets: { type: 'ARRAY', items: { type: 'STRING', enum: Object.keys(VTARGETS) } },
      situation: { type: 'STRING' },
      cause: { type: 'STRING' },
      compromise: { type: 'STRING' },
      feeling: { type: 'STRING' },
      tried: { type: 'STRING' }
    },
    required: ['title', 'wall', 'relation', 'targets', 'situation', 'cause', 'compromise', 'feeling', 'tried'],
    propertyOrdering: ['title', 'wall', 'relation', 'targets', 'situation', 'cause', 'compromise', 'feeling', 'tried']
  };

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

  // 画面を表示領域に固定するモード（chat-mode: 対話 / fit-mode: 詳細）
  const setMode = (m) => { app.classList.remove('chat-mode', 'fit-mode'); if (m) app.classList.add(m); };

  // VISION（琥珀色）/ WALL（青灰色）のテーマ
  const setTheme = (t) => document.body.classList.toggle('wall', t === 'wall');
  let page = load(KEY.page, 'vision');

  /* ================= router ================= */
  const app = $('#app');
  let cleanup = null;

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    closeSheet();
    setMode();
    const h = location.hash.replace(/^#\/?/, '');
    const [name, id] = h.split('/');
    window.scrollTo(0, 0);
    setTheme(name === 'w' || name === 'wn' || (!name && page === 'wall') ? 'wall' : 'vision');
    if (name === 'new') viewNew();
    else if (name === 'wn' && id) viewNew(null, { kind: 'wall', visionId: id });
    else if (name === 'd' && id) viewNew(id);
    else if (name === 'v' && id) viewVision(id);
    else if (name === 'w' && id) viewWall(id);
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

  // ロゴをタップで VISION / WALL を切り替え
  function brandHtml() {
    return `<button class="brand switch" data-act="switch" aria-label="VISIONとWALLを切り替え">
      ${page === 'wall' ? WALL_LOGO : LOGO}
      <span class="${page === 'vision' ? 'on' : ''}">VISION</span><span class="${page === 'wall' ? 'on' : ''}">WALL</span>
    </button>`;
  }
  function wireBrand() {
    $('[data-act="switch"]', app).addEventListener('click', () => {
      page = page === 'wall' ? 'vision' : 'wall';
      save(KEY.page, page);
      setTheme(page);
      viewHome();
    });
  }
  const userDrafts = (kind) => store.drafts().filter((d) => (d.kind || 'vision') === kind && d.msgs?.some((m) => m.role === 'me'));
  const headerExtras = () => (cloud.enabled
    ? `<button class="icon-btn sync ${cloud.user ? 'on' : ''}" data-go="settings" aria-label="同期">${icon(cloud.user ? 'cloud' : 'cloudOff')}</button>` : '')
    + `<button class="icon-btn" data-go="settings" aria-label="設定">${icon('sliders')}</button>`;
  const draftsHtml = (drafts) => (drafts.length ? `
    <div class="drafts">
      <div class="drafts-head">書きかけ</div>
      ${drafts.map((d) => `
        <button class="draft" data-go="d/${esc(d.id)}">${icon('resume')}
          <span>${esc(d.msgs.find((m) => m.role === 'me').text)}</span>
          <time>${fmtDate(d.updatedAt || d.createdAt)}</time>
        </button>`).join('')}
    </div>` : '');

  function viewHome() {
    setTheme(page);
    if (page === 'wall') return viewWallHome();
    const list = store.all();
    const drafts = userDrafts('vision');
    // カテゴリごとにまとめる（最近のビジョンがあるカテゴリが上、完了は各カテゴリの下）
    const groups = new Map();
    list.forEach((v) => { const c = catOf(v); if (!groups.has(c)) groups.set(c, []); groups.get(c).push(v); });
    groups.forEach((g) => g.sort((a, b) => (a.status === 'done') - (b.status === 'done')));
    if (catFilter !== 'all' && !groups.has(catFilter)) catFilter = 'all';
    app.innerHTML = `
      <header class="bar">
        ${brandHtml()}
        ${headerExtras()}
      </header>
      <main class="view-enter">
        <p class="tagline">${icon('spark')}すべては、ここから</p>
        ${draftsHtml(drafts)}
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
    wireBrand();
    $$('[data-go]', app).forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
    $$('[data-cat]', app).forEach((b) => b.addEventListener('click', () => { catFilter = b.dataset.cat; viewHome(); }));
    $$('.card', app).forEach((b) => b.addEventListener('click', () => go('v/' + b.dataset.id)));
  }

  /* ================= new vision (interview) ================= */
  // 聞き取りの種類ごとの設定
  const KINDS = {
    vision: {
      title: () => '新しいビジョン',
      aspects: ASPECTS,
      sys: () => SYS_INTERVIEW,
      recording: 'ビジョンを言葉にしています',
      async record(draft) {
        const raw = await gemini({
          system: sysSummary(categories()),
          contents: [...toContents([{ role: 'me', text: '（ビジョンの記録を始めます）' }, ...draft.msgs]), { role: 'user', parts: [{ text: 'ここまでの対話をビジョンとしてまとめてください。' }] }],
          schema: SUMMARY_SCHEMA,
          temperature: 0.4
        });
        viewPreview({ id: draft.id, createdAt: draft.createdAt, status: 'active', transcript: draft.msgs, notes: [], ...sanitize(JSON.parse(raw)) });
      }
    },
    wall: {
      title: (d) => `${store.get(d.visionId)?.title || ''} の壁`,
      aspects: WALL_ASPECTS,
      sys: (d) => sysWallInterview(store.get(d.visionId) || {}),
      recording: '壁を言葉にしています',
      async record(draft) {
        const v = store.get(draft.visionId) || {};
        const raw = await gemini({
          system: sysWallSummary(v),
          contents: [...toContents([{ role: 'me', text: '（壁の記録を始めます）' }, ...draft.msgs]), { role: 'user', parts: [{ text: 'ここまでの対話を壁の記録としてまとめてください。' }] }],
          schema: WALL_SUMMARY_SCHEMA,
          temperature: 0.4
        });
        viewWallPreview({ id: draft.id, visionId: draft.visionId, createdAt: draft.createdAt, status: 'facing', transcript: draft.msgs, notes: [], ...sanitizeWall(JSON.parse(raw)) });
      }
    }
  };

  function viewNew(id, opts = {}) {
    const draft = (id && store.getDraft(id)) || {
      id: uid(), createdAt: Date.now(), kind: opts.kind || 'vision', visionId: opts.visionId,
      msgs: [{ role: 'ai', text: opts.kind === 'wall' ? WALL_OPENING : OPENING }]
    };
    const K = KINDS[draft.kind || 'vision'];
    const REQ = K.aspects.filter((a) => a[2]).map((a) => a[0]);
    setTheme(draft.kind === 'wall' ? 'wall' : 'vision');
    // 最初の発言で保存し、URLを書きかけ用に差し替え（再読み込みしても続きから）
    const persistDraft = () => {
      store.saveDraft(draft);
      if (location.hash !== '#/d/' + draft.id) history.replaceState(null, '', '#/d/' + draft.id);
    };
    const hasKey = !!store.settings().apiKey;

    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title">${esc(K.title(draft))}</div>
        <button class="icon-btn" data-act="discard" aria-label="破棄">${icon('trash')}</button>
      </header>
      <div class="progress" aria-label="聞き取りの進み具合">${REQ.map((k) => `<i data-k="${k}"></i>`).join('')}</div>
      ${hasKey ? '' : `<div class="banner">${icon('key')}<span>Geminiを使うにはAPIキーが必要です</span><a href="#/settings">設定</a></div>`}
      <div class="chat" id="chat"></div>
      ${composerHtml(`<button class="pill" data-act="next" hidden></button>`)}`;

    setMode('chat-mode');
    const chat = $('#chat');
    const nextBtn = $('[data-act="next"]');
    let busy = false;
    let failed = false; // 記録への変換に失敗した
    const render = () => {
      chat.innerHTML = draft.msgs.map(msgHtml).join('');
      const cov = draft.covered || {};
      $$('.progress i').forEach((el) => el.classList.toggle('on', !!cov[el.dataset.k]));
      // 返答が来なかった時は送り直さずに再試行。聞き終えた後は記録へ進める
      const last = draft.msgs[draft.msgs.length - 1].role;
      const mode = busy || !store.settings().apiKey ? '' : last === 'me' ? 'ask' : draft.done ? 'record' : '';
      nextBtn.hidden = !mode;
      nextBtn.dataset.mode = mode;
      nextBtn.innerHTML = mode === 'ask' ? `${icon('retry')}もう一度聞く` : `${icon('spark')}${failed ? 'もう一度試す' : '記録へ進む'}`;
    };
    const scrollEnd = () => chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
    // キーボード開閉時も最新の質問が見えるように
    const keepEnd = () => { chat.scrollTop = chat.scrollHeight; };
    onViewportChange.push(keepEnd);
    cleanup = () => { onViewportChange.splice(onViewportChange.indexOf(keepEnd), 1); };
    render();
    scrollEnd();

    const setBusy = (b, label) => {
      busy = b;
      comp.busy(b);
      render();
      if (b) {
        chat.insertAdjacentHTML('beforeend', label ? `<div class="msg ai typing-wrap status-line">${icon('spark')}${label}</div>` : typingHtml);
        scrollEnd();
      }
    };

    const ask = async () => {
      if (!store.settings().apiKey) { render(); scrollEnd(); return; }
      setBusy(true);
      let finished = false;
      try {
        const raw = await gemini({
          system: K.sys(draft),
          contents: [{ role: 'user', parts: [{ text: '（記録を始めます）' }] }, ...toContents(draft.msgs)],
          schema: interviewSchema(K.aspects)
        });
        const r = JSON.parse(raw);
        draft.covered = r.covered || {};
        const turns = draft.msgs.filter((m) => m.role === 'me').length;
        finished = !!r.done || REQ.every((k) => draft.covered[k]) || turns >= MAX_TURNS;
        draft.done = finished;
        draft.msgs.push({ role: 'ai', text: stripMd(r.reply) || (finished ? 'ありがとうございます。記録します。' : 'もう少し聞かせてください。') });
        persistDraft();
      } catch (e) {
        toast(e.message);
      }
      setBusy(false);
      scrollEnd();
      // 必要な情報がそろったら自動で記録へ
      if (finished) record();
    };

    const record = async () => {
      setBusy(true, K.recording);
      failed = false;
      try {
        busy = false;
        await K.record(draft);
      } catch (e) {
        toast(e.message);
        failed = true;
        setBusy(false);
      }
    };

    const comp = wireComposer(app, (text) => {
      draft.msgs.push({ role: 'me', text });
      persistDraft();
      ask();
    });
    nextBtn.addEventListener('click', () => (nextBtn.dataset.mode === 'ask' ? ask() : record()));
    setTimeout(() => comp.ta.focus(), 50);

    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="discard"]').addEventListener('click', () => {
      if (!draft.msgs.some((m) => m.role === 'me') || confirm('この対話を破棄しますか？')) { store.removeDraft(draft.id); go(''); }
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
      <label class="field"><span>${icon('compass')}VISION</span><textarea class="input" name="core" rows="2">${esc(v.core)}</textarea></label>
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
    setMode();
    window.scrollTo(0, 0);
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="対話に戻る">${icon('back')}</button>
        <div class="title">確認</div>
      </header>
      <main class="view-enter" style="padding-bottom:0">
        <div class="preview-head">${icon('spark')}自分の言葉になっているか確かめて、刻む</div>
        <form id="f">${formHtml(v)}</form>
        <div class="sticky-actions">
          <button class="btn" data-act="back">対話に戻る</button>
          <button class="btn primary" data-act="save">${icon('check')}刻む</button>
        </div>
      </main>`;
    wireForm(app);
    $$('[data-act="back"]', app).forEach((b) => b.addEventListener('click', () => viewNew(v.id)));
    $('[data-act="save"]', app).addEventListener('click', () => {
      readForm($('#f'), v);
      if (store.put(v)) {
        store.removeDraft(v.id);
        toast('ビジョンを刻みました');
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
    const st = v.status || 'active';
    const items = [
      ...FIELDS.filter(([k]) => v[k]).map(([k, l, ic]) => [l, ic, `<div class="body">${esc(v[k])}</div>`]),
      ...((v.essentials || []).length ? [['譲れないこと', 'shield', `<ul>${v.essentials.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>`]] : [])
    ];
    const talks = (v.transcript || []).length;
    const walls = store.wallsOf(v.id);

    setMode('fit-mode');
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title"></div>
        <button class="icon-btn" data-act="edit" aria-label="編集">${icon('pencil')}</button>
        <button class="icon-btn danger" data-act="del" aria-label="削除">${icon('trash')}</button>
      </header>
      <main class="detail view-enter">
        <div class="since">
          <span class="cat">${esc(catOf(v))}</span><span>·</span>${fmtDate(v.createdAt)}<span>·</span>${d === 0 ? '今日' : d + '日前'}
          <button class="st-pill" data-act="status" aria-label="状態を切り替え"><span class="dot ${st}"></span>${STATUS[st]}</button>
        </div>
        <h1 class="v-title">${esc(v.title)}</h1>
        ${v.core ? `<div class="core-label">${icon('compass')}VISION</div><p class="core">${esc(v.core)}</p>` : ''}
        <div class="acc">
          ${items.map(([l, ic, body]) => `
            <div class="acc-item">
              <button class="acc-head">${icon(ic)}<span>${l}</span>${icon('chevron', 'chev')}</button>
              <div class="acc-body">${body}</div>
            </div>`).join('')}
        </div>
        <div class="detail-foot">
          <button class="return-btn" data-act="return">${icon('compass')}原点に立ち返る</button>
          <div class="foot-row">
            <button class="foot-btn" data-act="notes">${icon('note')}<span>記録</span>${v.notes.length ? `<b>${v.notes.length}</b>` : ''}</button>
            ${talks ? `<button class="foot-btn" data-act="log">${icon('bookmark')}<span>対話</span></button>` : ''}
            <button class="foot-btn to-wall" data-act="walls">${icon('wall')}<span>WALL</span>${walls.length ? `<b>${walls.length}</b>` : ''}</button>
          </div>
        </div>
      </main>`;

    const again = () => { if (location.hash.endsWith(v.id)) viewVision(v.id); };
    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="del"]').addEventListener('click', () => {
      const msg = walls.length ? `このビジョンと、関連するWALL ${walls.length}件を削除しますか？\n元に戻せません。` : 'このビジョンを削除しますか？\n元に戻せません。';
      if (!confirm(msg)) return;
      walls.forEach((w) => store.removeWall(w.id));
      store.remove(v.id);
      toast('削除しました');
      go('');
    });
    $('[data-act="edit"]').addEventListener('click', () => viewEdit(v));
    $('[data-act="return"]').addEventListener('click', () => openReturn(v, again));
    $('[data-act="notes"]').addEventListener('click', () => openNotes(v, store.put, again));
    $('[data-act="log"]')?.addEventListener('click', () => openLog(v, again));
    $('[data-act="walls"]').addEventListener('click', () => openWalls(v, again));
    $('[data-act="status"]').addEventListener('click', () => {
      const keys = Object.keys(STATUS);
      v.status = keys[(keys.indexOf(st) + 1) % keys.length];
      store.put(v);
      viewVision(v.id);
      toast(`${STATUS[v.status]}にしました`);
    });
    // タップで開く（同時に開くのは1つ）
    $$('.acc-item').forEach((it) => $('.acc-head', it).addEventListener('click', () => {
      const open = !it.classList.contains('open');
      $$('.acc-item').forEach((x) => x.classList.remove('open'));
      it.classList.toggle('open', open);
    }));
  }

  function viewEdit(v) {
    if (cleanup) { cleanup(); cleanup = null; }
    setMode();
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

  /* ================= WALL ================= */
  const WALL_STATUS = { facing: '向き合い中', hold: '保留', over: '越えた' };
  const WFIELDS = [
    ['situation', '状況', 'eye'],
    ['cause', '原因', 'question'],
    ['compromise', '妥協しそうなこと', 'scale'],
    ['feeling', '今の気持ち', 'heart'],
    ['tried', '試したこと', 'check']
  ];

  function sanitizeWall(o) {
    const s = (x) => stripMd(typeof x === 'string' ? x : '');
    const out = { title: s(o.title), wall: s(o.wall), relation: s(o.relation) };
    out.targets = (Array.isArray(o.targets) ? o.targets : []).filter((t) => VTARGETS[t]).slice(0, 3);
    WFIELDS.forEach(([k]) => (out[k] = s(o[k])));
    return out;
  }

  function wallCardHtml(w) {
    const st = w.status || 'facing';
    return `<button class="card ${esc(st)}" data-wall="${esc(w.id)}">
      <h3>${esc(w.title || '無題')}</h3>
      <p>${esc(w.wall)}</p>
      <div class="meta"><span class="dot ${esc(st)}"></span>${WALL_STATUS[st]}<span>·</span>${fmtDate(w.createdAt)}</div>
    </button>`;
  }

  function viewWallHome() {
    const walls = store.walls();
    const drafts = userDrafts('wall');
    // ビジョンごとにまとめる（最近の壁があるビジョンが上、越えた壁は下）
    const groups = new Map();
    walls.forEach((w) => { if (!groups.has(w.visionId)) groups.set(w.visionId, []); groups.get(w.visionId).push(w); });
    groups.forEach((g) => g.sort((a, b) => (a.status === 'over') - (b.status === 'over')));
    app.innerHTML = `
      <header class="bar">
        ${brandHtml()}
        ${headerExtras()}
      </header>
      <main class="view-enter">
        <p class="tagline">${icon('horizon')}前に進んでいる証</p>
        ${draftsHtml(drafts)}
        ${walls.length ? [...groups].map(([vid, g]) => {
          const v = store.get(vid);
          return `
            <section class="group">
              <button class="group-head vision-link" ${v ? `data-go="v/${esc(vid)}"` : ''}>${icon('compass')}${esc(v ? v.title : '削除されたVISION')}</button>
              <div class="list">${g.map(wallCardHtml).join('')}</div>
            </section>`;
        }).join('') : drafts.length ? '' : `
          <div class="empty">${EMPTY_ART}<p>壁にぶつかったら、ここへ。</p></div>`}
      </main>
      <button class="fab" data-act="new-wall" aria-label="壁を記録する">${icon('plus')}</button>`;
    wireBrand();
    $$('[data-go]', app).forEach((b) => b.addEventListener('click', () => go(b.dataset.go)));
    $$('[data-wall]', app).forEach((b) => b.addEventListener('click', () => go('w/' + b.dataset.wall)));
    $('[data-act="new-wall"]', app).addEventListener('click', () => pickVision());
  }

  // どのVISIONの壁かを選ぶ
  function pickVision() {
    const list = store.all();
    if (!list.length) { toast('先にVISIONを刻んでください'); return; }
    const sorted = [...list].sort((a, b) => (a.status === 'done') - (b.status === 'done'));
    const sh = openSheet(() => {}, 'どのVISIONの壁ですか', `
      <div class="scroll"><div class="pick-list">
        ${sorted.map((v) => `
          <button class="pick vision-pick" data-v="${esc(v.id)}">
            <span class="pick-cat">${esc(catOf(v))}</span>
            <b>${esc(v.title)}</b>
            <span class="pick-core">${esc(v.core)}</span>
          </button>`).join('')}
      </div></div>`);
    $$('[data-v]', sh).forEach((b) => b.addEventListener('click', () => { closeSheet(); go('wn/' + b.dataset.v); }));
  }

  // ビジョン詳細から：このビジョンの壁一覧
  function openWalls(v, rerender) {
    const walls = store.wallsOf(v.id);
    const sh = openSheet(rerender, 'WALL', `
      <div class="scroll wall-sheet"><div class="list" style="padding:4px 20px 12px">
        ${walls.length ? walls.map(wallCardHtml).join('') : '<p class="sheet-empty">まだ壁の記録はありません</p>'}
      </div></div>
      <div class="sheet-foot"><button class="return-btn wall-btn" data-act="new">${icon('wall')}壁を記録する</button></div>`);
    sh.classList.add('wall-theme');
    $$('[data-wall]', sh).forEach((b) => b.addEventListener('click', () => { closeSheet(); go('w/' + b.dataset.wall); }));
    $('[data-act="new"]', sh).addEventListener('click', () => { closeSheet(); go('wn/' + v.id); });
  }

  // 壁の詳細：VISION と WALL を並べて見る
  function viewWall(id) {
    const w = store.getWall(id);
    if (!w) { go(''); return; }
    const v = store.get(w.visionId);
    w.notes = w.notes || [];
    const st = w.status || 'facing';
    const targets = w.targets || [];
    const hit = (k) => (targets.includes(k) ? ' hit' : '');
    const items = WFIELDS.filter(([k]) => w[k]).map(([k, l, ic]) => [l, ic, `<div class="body">${esc(w[k])}</div>`]);
    const vItem = (k) => {
      if (k === 'essentials') return (v.essentials || []).length ? `<div class="vs-item${hit(k)}"><b>${VTARGETS[k]}</b><ul>${v.essentials.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></div>` : '';
      return v[k] ? `<div class="vs-item${hit(k)}"><b>${VTARGETS[k]}</b>${esc(v[k])}</div>` : '';
    };
    const talks = (w.transcript || []).length;

    setTheme('wall');
    setMode('fit-mode');
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title"></div>
        <button class="icon-btn" data-act="edit" aria-label="編集">${icon('pencil')}</button>
        <button class="icon-btn danger" data-act="del" aria-label="削除">${icon('trash')}</button>
      </header>
      <main class="detail view-enter">
        <div class="since">
          <span class="cat">WALL</span><span>·</span>${fmtDate(w.createdAt)}
          <button class="st-pill" data-act="status" aria-label="状態を切り替え"><span class="dot ${st}"></span>${WALL_STATUS[st]}</button>
        </div>
        <h1 class="v-title">${esc(w.title)}</h1>
        <div class="mid">
          ${v ? `
            <section class="vs vs-vision" data-act="open-vision">
              <div class="vs-label">${icon('compass')}VISION<span>${esc(v.title)}</span></div>
              <p class="vs-core${hit('core')}">${esc(v.core)}</p>
              ${vItem('why')}
              ${['excitement', 'future', 'essentials', 'inspiration'].filter((k) => targets.includes(k)).map(vItem).join('')}
            </section>` : '<p class="hint">元のVISIONは削除されています</p>'}
          ${w.relation ? `<div class="vs-link">${icon('bolt')}<span>${esc(w.relation)}</span></div>` : '<div class="vs-gap"></div>'}
          <section class="vs vs-wall">
            <div class="vs-label">${icon('wall')}WALL</div>
            <p class="vs-core">${esc(w.wall)}</p>
          </section>
          <div class="acc">
            ${items.map(([l, ic, body]) => `
              <div class="acc-item">
                <button class="acc-head">${icon(ic)}<span>${l}</span>${icon('chevron', 'chev')}</button>
                <div class="acc-body">${body}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="detail-foot">
          ${v ? `<button class="return-btn" data-act="return">${icon('compass')}原点に立ち返る</button>` : ''}
          <div class="foot-row">
            <button class="foot-btn" data-act="notes">${icon('note')}<span>記録</span>${w.notes.length ? `<b>${w.notes.length}</b>` : ''}</button>
            ${talks ? `<button class="foot-btn" data-act="log">${icon('bookmark')}<span>対話</span></button>` : ''}
          </div>
        </div>
      </main>`;

    const again = () => { if (location.hash.endsWith(w.id)) viewWall(w.id); };
    $('[data-act="back"]').addEventListener('click', () => go(''));
    $('[data-act="del"]').addEventListener('click', () => {
      if (confirm('この壁の記録を削除しますか？\n元に戻せません。')) { store.removeWall(w.id); toast('削除しました'); go(''); }
    });
    $('[data-act="edit"]').addEventListener('click', () => viewWallEdit(w));
    $('[data-act="open-vision"]')?.addEventListener('click', () => go('v/' + v.id));
    $('[data-act="return"]')?.addEventListener('click', () => openReturn(v, again, w));
    $('[data-act="notes"]').addEventListener('click', () => openNotes(w, store.putWall, again));
    $('[data-act="log"]')?.addEventListener('click', () => openLog(w, again));
    $('[data-act="status"]').addEventListener('click', () => {
      const keys = Object.keys(WALL_STATUS);
      w.status = keys[(keys.indexOf(st) + 1) % keys.length];
      store.putWall(w);
      viewWall(w.id);
      toast(`${WALL_STATUS[w.status]}にしました`);
    });
    $$('.acc-item').forEach((it) => $('.acc-head', it).addEventListener('click', () => {
      const open = !it.classList.contains('open');
      $$('.acc-item').forEach((x) => x.classList.remove('open'));
      it.classList.toggle('open', open);
    }));
  }

  function wallFormHtml(w) {
    return `
      <label class="field"><span>タイトル</span><input class="input" name="title" value="${esc(w.title)}"></label>
      <label class="field"><span>${icon('wall')}WALL</span><textarea class="input" name="wall" rows="2">${esc(w.wall)}</textarea></label>
      <div class="field"><label><span>${icon('bolt')}ビジョンとの関係</span><textarea class="input" name="relation" rows="2">${esc(w.relation)}</textarea></label>
        <div class="cat-pick">${Object.entries(VTARGETS).map(([k, l]) => `<button type="button" class="${(w.targets || []).includes(k) ? 'on' : ''}" data-target="${k}">${l}</button>`).join('')}</div>
      </div>
      ${WFIELDS.map(([k, l, ic]) => `<label class="field"><span>${icon(ic)}${l}</span><textarea class="input" name="${k}" rows="3">${esc(w[k])}</textarea></label>`).join('')}`;
  }
  function wireWallForm(root) {
    $$('textarea', root).forEach(autosize);
    $$('[data-target]', root).forEach((b) => b.addEventListener('click', () => b.classList.toggle('on')));
  }
  function readWallForm(root, w) {
    const val = (n) => $(`[name="${n}"]`, root).value.trim();
    w.title = val('title') || '無題';
    w.wall = val('wall');
    w.relation = val('relation');
    w.targets = $$('[data-target].on', root).map((b) => b.dataset.target);
    WFIELDS.forEach(([k]) => (w[k] = val(k)));
    return w;
  }

  function wallFormView(w, { title, head, saveLabel, onBack, onSave }) {
    if (cleanup) { cleanup(); cleanup = null; }
    setTheme('wall');
    setMode();
    window.scrollTo(0, 0);
    app.innerHTML = `
      <header class="bar">
        <button class="icon-btn" data-act="back" aria-label="戻る">${icon('back')}</button>
        <div class="title">${title}</div>
      </header>
      <main class="view-enter" style="padding-bottom:0">
        ${head ? `<div class="preview-head">${icon('spark')}${head}</div>` : ''}
        <form id="f">${wallFormHtml(w)}</form>
        <div class="sticky-actions">
          <button class="btn" data-act="back">戻る</button>
          <button class="btn primary" data-act="save">${icon('check')}${saveLabel}</button>
        </div>
      </main>`;
    wireWallForm(app);
    $$('[data-act="back"]', app).forEach((b) => b.addEventListener('click', onBack));
    $('[data-act="save"]', app).addEventListener('click', () => { readWallForm($('#f'), w); onSave(); });
  }

  function viewWallPreview(w) {
    wallFormView(w, {
      title: '確認', head: '自分の言葉になっているか確かめて、刻む', saveLabel: '刻む',
      onBack: () => viewNew(w.id),
      onSave: () => {
        if (!store.putWall(w)) return;
        store.removeDraft(w.id);
        toast('壁を刻みました');
        go('w/' + w.id);
      }
    });
  }

  function viewWallEdit(w) {
    wallFormView(w, {
      title: '編集', saveLabel: '保存',
      onBack: () => viewWall(w.id),
      onSave: () => { store.putWall(w); toast('保存しました'); viewWall(w.id); }
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

  // 下から出るシート。閉じたら詳細を再描画（記録が増えている可能性）
  function openSheet(rerender, title, inner) {
    closeSheet();
    const bg = document.createElement('div');
    bg.className = 'sheet-bg';
    const sh = document.createElement('div');
    sh.className = 'sheet';
    sh.innerHTML = `
      <header class="bar">
        <div class="title">${title}</div>
        <button class="icon-btn" data-act="close" aria-label="閉じる">${icon('x')}</button>
      </header>${inner}`;
    document.body.append(bg, sh);
    document.body.style.overflow = 'hidden';
    sheetEls = [bg, sh];
    const close = () => { closeSheet(); rerender(); };
    bg.addEventListener('click', close);
    $('[data-act="close"]', sh).addEventListener('click', close);
    return sh;
  }

  function openNotes(v, put, rerender) {
    const sh = openSheet(rerender, '記録', `<div class="scroll"><div class="notes"></div></div>${composerHtml('', '進捗、迷い、決めたこと')}`);
    const list = $('.notes', sh);
    const scroller = $('.scroll', sh);
    const render = () => {
      list.innerHTML = v.notes.length ? v.notes.map((n) => `
        <div class="note"><div class="tl"></div><div><time>${fmtDateTime(n.at)}</time><div class="txt">${esc(n.text)}</div></div>
        <button class="icon-btn" data-note-del="${esc(n.id)}" aria-label="記録を削除">${icon('x')}</button></div>`).join('')
        : '<p class="sheet-empty">まだ記録はありません</p>';
      $$('[data-note-del]', list).forEach((b) => b.addEventListener('click', () => {
        if (!confirm('この記録を削除しますか？')) return;
        v.notes = v.notes.filter((n) => n.id !== b.dataset.noteDel);
        put(v);
        render();
      }));
      scroller.scrollTop = scroller.scrollHeight;
    };
    const keepEnd = () => { if (sheetEls) scroller.scrollTop = scroller.scrollHeight; };
    onViewportChange.push(keepEnd);
    render();
    wireComposer(sh, (text) => {
      v.notes.push({ id: uid(), at: Date.now(), text });
      put(v);
      render();
      toast('記録しました');
    });
  }

  function openLog(v, rerender) {
    const sh = openSheet(rerender, '最初の対話', `<div class="scroll"><div class="chat"></div></div>`);
    $('.chat', sh).innerHTML = v.transcript.map(msgHtml).join('');
  }

  // w があれば、その壁を踏まえて相談する（記録は壁の側に残す）
  function openReturn(v, rerender, w) {
    const target = w || v;
    const put = w ? store.putWall : store.put;
    const msgs = [{ role: 'ai', text: '何に迷っていますか。\n今の状況をそのまま書いてください。' }];
    const sh = openSheet(rerender, '原点に立ち返る', `
      <div class="scroll">
        ${v.core ? `<div class="anchor"><b>${fmtDate(v.createdAt)} の VISION</b>${esc(v.core)}</div>` : ''}
        <div class="chat"></div>
      </div>
      ${composerHtml('', '今の迷い')}`);

    const chat = $('.chat', sh);
    const scroller = $('.scroll', sh);
    const keepEnd = () => { if (sheetEls) scroller.scrollTop = scroller.scrollHeight; };
    onViewportChange.push(keepEnd);
    const render = () => {
      chat.innerHTML = msgs.map((m, i) => msgHtml(m) + (m.role === 'ai' && i > 0 ? `<button class="save-note" data-i="${i}">${icon('plus')}記録に残す</button>` : '')).join('');
      $$('.save-note', chat).forEach((b) => b.addEventListener('click', () => {
        const i = +b.dataset.i;
        const q = msgs[i - 1]?.role === 'me' ? msgs[i - 1].text : '';
        target.notes = target.notes || [];
        target.notes.push({ id: uid(), at: Date.now(), text: (q ? `迷い: ${q}\n` : '') + `振り返り: ${msgs[i].text}` });
        put(target);
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
          system: sysReturn(v, w),
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
