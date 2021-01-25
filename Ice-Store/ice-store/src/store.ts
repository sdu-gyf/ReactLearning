/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-25 15:31:21
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 16:24:30
 */
import { createStore } from '@ice/store';
import userInfo from '@/models/userInfo';

const store = createStore({
    userInfo,
});

export default store;