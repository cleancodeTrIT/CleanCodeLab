# Nouns

## Test with Jest

```bash
# Install Jest
npm install -D jest
yarn add -D jest
yarn jest --init
yarn add --dev babel-jest @babel/core @babel/preset-env
yarn add --dev @babel/preset-typescript
yarn add --dev @types/jest
```

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
