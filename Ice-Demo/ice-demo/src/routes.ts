/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-18 18:04:32
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 10:19:54
 */
import Home from '@/pages/Home';
import BasicLayout from './layouts/BasicLayout';
import HttpLearning from './pages/Learning/Http';

const routerConfig = [
  {
    path:'/learning',
    component:BasicLayout,
    children: [
      {
        path:'/http',
        exact: true,
        component: HttpLearning
      }
    ]
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
