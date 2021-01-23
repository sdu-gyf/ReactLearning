/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-23 12:12:55
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-23 12:48:15
 */
import {get} from '../utils/httpClient'

async function login(username, password){
    return await get('/system/login',{
                userName:username,
                password:password
            })
}

export {login};