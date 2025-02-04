# K1ssa

## プロジェクト概要
関東近郊の "渋い" 喫茶店に特化したWebアプリを開発する。  
MVPフェーズでは管理者が手動で喫茶店情報を登録し、将来的にはユーザー投稿型やAPI活用を導入する。

## 技術スタック
### バックエンド
- **言語**: Go
- **フレームワーク**: Gin
- **データベース**: PostgreSQL（Render Managed Database）
- **認証**: JWT（予定）
- **APIドキュメント**: Swagger（予定）

### フロントエンド
- **フレームワーク**: React, Next.js
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: Context API（予定）

### デプロイ・インフラ
- **バックエンドホスティング**: Render
- **フロントエンドホスティング**: Vercel
- **データストレージ**: PostgreSQL

## データ収集方法
### MVPフェーズ
- 管理者が実際に喫茶店を訪れ、情報を手動で登録

### 将来的な拡張
- ユーザー投稿機能の追加
- Google Places APIなどを活用した自動データ取得

## プロジェクト構成
## プロジェクト構成
```md
K1ssa/
├── backend/                # Go (Gin) バックエンド
│   ├── cmd/                # エントリーポイント
│   ├── config/             # 設定ファイル
│   ├── controllers/        # APIコントローラー
│   ├── middleware/         # ミドルウェア
│   ├── models/             # データベースモデル
│   ├── routes/             # ルーティング設定
│   ├── services/           # ビジネスロジック
│   ├── database/           # DBマイグレーション
│   ├── tests/              # テスト
│   ├── Dockerfile          # Docker設定
│   ├── go.mod              # Go modules
│   └── main.go             # メインエントリーポイント
│
├── frontend/               # React (Next.js) フロントエンド
│   ├── public/             # 静的ファイル
│   ├── src/
│   │   ├── components/     # UIコンポーネント
│   │   ├── pages/          # Next.jsのページ
│   │   ├── hooks/          # カスタムフック
│   │   ├── styles/         # Tailwind CSS
│   │   ├── utils/          # ユーティリティ関数
│   │   ├── types/          # 型定義
│   │   ├── context/        # グローバル状態管理
│   │   └── services/       # API通信ロジック
│   ├── next.config.js      # Next.js設定
│   ├── package.json        # npmパッケージ管理
│   ├── tsconfig.json       # TypeScript設定
│   ├── tailwind.config.js  # Tailwind設定
│   └── vercel.json         # Vercelデプロイ設定
│
├── docs/                   # ドキュメント
│   ├── README.md           # プロジェクト概要
│   ├── API.md              # API仕様
│   ├── ARCHITECTURE.md     # アーキテクチャ設計
│   ├── DEPLOYMENT.md       # デプロイ手順
│   └── ROADMAP.md          # 将来の機能追加計画
│
├── .gitignore              # Git管理対象外ファイル
├── docker-compose.yml      # ローカル開発用コンテナ設定
└── README.md               # プロジェクトトップの説明



## 初期開発の優先事項
1. **バックエンド**
   - [ ] 喫茶店情報のデータモデル設計
   - [ ] REST APIのエンドポイント設計
   - [ ] 喫茶店登録・取得・編集・削除のCRUD実装
   - [ ] Docker環境の構築

2. **フロントエンド**
   - [ ] Next.jsのセットアップ
   - [ ] 喫茶店一覧ページのデザイン
   - [ ] 喫茶店詳細ページのデザイン
   - [ ] APIと連携し、動的にデータを表示

3. **デプロイ**
   - [ ] Renderでバックエンドをデプロイ
   - [ ] Vercelでフロントエンドをデプロイ

## 今後の展望
- ユーザー投稿機能の導入
- お気に入り登録機能
- Google Maps APIを活用した位置情報表示
- Google Places APIとの連携
- ダークモード対応

---
