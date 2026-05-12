const path = require("node:path");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  entry: "./src/a16_webpack/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.front.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "assets", "js"),
  },
  devtool: "source-map",
};

module.exports = config;
