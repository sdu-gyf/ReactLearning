/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-25 15:29:56
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 16:21:03
 */
import { request } from 'ice';

export default {
    async getUser(userName, password) {
        return await request(`/api/system/login?userName=${userName}&password=${password}`);
    }
}