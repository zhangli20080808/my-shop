const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"]
                }
              }
            ]
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@/containers": path.resolve(__dirname, "./src/containers"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/config": path.resolve(__dirname, "./config"),
      "@/withStyle": path.resolve(__dirname, "./src/withStyle.js")
    }
  }
};
