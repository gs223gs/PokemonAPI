# Poke ID Check アプリ

このアプリは、ユーザーがポケモンのID（pokeid）を入力し、そのポケモンの情報を取得して表示するシンプルなReactアプリです。

## 機能

- ユーザーがポケモンのIDを入力できるフォームを提供
- PokeAPIを使用して、入力されたIDに基づいてポケモンの情報を取得
- 取得したポケモンの名前、高さ、画像を表示
- 入力フィールドをクリアして、次の検索を容易にする

## 使用技術

![技術スタック](https://skillicons.dev/icons?i=react,vite,typescript,nodejs,docker)

## インストール

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/gs223gs/PokemonAPI
   ```
2. ディレクトリに移動します。
   ```bash
   cd poke-id-check
   ```



## 実行方法
1. dockerを起動する
   ```bash
   docker compose up　-d
   ```
2. ブラウザで `http://localhost:3000` にアクセスすると、アプリが表示されます。

## 使用方法

1. フォームにポケモンのIDを入力します。
2. 「検索」ボタンをクリックします。
3. 取得したポケモンの情報がリストに表示されます。



