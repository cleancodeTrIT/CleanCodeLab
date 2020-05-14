# 🧪 Test

Configuration for running unit tests with [Jest](https://jestjs.io/)

## Dev dependencies

```bash
# Install Jest
npm install -D jest
yarn add -D jest
yarn jest --init
yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add --dev @babel/preset-typescript
yarn add --dev @types/jest
```

## Jest

`jest.config.js`

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

---

## Babel

`babel.config.js`

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
};
```

## Package Json scripts

`package.json`

```json
{
  "scripts": {
    "test": "jest --watch -o",
    "jest": "jest"
  }
}
```
