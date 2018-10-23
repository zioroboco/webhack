import * as webpack from "webpack"
import * as path from "path"

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/example.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
}

export default config
