module.exports = {
  rules: {
    "new-cap": "off",
    "@babel/new-cap": "error",
    "no-invalid-this": "off",
    "@babel/no-invalid-this": "error",
    "no-unused-expressions": "off",
    "@babel/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
      },
    ],
  },
};
