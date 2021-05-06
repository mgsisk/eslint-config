const {ESLint} = require('eslint')
const path = require('path')
const tap = require('tap')

/**
 * Run typescript config tests.
 *
 * @returns {void}
 */
async function test() {
  const eslint = new ESLint({
    baseConfig: {
      parserOptions: {
        project: path.join(__dirname, 'typescript', 'tsconfig.json'),
      },
    },
    overrideConfigFile: path.join(path.dirname(__dirname), 'src', 'cnf', 'typescript.js'),
    useEslintrc: false,
  })
  const [test1] = await eslint.lintFiles(path.join(__dirname, 'typescript', 'good.ts'))
  const [test2] = await eslint.lintFiles(path.join(__dirname, 'typescript', 'bad.ts'))

  tap.equal(test1.errorCount, 0, 'It passes valid TypeScript')
  tap.equal(test2.errorCount, 4, 'It lints invalid TypeScript')
}

test()
