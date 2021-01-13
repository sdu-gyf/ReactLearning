/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-13 21:30:05
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 21:43:12
 */
import * as React from 'react';
import ReactDOM from 'react-dom';

const RenderTime = () => {

    function tick() {
        // 如果一个标签需要换行，需要()包裹住
        const element = (
            <div>
                <h2>It is { new Date().toLocaleTimeString() }</h2>
            </div>
        )
        if (!document.getElementById('renderTime')) {
            console.log('未找到dom')
        } else {
            // 找到页面中 id 为 renderTime 的dom元素进行渲染
            ReactDOM.render(element, document.getElementById('renderTime'));
        }
    }
    // 每秒触发一次
    setInterval(tick, 1000);
    // 要有个返回值，不然会报错，但是实际上这个 <div> 并不能渲染出来，原因是上面的 ReactDOM.render 已经强制渲染了
    return <div></div>;
};
// 导出 Jsx
export default RenderTime;