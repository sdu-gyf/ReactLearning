/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-19 10:21:05
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 11:47:46
 */
import { request } from 'ice';

export default {
    async getUserInfo() {
        return await request('api/users/1')
    }
}