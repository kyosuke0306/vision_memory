# Vision Memory

思いついた瞬間のビジョンを記録し、迷った時に原点へ立ち返るためのWebアプリ。

- Geminiが1問ずつ質問 → 答える → Geminiがビジョンとしてまとめる → 確認して保存
- 「原点に立ち返る」: 今の迷いを書くと、当時のビジョンと照らし合わせて返答
- 記録（進捗・迷い・決めたこと）をタイムラインで追記
- 音声入力対応（Chrome / Safari）

## 公開（GitHub Pages）
Settings → Pages → Source: `Deploy from a branch` → ブランチと `/ (root)` を選択。ビルド不要。

## 初期設定
アプリ右上の設定から Gemini APIキー（https://aistudio.google.com/apikey）を入力。キーは端末のlocalStorageにのみ保存。

## データ保存
- `firebase-config.js` が `null` の間: ブラウザの localStorage に保存（この端末のみ）
- 設定すると: Googleログインで Firestore に自動保存・全端末で同期（端末内にもキャッシュ）
  - 保存先: `vision_memory_users/{uid}/visions`, `/drafts`, `vision_memory_users/{uid}`（設定）
  - 既存のFirebaseプロジェクトに相乗りできる（新規プロジェクト不要）

### Firebase設定手順
1. Firebaseコンソールで既存プロジェクトを開く →「アプリを追加」→ ウェブ → `firebaseConfig` を `firebase-config.js` に貼る
2. Authentication → Sign-in method → Google を有効化
3. Authentication → 設定 → 承認済みドメイン に `kyosuke0306.github.io` を追加
4. Firestore Database → ルール に次のブロックを追加（既存ルールの `match /databases/{database}/documents { ... }` の中）
```
match /vision_memory_users/{uid}/{document=**} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
```

## バージョン表示
修正のたびに `version.js` の `version` と `deployedAt`、`index.html` の `?v=` を更新する。画面左下に `verx.x.x 日時` で表示。
