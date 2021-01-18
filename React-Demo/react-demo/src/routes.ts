/*
 * @Description: 路由文件
 * @version: 
 * @Date: 2021-01-12 21:22:08
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-18 13:44:28
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
import KeyLearning from '@/pages/Learning/Key';
import FormLearning from '@/pages/Learning/Form';
import RefsAndDOMLearning from '@/pages/Learning/RefsAndDOM';
import UncontrolledComponentLearning from './pages/Learning/UncontrolledComponent';

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
      {
        path: '/listandkey',
        exact: true,
        component: KeyLearning,
      },
      {
        path: '/form',
        exact: true,
        component: FormLearning,
      },
      {
        path: '/refsanddom',
        exact: true,
        component: RefsAndDOMLearning,
      },
      {
        path: '/uncontrolledcomponent',
        exact: true,
        component: UncontrolledComponentLearning,
      },
    ]
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
