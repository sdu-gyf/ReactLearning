/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-14 20:56:11
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 21:39:53
 */
import React from 'react';
import Hello from '@/components/Hello';
import { Button } from '@alifd/next'

type IState = {
    count: number,
    flag: boolean;
}

export default class State extends React.Component<{}, IState> {
    

    constructor(props) {
        super(props);
        // 定义状态
        this.state = {
            count: 10,
            flag: true
        }
    }

    // 老的写法，需要bind(this)
    increment() {
        // setState
        this.setState({
            count: this.state.count+1
        })
    }

    decrement() {
        // setState
        this.setState({
            count: this.state.count-1
        })
    }
    // 尖头函数，不需要bind(this)
    reset=()=> {
        // setState
        this.setState({
            count: 10
        })
    }

    handleClick() {
        if(this.state.flag) {
            this.setState({
                flag: false,
            })
        } else {
            this.setState({
                flag: true
            })
        }
    }

    render() {
        let showView = this.state.flag? 'flag为真' : 'flag为假'
        return (
            <div>
                <Hello hello="State"/>
                <p> { this.state.count } </p>
                <Button type="primary" onClick={ this.increment.bind(this) }>增加</Button>
                <br/><br/>
                <Button type="primary" onClick={ this.decrement.bind(this) }>减小</Button>
                <br/><br/>
                <Button type="primary" onClick={ this.reset }>reset</Button>
                <p> { showView } </p>
                <Button type="primary" onClick={ this.handleClick.bind(this) }>改变flag</Button>
            </div>
        )
    }
}