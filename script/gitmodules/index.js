/**
 * 第三方参考文献submodule命令：
 * 升级Git Submodule仓库，命令案例：yarn refer upgrade master 或 yarn refer u master
 * 检查并更新Git Submodule仓库，命令案例：yarn refer 或 yarn refer check 或 yarn refer c
 * 添加Git Submodule仓库，命令案例：yarn refer add git@github.com:wudu8/zijieyuan-blog.git 或 yarn refer a git@github.com:wudu8/zijieyuan-blog.git
 * 删除Git Submodule仓库，命令案例：yarn refer rm es6tutorial
 * 
 * 打包仓库submodule命令：
 * 升级仓库，命令案例：yarn pages upgrade zijieyuan-blog-pages master 或 yarn pages u zijieyuan-blog-pages master
 * 检查并更新Git Submodule仓库，命令案例：yarn pages 或 yarn pages check 或 yarn refer c
 * 添加Git Submodule仓库，命令案例：yarn pages add git@github.com:wudu8/zijieyuan-blog-pages.git 或 yarn pages a git@github.com:wudu8/zijieyuan-blog-pages.git
 * 删除Git Submodule仓库，命令案例：yarn pages rm zijieyuan-blog-pages
 */

import { checkSubmodule } from "./checkSubmodule.js";
import { upgradeSubmodule } from "./upgradeSubmodule.js";
import { addSubmodule } from "./addSubmodule.js";
import { rmSubmodule } from "./rmSubmodule.js";
import chalk from "chalk";
import { consolePrefix, githubPages } from "./const.js";
import { getSubmoduleDir, isPages } from "./utils.js";

let submoduleType = process.argv[2];
// 操作类型，升级子仓库、新增子仓库、检查并更新子仓库、删除子仓库
let oprType = process.argv[3];
let submoduleName;
let gitUrl;
let version;

function run() {
  if (getSubmoduleDir(submoduleType) === false) {
    console.log(
      chalk.red(consolePrefix, "传参有误，请输入正确的submoduleType")
    );
    return;
  }
  if (!oprType || oprType === "c" || oprType === "check") {
    checkSubmodule(submoduleType);
  } else if (oprType === "u" || oprType === "upgrade") {
    submoduleName = process.argv[4];
    version = process.argv[5];
    upgradeSubmodule(submoduleType, submoduleName, version);
  } else if (oprType === "a" || oprType === "add") {
    gitUrl = process.argv[4];
    addSubmodule(submoduleType, gitUrl);
  } else if (oprType === "rm") {
    submoduleName = process.argv[4];
    rmSubmodule(submoduleType, submoduleName);
  } else {
    console.log(
      chalk.red(consolePrefix, "传参有误，请输入check或update [version]")
    );
  }
}

run();
