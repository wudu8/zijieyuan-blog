import { exec } from 'child_process';
import chalk from 'chalk';
import { consolePrefix } from './const.js';

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
  })
}
