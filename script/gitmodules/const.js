import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url));
/** 日志前缀 */
export const consolePrefix = "[ZiJieYuan Submodule]";

/** Git Submodule仓库的目录名 */
export const submoduleDir = "thirdpartys";

/** 当前文件的位置：__dirname，projectRoot为项目根目录 */
export const projectRoot = resolve(__dirname, "../../");
/** ".gitmodules"文件在仓库根目录中 */
export const gitmodulesFile = resolve(projectRoot, ".gitmodules");

export const githubPages = "zijieyuan-blog-pages";
