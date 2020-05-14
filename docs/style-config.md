# ✨ Style

## Settings

`.vscode\settings.json`

```json
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#6de2c8",
    "activityBar.activeBorder": "#c35fdf",
    "activityBar.foreground": "#15202b",
    "activityBar.inactiveForeground": "#15202b99",
    "activityBarBadge.background": "#c35fdf",
    "activityBarBadge.foreground": "#15202b",
    "titleBar.activeBackground": "#43d9b8",
    "titleBar.inactiveBackground": "#43d9b899",
    "titleBar.activeForeground": "#15202b",
    "titleBar.inactiveForeground": "#15202b99",
    "statusBar.background": "#43d9b8",
    "statusBarItem.hoverBackground": "#27c2a0",
    "statusBar.foreground": "#15202b"
  },
  "peacock.color": "#43d9b8",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Night Owl Light",
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

## VS Code Extensions

- **Material Icon Theme** pkief.material-icon-theme

- **Night Owl** sdras.night-owl

- **Prettier** - Code formatter esbenp.prettier-vscode

- **Spell Right** ban.spellright
