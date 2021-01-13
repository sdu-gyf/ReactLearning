<!--
 * @Descripttion: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-12 19:45:34
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 20:25:44
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
*为了**尽可能**减少复现难度，我会**尽可能**把所有使用到的工具/框架/依赖的版本号写明，如果你发现某个工具的版本文档中找不到，并且 `package.json` 中也没有，欢迎给我提 issue ,我会尽快补充* 
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

那我们首先配置 JSX 界面的路由。

*由于是第一次建立路由，这里会写详细配置，等下一次再需要新建路由时，会直接简写为 **“新建xxx的路由”** ，如无特殊说明则基本步骤相同，文件初始化内容每次都会附上。*
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
7. 在 `BasicLayout/` 下新建 `components/PageNav/index.tsx` ,这里由于我们不需要做权限管理，所以不需要 `auth` 参数，对飞冰模板 `Fusion Design Pro TypeScript template.` 进行简单修改，或者直接参照(文档)[https://ice.work/docs/guide/basic/menu]说明编写:
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

