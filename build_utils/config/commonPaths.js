import path from "node:path"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROJECT_ROOT = path.resolve(__dirname, "../../")

export default {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, "src", "main.js"),
  outputPath: path.join(PROJECT_ROOT, "build"),
  appEntryPath: path.join(PROJECT_ROOT, "src"),
  buildUtilsPath: path.join(PROJECT_ROOT, "build_utils"),
}