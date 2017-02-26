var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // bundle the client for webpack-dev-server and connect to the provided endpoint

    'webpack/hot/only-dev-server', // bundle the client for hot reloading only- means to only hot reload for successful updates

    './src/index.jsx', // the entry point of our app
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        include: APP_DIR,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        include: APP_DIR,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // respond to 404s with index.html
    hot: true, // enable HMR on the server
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
      }
    }
  },
}

module.exports = config
