const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)?$/,
        loader: "url-loader",
        options: {
          limit: 8000,
          outputPath: "../public/",
          publicPath: "/"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@/containers": path.resolve(__dirname, "./src/containers"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/config": path.resolve(__dirname, "./config"),
      "@/withStyle": path.resolve(__dirname, "./src/withStyle.js"),
    }
  }
};

module.exports = merge(config, serverConfig);
