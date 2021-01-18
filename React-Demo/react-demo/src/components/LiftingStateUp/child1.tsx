import React from 'react';
import Hello from '@/components/Hello';

interface Iprops {
    money: number;
}

export default class Child1 extends React.Component<Iprops, {}> {

    componentDidMount() {
        this.setState({
            money: this.props.money
        })
    }

    render() {
        return (
            <div>
                <Hello hello='child1' />
                {/* 人民币：<input type='text' value={this.state.money}/> */}
                <p>
                    人民币：{ this.props.money * 1 }
                </p>
            </div>
        );
    }
}