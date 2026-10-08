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
ブラウザの localStorage に保存（サーバー不要）。設定画面からJSONで書き出し／読み込み可能。

## バージョン表示
修正のたびに `version.js` の `version` と `deployedAt` を更新する。画面左下に `verx.x.x 日時` で表示。
