/*
 * @Description: 路由文件
 * @version: 
 * @Date: 2021-01-12 21:22:08
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 22:02:30
 */
import Home from '@/pages/Home';
import BasicLayout from '@/layouts/BasicLayout';
import JsxLearning from '@/pages/Learning/JsxLearning';
import RenderLearning from '@/pages/Learning/Render';
import ComponentLearning from '@/pages/Learning/Component';

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
      },
      {
        path: '/render',
        exact: true,
        component: RenderLearning,
      },
      {
        path: '/component',
        exact: true,
        component: ComponentLearning,
      },
    ]
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
