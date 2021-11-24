# ✨ Style

Configurations for an opinionated style.

Feel free to change it and adapt it to your liking.

## VS Code Extensions

- **Material Icon Theme** pkief.material-icon-theme

- **Prettier** - Code formatter esbenp.prettier-vscode

- **Code Spell Checker** streetsidesoftware.code-spell-checker

---

## VS Code Settings

`.vscode\settings.json`

```json
{
  "workbench.iconTheme": "material-icon-theme",
  "spellright.language": ["en", "es"],
  "spellright.documentTypes": ["markdown", "latex", "plaintext"],
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "prettier.useEditorConfig": true,
  "prettier.disableLanguages": ["vue", "xlf", "xml", "markdown", "html"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.wrapAttributes": "force-aligned",
  "html.format.enable": true
}
```

---

## EditorConfig

`.editorconfig`

```
root = true
[*]
end_of_line = lf
charset = utf-8
```

---

## Prettier

```bash
# npm
npm i prettier -D
# yarn
yarn add prettier -D
```

`.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "rangeStart": 0,
  "rangeEnd": 10000,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve"
}
```
