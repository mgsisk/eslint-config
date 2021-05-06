const path = require('path')

module.exports = {
  extends: [path.join(__dirname, 'index'), 'plugin:@wordpress/eslint-plugin/recommended-with-formatting'],
  rules: {
    indent: ['error', 'tab', {SwitchCase: 1}],
    'no-tabs': 'off',
  },
}
