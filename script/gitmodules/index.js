/**
 * 检查Git Submodule仓库，命令案例：yarn submodules 或 yarn submodules check 或 yarn submodules c
 * 更新Git Submodule仓库，命令案例：yarn submodules update v1.0.0-beta.5 或 yarn submodules u v1.0.0-beta.5
 * 更新Git Submodule仓库，命令案例：yarn submodules add git@gitee.com:yzc2386166796/zijieyuan-blog.git 或 yarn submodules a git@gitee.com:yzc2386166796/zijieyuan-blog.git
 */

import { checkSubmodule } from './checkSubmodule.js';
import { upgradeSubmodule } from './upgradeSubmodule.js';
import { addSubmodule } from './addSubmodule.js';
import { rmSubmodule } from './rmSubmodule.js';
import chalk from 'chalk';
import { consolePrefix } from './const.js';

const param = process.argv[2];

if (!param || param === 'c' || param === 'check') {
  checkSubmodule();
} else if (param === 'u' || param === 'update') {
  upgradeSubmodule();
} else if (param === 'a' || param === 'add') {
  addSubmodule();
} else if (param === 'rm') {
  rmSubmodule();
} else {
  console.log(chalk.red(consolePrefix, '传参有误，请输入check或update [version]'));
}
