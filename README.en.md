# ZiJieYuan Blog

Online blog address: [ByteApe - Personal Blog]（ https://wudu8.github.io/zijieyuan-blog-pages/ )

# Explanation

To improve our technological competitiveness, the knowledge we have learned should be accumulated. In the technology community, we will find that knowledge is always fragmented, and we always cannot remember these supports in the long term. We cannot review them in the shortest possible time. Therefore, we should have a mechanism to maintain our learned knowledge and provide our own annotations.

# Instructions

```bash
# Local
yarn dev
# build
yarn docs:build
```

# Deployment

For the packaging directory zijieyuan blog pages, I specifically deployed it to GitHub pages. For submission convenience, I directly set the packaging directory as a sub repository of GitSubmodule. After packaging, it can be directly submitted to the corresponding repository. After pushing it, GitHub pages will automatically update the content of the online blog.

## Reference Sub Warehouse Command

-[Upgrade Warehouse] Command Case: Yarn refer upgrade master or Yarn refer u master
-[Check and update warehouse] Command case: yarn refer or yarn refer check or yarn refer c
-[Add Warehouse] Command Example: Yarn refer add git@github.com : wudu8/zijieyuan blog. git or yarn refer a git@github.com :wudu8/zijieyuan-blog.git
-[Delete Warehouse] Command Case: Yarn refer rm es6tutorial

After operating the sub warehouse, please execute the library update command

```bash
yarn docs:thirdpart
```

