/*
 * @Description: 路由文件
 * @version: 
 * @Date: 2021-01-12 21:22:08
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 20:07:52
 */
import Home from '@/pages/Home';
import JsxLearning from '@/pages/Learning/JsxLearning';
import BasicLayout from '@/layouts/BasicLayout';

const routerConfig = [
  {
    // 创建父节点 /learning
    path: '/learning',
    component: BasicLayout,
    // 子节点
    children: [
      {
        // 路由路径 /learning/Jsx
        path: '/Jsx',
        // 精准匹配
        exact: true,
        // 路由组件
        component: JsxLearning,
      }
    ]
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
