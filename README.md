# おれの p5.js

zztkm の p5.js 作品を保管しておく場所です。

## Requirements

- [Node.js](https://nodejs.org/ja/)

```shell
# install deps
yarn install
```

## 開発サーバー起動

```shell
yarn run start
```

## Github Pages での公開手順

```shell
yarn build

yarn deploy
```

## 使用させてもらった素材

- 音楽
	- [魔王魂](https://maou.audio/)

## トラブルシューティング

- net::ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep
	- このときは parcel でサーブするのが厳しいのでVSCodeの[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)などを用いて開発をしてください