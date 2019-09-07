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
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    quotes: ["warn", "single", { "allowTemplateLiterals": true }],
    "no-unexpected-multiline": "error", // https://medium.com/@eugenkiss/dont-use-semicolons-in-typescript-474ccfe4bdb3
  }
};
