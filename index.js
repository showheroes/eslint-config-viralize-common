module.exports = {
  rules: {
    "comma-dangle": ["error", "never"],
    "curly": ["error", "all"],
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", { "code": 80, "tabWidth": 4 }],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-underscore-dangle": "off",
    "operator-linebreak": ["error", "after"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
};
