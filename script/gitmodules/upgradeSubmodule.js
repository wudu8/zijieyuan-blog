/**
 * 升级Git Submodule仓库版本
 * 使用方式：yarn refer update [submoduleName] [version]
 * 传递一个参数submoduleName，参数为要升级的Git Submodule仓库名称，也就是Git Submodule仓库的目录名
 * 传递一个参数version，参数为要升级的Git Submodule仓库版本，也就是Git Submodule仓库中对应的分支
 * 如：yarn refer update v1.0.0-beta.5 或 yarn refer u v1.0.0-beta.5
 */
import chalk from 'chalk';
import { consolePrefix, projectRoot } from './const.js';
import { executeCommand, getSubmoduleDir } from './utils.js';

/**
 * 升级Git Submodule仓库
 */
export async function upgradeSubmodule(type, submoduleName, version) {
  const dir = getSubmoduleDir(type);
  if (!submoduleName || !version) {
    console.log(chalk.red(consolePrefix, `请传入要升级的仓库和版本号，如：yarn ${type} update typescript-tutorial v1.0.0-beta.5`));
    return;
  }
  console.log(consolePrefix, `正在升级Git Submodule仓库到${submoduleName}...`);
  // Git Submodule仓库升级命令
  const allCommands = [
    // 更新".gitmodules"文件为指定版本分支
    `git config -f .gitmodules submodule.${dir}${submoduleName}.branch ${version}`,
    // 防止Git Submodule仓库没有拉取，先初始化一下仓库
    `git submodule update --init --recursive`,
    // 切换到submodules目录
    `cd ${dir}${submoduleName}`,
    // 检出对应版本分支的代码
    `git checkout ${version}`,
    // 更新版本分支
    `git pull`,
  ];

  const success = await executeCommand(allCommands.join(' && '), { cwd: projectRoot });
  if (success) {
    console.log(chalk.blueBright(consolePrefix, `Git Submodule仓库已升级至${version}`));
  }
}
