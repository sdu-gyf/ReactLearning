/*
 * @Description: 菜单数据
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-13 18:53:42
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 21:12:36
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
            }
        ],
    },
]

export default AsideMenuConfig;