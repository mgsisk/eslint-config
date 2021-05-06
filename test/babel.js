const {ESLint} = require('eslint')
const tap = require('tap')

/**
 * Run babel config tests.
 *
 * @returns {void}
 */
async function test() {
  const eslint = new ESLint({
    baseConfig: {
      parserOptions: {
        requireConfigFile: false,
      },
    },
    overrideConfigFile: './src/cnf/babel.js',
    useEslintrc: false,
  })
  const [test1] = await eslint.lintText('const x = 1\n\nparseFloat(x)\n')
  const [test2] = await eslint.lintText('let x = "y"')

  tap.equal(test1.errorCount, 0, 'It passes valid Babel')
  tap.equal(test2.errorCount, 4, 'It lints invalid Babel')
}

test()
