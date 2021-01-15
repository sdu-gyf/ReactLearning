/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-15 18:33:04
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-15 19:13:49
 */
import React from 'react';
import { Button } from '@alifd/next';

interface Istate {
    userInfo:{
        name: string,
        age: number,
        school: string,
        hobbies: string[],
    }[]
}

export default class ListAndKey extends React.Component<{}, Istate> {

    constructor(state: Istate) {
        super(state);
        this.state = {
            userInfo: [{
                name:'gyf',
                age:20,
                school: '山东大学',
                hobbies: ['bingbing', '摸鱼'],
            },
            {
                name:'bingbing',
                age:30,
                school: '吉林大学',
                hobbies: ['gyf','大胖头鱼'],
            }]
        }
    }

    clickHandler=()=>{
        this.setState({
            userInfo:this.state.userInfo.concat({
                name:'Asuna',
                age:20,
                school: 'SAO幸存者学校',
                hobbies: ['gyf', 'VRGames']
            })
        })
    }

    render() {
        return (
            <div>
                列表渲染：
                <div>
                    <ul>
                        { this.state.userInfo.map((element, index) => {
                            return (<li key={index}>
                                        <span>姓名:{ element.name }</span>
                                        <br/>
                                        <span>年龄:{ element.age }</span>
                                        <br/>
                                        <span>学校:{ element.school }</span>
                                        <br/>
                                        <div>
                                            <span>爱好:</span>
                                            { element.hobbies.map((ele, ind) => {
                                                return (<span key={ind}>
                                                            <span>{ ele }</span>
                                                            <br/>
                                                        </span>)
                                            })}
                                        </div>
                                    </li>)
                        })}
                    </ul>
                    <Button type="primary" onClick={ this.clickHandler }>添加数据</Button>
                </div>
            </div>
        );
    }
}