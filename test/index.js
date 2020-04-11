'use strict'

const eslint = require('eslint')
const tap = require('tap')

const engine = new eslint.CLIEngine({configFile: './index.js'})
const [test1] = engine.executeOnText('const x = 1\n\nparseFloat(x)\n').results
const [test2] = engine.executeOnText('let x = "y"').results

tap.equal(test1.errorCount, 0, 'It passes valid JavaScript (standard)')
tap.equal(test2.errorCount, 4, 'It lints invalid JavaScript (standard)')
