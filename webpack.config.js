const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    a: './charpter2/example-1/a.js',
    b: './charpter2/example-1/b.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};