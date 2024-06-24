/**
 * 升级Git Submodule仓库版本
 * 使用方式：yarn refer add [git url]
 * 传递一个参数gitUrl，参数为要添加的Git Submodule仓库地址
 * 如：yarn refer add git@github.com:wudu8/zijieyuan-blog.git 或 yarn refer a git@github.com:wudu8/zijieyuan-blog.git
 */
import chalk from 'chalk';
import { consolePrefix, projectRoot } from './const.js';
import { executeCommand, getSubmoduleDir } from './utils.js';

/**
 * 添加Git Submodule仓库
 */
export async function addSubmodule(type, gitUrl) {
  if (!gitUrl) {
    console.log(chalk.red(consolePrefix, `请传入要添加的git仓库地址，如：yarn ${type} add git@github.com:wudu8/zijieyuan-blog.git`));
    return;
  }
  const dir = getSubmoduleDir(type, true);
  console.log(consolePrefix, `正在添加Git Submodule仓库...`);

  // Git Submodule仓库添加命令
  const allCommands = [
    `cd ${dir}`,
    `git submodule add ${gitUrl}`,
    `git submodule update --init --recursive`,
  ];

  const success = await executeCommand(allCommands.join(' && '), { cwd: projectRoot });
  if (success) {
    console.log(chalk.blueBright(consolePrefix), '已添加', chalk.green(gitUrl), '到Git Submodule仓库');
  }
}
