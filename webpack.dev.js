const { merge } = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    host: "localhost",
    static: {
      directory: path.join(__dirname, "build")
    },
    allowedHosts: 'auto',
    compress: true,
    port: "auto",
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false
      },
      progress: true,
      reconnect: 5,
      webSocketTransport: 'ws'
    },
    webSocketServer: 'ws',
    server: "https",
    historyApiFallback: true,
    hot: 'only',
    open: true,
  },
});