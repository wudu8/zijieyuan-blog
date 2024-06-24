import { exec } from "child_process";
import chalk from "chalk";
import { consolePrefix, submoduleDir } from "./const.js";

/**
 *
 * @param {string} command 获取执行目录
 * @param {Record<string, string>} type 仓库类型
 * @param {Record<string, string>} isDirPath 是否获取文件夹目录相对路径path，否则就是获取gitsubmules配置目录
 * @returns Promise<void>
 */
export function isPages(type) {
  return type === "pages";
}

/**
 *
 * @param {string} command 获取执行目录
 * @param {Record<string, string>} type 仓库类型
 * @param {Record<string, string>} isDirPath 是否获取文件夹目录相对路径path，否则就是获取gitsubmules配置目录
 * @returns Promise<void>
 */
export function getSubmoduleDir(type, isDirPath = false) {
  if (type === "pages") {
    return isDirPath ? "./" : "";
  }
  if (type === "refer") {
    return isDirPath ? submoduleDir : `${submoduleDir}/`;
  }
  return false;
}

/**
 *
 * @param {string} command 执行的命令
 * @param {Record<string, string>} options 配置对象
 * @returns Promise<void>
 */
export async function executeCommand(command, options) {
  return new Promise((resolve) => {
    exec(command, options ?? {}, function (err) {
      if (err) {
        console.log(chalk.red(consolePrefix, err));
      }
      resolve(!err);
    });
  });
}
