module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: [],
  extends: ["plugin:react/recomended"],
  rules: {
    semi: "error",
    quotes: "error",
    "no-undef": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
