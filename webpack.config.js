const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let htmlPageNames = ['ForgotPassword'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry:{
    index: './src/index.js',
    ForgotPassword:'./src/ForgotPassword.js'
},
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ["index"],
    })
  ].concat(multipleHtmlPlugins)
}