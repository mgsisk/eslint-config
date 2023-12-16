const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    path.join(__dirname, "index"),
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    path.join(path.dirname(__dirname), "etc", "typescript"),
  ],
};
