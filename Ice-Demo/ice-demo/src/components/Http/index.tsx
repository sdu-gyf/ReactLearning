/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-19 09:33:09
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 11:51:31
 */
import React, { useEffect } from 'react';
import store from './stores/user';

const HttpComponent =()=> {

    const [ userState, userDispatchers ] = store.useModel('user');

    useEffect(() => {
        userDispatchers.fetchUserInfo();
    },[])


    return (
        <div>
            {/* Http 请求: */}
            <span>{userState.name}</span>
        </div>
    );
}

export default HttpComponent;
