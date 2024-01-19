module.exports = {
  root: true,
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "settings": {
    "import/resolver": {
      "typescript": true
    }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh","unused-imports", "react", "@typescript-eslint", "import", "prettier"],
  rules: {
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-unresolved": "warn",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "unused-imports/no-unused-imports": "warn",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}
