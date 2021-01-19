/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-19 10:28:26
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 11:49:34
 */
import userService from '../services/user';

export default {
    state: {
        name:'',
        age:'',
        hobbies:[],
    },
    reducer:{
        update(prevState, payload) {
            return {...prevState, ...payload};
        }
    },
    effects: (dispatch)=>({
        async fetchUserInfo() {
            const data = await userService.getUserInfo();
            dispatch.user.update(data);
        }
    })
}
