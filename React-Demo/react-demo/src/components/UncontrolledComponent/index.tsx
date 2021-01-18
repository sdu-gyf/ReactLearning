/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-18 13:40:50
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-18 13:56:55
 */
import React, { createRef } from 'react';
import { Button } from '@alifd/next';

export default class UncontrolledComponent extends React.Component {

    private userName = createRef<HTMLInputElement>();
    private password = createRef<HTMLInputElement>();

    clickHandler=()=>{
        console.log(this.userName.current? this.userName.current.value: '无输入');
        console.log(this.password.current? this.password.current.value: '无输入');
    }

    render() {
        return (
            <div>
                <input type="text" ref={ this.userName }/>
                <input type="text" ref={ this.password }/>
                <Button type="primary" onClick={ this.clickHandler }>获取信息</Button>
            </div>
        );
    }
}