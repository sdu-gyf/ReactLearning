/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-15 19:31:56
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-15 20:03:18
 */
import React from 'react';

interface Istate {
    value: string;
    value2: string;
}

export default class FormDemo extends React.Component<{}, Istate> {

    constructor(state) {
        super(state);
        this.state = {
            value:'',
            value2: ''
        }
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state);
    }

    onChangeHandler=(e)=> {
        this.setState({
            value: e.target.value
        })
    }

    onChangeHandler2=(e)=> {
        this.setState({
            value2: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.value } onChange={ this.onChangeHandler }/>
                    <input type="text" value={ this.state.value2 } onChange={ this.onChangeHandler2 }/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }
}