const path = require("path")
const webpack = require("webpack")

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
  }
};
