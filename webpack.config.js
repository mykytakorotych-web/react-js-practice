import HtmlWebpackPlugin from "html-webpack-plugin"
import commonPaths from './build_utils/config/commonPaths.js'
import pkg from "./package.json" with { type: "json" }

const isDebug = !process.argv.includes("release")

const port = process.env.PORT || 3000

export default {
  entry: commonPaths.entryPath,
  output: {
    uniqueName: pkg.name,
    publicPath: "/",
    path: commonPaths.outputPath,
    filename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    chunkFilename: `${pkg.version}/js/[name].[chunkhash:8].js`,
    assetModuleFilename: isDebug
      ? `images/[path][name].[contenthash:8][ext]`
      : `images/[path][contenthash:8][ext]`,
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: port,
    static: commonPaths.outputPath,
    historyApiFallback: {
      index: "index.html",
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // exclude node_modules
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
}