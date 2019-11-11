#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 定义变量
destDir="examples/.vuepress/dist"
currTime1=`date +%Y-%m-%d`
currTime2=`date +%H:%M:%S`
commit=":rocket: deploy @${currTime1} ${currTime2}"
repo="https://github.com/wencaizhang/vuepress-theme-gh-style.git"
remoteBranch="gh-pages"

# 进入生成的文件夹
cd $destDir

# 将前端静态文件初始化为 git 仓库并提交
git init
git add -A
git commit -m "$commit"

git push -f $repo master:$remoteBranch

# 回到上次工作目录
cd -