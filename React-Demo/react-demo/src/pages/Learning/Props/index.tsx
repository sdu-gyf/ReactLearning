/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-14 20:10:14
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-14 20:38:41
 */
import React from 'react';
import Props from '@/components/Props';
import Hello from '@/components/Hello';

const PropsLearning = () => {
    return (
        <div>
            <Props />
            <Hello
                hello="Props"
            />
        </div>
    )
};

export default PropsLearning;