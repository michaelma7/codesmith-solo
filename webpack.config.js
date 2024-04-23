const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //this is the path that cannot resolve
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/client/index.html'),
      filename: 'index.html',
    }),
  ],

  devServer: {
    static: {
      host: 'localhost'
      directory: path.join(__dirname, '/dist'),
      publicPath: '/',
    },
    // proxy: [
    //   {
    //     context: ['/api'],
    //     target: 'http://localhost:3000',
    //   }
    // ],
    compress: true,
    port: 8080,
  },

  module: {
    //where our loaders will go (loaders are plugins to translate different languages into css js and html)
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react'],
            ],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-syntax-jsx',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
