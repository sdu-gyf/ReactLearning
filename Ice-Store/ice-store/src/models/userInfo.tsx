/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-25 15:31:14
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 16:31:35
 */
import userService from '@/services/login.service'
export default {
    // 定义 model 的初始 state
    state: {
      userName: '',
      userCode: '',
      accessToken:'',
      avatarUrl:''
    },
  
    // 定义改变该模型状态的纯函数
    reducers: {
      update (prevState, payload) {
        return {
          ...prevState,
          ...payload,
        };
      },
    },
  
    // 定义处理该模型副作用的函数
    effects: (dispatch) => ({
      async getUserInfo(string) {
          const userName = string.split('?')[0];
          const password = string.split('?')[1];
          const data = await userService.getUser(userName, password);
          dispatch.userInfo.update(data.data);
      },
    }),
  };