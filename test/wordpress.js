const eslint = require('eslint')
const tap = require('tap')

const engine = new eslint.CLIEngine({configFile: './wordpress.js'})
const [test1] = engine.executeOnText('const x = 1;\n\nparseFloat( x );\n').results
const [test2] = engine.executeOnText('var x = [ 1 ]').results

tap.equal(test1.errorCount, 0, 'It passes valid JavaScript (WordPress)')
tap.equal(test2.errorCount, 3, 'It lints invalid JavaScript (WordPress)')
