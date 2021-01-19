/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-19 10:37:19
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 11:40:01
 */
import { createStore, IStoreModels } from 'ice';
import user from '../models/user';

interface IAppUserModel extends IStoreModels {
    user: typeof user;
}

const userModel: IAppUserModel = {
    user,
}

const store = createStore(userModel);

export default store;