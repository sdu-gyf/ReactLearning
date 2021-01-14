/*
 * @Description: Props学习
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-14 20:24:15
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 20:40:25
 */
import React from 'react';

type Props = {
    hello: string;
}

export default class Hello extends React.Component<Props, {}> {
   

    render() {
        return(
            <div>
                Hello { this.props.hello }
            </div>
        )
    }
}