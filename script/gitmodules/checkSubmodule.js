/**
 * 检查是否存在Git Submodule仓库，存在则更新，不存在则删除
 *
 * 注意：如果不存在Git Submodule仓库，那在没有这个改动的老分支，也就不存在这个代码
 * 手动删除Git Submodule仓库：还是需要手动删除Git Submodule仓库目录，否则会出现在合并请求中出现thirdpartys文件的改动
 * 手动更新Git Submodule仓库：执行 git submodule update --init --recursive
 */

import { existsSync, rm } from "node:fs";
import { resolve } from "node:path";
import chalk from "chalk";

import { consolePrefix, projectRoot, gitmodulesFile } from "./const.js";
import { executeCommand, getSubmoduleDir } from "./utils.js";

/**
 * 检查是否存在Git Submodule仓库，存在则更新，不存在则删除
 */
export async function checkSubmodule(type) {
  const dir = getSubmoduleDir(type);
  const submoduleRoot = resolve(projectRoot, dir);
  if (existsSync(gitmodulesFile)) {
    await executePullSubmodule();
  } else {
    await executeRemoveSubmodule(submoduleRoot);
  }
}

/**
 * 删除Git Submodule仓库，只需要删除Git Submodule仓库目录即可
 */
async function executeRemoveSubmodule() {
  // 删除Git Submodule仓库
  return new Promise((res) => {
    rm(submoduleRoot, { recursive: true, force: true }, (err) => {
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
  console.log(consolePrefix, `正在更新Git Submodule仓库...`);
  console.log(consolePrefix, `如果没有搭建VPN访问GitHub，可能较慢，请耐心等候...`);
  const success = await executeCommand(
    "git submodule update --init --recursive"
  );
  if (success) {
    console.log(chalk.blueBright(consolePrefix, "已自动更新Git Submodule仓库"));
  }
}
