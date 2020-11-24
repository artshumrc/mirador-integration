const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'mirador-giza.js',
    path: path.resolve(__dirname, 'dist/single'),
    publicPath: './dist/single',
  },
});