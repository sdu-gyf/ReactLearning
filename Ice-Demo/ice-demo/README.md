<!--
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-18 20:28:18
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 09:28:45
-->

## Simple

> A TypeScript simple template

## 使用

```bash
# 安装依赖
$ npm install

# 启动服务
$ npm start  # visit http://localhost:3333
```

[More docs](https://ice.work/docs/guide/about).

## 目录

```md
├── build/                         # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.[j,t]s
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── components/                # 自定义业务组件
│   │   └── Guide/
│   │       ├── index.[j,t]sx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── index.tsx/
│   ├── global.scss                # 全局样式
│   └── app.[j,t]s[x]              # 应用入口脚本
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```


## 说明
从这个部分开始，由于内容具有连续性，不再每个新的内容都新开一个 `branch`，全部内容都在 `icejs` 这个分支上，学习完成之后统合并到 `main` 分支

### 飞冰学习
## 配置路由 & 引入 Fusion
这部分可以从 `React` 基础知识学习部分的 `README.md` 中看到。

这里需要注意的是，我们默认采用的是 `SPA` ，如果想使用 `MPA` 则可以参考[官方文档](https://ice.work/docs/guide/advance/mpa)
