import * as webpack from "webpack"
import * as path from "path"

type Config = () => webpack.Configuration
const config: Config = () => {
  debugger
  return {
    mode: "development",
    entry: "./src/example.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    }
  }
}

export default config
