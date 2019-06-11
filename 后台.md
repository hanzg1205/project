1. 交互流程
  [组件{数据渲染,用户交互}]-->[vuex/redux{数据代理}]-->[services{发起请求，拦截器}]-->[mockjs/server{后端}]
2.git流程
    1.远程主分支 master
    2.dev分支
    3.自己的分支
    4.将自己的分支与dev合并，最后将dev分支与master分支合并，master分支是稳定版，不要动
  1.git的常用命令
    1.git init 初始化本地版本库
    2.git status  查看工作区和暂存区的修改
    3.git add . 把工作区所有修改提交到暂存区
    4.git commit -m ”对本次提交的描述“ 把修改从暂存区提交到本地版本库
    5.git log 查看提交历史记录   git refiog  查看所有的历史纪录
    6.git  checkout  -b 分支名  创建并切换分支
    7.git pull :把远程代码拉取下来并和本地合并
    8.git push origin 分支名   把本地仓库的代码推送到远程仓库
3.dva  
    1.什么是dva：
        dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架
    2.怎么安装dva：
        通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。
            npm install dva-cli -g
    3.用dav怎么创建一个新的项目：
        指令：dva new 项目名称
    4.在dev中使用antd：
        指令： npm install antd babel-plugin-import --save