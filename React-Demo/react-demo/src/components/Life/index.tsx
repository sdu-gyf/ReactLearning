/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-14 21:58:27
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 23:48:19
 */
import { Button } from '@alifd/next';
import React from 'react';
import Hello from '../Hello';

type Istate = {
    count: number;
}

type Props = {
    title: string;
    handleChildClick(data: string): void;
}

export default class Life extends React.Component<Props, Istate> {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('shouldComponent');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeHandle =()=> {
        this.setState({
            count: this.state.count+1
        })
    }

    handleClick() {
        this.props.handleChildClick("子组件的数据");
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <Hello hello='Life' />
                <div> count: { count } - title: { this.props.title }</div>
                <Button type="primary" onClick={ this.handleClick.bind(this) }>通过子组件修改 title </Button>
                <br/><br/>
            </div>
        ) 
    }
}