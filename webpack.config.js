const path = require('path');
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('sass-loader'),
          }
        ],
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HWP({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};