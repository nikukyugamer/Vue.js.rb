## demo_app について
demo_appには、以下の機能が実装されています
- 名前認証ログイン
  - パスワードはありません :issue
  - ログイン情報は保持されません :issue
  - 一度目のログインクリックで必ずUnauthorizedになります :bug
- グループ作成、一覧、選択
- グループ毎のArticle作成、一覧

## 動かし方

### client

```
$ cp .env.sample .env
$ npm install
$ npm run dev // レンダリングサーバを port:3000で起動
```

### server

```
$ bundle install
$ bundle exec rails db:migrate
$ bundle exec rails s
```
