/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-18 12:59:24
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-18 13:34:00
 */
import React from 'react';

export default class RefsAndDom extends React.Component {

    private HelloDiv = React.createRef<HTMLDivElement>();

    componentDidMount() { 
        console.log(this.HelloDiv.current);
        if(this.HelloDiv.current) {
            this.HelloDiv.current.style.color = 'red';
        }
    };

    render() {
        return (
            <div ref={this.HelloDiv}>
                test
            </div>
        );
    };
}