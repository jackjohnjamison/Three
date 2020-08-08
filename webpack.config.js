const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/dist/three-js-fps'),
    filename: 'bundle.js'
  }
}