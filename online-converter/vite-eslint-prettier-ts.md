# 專案 ESLint 與 Prettier 設定方式

- 註: 以下 Create-React-App 簡稱為 CRA
- 註: 以下 Visual Studio Code 簡稱為 VS Code
- 註: [yarn](https://yarnpkg.com/) 需要額外安裝，Yarn 是 Facebook 提供的替代 npm 的工具，可以加速 node 模組的下載，推薦使用。

## VS Code 開發工具部份

### 第 1 步: 安裝 ESLint 與 Prettier 擴充

安裝以下兩個 VS Code 擴充 (使用擴充套件搜尋名稱即可，安裝最多下載量的):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 第 2 步: 更新 VS Code 設定

將 VSCode 專案設定`.vscode/settings.json`，改為以下：

> 註: `workbench.colorCustomizations`為自訂工作區顏色用，可參考詳細說明: [Theme Color](https://code.visualstudio.com/api/references/theme-color)

```json
{
    "workbench.colorCustomizations": {
        "activityBar.background": "#5A1123",
        "titleBar.activeBackground": "#7D1830",
        "titleBar.activeForeground": "#FEFBFC"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.configPath": ".prettierrc.json",
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": [
        "source.formatDocument",
        "source.fixAll.eslint"
    ],
    "typescript.validate.enable": false,
    "javascript.validate.enable": false,
}
```

## 專案部份

### 安裝模組

在終端機(命令列)中，於專案根目錄路徑貼上以下指令:

```sh
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

安裝完成應可看到以下在`package.json`的類似內容(版本不一定一致):

```json
"devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.56.0",
    "@typescript-eslint/parser": "^5.56.0",
    "@vitejs/plugin-react": "^3.1.0",
    "eslint": "^8.36.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.6",
    "typescript": "^4.9.3",
    "vite": "^4.2.0"
}
```

### `.eslintrc.json`

於專案根目錄中，建立一個`.eslintrc.json`檔案，內容如下:

```json
{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "prettier",
    "react-hooks",
    "@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": ".",
    "project": [
      "./tsconfig.json"
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts"
        ]
      }
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "import/no-unresolved": [
      2,
      {
        "ignore": [
          "\\.svg$",
          "\\.css$"
        ]
      }
    ]
  }
}
```

### `.eslintignore`

於專案根目錄中，建立一個`.eslintignore`檔案，內容如下:

```text
node_modules/
dist/
```

### `.prettierrc.json`

於專案根目錄中，建立一個`.prettierrc.json`檔案，內容如下:

> 註: `"semi": false` 控制格式排版時，會移除每陳述式後的分號(;)，如要保留可改為`"semi": true`或移除此行設定 (預設即為 true)

```json
{
  "semi": false,
  "singleQuote": true,
  "endOfLine": "auto"
}
```

### 其它參考

---

old for ts

```
npm install eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

---

```json
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

## 專案安裝

```
    "eslint": "^8.36.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.5",
```

```
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```
