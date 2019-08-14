# frame-creator

- 参考教程：https://juejin.im/post/5d37d982e51d45108c59a635

## 说明

- 基于更快速地构建一个本人喜欢用的初始项目模板，而不是复制粘贴或者从零配置的初衷，搭建本脚手架方便初始化项目。
- 此脚手架可以配置某个指定的gitHub账号，从而从里面下载项目模板（通常使用时设置为自己的账号，里面有自己配置好的模板项目）

- 本脚手架构建的初始项目配置如下：



## 指令说明

```bash
$ frame-create registry 查看当前指向的github账号（默认是HEYAN123）
$ frame-create registry set <GitHubAccount> 配置指向的github账号
$ frame-create init template-name project-name  根据已有模板初始化一个项目
$ frame-create config set <key> <value>  修改配置信息
$ frame-create config get [<key>]  查看配置信息
$ frame-create -v  查看当前版本信息
$ frame -h  查看帮助信息
```