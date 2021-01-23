/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-23 15:47:28
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-23 15:59:54
 */
import { observable } from 'mobx';

class UserInfo {
    @observable
    userName = ''

    @observable
    userCode = ''

    @observable
    accessToken = ''

    @observable
    avatarUrl = ''
}

const userInfoStore = new UserInfo();

export default userInfoStore;