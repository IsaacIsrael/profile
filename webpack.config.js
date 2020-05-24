const path = require('path');

module.exports = {
  entry: "./_javascript/packs/application.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "_assets/javascripts/"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};
