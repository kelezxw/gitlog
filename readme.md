<!--
 * @Author: kele
 * @Date: 2018-08-10 11:19:46
 * @LastEditors: kele
 * @LastEditTime: 2021-08-30 10:53:22
 * @Description: readme
-->
# 模拟git记录提交

## 前期准备
+ git仓库，user账号，ssh-key加到user账号（ssh-key是电脑的唯一标识，不同用户不能设置同一个key）
+ 提交记录的人名是从git全局配置里面取得，所以需要配置
+ git config --global user.name "abc"
+ git config --global user.email "abc@abc.cn"
+ 初始化本地仓库，
+ 首先改时间 date \${time}（这个必须设置，虽然在events表里能看到这个记录，但是修改数据库无效，必须是本机时间修改）
+ 然后 git init 
+ 设置仓库地址 git remote add origin git@ip:abc/emergencyplan.git

## 运行
需要以管理员身份运行cmd，切换至目录，然后启动程序:node index.js

## 修改系统时间
cmd命令：
    data 2018-08-10
    time 11:20:32

## 复制文件
cmd命令：
    copy sourceFile targetFile

## git提交
这里有个问题，每个cmd.run命令都是独立存在的，所以提前切换路径是不行的,后面执行git命令的时候必须多命令执行，先切换至项目目录，再执行git命令${projectDir}
+ \${projectDir} && cd \${projectDir} && git add -A
+ \${diskName} && cd \${projectDir} && git commit -m "${params.remark}"
+ \${diskName} && cd \${projectDir} && git push origin master

## 修改数据库对应记录
+ project表
+ push_event_payloads表是提交记录
+ events表是事件记录，比如新人员加入这个事件需要改时间，就在这里


