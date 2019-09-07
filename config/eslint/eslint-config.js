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
    "no-unexpected-multiline": "error", // https://medium.com/@eugenkiss/dont-use-semicolons-in-typescript-474ccfe4bdb3
  },
};
