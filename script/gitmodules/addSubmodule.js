/**
 * 升级Git Submodule仓库版本
 * 使用方式：yarn submodules add [git url]
 * 传递一个参数gitUrl，参数为要添加的Git Submodule仓库地址
 * 如：yarn submodules add git@gitee.com:yzc2386166796/zijieyuan-blog.git 或 yarn submodules a git@gitee.com:yzc2386166796/zijieyuan-blog.git
 */
import chalk from 'chalk';
import { consolePrefix, submoduleDir, projectRoot } from './const.js';
import { executeCommand } from './utils.js';

/**
 * 添加Git Submodule仓库
 */
export async function addSubmodule() {
  const gitUrl = process.argv[3];

  if (!gitUrl) {
    console.log(chalk.red(consolePrefix, '请传入要添加的git仓库地址，如：yarn submodules add git@gitee.com:yzc2386166796/zijieyuan-blog.git'));
    return;
  }

  // Git Submodule仓库添加命令
  const allCommands = [
    `cd ${submoduleDir}`,
    `git submodule add ${gitUrl}`,
    `git submodule update --init --recursive`,
  ];

  const success = await executeCommand(allCommands.join(' && '), { cwd: projectRoot });
  if (success) {
    console.log(chalk.blueBright(consolePrefix), '已添加', chalk.green(gitUrl), '到Git Submodule仓库');
  }
}
