const path = require('path');

const SRC_FILE_PATH = path.join(__dirname, 'client/index.jsx');
const OUT_PATH = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: SRC_FILE_PATH,
  output: {
    path: OUT_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}