# meetflow

集合進行アプリのフロントエンドMVPです。LINE未接続でもローカルで画面遷移と表示確認ができます。

## セットアップ

```bash
npm install
```

## 起動方法

```bash
npm run dev
```

起動後に表示されるURL（通常 `http://localhost:5173`）へアクセスしてください。

## 実装済み（MVP土台）

- TypeScript + React + Vite 構成
- スマホ縦画面を前提にした最小レイアウト（最大幅 430px）
- 4画面のルーティング
  - イベント一覧: `/events`
  - イベント作成: `/events/create`
  - イベント参加: `/events/join`
  - イベント詳細: `/events/:eventId`
- モックデータ表示（イベント一覧/詳細）

## 今回未対応

- LIFF の本接続
- バックエンド接続
- 本物の招待リンク処理
- 認証
