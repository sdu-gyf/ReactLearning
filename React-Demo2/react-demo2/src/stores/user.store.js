/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-23 15:47:28
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-24 20:52:26
 */
import { observable } from 'mobx';

class UserInfo {
    @observable
    userName = 'hahaha'

    @observable
    userCode = ''

    @observable
    accessToken = ''

    @observable
    avatarUrl = ''
}


export default UserInfo;