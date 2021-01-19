module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    quotes: ["off"], // https://github.com/prettier/eslint-config-prettier#quotes
    "no-unexpected-multiline": "off", // https://github.com/prettier/eslint-config-prettier#no-unexpected-multiline,
    "arrow-parens": ["off"], // handled by prettier with rule 'arrowParens'
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "@typescript-eslint/explicit-function-return-type": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
    "@typescript-eslint/explicit-module-boundary-types": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    "no-use-before-define": "off", // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    "@typescript-eslint/no-use-before-define": ["error"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    // https://github.com/benmosher/eslint-plugin-import/issues/1568
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "warn" // https://github.com/airbnb/javascript#modules--use-them
      }
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off", // duplicate of no-unused-vars
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-unused-vars": "off", // duplicate of @typescript-eslint/no-unused-vars
        "@typescript-eslint/explicit-function-return-type": ["error"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
        "@typescript-eslint/explicit-module-boundary-types": ["error"], // https://github.com/typescript-eslint/typescript-eslint/blob/v4.14.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
      }
    }
  ]
};