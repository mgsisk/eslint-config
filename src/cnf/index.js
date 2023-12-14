const path = require("path");

module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:jsdoc/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    path.join(path.dirname(__dirname), "etc", "eslint"),
    path.join(path.dirname(__dirname), "etc", "eslint-comments"),
    path.join(path.dirname(__dirname), "etc", "import"),
    path.join(path.dirname(__dirname), "etc", "jsdoc"),
  ],
};
