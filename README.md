# github

## users テーブル

| Column              | Type   | Options                             |
| ------------------- | ------ | ----------------------------------- |
| name                | string | null: false                         |
| email               | string | null: false, unique: true           |
| encrypted_password  | string | null: false                         |
