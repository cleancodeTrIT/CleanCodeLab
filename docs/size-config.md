# 📏 Size

Configurations for a minimal set of code metrics.

Feel free to change it and adapt it to your liking.

## VS Code Extensions

- **ESLint** dbaeumer.vscode-eslint

## VS Code Settings

`.vscode\settings.json`

```json
{
  "html.format.wrapLineLength": 100
}
```

---

## EditorConfig

`.editorconfig`

```
[*]
indent_style = space
indent_size = 2
```

---

## Prettier

`.prettierrc`

```json
{
  "printWidth": 100
}
```

## ESLint - TypeScript - Prettier

```bash
# npm
npm i eslint eslint-config-prettier eslint-plugin-prettier -D
npm i typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
# yarn
yarn add eslint eslint-config-prettier eslint-plugin-prettier -D
yarn add typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

`.eslintrc`

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "max-lines": ["warn", 160],
    // "no-magic-numbers": [
    //   "warn",
    //   { "detectObjects": true, "enforceConst": true, "ignoreArrayIndexes": true }
    // ],
    "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }]
    // "@typescript-eslint/no-use-before-define": "off"
  },
  "plugins": ["prettier"]
}
```

## Package Json scripts

`package.json`

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{js,ts,json}\"",
    "lint": "eslint . --ext .ts"
  }
}
```
