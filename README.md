# `🚰 faucet`

This is a password-protected faucet that can be hosted on Github pages.

> _Note that anyone with the password can withdraw all funds._

Currently supports **testnet** only. Supported cryptocurrencies:

-   BTC
-   ZEC
-   BCH
-   FIL
-   ETH
-   ERC20 tokens

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

Customize `src/components/Lock.svg` with the desired logo or symbol.

# Deploying to Github pages

Update the `homepage` field in `package.json`:

```json
    "homepage": "https://username.github.io/repo-name",
```

Run

```sh
yarn deploy
```

# Preview

Password prompt:
![Preview 1](./public/preview-1.png)

Faucet:
![Preview 2](./public/preview-2.png)
