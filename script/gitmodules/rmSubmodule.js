/**
 * 升级Git Submodule仓库版本
 * 使用方式：yarn submodules rm [submoduleName]
 * 传递一个参数submoduleName，参数为要升级的Git Submodule仓库名称，也就是Git Submodule仓库的目录名
 * 如：yarn submodules rm es6tutorial
 */
import chalk from "chalk";
import path from "node:path";
import { rmSync } from "node:fs";
import {
  consolePrefix,
  submoduleDir,
  SubmoduleRoot,
  projectRoot,
} from "./const.js";
import { executeCommand } from "./utils.js";

/**
 * 删除Git Submodule仓库
 */
export async function rmSubmodule() {
  const submoduleName = process.argv[3];

  if (!submoduleName) {
    console.log(
      chalk.red(
        consolePrefix,
        "请传入要删除的git仓库名称，如：yarn submodules rm es6tutorial"
      )
    );
    return;
  }

  // Git Submodule仓库删除命令
  const allCommands = [
    // 1. 编辑 .gitmodules 文件，删除相关子模块配置
    `git config -f .gitmodules --remove-section submodule.${submoduleDir}/${submoduleName}`,
    // 2. 编辑 .git/config 文件，删除相关子模块配置
    `git config --remove-section submodule.${submoduleDir}/${submoduleName}`,
  ];

  const success = await executeCommand(allCommands.join(" && "), {
    cwd: projectRoot,
  });
  if (success) {
    try {
      rmSync(path.join(SubmoduleRoot, submoduleName), { recursive: true, force: true });
      rmSync(
        path.join(projectRoot, `.git/modules/${submoduleDir}/${submoduleName}`),
        { recursive: true, force: true }
      );
      console.log(
        chalk.blueBright(consolePrefix),
        "已删除Git Submodule仓库：",
        chalk.green(submoduleName)
      );
    } catch (err) {
      console.log(chalk.red(consolePrefix, err));
    }
  }
}
