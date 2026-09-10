[![deploy to github pages](https://github.com/marushosummers/SaizeriyaGacha/actions/workflows/github-pages.yml/badge.svg?branch=main)](https://github.com/marushosummers/SaizeriyaGacha/actions/workflows/github-pages.yml)

# SaizeriyaGacha

## 開発・ビルド

`app/` で `yarn install --frozen-lockfile` を実行し、開発時は `yarn dev`、静的ビルドは `yarn production-build` を使用します。

## メニューの更新

各項目は [Menu 型](app/domain/Menu.ts) に合わせます。`order_code` は既存データの文字列または数値を維持し、文字列には引用符を付けてください。`price`（円）・`calorie`（kcal）・`salt`（g）は数値で記載し、価格は正数、カロリー・塩分は 0 以上にします。配列の順序はガチャの抽選対象の順序になるため維持してください。

更新後は `app/` で `yarn test-all` と `yarn production-build` を実行してください。形式の不正なメニューはビルド時にエラーになります。
