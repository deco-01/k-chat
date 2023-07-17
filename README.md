# 作成したアプリ
「k-chat」という非同期チャットアプリです。

#　なぜ作成したか
当時、1つの画面でメッセージのやり取りができるというアプリに衝撃を受け最初に作るアプリはこれ！と決めていました。


## users テーブル

| Column              | Type   | Options                             |
| ------------------- | ------ | ----------------------------------- |
| name                | string | null: false                         |
| email               | string | null: false, unique: true           |
| encrypted_password  | string | null: false                         |
