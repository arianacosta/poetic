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
    "ecmaFeatures": {
      "jsx": true
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
    "jest": true
  },
  rules: {
    quotes: ["warn", "single", { "allowTemplateLiterals": true }],
    "no-unexpected-multiline": "error", // https://bit.ly/2kMIX99
  },
  overrides: [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "off", // covered by no-unused-vars
        "@typescript-eslint/explicit-function-return-type": "off" // https://bit.ly/2kkud12
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"] // https://bit.ly/2kkud12
      }
    }
  ]
};
