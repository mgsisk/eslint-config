const path = require('path')

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],
  extends: [
    path.join(__dirname, 'index'),
    path.join(path.dirname(__dirname), 'etc', 'babel'),
  ],
}
