import React from 'react';
import Hello from '@/components/Hello';
import Child1 from '@/components/LiftingStateUp/child1';
import Child2 from '@/components/LiftingStateUp/child2';

interface Istate {
    money: number;
}

export default class Parent extends React.Component<{}, Istate> {

    constructor(state) {
        super(state);
        this.state = {
            money: 1
        }
    }

    onChangeHandler=(e)=> {
        this.setState({
            money: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Hello hello='parent' />
                人民币：<input type='text' value={this.state.money} onChange={this.onChangeHandler}/>
                <Child1 money={this.state.money}/>
                <Child2 money={this.state.money}/>
            </div>
        );
    }
}