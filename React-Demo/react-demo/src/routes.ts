/*
 * @Description: 路由文件
 * @version: 
 * @Date: 2021-01-12 21:22:08
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 22:03:49
 */
import Home from '@/pages/Home';
import BasicLayout from '@/layouts/BasicLayout';
import JsxLearning from '@/pages/Learning/JsxLearning';
import RenderLearning from '@/pages/Learning/Render';
import ComponentLearning from '@/pages/Learning/Component';
import PropsLearning from '@/pages/Learning/Props';
import StateLearning from '@/pages/Learning/State';
import LifeLearning from '@/pages/Learning/Life';
import ConditionalLearing from '@/pages/Learning/ConditionalRendering'

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
      {
        path: '/props',
        exact: true,
        component: PropsLearning,
      },
      {
        path: '/state',
        exact: true,
        component: StateLearning,
      },
      {
        path: '/life',
        exact: true,
        component: LifeLearning,
      },
      {
        path: '/conditional-rendering',
        exact: true,
        component: ConditionalLearing,
      },
    ]
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
