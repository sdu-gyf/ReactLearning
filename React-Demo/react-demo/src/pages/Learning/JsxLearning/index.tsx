/*
 * @Description: Jsx学习
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-12 21:44:57
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 20:51:59
 */
import React from 'react';
// 引入刚刚新建的 Jsx 组件
// import Jsx from '@/components/Jsx';
import Hello from '@/components/Hello';

const JsxLearning = () => {
  return <Hello hello='Jsx' />;
};
// 导出 LearningJsx
export default JsxLearning;
