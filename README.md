# 如何搭建一个快应用项目

1. 文件结构搭建
2. 项目基础配置：`eslintrc.js`代码校验、`setting.json`代码格式化
3. 使用`Promise`封装`fetchPlugin`

## 1. 文件结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── certificate.pem # 证书文件
│   └── private.pem     # 私钥文件
└── src
│   ├── api             # API接口定义常量
│   ├── assets          # 公用的资源(images/styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   ├── components      # 通用组件
│   ├── config          # 项目基础配置信息
│   ├── constants       # 常量定义
│   ├── pages           # 统一存放项目页面级代码
│   ├── plugins         # 项目通用插件
│   ├── utils           # 项目公共工具
│   ├── typings         # TS 类型定义
│   ├── app.ux          # 应用程序代码的人口文件
│   ├── manifest.json   # 配置快应用基本信息
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 2. 项目基础配置

### `eslintrc.js`配置

`eslint`进行代码校验，`prettier`进行代码格式化。

1. 安装`eslint`

```shell
// 安装
npm i eslint -d
npm i eslint-plugin-prettier -D

// 初始化文件
npx eslint --init
```

具体配置看`eslintrc.js`文件。

2. 提交前做校验`pre-commit`


- `mrm` 是一个自动化工具，它将根据 `package.json` 依赖项中的代码质量工具来安装和配置`lint-staged`
```shell
// 安装mrm、配置lint-staged
npx mrm lint-staged

// 启动git hooks
npx husky install

// 创建 pre-commit 钩子
npx husky add .husky/pre-commit "npx lint-staged"
```
参考文档：

[ESLint 开始，说透我如何在团队项目中基于 Vue 做代码校验](https://juejin.cn/post/6974223481181306888)

[Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范](https://juejin.cn/post/7038143752036155428)

### `setting.json`代码格式化

参考文档：

[VS Code settings.json 10 个高（装）阶（杯）配置！](https://juejin.cn/post/7028358809198264351)

[史上最全vscode配置使用教程](https://zhuanlan.zhihu.com/p/113222681)

[vscode的settings.json最新配置【2021.8.2更新】](https://www.cnblogs.com/jianguo221/p/13041627.html)