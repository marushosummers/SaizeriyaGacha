[![deploy to github pages](https://github.com/marushosummers/SaizeriyaGacha/actions/workflows/github-pages.yml/badge.svg?branch=main)](https://github.com/marushosummers/SaizeriyaGacha/actions/workflows/github-pages.yml)

# SaizeriyaGacha

## 開発・ビルド

`app/` で `yarn install --frozen-lockfile` を実行し、開発時は `yarn dev`、静的ビルドは `yarn production-build` を使用します。
メニューはローカルの [app/menu.yaml](app/menu.yaml) から読み込むため、`API_URL` と `API_TOKEN` は不要です。

## メニューの更新

`app/menu.yaml` は既存 API のレスポンスから生成したメニュー一覧です。以後はこのファイルを編集し、再ビルドして反映します。API 側の更新は自動反映されません。

各項目は [Menu 型](app/domain/Menu.ts) に合わせます。`order_code` は既存データの文字列または数値を維持し、文字列には引用符を付けてください。`price`（円）・`calorie`（kcal）・`salt`（g）は数値で記載し、価格は正数、カロリー・塩分は 0 以上にします。配列の順序はガチャの抽選対象の順序になるため維持してください。

更新後は `app/` で `yarn test-all` と `yarn production-build` を実行してください。形式の不正なメニューはビルド時にエラーになります。

## 更新履歴

- 2023.07.25: メニュー更新
- 2023.02.18: メニュー更新
- 2022.12.29: メニュー更新
- 2022.04.10: メニュー更新
- 2021.12.08: メニュー更新
- 2021.11.18: メニュー更新
