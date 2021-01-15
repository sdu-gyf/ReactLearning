/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-15 16:27:33
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-15 16:56:59
 */
import React from 'react';
import Hello from '@/components/Hello';
import { Button } from '@alifd/next';

interface Istate {
    isLogin: boolean;
    names: string[];
}

export default class ConditionalRendering extends React.Component<{}, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            names: [],
        }
    }

    clickHandler = () => {
        this.setState({ isLogin: !this.state.isLogin});
    }
    
    handleClick=() => {
        if (this.state.names.length === 0) {
            this.setState({
                names: ['sdu', 'gyf']
            });
        } else {
            this.setState({
                names: []
            });
        };
    };

    render() {

        const { names } = this.state;

        let showView = this.state.isLogin ?
        <div>欢迎回来，sdu-gyf</div> :
        <div>请登录</div>

        return (
            <div>
                <Hello hello='conditional rendering' />
                <div>条件渲染示例：{ showView }</div>
                <Button type="primary" onClick={ this.clickHandler }>切换登陆状态</Button>
                {
                    names.length > 0 ?
                        <div>
                            { names.map((element, index) => {
                                return <p key={index}>{ element }</p>
                            })}
                        </div>
                        :
                        <p>正在请求数据，请稍后</p>
                }
                <Button onClick = { this.handleClick }> names数据 { names.length >0 ? '清空': '填充'} </Button>
            </div>
        )
    }
}