const path = require("path")
const webpack = require("webpack")

module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname+'/static',
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
  devServer: {
    contentBase: path.join(__dirname, 'src/'),
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    port: 9000
  }
};
