import React from 'react';
import Hello from '@/components/Hello';

interface Iprops {
    money: number;
}

export default class Child2 extends React.Component<Iprops> {

    render() {
        return (
            <div>
                <Hello hello='child2' />
                {/* 美元：<input type='text' value={this.state.money}/> */}
                <p>
                    美元:{ this.props.money * 7 }
                </p>
            </div>
        );
    }
}