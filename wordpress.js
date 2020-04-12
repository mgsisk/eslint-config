'use strict'

/**
 * ESLint configuration for WordPress development.
 *
 * @type {object}
 */
module.exports = {
  extends: ['./index.js', 'plugin:@wordpress/eslint-plugin/recommended'],
  rules: {
    // ----- Stylistic Issues --------------------------------------------------
    indent: ['error', 'tab', {SwitchCase: 1}],
    'no-tabs': 'off',
  },
}
