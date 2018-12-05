/**
 * ESLint configuration for WordPress development.
 *
 * @type {Object}
 */
module.exports = {
	extends: [ './index.js', 'wordpress' ],
	rules: {

		// ----- Stylistic Issues --------------------------------------------------
		indent: [ 'error', 'tab', {SwitchCase: 1} ],
		'no-tabs': 'off'
	}
};
