## React 学习前置知识

原教程使用了 `React` 官方脚手架，我会在学习过程中改为 `飞冰` 框架，并尽量把配置不同的步骤详细地记录下来。
1. JavaScript
2. HTML+CSS
3. Webpack 
4. 安装Node 
5. 官方文档
    - [React中文文档](https://zh-hans.reactjs.org/)
    - [飞冰框架文档](https://ice.work/docs/guide/about)

## 版本说明
*为了减少复现难度，我会尽可能把所有使用到的工具/框架/依赖的版本号写明* 
- System: macOS Big Sur 11.1
- node: 14.15.4 LTS (飞冰官方建议node版本10.x版本或以上，我索性就用目前(2021.1.12)当前最新的LTS版本)
- yarn: 1.22.10
> 官方建议使用 `nvm` 管理 `node` 版本，但由于我之前接触过 `n` ，所以这里我直接使用了 `n` 作为版本管理工具，如果二者你都没接触过，那么建议使用官方推荐的 `nvm` ，你可以点击[此处](https://cloud.tencent.com/developer/article/1674774)查看二者区别。

## React项目的创建 (基于飞冰)

> [飞冰官方教程](https://ice.work/docs/guide/gui-start)

这里我使用飞冰官方文档中的`使用 CLI 创建应用`

1. 由于这个项目是学习用，所以我们不使用模板。

    ```yarn create ice react-demo```

