const tap = require('tap')
const eslint = require('eslint')

const engine = new eslint.CLIEngine({configFile: './index.js'})
const [test1] = engine.executeOnText('const x = 1\n\nparseFloat(x)\n').results
const [test2] = engine.executeOnText('let x = "y"').results

tap.equal(test1.errorCount, 0, 'It finds no errors in a valid JavaScript file (standard)')
tap.equal(test2.errorCount, 4, 'It finds errors in an invalid JavaScript file (standard)')
