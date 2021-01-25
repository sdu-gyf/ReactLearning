/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-25 15:29:20
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 16:27:53
 */
import React from 'react';

const UserInfo =(props)=> {
    const {userState} = props;
    return (
        <div>
            UserInfo
            <p>{ userState.userName }</p>
            <p>{ userState.userCode }</p>
            <p>{ userState.avatarUrl }</p>
            <p>{ userState.accessToken }</p>
        </div>
    )
}
export default UserInfo;
