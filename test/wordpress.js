const {ESLint} = require('eslint')
const tap = require('tap')

/**
 * Run wordpress config tests.
 *
 * @returns {void}
 */
async function test() {
  const eslint = new ESLint({overrideConfigFile: './src/cnf/wordpress.js', useEslintrc: false})
  const [test1] = await eslint.lintText('const x = 1\n\nparseFloat( x )\n')
  const [test2] = await eslint.lintText('var x = [ 1 ]')

  tap.equal(test1.errorCount, 0, 'It passes valid JavaScript (WordPress)')
  tap.equal(test2.errorCount, 3, 'It lints invalid JavaScript (WordPress)')
}

test()
