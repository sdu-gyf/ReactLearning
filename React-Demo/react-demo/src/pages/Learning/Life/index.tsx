/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-14 22:01:39
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 23:55:38
 */
import Life from '@/components/Life';
import React, { useState } from 'react';
import { Button } from '@alifd/next';

const LifeLearning = () => {

    const [title, setTitle] = useState('title 1');

    function changeHandle(data: string) {
        if(!data) {
            if (title === 'title 1') {
                setTitle('title 2');
            } else {
                setTitle('title 1')
            }
        } else {
            setTitle(data);
        }
    }

    function changeOwnHandle() {
        if (title === 'title 1') {
            setTitle('title 2');
        } else {
            setTitle('title 1')
        }
    }

    return (
        <div>
            <Life title={title} handleChildClick={ changeHandle }/>
            <Button type="primary" onClick={ changeOwnHandle }>修改</Button>
        </div>
    )
}

export default LifeLearning;