/*
 * @Description: 菜单数据
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-13 18:53:42
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-18 13:44:20
 */

const AsideMenuConfig = [
    {
        name: '学习页面',
        path: '/learning',
        children: [
            {
                name: 'Jsx学习',
                path: '/learning/Jsx'
            },
            {
                name: 'Render学习',
                path: '/learning/render'
            },
            {
                name: 'Component学习',
                path: '/learning/component'
            },
            {
                name: 'Props学习',
                path: '/learning/props'
            },
            {
                name: 'State学习',
                path: '/learning/state'
            },
            {
                name: 'Life学习',
                path: '/learning/life'
            },
            {
                name: '条件渲染学习',
                path: '/learning/conditional-rendering'
            },
            {
                name: '列表和key',
                path: '/learning/listandkey'
            },
            {
                name: '受控表单',
                path: '/learning/form'
            },
            {
                name: 'Refs和DOM',
                path: '/learning/refsanddom'
            },
            {
                name: '非受控组件',
                path: '/learning/uncontrolledcomponent'
            }
        ],
    },
]

export default AsideMenuConfig;