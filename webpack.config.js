const path = require('path')

module.exports = {
  "mode": "development",
  "entry": "src/index.js",
  "output": {
    "path": __dirname+'/static',
    "filename": "[name].[chunkhash:8].js"
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env",
              "react"
            ]
          }
        }
      },
      {
        "test": /\.scss$/,
        "use": [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}
