# 📏 Size

## Settings

`.vscode\settings.json`

```json
{
  "html.format.wrapLineLength": 80
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
  "printWidth": 80
}
```

## ESLint - TypeScript

```bash
# npm
npm i eslint eslint-config-prettier eslint-plugin-prettier -D
npm i typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
# yarn
yarn add eslint eslint-config-prettier eslint-plugin-prettier -D
yarn add typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

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
    "max-lines": ["error", 160],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }]
  },
  "plugins": ["prettier"]
}
```

## Package Json scripts

```json
{
  "scripts": {
    "format": "prettier --write",
    "lint": "eslint . --ext .ts"
  }
}
```
