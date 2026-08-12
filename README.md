# matcha-profile

Fuwari公式テンプレートをベースにした、matchaの個人メディアです。

- ベース: [saicaca/fuwari](https://github.com/saicaca/fuwari)
- 取得時コミット: `6d39b0dec41282e7852e23e032998a5789abee28`
- テーマ: noteの読みやすさ × Fuwariの機能性 × ダーク × 抹茶
- 公開予定: <https://matcha-profile.pages.dev>

Fuwariの検索、タグ、カテゴリ、目次、RSS、Sitemap、ページネーション、コードハイライト、画像ビューア、ライト/ダーク切り替えを維持しています。

## matcha版で変更したもの

- サイト名、サブタイトル、プロフィールをmatcha向けに変更
- 初期表示をダークモードに変更（切り替え機能は維持）
- テーマ色を抹茶グリーンへ固定
- バナーを無効化し、記事が早く見える構成に変更
- ダーク背景、細い境界線、控えめな角丸へ調整
- 日本語本文の行間と記事幅を調整
- ダミーSNSリンクを削除
- matcha用記事3件と下書き例を追加
- canonical URL、faviconを設定
- Cloudflare Pages用URLへ変更

変更範囲は主に`src/config.ts`、CSSトークン、記事、画像です。Fuwari本体への変更を抑え、将来の更新を比較しやすくしています。

## 必要環境

- Node.js: 22推奨（Fuwari要件は20以上）
- pnpm: 9系
- Package manager: pnpm

pnpmが未導入の場合：

```bash
npm install -g pnpm@9.14.4
```

## 初回セットアップ

```bash
pnpm install
pnpm dev
```

ブラウザで <http://localhost:4321> を開きます。終了は`Ctrl + C`です。

## Production build

```bash
pnpm check
pnpm build
pnpm preview
```

`pnpm build`はAstroの静的サイト生成に続いてPagefind検索インデックスも生成します。

## 新しい記事を作る

Fuwari公式のコマンドを使えます。

```bash
pnpm new-post article-name
```

作成先：

```text
src/content/posts/article-name.md
```

直接Markdownファイルを追加しても構いません。

```md
---
title: "2026年の相場について"
published: 2026-08-13
description: "最近の相場について思っていること。"
tags: [Investment, Market]
category: Investment
draft: false
lang: ja
---

ここから本文を書きます。
```

### Frontmatter

| 項目 | 内容 |
|---|---|
| `title` | 記事タイトル |
| `published` | 投稿日 |
| `updated` | 更新日（任意） |
| `description` | 一覧・検索・SEO用の説明 |
| `image` | アイキャッチ画像（任意） |
| `tags` | タグ一覧 |
| `category` | カテゴリ |
| `draft` | `false`で公開、`true`で下書き |
| `lang` | 日本語は`ja` |

## 下書き

```yaml
draft: true
```

本番ビルドでは記事一覧と個別ページに公開されません。

## 画像

記事専用画像は記事と同じフォルダへ置けます。

```text
src/content/posts/my-article/
├── index.md
└── cover.jpg
```

Frontmatter：

```yaml
image: ./cover.jpg
```

本文：

```md
![画像の説明](./cover.jpg)
```

共通画像は`public/`へ保存し、`/image.jpg`の形式でも参照できます。

## プロフィール・テーマ・SNS

`src/config.ts`を編集します。

- `siteConfig`: サイト名、サブタイトル、言語、テーマ色
- `profileConfig`: 名前、自己紹介、アバター、SNS
- `navBarConfig`: ナビゲーション

SNS URLが決まったら`profileConfig.links`へ追加します。

```ts
links: [
  { name: "X", icon: "fa6-brands:x-twitter", url: "https://x.com/USERNAME" },
]
```

実在するURLだけ設定してください。

抹茶色の細かい調整は`src/layouts/Layout.astro`内の`matcha theme`ブロックです。Fuwari本来の色生成は残し、matcha用トークンだけ上書きしています。

## About

```text
src/content/spec/about.md
```

Markdownで編集できます。

## サンプル記事

- `hello.md` — はじめまして
- `investment.md` — イナゴは人生。
- `vrchat.md` — VRChatについて
- `draft-example.md` — 非公開例

不要になったら削除できます。

## GitHubへpush

```bash
git add .
git commit -m "Customize Fuwari for matcha"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/matcha-profile.git
git push -u origin main
```

以降の記事公開：

```bash
git add .
git commit -m "Add new article"
git push
```

## Cloudflare Pages

GitHubの`matcha-profile`を接続し、次を設定します。

| 項目 | 値 |
|---|---|
| Framework preset | Astro |
| Production branch | `main` |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Root directory | `/` または空欄 |
| Node.js version | `22` |
| Package manager | pnpm 9.14.4（`packageManager`から認識） |

環境変数の入力が必要な場合：

```text
NODE_VERSION=22
```

秘密情報やAPIキーは不要です。

## 更新の流れ

```text
pnpm new-post article-name
↓
Markdownを書く
↓
pnpm devで確認
↓
git add / commit / push
↓
Cloudflare Pagesが自動ビルド
```

## Fuwari本体を更新するとき

まず公式変更を別フォルダで確認し、`FUWARI_UPSTREAM_COMMIT`に記録されたコミットとの差分を確認してください。設定・記事・matchaテーマ上書きを残しながら更新するのが安全です。
