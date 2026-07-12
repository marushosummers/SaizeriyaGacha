# AGENTS.md

このファイルは、このリポジトリで作業する AI エージェント向けの運用ガイドです。リポジトリ全体に適用します。

## Project Overview

- サイゼリヤのメニューから 1000 円以内の組み合わせをランダム生成する Next.js アプリです。
- アプリ本体は `app/` 配下にあります。ルート直下ではなく、原則 `app/` を作業ディレクトリにして Node/Yarn コマンドを実行してください。
- `next.config.js` は `output: 'export'` の静的エクスポート構成です。GitHub Pages へ `app/out` をデプロイします。

## Tech Stack

- Next.js 14 / React 18 / TypeScript
- styled-components
- Jest + Testing Library
- ESLint + Prettier
- Yarn lockfile 管理

## Common Commands

すべて `app/` 配下で実行します。

```sh
yarn install
yarn dev
yarn lint
yarn type-check
yarn test
yarn test-all
yarn build
yarn production-build
```

- ローカル開発サーバーは `yarn dev` で `PORT=3200` を使います。
- `yarn start` は `PORT=3201` です。
- 変更後の基本検証は、影響範囲に応じて `yarn lint`、`yarn type-check`、`yarn test` を実行してください。
- CI 相当のまとめ検証は `yarn test-all` です。

## Environment Variables

ビルド時に次の環境変数が参照されます。

- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
- `NEXT_PUBLIC_BASE_URL`
- `API_URL`
- `API_TOKEN`

`pages/index.tsx` の `getStaticProps` は `API_URL` へ fetch します。静的ビルドや production build を実行する場合は、必要な環境変数がないと失敗する可能性があります。秘密情報はファイルに書き込まないでください。

## Code Style

- 既存の TypeScript/TSX スタイルに合わせてください。
- Prettier 設定は `semi: false`、`singleQuote: true` です。
- React コンポーネントは既存の `components/` の粒度と命名に合わせます。
- スタイルは既存方針に合わせ、基本的に styled-components を使います。
- 型定義は `domain/` や `@types/` の既存構造を優先してください。
- 汎用ロジックは `hooks/`、画面部品は `components/`、ページは `pages/` に置く既存構成を尊重してください。

## Static Export / Deployment Notes

- GitHub Actions は Node.js 22.x で `app/` 配下の `yarn production-build` を実行します。
- デプロイ前に `out/.nojekyll` を作成し、`app/CNAME` を `app/out/` にコピーします。
- Next.js の静的エクスポートで動かない実装を入れないでください。サーバー実行時だけに依存する API Routes、SSR 前提の処理、画像最適化前提の構成は避けてください。
- `next.config.js` の `images.unoptimized: true` は GitHub Pages 向けの制約として扱ってください。

## Testing Guidance

- 現状、テストファイルは多くありません。ロジック変更では、可能なら `hooks/` や純粋関数単位のテスト追加を検討してください。
- UI 変更では `yarn lint` と `yarn type-check` を最低限確認し、必要に応じて `yarn dev` で表示確認してください。
- ランダム性を含む処理を変更する場合は、境界条件と停止条件を重点的に確認してください。

## Repository Hygiene

- 既存の未コミット変更を勝手に戻さないでください。作業前後に `git status --short` で差分を確認し、自分が触ったファイルだけを扱ってください。
- 依存関係を変更する場合は `app/package.json` と `app/yarn.lock` の整合性を保ってください。
- 生成物の `app/.next/`、`app/out/`、`node_modules/` はコミット対象にしないでください。
- 大きなリファクタリングは、ユーザーの依頼範囲に必要な場合だけ行ってください。

## Content / Domain Notes

- メニュー情報は `Menu` 型に従います。価格・カロリー・塩分などの数値処理では丸めや表示単位を壊さないようにしてください。
- 外部リンクは既存と同様に `target="_blank"` と `rel="noopener noreferrer"` を併用してください。
- サービス名や日本語表示文言を変更する場合は、ユーザー向けの意味と SEO メタ情報への影響を確認してください。
