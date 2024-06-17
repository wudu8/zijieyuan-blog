/**
 * 检查是否存在Git Submodule仓库，存在则更新，不存在则删除
 *
 * 注意：如果不存在Git Submodule仓库，那在没有这个改动的老分支，也就不存在这个代码
 * 手动删除Git Submodule仓库：还是需要手动删除Git Submodule仓库目录，否则会出现在合并请求中出现thirdpartys文件的改动
 * 手动更新Git Submodule仓库：执行 git submodule update --init --recursive
 */

import { existsSync, rm } from "node:fs";
import chalk from "chalk";

import { consolePrefix, SubmoduleRoot, gitmodulesFile } from "./const.js";
import { executeCommand } from "./utils.js";

/**
 * 检查是否存在Git Submodule仓库，存在则更新，不存在则删除
 */
export async function checkSubmodule() {
  if (existsSync(gitmodulesFile)) {
    await executePullSubmodule();
  } else {
    await executeRemoveSubmodule();
  }
}

/**
 * 删除Git Submodule仓库，只需要删除Git Submodule仓库目录即可
 */
async function executeRemoveSubmodule() {
  // 删除Git Submodule仓库
  return new Promise((res) => {
    rm(SubmoduleRoot, { recursive: true, force: true }, (err) => {
      if (err) {
        console.log(chalk.red(consolePrefix, err));
      } else {
        console.log(
          chalk.blueBright(
            consolePrefix,
            "当前分支不存在Git Submodule仓库，已自动删除Git Submodule仓库"
          )
        );
      }
      resolve(!err);
    });
  });
}

/**
 * 更新Git Submodule仓库
 */
async function executePullSubmodule() {
  const success = await executeCommand(
    "git submodule update --init --recursive"
  );
  if (success) {
    console.log(chalk.blueBright(consolePrefix, "已自动更新Git Submodule仓库"));
  }
}
