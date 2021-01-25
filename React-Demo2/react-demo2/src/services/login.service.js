/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-23 12:12:55
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 14:42:14
 */
import {get} from '../utils/httpClient'
import UserStore from '../stores/user.store'
import { action } from 'mobx';


class UserService {
    constructor() {
        this.store = new UserStore();
    }
    
    async login(username, password) {
        return await get('/system/login',{
            userName:username,
            password:password
        })
    }

    @action
    saveUserInfo(data) {
        this.store.userName = data.userName;
        this.store.accessToken = data.accessToken;
        this.store.avatarUrl = data.avatarUrl;
        this.store.userCode = data.userCode;
    }
}

export default UserService;