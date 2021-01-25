/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-24 19:37:17
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 14:56:38
 */
import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let { store } = this.props;
        return (
            <div>
                <div>您已登陆</div>
                <p>UserName: {store.userName}</p>
                <p>头像: {store.avatarUrl}</p>
                <p>accessToken: {store.accessToken}</p>
                <p>userCode: {store.userCode}</p>
            </div>
        )
    }
}