/*
 * @Description: Jsx 学习
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-12 21:43:18
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 21:36:41
 */
// 引入 React 核心模块
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