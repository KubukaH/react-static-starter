const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const stylesHandler = "style-loader";

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Basilwizi trust - Bamulonga (People of the Great River)',
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(css|less)$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|pdf|xls)$/i,
        type: "asset",
      },
      {
        test: /\.(png|svg|jpdg|jpeg|gif|pdf|xls)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(mp3|mp4|wav|webm)$/i,
        type: 'asset/resource'
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    fallback: { "buffer": false }
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: /[\\/]node_modules[\\/]/,
        chunks: 'all'
      }
    }
  },
};