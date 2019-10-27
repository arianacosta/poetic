module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    "ecmaFeatures": {
      "jsx": true,
    },
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
    "browser": true,
    "node": true,
    "jest": true,
  },
  rules: {
    quotes: ["warn", "single", { "allowTemplateLiterals": true }],
    "no-unexpected-multiline": "error", // https://bit.ly/2kMIX99,
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
  },
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "warn", // https://github.com/airbnb/javascript#modules--use-them
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "off", // duplicate of by no-unused-vars
        "@typescript-eslint/explicit-function-return-type": "off", // https://bit.ly/2kkud12
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-unused-vars": "off", // duplicate of @typescript-eslint/no-unused-vars
        "@typescript-eslint/explicit-function-return-type": ["error"], // https://bit.ly/2kkud12
      }
    }
  ]
};
