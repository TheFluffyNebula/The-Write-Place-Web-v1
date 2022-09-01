const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let htmlPageNames = ['ForgotPassword','Profile','ChangePassword','Upload','ToReviewList','OtherEssays'];
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
    ForgotPassword:'./src/ForgotPassword.js',
    Profile:'./src/Profile.js',
    ChangePassword:'./src/ChangePassword.js',
    Upload:'./src/Upload.js',
    ToReviewList:'./src/ToReviewList.js',
    OtherEssays:'./src/OtherEssays.js',
    
},
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
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