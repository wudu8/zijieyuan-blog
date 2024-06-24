# 字节猿 博客

在线博客地址：[字节猿-个人博客](https://wudu8.github.io/zijieyuan-blog-pages/)

# 说明

为提高自身技术竞争力，我们所学的知识应当沉淀下来，在技术社区中会发现知识永远是碎片化的，而我们总是无法长期记忆这些支持，没有办法在最短的时间内进行复习，所以我们应当有这么个机制来维护自己学过的知识及为其打上自己的注解。

# 启动说明

```bash
# 本地运行
yarn dev
# 打包
yarn docs:build
```
# 部署

对于打包目录zijieyuan-blog-pages是我专门部署到github pages中而设立的，为了提交方便，我直接将打包目录设置为了 git submodule子仓库，打包之后，可以直接提交到对应仓库中，推送上去后github pages会自动更新在线博客的内容。

## 参考文献子仓库命令

- [升级仓库] 命令案例：yarn refer upgrade master 或 yarn refer u master
- [检查并更新仓库] 命令案例：yarn refer 或 yarn refer check 或 yarn refer c
- [添加仓库] 命令案例：yarn refer add git@github.com:wudu8/zijieyuan-blog.git 或 yarn refer a git@github.com:wudu8/zijieyuan-blog.git
- [删除仓库] 命令案例：yarn refer rm es6tutorial

操作完子仓库后，请执行库更新命令

```bash
yarn docs:thirdpart
```



