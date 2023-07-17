# 作成したアプリ

「k-chat」という非同期チャットアプリです。

## 作成理由

当時、1つの画面でメッセージのやり取りができるというアプリに衝撃を受け、最初に作るアプリはこれ！と決めていました。

いたってシンプルなアプリケーションですが、チャット送信された文字列が10秒で消えるような設定や特定の言葉を入力されると決められた文字列に変換されて送信される。といった機能に少しこだわりました。

## 使用技術

・HTML/CSS

・Bootstrap

・JavaScript/jQuery/Ajax

・Ruby 2.7.7

・Rails 6.0.6.1

・mysql2 0.4.4

・devise

・jquery-rails

・render

## ユーザー機能

・ユーザー新規登録・ログイン機能

・ユーザー詳細ページ表示機能

・ユーザー情報編集機能

・ログアウト機能




## users テーブル

| Column              | Type   | Options                             |
| ------------------- | ------ | ----------------------------------- |
| name                | string | null: false                         |
| email               | string | null: false, unique: true           |
| encrypted_password  | string | null: false                         |
