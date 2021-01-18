<!--
 * @Descripttion: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-12 19:45:34
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-18 20:14:08
-->
## React 学习前置知识

原教程使用了 `React` 官方脚手架和 `antd`，我会在学习过程中改为 `飞冰` 框架和 `Fusion` ，并尽量把配置不同的步骤详细地记录下来。
1. JavaScript
2. HTML+CSS
3. Webpack 
4. 安装Node 
5. 官方文档
    - [React中文文档](https://zh-hans.reactjs.org/)
    - [飞冰框架文档](https://ice.work/docs/guide/about)

## 版本说明
*为了**尽可能**减少复现难度，我会**尽可能**把所有使用到的工具/框架/依赖的版本号写明，如果你发现某个工具的版本文档中找不到，并且 `package.json` 中也没有，欢迎给我提 issue ,我会尽快补充，除此之外，我尽量学习每一个部分是新开一个branch，这样可以让你方便地查看我每次的操作，当然如果你只想看 `main` ,分支也没有问题，我会在每一部分学习结束之后把新的 `branch` 给 `merge` 到 `main` 分支上去* 
- System: macOS Big Sur 11.1
- node: 14.15.4 LTS (飞冰官方建议node版本10.x版本或以上，我索性就用目前(2021.1.12)当前最新的LTS版本)
- yarn: 1.22.10
- icejs: 1.14.0
- build-plugin-fusion: 0.1.9
- 其他另见 `./react-demo/package.json`
> 官方建议使用 `nvm` 管理 `node` 版本，但由于我之前接触过 `n` ，所以这里我直接使用了 `n` 作为版本管理工具，如果二者你都没接触过，那么建议使用官方推荐的 `nvm` ，你可以点击[此处](https://cloud.tencent.com/developer/article/1674774)查看二者区别。

## React项目的创建 (基于飞冰)

> [飞冰官方教程](https://ice.work/docs/guide/gui-start)

这里我使用飞冰官方文档中的`使用 CLI 创建应用`

0. 飞冰建议使用 `functional component` 而不是 `class component`， 但是为了前期便于理解一些东西，我还是会使用 `class component` ,如果你现在还不理解两者的区别，可以先照着此教程学习，后面会慢慢明白的。

1. 由于这个项目是学习用，所以我们不使用模板。

    ```yarn create ice react-demo```

    ![选择模板](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-12/hGW7UD-21-21-5U88uK.png)
2. 项目运行

    ```cd react-demo && yarn && yarn start```
3. 运行效果预览
    ![效果预览](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-12/6RAdXh-21-25-rpuxCR.png)

4.目录结构
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

## React 基础知识
### JSX 语法 && BasicLayout 编写
为了保证每一章的内容都可复现，这里直接应该配置 `routes` 以对应不同的章节，但是飞冰已经帮我们做好了这一步。
> [路由配置](https://ice.work/docs/guide/basic/router)

这里开始 `basicLayout` 分支的内容

那我们首先配置 JSX 界面的路由。


*由于是第一次建立路由，这里会写详细配置，等下一次再需要新建路由时，会直接简写为 **“新建xxx的路由”** ，如无特殊说明则基本步骤相同。*
1. 首先在 `src/components` 目录下新建文件夹 `Jsx` 并新建一个入口文件 `index.tsx`，内容作简单初始化。
    ```Typescript
    // 引入 React 核心模块
    import * as React from 'react';

    const Jsx = () => {
        return(
            <div>Hello React</div>
        )
    };
    // 导出 Jsx
    export default Jsx;
    ```
2. 在 `src/pages` 下新建 `learning/Jsx` ，并新建一个入口文件 `index.tsx`, 内容作简单初始化。
    ```Typescript
    import React from 'react';
    // 引入刚刚新建的 Jsx 组件
    import Jsx from '@/components/Jsx';

    const LearningJsx = () => {
    return <Jsx />;
    };
    // 导出 LearningJsx
    export default LearningJsx;
    ```
3. 编辑 `src/routes.tsx` 文件

    ```Typescript
    const routerConfig = [
        {
            // 创建父节点 /learning
            path: '/learning',
            // 子节点
            children: [
            {
                // 路由路径 /learning/Jsx
                path: '/Jsx',
                // 精准匹配
                exact: true,
                // 路由组件
                component: LearningJsx
            }
            ]
        },
        {
            path: '/',
            component: Home,
        },
    ];
    ```
    这里值得说明的是: `/learning` 路由和 `/` 路由是有先后顺序的。
    > 注意：路由有一个按顺序匹配的规则，**从上到下**一旦**命中路由匹配规则**就会**停止遍历**，因此如果你在最前面配置了 `/` 这样一个路由，则所有的路由都会命中该规则，导致其他路由没有效果，所以在开发时要注意路由的顺序以及 `exact` 属性的使用。(飞冰文档)

    配置到这里，如果你去访问 `/learning/Jsx` 的话，你会惊奇发发现报错，这是因为在父节点中我们还需要写一个layout。(此处鸣谢 lhc 学长帮我指出错误!)

    这里的内部逻辑是判断是否有 children ，再去决定是否拿 layout 组件去渲染。具体源码如下，也可点击[此处](https://github.com/alibaba/ice/blob/d744f818a151fa5a24efbdd9d58603b23951e120/packages/plugin-router/src/runtime/Router.tsx#L76)查看
    ```Typescript
    function Routes({ routes, fallback }: RoutesProps) {
        return (
            <Switch>
            {routes.map((route, id) => {
                const { children } = route;

                if (!children) {
                    if (route.redirect) {
                        const { redirect, ...others } = route;
                        return <Redirect key={id} from={route.path} to={redirect} {...others} />;
                    } else {
                        const { component: RouteComponent, ...others } = route;
                        // React does not currently support Suspense when components are being server-side rendered
                        // process.env.__IS_SERVER__: React.RenderToString()
                        // window.__ICE_SSR_ENABLED__: React.hydrate()
                        const RenderComponent = process.env.__IS_SERVER__ || (window as any).__ICE_SSR_ENABLED__
                        ? (props: RouteComponentProps) => <RouteComponent {...props} />
                        : (props: RouteComponentProps) => {
                            return (
                            <React.Suspense fallback={fallback || <div>loading</div>}>
                                <RouteComponent {...props} />
                            </React.Suspense>
                            );
                        };

                        return (
                        <Route
                            key={id}
                            {...others}
                            render={RenderComponent}
                        />
                        );
                    }
                    } else {
                    const { component: LayoutComponent, children, ...others } = route;
                    const RenderComponent = (props: RouteComponentProps) => (
                        <LayoutComponent {...props}>
                        <Routes routes={children} fallback={fallback} />
                        </LayoutComponent>
                    );
                    return (
                        <Route
                        key={id}
                        {...others}
                        render={RenderComponent}
                        />
                    );
                }
            })}
            </Switch>
        );
    }
    ```

    所以，我们正好使用 `Fusion` 写一个 layout 作为不同页面之间的跳转

4. 安装 `Fusion`

    `yarn add build-plugin-fusion --save`

    并在`build.json` 中作出如下修改：
```json
{
  "plugins": [
    ["build-plugin-fusion", {}]
  ]
}
```
5. 在 `src/` 下新建 `layouts/BasicLayout/` ,并新建 `index.tsx` 和 `menuConfig.ts` 文件。

6. 编写 `menuConfig.ts` 文件
    ```Typescript
    const AsideMenuConfig = [
        {
            name: '学习页面',
            path: '/learning',
            children: [
                {
                    name: 'Jsx学习',
                    path: '/learning/Jsx'
                },
            ],
        },
    ]

    export default AsideMenuConfig;
    ```
7. 在 `BasicLayout/` 下新建 `components/PageNav/index.tsx` ,这里由于我们不需要做权限管理，所以不需要 `auth` 参数，对飞冰模板 `Fusion Design Pro TypeScript template.` 进行简单修改，或者直接参照[文档](https://ice.work/docs/guide/basic/menu)说明编写:
    ```Typescript
    import React, { useEffect, useState } from 'react';
    import PropTypes from 'prop-types';
    import { Link, withRouter } from 'ice';
    import { Nav } from '@alifd/next';
    import  AsideMenuConfig  from '../../menuConfig';

    const { SubNav } = Nav;
    const NavItem = Nav.Item;

    export interface IMenuItem {
        name: string;
        path: string;
        icon?: string;
        children?: IMenuItem[];
    }


    function getNavMenuItem(menusData: any[], initIndex?: number | string) {
        if(!menusData) {
            return [];
        }

        return menusData
            .filter(item => item.name && !item.hideInMenu)
            .map((item, index) => {
                return getSubMenuOrItem(item, `${initIndex}-${index}`);
            });
    }

    function getSubMenuOrItem(item: IMenuItem, index?: number | string) {
        if (item.children && item.children.some(child => child.name)) {
            const childrenItems = getNavMenuItem(item.children, index);
            if (childrenItems && childrenItems.length > 0) {
                const subNav = (
                    <SubNav
                        key={item.name}
                        label={item.name}
                    >
                        {childrenItems}
                    </SubNav>
                );
                return subNav;
            }
            return null;
        }
        const navItem = (
            <NavItem key={item.name}>
                <Link to={item.path}>
                    {item.name}
                </Link>
            </NavItem>
        );
        return navItem;
    }

    const Navigation = (props, context) => {
        const [openKeys, setOpenKeys] = useState<string[]>([]);
        
        const { location } = props;
        const { pathname } = location;
        const { isCollapse } = context;

        useEffect(() => {
            const curSubNav = AsideMenuConfig.find((menuConfig) => {
                return menuConfig.children && checkChildPathExists(menuConfig);
            });
            
            function checkChildPathExists(menuConfig) {
                return menuConfig.children.some(child => {
                    return child.children ? checkChildPathExists(child) : child.path === pathname;
                });
            }
            if (curSubNav && !openKeys.includes(curSubNav.name)) {
                setOpenKeys([...openKeys, curSubNav.name]);
            }
        }, [pathname]);

        return (
            <Nav
                type="normal"
                openKeys={openKeys}
                selectedKeys={[pathname]}
                defaultSelectedKeys={[pathname]}
                embeddable
                activeDirection="right"
                hasArrow={false}
                mode={isCollapse ? 'popup' : 'inline'}
                onOpen={setOpenKeys}
            >
                {getNavMenuItem(AsideMenuConfig, 0)}
            </Nav>
        );
    };

    Navigation.contextTypes = {
        isCollapse: PropTypes.bool,
    };

    const PageNav = withRouter(Navigation);

    export default PageNav;
    ```

8. 编写 `BasicLayout/index.tsx` 
    ```Typescript
    import React from 'react';
    import { Shell, ConfigProvider } from '@alifd/next';
    import PageNav from './components/PageNav';

    export default function BasicLayout({
        children,
    }:{
        children: React.ReactNode;
    }) {
        return (
            <ConfigProvider>
                <Shell
                    style={{
                        minHeight: '100vh',
                    }}
                    type="brand"
                    fixedHeader={false}
                >
                    <Shell.Navigation>
                        <PageNav />
                    </Shell.Navigation>
                    <Shell.Content>{children}</Shell.Content>
                </Shell>
            </ConfigProvider>
        )
    }
    ```

9. 修改 `src/routes.ts` 
    ```Typescript
        import JsxLearning from '@/pages/Learning/JsxLearning';
    +   import BasicLayout from '@/layouts/BasicLayout';

        const routerConfig = [
        {
            // 创建父节点 /learning
            path: '/learning',
    +       component: BasicLayout,
            // 子节点
            children: [
            {
    ```

10. 运行项目 并手动跳转到 `/learning/Jsx` ,即可看到效果如下
    ![运行效果图](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-13/Eqp56z-20-24-ncecNp.png)

这里开始 `basicLayout` 分支结束，开始 `Jsx` 分支。

11. Jsx 语法学习，其实这里使用 `飞冰` 框架并不直观，我们可以看 `src/app.tsx` 文件中。
    ```Typescript
    import { runApp, IAppConfig } from 'ice';

    const appConfig: IAppConfig = {
        app: {
            rootId: 'ice-container',
        },
    };

    runApp(appConfig);
    ```
    这里的写法和原版脚手架是不一样的，原版的写法是
    ```ts
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './app';
    // 这里为了统一性我把 root 写为 ice-container , 这里对应实际的id，即 public/index.html 中的容器 div 的id
    ReactDOM.render(<App />, document.getElementById('ice-container'))
    ```
    这里我们以原版分析更好理解，这里的 `<App />` 就是一个组件，我们如果把它写为
    ```ts
    ReactDOM.render(<H1>Hello React</H1>, document.getElementById('ice-container'))
    ```
    实际上也能在页面上渲染出 `Hello React` ,你会发现我们在这句代码中我们同时使用到了标签和 `js` 语法，这个有趣的标签语法既不是字符串也不是 HTML。它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。在 [React文档](https://zh-hans.reactjs.org/docs/introducing-jsx.html)中有着对 Jsx 简单的介绍,如果你想了解关于Jsx更多的内容，可以点击[这里](https://zh-hans.reactjs.org/docs/jsx-in-depth.html)。

### React 渲染 
*绝了 这里吐槽下 不知道是飞冰的问题还是react本身的问题 一模一样的代码 第一遍写报错 重写一遍就正常 太离谱了 浪费了我半个小时的时间。*
1. 按照前面的步骤新建 `component` 和 `page` ,并修改 `menuConfig.ts` 和 `routes.ts` 。

2. 新建 `Render/renderTime.tsx` 
    ```ts
    import * as React from 'react';
    import ReactDOM from 'react-dom';

    const RenderTime = () => {

        function tick() {
            // 如果一个标签需要换行，需要()包裹住
            const element = (
                <div>
                    <h2>It is { new Date().toLocaleTimeString() }</h2>
                </div>
            )
            if (!document.getElementById('renderTime')) {
                console.log('未找到dom')
            } else {
                // 找到页面中 id 为 renderTime 的dom元素进行渲染
                ReactDOM.render(element, document.getElementById('renderTime'));
            }
        }
        // 每秒触发一次
        setInterval(tick, 1000);
        // 要有个返回值，不然会报错，但是实际上这个 <div> 并不能渲染出来，原因是上面的 ReactDOM.render 已经强制渲染了
        return <div></div>;
    };
    // 导出 Jsx
    export default RenderTime;
    ```
3. 在 `Render/index.tsx` 中作修改
    ```ts
    import * as React from 'react';
    import RenderTime from './renderTime';

    const Render = () => {

        return(
            <div>
                <div>这是学习render</div>
                <div id='renderTime'>
                    <RenderTime />
                </div>
            </div>
        );
    };
    // 导出 Jsx
    export default Render;
    ```

    至此我们就可以在页面上看到效果了
    ![render效果](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-13/rhtgwO-21-38-G3k8Hq.png)
    
    
### React 基础组件
组件我们在之前的步骤中已经创建过很多个了，创建组件主要有两种方式，一种是使用类创建，一种是使用 `Hooks` 创建，这里只介绍使用类创建

使用类创建和我们之前创建组件的方式不太一样，主要是飞冰给我们封装了一下，在飞冰中的写法是这样的
```ts
import * as React from 'react';

const MyComponent = () => {
    return(
        <div>
            Hello MyComponent
        </div>
    );
};

// 导出 Jsx
export default MyComponent;
```
而完整的写法是这样的
```ts
import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>Hello ComponentLearning</div>
        )
    }
}
export default MyComponent;
```
另外这里贴一个之前逛 Github Trending 的时候看到的开源项目，做了很多的 React Hooks ,[链接](https://github.com/streamich/react-use),还有中文文档，有兴趣的可以了解下。

### Prop
上一章我们写到了 component，但是目前为止我们每个页面都差不多，并且大体结构都一样，我们每次都重写了内容，这其实很不符合 `React` 组件可复用的理念，之前我都是故意这么写的，这一章节我会使用 props 这个概念对之前对代码进行重构。

首先什么是 `Props` ，我们还是以代码为例。新建 `props` 相关的组件和页面并配置路由和菜单。

可以看到这一个界面
![Hello Props](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/4wc0MB-20-21-6p9ZUW.png)

细心的你肯定已经观察到了，我们每次写 `hello xxx`都要重写一遍，而这显然是可以复用的，我们只需要改变 `xxx` 的值就可以。那么接下来就来使用 `Props` 重构之前的代码。
1. 在 `components` 下新建 `Hello` 组件。

    ```ts
    import React from 'react';

    type Props = {
        hello: string;
    }

    export default class Hello extends React.Component<Props, {}> {
    

        render() {
            return(
                <div>
                    Hello { this.props.hello }
                </div>
            )
        }
    }
    ```
2. 在 `pages` 里引用 `Hello`组件。
    ```ts
    import React from 'react';
    import Props from '@/components/Props';
    import Hello from '@/components/Hello';

    const PropsLearning = () => {
        return (
            <div>
                <Props />
                <Hello
                    hello="Props"
                />
            </div>
        )
    };

    export default PropsLearning;
    ```

    其中: hello是自定义字段，对应着我们 `Hello` 组件中的 `this.props.hello` 我们只需要传入 `hello='xxx'`即可让页面现实不同的欢迎语言，相比于之前的写法，效果是完全一样的。目前在 `learning/props` 下你应该可以看到这样的界面。
    ![Hello Props2](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/uBL7gZ-20-44-CfPV5Z.png)

3. 好了，相信你对 `props` 有了一个大致的概念和用法的了解，现在就让我们把 `JsxLearning  Component `  的 **`'pages'`**页面修改为 `Hello` 组件+ `props` 吧。(由于 `Render` 组件较为特殊，我们先不对它进行改动)。

4. 值得注意的是，使用 `props` 进行组件间的数据传输时，数据的流向只能是父组件流向子组件，同时子组件也不能改变 `props` 的值，这很好理解，这就相当于子组件向父组件临时借了一辆车开，你只能使用这辆车，而不能改装这辆车。

### state

1. 首先我们创建一个 `state` 组件如下:
    ```ts
    import React from 'react';
    import Hello from '@/components/Hello';

    export default class State extends React.Component {
        render() {
            return (
                <div>
                    <Hello hello="State"/>
                </div>
            )
        }
    }
    ```
    然后配置对应的 `pages` 路由和菜单。完成之后你的界面应该是这样的
    ![state学习](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/QJ7hCz-21-00-cqjl3S.png)
2. 什么是state, state就是页面中的状态，以前我们操作页面元素的变化都是修改DOM，操作DOM，但是有了 `React` 这种优秀的框架，我们不再推荐操作DOM，页面元素的改变使用 `state` 进行处理。我们在 `state` 组件中进行操作演示。

    ```ts
    import React from 'react';
    import Hello from '@/components/Hello';

    type IState = {
        count: number;
    }

    export default class State extends React.Component<{}, IState> {
        

        constructor(props) {
            super(props);
            // 定义状态
            this.state = {
                count: 10
            }
        }

        render() {
            return (
                <div>
                    <Hello hello="State"/>
                    <p> { this.state.count } </p>
                </div>
            )
        }
    }
    ```
    ![State](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/INHrZk-21-15-TidgiR.png)
    看到这个界面就表示页面能拿到 state 。那我们拿到了 state 之后就可以对数据进行操作，最典型的，增加或者减少，我们可以定义两个 `button` 来对它进行操作。
3. 定义 `increment decrement reset` 三个函数
    ```ts
    import { Button } from '@alifd/next'
    // 老的写法，需要bind(this)
    increment() {
        // setState
        this.setState({
            count: this.state.count+1
        })
    }

    decrement() {
        // setState
        this.setState({
            count: this.state.count-1
        })
    }
    // 尖头函数，不需要bind(this)
    reset=()=> {
        // setState
        this.setState({
            count: 10
        })
    }
    ```
    对应 `Button`，使用 `fusion` 写，上面已经导入了。
    ```html


    <Button type="primary" onClick={ this.increment.bind(this) }>增加</Button>
    <br/><br/>
    <Button type="primary" onClick={ this.decrement.bind(this) }>减小</Button>
    <br/><br/>
    <Button type="primary" onClick={ this.reset }>reset</Button>
    ```
    值得一提的是.bind(this)的应用，在函数里我已经写了注释了，注意用法。
4. state 其实有好多使用场景，这里再介绍一种场景，即根据情况不同页面现实不同的文本。

    ```ts
    handleClick() {
            if(this.state.flag) {
                this.setState({
                    flag: false,
                })
            } else {
                this.setState({
                    flag: true
                })
            }
        }

        render() {
            let showView = this.state.flag? 'flag为真' : 'flag为假'
            return (
                <div>
                    <p> { showView } </p>
                    <Button type="primary" onClick={ this.handleClick.bind(this) }>改变flag</Button>
                </div>
            )
        }
    ```
    此时的页面效果如下，点击 `button` 就可以改变文本
    ![Flag改变](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/kiiEFP-21-40-jFaOk1.png)


5. setState 的同步异步问题，官网对这个问题的描述比较暧昧，官方说在不同情况下会有不同的状态，在可控的情况下是异步，在非可控的情况下是同步。这里先大体有个概念。我们还是以代码为例。
```ts
sync=()=>{
    this.setState({
        count: this.state.count+1
    });
    console.log(this.state.count);
}

render() {
    return (
            <p> setState 是同步还是异步问题 </p>
            <p> { this.state.count } </p>
            <Button type="primary" onClick={ this.sync }>同步执行</Button>
        </div>
    )
}
```
![sync](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/DXcVWI-15-32-1kPPAk.png)

这显然是一个同步的执行结果，每次打印的 `count` 值都是上一次的值而不是改变之后的值，那有没有办法把同步过程改成异步过程呢，其实也很简单

```ts
async1=()=>{
    this.setState({
        count: this.state.count+1
    }, () => {
        console.log(this.state.count);
    });
}
```

我们直接写回调函数就可以，这时候我们看下效果：

![Async](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/JoXaMD-15-36-y7elJw.png)

可能对刚开始学习的人来说这种写法很难受，那有没有什么办法能让异步写法变成同步写法呢？通过 `Promise` 语法糖就可以这个后面会讲到，这里就先不提了。

### **React 生命周期函数** 
生命周期非常非常非常重要，前期不要求理解，后面可以慢慢理解，但是一定要记住

函数列表:
- componentWillMount: 在组件渲染之前执行
- componentDidMount: 在组件渲染之后执行
- shouldComponentUpdate: 返回boolen,true代表允许改变，false代表不允许改变
- componentWillUpdate: 数据在改变之前执行(state, props)
- componentDidUpdate: 数据修改完成(state, props)
- componentWillReveiceProps: props发生改变执行
- componentWillUnmount: 组件卸载前执行

如果你觉得太抽象，可以看下图，下面的代码结合这张图会更好理解

![执行顺序](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/vnpnwY-23-18-OBZLXF.png)

强调下，由于 `React` 版本更新迭代，很多生命周期函数都改名/即将弃用，到时候代码会报 `warning`， 这里为了系统演示先这样写。

这么说非常的抽象，我们以实际代码为例，建立 `Life` 相关组件 页面 路由 菜单设置。
```ts
import React from 'react';
import Hello from '../Hello';
import { Button } from '@alifd/next';

type Istate = {
    count: number;
}

export default class Life extends React.Component<{}, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponent');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeHandle =()=> {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <Hello hello='Life' />
                <div> count: { count }</div>
                <Button type="primary" onClick={ this.changeHandle }>修改</Button>
            </div>
        ) 
    }
}
```
看到这个页面表示成功
![Life 学习](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/gTGsDl-22-37-bfGd3T.png)

我们打开开发者工具进入 `console` 中，刷新页面查看打印值：
![Will Did Mount](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/wHgf2F-22-38-RJEWjQ.png)

可以看到 `componentWillMount componentDidMount` 先后被调用，我们尝试更改 `state`， 点击修改按钮。
![修改按钮](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/zB1Bdp-22-39-0MA8xf.png)
可以看到 `shouldComponent componentWillUpdate componentDidUpdate` 先后被调用。并且 count 变为11。如果我们把 `shouldComponent` 的返回值改为 `false`。
![should](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/LyZ88F-22-44-Q3I9hy.png)
可以看到只执行了 `shouldComponent` 并且 count的值不发生变化。

接下来我们来做 `props` 相关操作看下生命周期函数调用情况，由于 `props` 需要在父子组件间传递，我们需要构造出这样的环境，聪明的你肯定已经想到了 `pages` 是 `component` 的父组件，那么我们就在 `pages/learning/Life/index.tsx` 下文章，这里我使用了飞冰推荐的 `functional component` 和 `hooks` 来实现，如果现在看不懂没有关系，以后会慢慢讲解的。

```ts
import Life from '@/components/Life';
import React, { useState } from 'react';
import { Button } from '@alifd/next';

const LifeLearning = () => {

    const [title, setTitle] = useState('title 1');

    function changeHandle() {
        if (title === 'title 1') {
            setTitle('title 2');
        } else {
            setTitle('title 1')
        }
    }

    return (
        <div>
            <Life title={title}/>
            <Button type="primary" onClick={ changeHandle }>修改</Button>
        </div>
    )
}

export default LifeLearning;
```

同时对 `component/Life/index.tsx` 做出修改,尤其要注意 `shouldComponentUpdate` 一定要把返回值改回 `true` ，要不然是没有效果的
```ts
import React from 'react';
import Hello from '../Hello';

type Istate = {
    count: number;
}

type Props = {
    title: string;
}

export default class Life extends React.Component<Props, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponent');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeHandle =()=> {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <Hello hello='Life' />
                <div> count: { count } - title: { this.props.title }</div>
            </div>
        ) 
    }
}
```
![Props 传递](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/Iokl5P-23-16-q8yNol.png)
可以看到四个生命周期函数的执行顺序。

另外，我们这是点击父组件的 `button` 来修改父节点的 `state`，从而使得传入子节点的 `props` 发生变化，那我们能不能在子节点中改变显示的文本呢？答案是可以的，你可能会问，不是前面说了子节点不能改变 `props` 吗？这里怎么又可以了？ 其实很简单啊，我们通过子节点的 `props` 调用父节点的函数，通过父节点本身的函数修改 `state` 不就可以了吗。我们来具体实现下。

`components/Life/index.tsx` 如下
```ts
import { Button } from '@alifd/next';
import React from 'react';
import Hello from '../Hello';

type Istate = {
    count: number;
}

type Props = {
    title: string;
    handleChildClick();
}

export default class Life extends React.Component<Props, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponent');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeHandle =()=> {
        this.setState({
            count: this.state.count+1
        })
    }

    handleClick() {
        this.props.handleChildClick();
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <Hello hello='Life' />
                <div> count: { count } - title: { this.props.title }</div>
                <Button type="primary" onClick={ this.handleClick.bind(this) }>通过子组件修改 title </Button>
                <br/><br/>
            </div>
        ) 
    }
}
```

`pages/Life/index.tsx` 如下
```ts
import Life from '@/components/Life';
import React, { useState } from 'react';
import { Button } from '@alifd/next';

const LifeLearning = () => {

    const [title, setTitle] = useState('title 1');

    function changeHandle() {
        if (title === 'title 1') {
            setTitle('title 2');
        } else {
            setTitle('title 1')
        }
    }

    return (
        <div>
            <Life title={title} handleChildClick={ changeHandle }/>
            <Button type="primary" onClick={ changeHandle }>修改</Button>
        </div>
    )
}

export default LifeLearning;
```

可能初学者会比较难看懂，我这里稍微解释下，通过子节点改变按钮绑定了 `handleClick` 事件, 然后执行这个方法会调用 `this.props.handleChildClick();` 这个 `handleChildClick` 父节点传入的 `changeHandle` 方法，从而调用 `setTitle` 方法。(这里其实稍微涉及到了点回调函数的内容，这里可以先不管。)

我们看下效果，和在父组件中直接改变是等效的。
![子节点改变](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/nUhsNb-23-43-9mXjd6.png)

这样做有什么好处呢？通过这样我们就可以传值回去了，让我们对代码进行一些简单修改
`components/Life/index.tsx` 如下
```ts
type Props = {
    title: string;
    handleChildClick(data: string);
}

export default class Life extends React.Component<Props, Istate> {
    handleClick() {
        this.props.handleChildClick("子组件的数据");
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <Hello hello='Life' />
                <div> count: { count } - title: { this.props.title }</div>
                <Button type="primary" onClick={ this.handleClick.bind(this) }>通过子组件修改 title </Button>
                <br/><br/>
            </div>
        ) 
    }
}
```

`pages/Life/index.tsx` 如下
```ts
const LifeLearning = () => {

    const [title, setTitle] = useState('title 1');

    function changeHandle(data: string) {
        if(!data) {
            if (title === 'title 1') {
                setTitle('title 2');
            } else {
                setTitle('title 1')
            }
        } else {
            setTitle(data);
        }
    }

    function changeOwnHandle() {
        if (title === 'title 1') {
            setTitle('title 2');
        } else {
            setTitle('title 1')
        }
    }

    return (
        <div>
            <Life title={title} handleChildClick={ changeHandle }/>
            <Button type="primary" onClick={ changeOwnHandle }>修改</Button>
        </div>
    )
}
```
![效果图](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/ZU1YNA-23-53-VPufjk.png)

完美！

那么流程图最左边那条线和中间这条线我们都走完了，还剩下最右边的`componentWillUnmount` 那这个怎么实现呢，我们看他实现条件，要在组件取消挂载的时候才会调用，什么时候会取消挂载呢？非常简单，你点击下菜单跳转到其他界面就好啦！

![Unmount](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-14/Pxhtw6-23-22-1hJRqO.png)

### 条件渲染

在 `React` 中，你可以创建不同的组件封装各种你需要的行为，然后根据应用的不同状态，你可以只渲染对应状态下的部分内容， `React` 中的条件渲染和 `Javascript` 中的一样，使用 `Javascript` 运算符 `if` 或者条件运算符去创建元素来表现当前的状态，然后让 `React` 根据他们来更新 UI。

条件渲染常用的应用场景有两个：
1. 对视图条件进行切换
2. 做缺省值

简单举个例子，对视图条件进行切换最简单对例子就是一个网站登陆前后的变化，登陆前显示请登录，登陆后显示用户头像等信息。

```ts
interface Istate {
    isLogin: boolean;
}

export default class ConditionalRendering extends React.Component<{}, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    clickHandler = () => {
        this.setState({ isLogin: !this.state.isLogin});
    }

    render() {

        let showView = this.state.isLogin ?
        <div>欢迎回来，sdu-gyf</div> :
        <div>请登录</div>

        return (
            <div>
                <Hello hello='conditional rendering' />
                <div>条件渲染示例：{ showView }</div>
                <Button type="primary" onClick={ this.clickHandler }>切换登陆状态</Button>
            </div>
        )
    }
}
```

这时候我们通过点击切换登录状态按钮就可以改变页面元素的显示，当然实际的使用过程中要根据服务器返回值去改变。

![切换登陆状态](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/bMn2xP-16-42-R9QthT.png)

关于缺省值的问题：我们大部分数据都是来源于服务器，所以一开始有些数据是拿不到的，比如用户未登陆状态我们无法显示用户信息。

比如我们定一个 `state` 叫 `names` 里面存放的是用户名，然后我们把它渲染出来
```ts
<div>
    { names.map((element, index) => {
        return <p key={index}>{ element }</p>
    })}
</div>
```

就是这样子

![names](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/IP5qcG-16-49-JmsrcP.png)

但是有一个问题就是，假如用户刚刚登陆，服务器正在处理数据，还没给你返回值，你该显示什么，理论上我们应该显示正在请求数据，让用户等待，我们来做个最暴力的判断。

```ts
interface Istate {
    isLogin: boolean;
    names: string[];
}

export default class ConditionalRendering extends React.Component<{}, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            names: [],
        }
    }

    clickHandler = () => {
        this.setState({ isLogin: !this.state.isLogin});
    }
    
    handleClick=() => {
        if (this.state.names.length === 0) {
            this.setState({
                names: ['sdu', 'gyf']
            });
        } else {
            this.setState({
                names: []
            });
        };
    };

    render() {

        const { names } = this.state;

        let showView = this.state.isLogin ?
        <div>欢迎回来，sdu-gyf</div> :
        <div>请登录</div>

        return (
            <div>
                <Hello hello='conditional rendering' />
                <div>条件渲染示例：{ showView }</div>
                <Button type="primary" onClick={ this.clickHandler }>切换登陆状态</Button>
                {
                    names.length > 0 ?
                        <div>
                            { names.map((element, index) => {
                                return <p key={index}>{ element }</p>
                            })}
                        </div>
                        :
                        <p>正在请求数据，请稍后</p>
                }
                <Button onClick = { this.handleClick }> names数据 { names.length >0 ? '清空': '填充'} </Button>
            </div>
        )
    }
}
```

这样一来我们就完成了一个最简单的缺省值处理

### 列表和 key
这里主要是说一下遍历渲染以及 `key` 的问题，关于遍历渲染其实上一讲已经写过了，这里主要是再来解释下一些细节的东西。
```ts
import React from 'react';

interface Istate {
    userInfo:{
        name: string,
        age: number,
        school: string,
        hobbies: string[],
    }[]
}

export default class ListAndKey extends React.Component<{}, Istate> {

    constructor(state: Istate) {
        super(state);
        this.state = {
            userInfo: [{
                name:'gyf',
                age:20,
                school: '山东大学',
                hobbies: ['bingbing', '摸鱼'],
            },
            {
                name:'bingbing',
                age:30,
                school: '吉林大学',
                hobbies: ['gyf','大胖头鱼'],
            }]
        }
    }

    render() {
        return (
            <div>
                列表渲染：
                <div>
                    <ul>
                        { this.state.userInfo.map((element, index) => {
                            return (<li key={index}>
                                        <span>姓名:{ element.name }</span>
                                        <br/>
                                        <span>年龄:{ element.age }</span>
                                        <br/>
                                        <span>学校:{ element.school }</span>
                                        <br/>
                                        <div>
                                            <span>爱好:</span>
                                            { element.hobbies.map((ele, ind) => {
                                                return (<span key={ind}>
                                                            <span>{ ele }</span>
                                                            <br/>
                                                        </span>)
                                            })}
                                        </div>
                                    </li>)
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
```

这里简单说一下这个代码，这是做了双重遍历，具体效果如下

![双重遍历](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/d2GfPQ-19-03-33yoCR.png)

这里比较重要的两点解释下
1. `map` 函数会出来两个参数 第二个参数是索引，我们在生成 `dom` 的时候需要在最外层传入这个 `index` ，也就是所谓的 `key={index}` ，这是做什么用的呢下面会做具体的介绍。
2. 由于我们是循环套循环，我们内层的参数名一定不能和外层的参数名一样，比如都叫 `element index`。

下面就来具体说下这个 `key={index}` 到底是干嘛用的。我们对代码进行简单修改，让他能添加一条数据：
```ts

clickHandler=()=>{
    this.setState({
        userInfo:this.state.userInfo.concat({
            name:'Asuna',
            age:20,
            school: 'SAO幸存者学校',
            hobbies: ['gyf', 'VRGames']
        })
    })
}

<Button type="primary" onClick={ this.clickHandler }>添加数据</Button>
```

同时我们打开开发者工具找到 `elements` 这一项。点击增加数据按钮，我们会惊奇的发现，只有新增加的数据被重新加载了，之前的数据并没有被重新渲染。

![增加数据渲染](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/upxzSg-19-16-5Ypx89.png)

那 `key` 的意义在哪呢, `setState` 会引起视图重绘，理论上所有的元素都会被重新加载，随着数据越来越多，渲染效率就会越来越低，`key` 的作用就体现出来了，之前的元素并没有发生变化，`key` 代表唯一索引，前面的索引并没有发生变化，只有添加了一个新的 `key` 。这样我们就可以节省渲染资源消耗。

### 受控表单

关于表单主要是有受控表单和非受控表单两种，两者的区别会慢慢说明。我们先来讲受控组件。

什么是受控组件，所谓的受控组件就是它的值是通过 `state` 进行管理的，我们可以在页面任意一个地方读取到这个 `state` 。

我们举个最基本的例子。

```ts
import React from 'react';

interface Istate {
    value: string;
}

export default class FormDemo extends React.Component<{}, Istate> {

    constructor(state) {
        super(state);
        this.state = {
            value:''
        }
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandler=(e)=> {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.value } onChange={ this.onChangeHandler }/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
}
```

我们来看下具体效果：

![受控组件](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/JTC0FR-20-00-dmXkhN.png)

我们能够通过 `state` 拿到输入的值，这是一个值，那我们想拿两个值怎么办？我们还需要实现一个 `onChange` 方法 

```ts
onChangeHandler2=(e)=> {
    this.setState({
        value2: e.target.value
    })
}
<input type="text" value={ this.state.value2 } onChange={ this.onChangeHandler2 }/>
```

![两个受控组件](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-15/EEXFtL-20-03-OkMRYL.png)

那如果我们有很多很多的 `input` 框怎么办？我们得实现每一个 `input` 的 `onChange` 事件才能拿到我们想要的值，那这样用起来就不是很方便，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 `React` 组件传递所有的输入 `state` 。这时候 `React` 为我们提供了非受控组件

### Refs and the DOM

在典型的 `React` 数据流中, `props` 是父组件和子组件交互的唯一方式，但是某些情况下，你需要强制修改子组件，被修改的子组件可能是一个 `React` 组件的实例，也可能是一个 `DOM` 元素，这时候就用到了 `Refs`。

何时使用 `Refs`：
- 管理焦点，文本选择或者媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库

先来看看怎么使用 `Refs` 操作 `DOM`：

```ts
import React from 'react';

export default class RefsAndDom extends React.Component {

    private HelloDiv = React.createRef<HTMLDivElement>();

    componentDidMount() { 
        console.log(this.HelloDiv.current);
        if(this.HelloDiv.current) {
            this.HelloDiv.current.style.color = 'red';
        }
    };

    render() {
        return (
            <div ref={this.HelloDiv}>
                test
            </div>
        );
    };
}
```

这时候我看到的效果应该是这样的
![Refs](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/B8E30Z-13-35-VtsOZD.png)

这就是一个最简单的通过 `Refs` 操作 `DOM` 的 `style` 样式。

### 非受控组件
非受控组件可以解决我们受控组件中每个 `onChange` 事件我们都需要手动实现的痛点，具体来看一个例子，在输入框比较少的情况下，我们可以这样写:
```ts
import React, { createRef } from 'react';
import { Button } from '@alifd/next';

export default class UncontrolledComponent extends React.Component {

    private userName = createRef<HTMLInputElement>();

    clickHandler=()=>{
        if(this.userName.current) {
            console.log(this.userName.current.value);
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref={ this.userName }/>
                <Button type="primary" onClick={ this.clickHandler }>获取信息</Button>
            </div>
        );
    }
}
```

![userName](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/2lHXDz-13-51-AVMrje.png)

这种情况下使用受控组件也可以非常轻易的完成，但是如果我们不只有 `userName`， 还有密码，性别，年龄等等就会比较麻烦，那用非受控组件就可以在工作量很少的情况下完成拓展，这里只增加密码字段作为演示。


```ts
private password = createRef<HTMLInputElement>();
clickHandler=()=>{
        console.log(this.userName.current? this.userName.current.value: '无输入');
        console.log(this.password.current? this.password.current.value: '无输入');
    }
<input type="text" ref={ this.password }/>
```

我们可以看到已经实现了这个效果。

![userName&&password](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/pWjBGq-13-55-ssBikn.png)

关于受控组件和非受控组件，推荐优先使用受控组件，因为它可以通过 `state` 对所有值进行管理，便于不同组件之间值的传递。

### 状态提升

通常，多个组件需要反映相同的变化数据，这时候就需要将共享状态提升到最近的共同父组件中去。

这一部分为了直观演示，我们在 `LiftingStateUp` 组件里面新建 `child1.tsx child2.tsx parent.tsx`。

`child1.tsx 和 child2.tsx` 类似，`child1.tsx` 具体定义如下，`child2.tsx` 请自行修改:

```ts
import React from 'react';
import Hello from '@/components/Hello';

export default class Child1 extends React.Component {
    render() {

        return (
            <div>
                <Hello hello='child1' />
            </div>
        );
    }
}
```

`parent.tsx` 如下:

```ts
import React from 'react';
import Hello from '@/components/Hello';
import Child1 from '@/components/LiftingStateUp/child1';
import Child2 from '@/components/LiftingStateUp/child2';


export default class Parent extends React.Component {
    render() {
        return (
            <div>
                <Hello hello='parent' />
                <Child1 />
                <Child2 />
            </div>
        );
    }
}
```

我们的最终效果应该是这样的

![状态提升](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/p77RV0-14-17-ZJlEOr.png)

我们做一个简单的汇率计算器来解释下这部分内容，其实就是使用 `props` 同时对两个子组件进行传值，两个子组件收到输入值之后对值进行处理并显示。

当然这里只是举个例子，实际上如果要做汇率换算，完全不需要两个组件，使用一个组件就可以做到，我们可以观察到两个子组件代码高度一致，那我们只需要把两者不同的部分使用 `props` 从父组件传入即可。

### 组件组合

这个内容比较简单，最主要是在具体项目中体会一些基本用法，这里只通过简单示例介绍基本概念。

这里直接用代码作示例

```ts
import React from 'react';
import Hello from '@/components/Hello';
import Compose from '@/components/Compose';

const ComposeLearing =()=>{
    return (
        <div>
            <Hello hello='组件组合' />
            <Compose />
        </div>
    );
}

export default ComposeLearing;
```

在 `pages` 中，我们一直是这么写的，即通过自闭和标签+ `props`往子组件传值 ，就比如 `Hello` 组件就是通过 `props` 传入了组件组合这四个字，那我们能不能不这么写呢？我们在 `Compose` 组件换一种写法，不使用自闭和标签。

```html
<Compose>
    我没有使用自闭和
</Compose>
```
在`components`里面我们这样修改
```ts
import React from 'react';

export default class Compose extends React.Component {
    render() {
        return (
            <div>
                { this.props.children? this.props.children : "外部没有传值进来"}
            </div>
        )
    }

```

通过 `this.props.children` 我们就能读到父组件通过非自闭和标签传入的 `props`

![props.children](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/u2GPcT-17-42-g83e9c.png)

假如我们什么都没有传入，那么我们就会看到这样的界面

![children===null](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-18/W0LehR-17-42-Sr6QlX.png)