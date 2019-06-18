const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebPackPlugin({
  "template": "./src/index.html",
  "filename": "./index.html"
})

module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + "/dist",

    "filename": "./index.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader"
        }
      }
    ]
  },
    "devServer": {
    "historyApiFallback": true,
  },
  "plugins": [htmlPlugin]
};
