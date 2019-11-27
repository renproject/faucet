# `🚰 serverless faucet`

This is a password-protected faucet that can be hosted on Github pages.

> *Note that anyone with the password can withdraw all funds.*

Currently supports **testnet** only. Supported cryptocurrencies:

* BTC
* BCH
* ZEC
* ETH
* ERC20 tokens

<br />

# Setting up

Get an Infura key and add create a `.env` file, replacing `INFURA_KEY`:

```
REACT_APP_ETHEREUM_NODE="https://kovan.infura.io/v3/INFURA_KEY"
```

Install dependencies:

```sh
yarn
```

Choose a password and create a private key, replacing `PASSWORD`:

```sh
yarn generateKey.js PASSWORD
```

Start the development server to [localhost:3000](http://localhost:3000):

```sh
yarn start
```

<br /><br />

# Deploying to Github pages

Update the `homepage` field in `package.json`:

```
    "homepage": "https://username.github.io/repo-name",
```

Run

```sh
npm run deploy
```
<br /><br />

# Preview

![Preview 1](./public/preview-1.png)

![Preview 2](./public/preview-2.png)
