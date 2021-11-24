# 🧪 Test

Configuration for running unit tests with [Jest](https://jestjs.io/)

## Dev dependencies

```bash
# Install Jest
npm install -D jest typescript ts-jest
yarn add -D jest typescript ts-jest
yarn jest --init
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


## Package Json scripts

`package.json`

```json
{
  "scripts": {
    "test": "jest --watch -o",
    "jest": "jest --verbose"
  }
}
```
