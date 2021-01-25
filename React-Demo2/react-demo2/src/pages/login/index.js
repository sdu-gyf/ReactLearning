/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 15:31:13
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 14:56:17
 */
import React, { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UserService from '../../services/login.service';
import { Provider } from 'mobx-react'
import UserInfo from './userInfo'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [userService, setUserService] = useState(new UserService())

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function handleLogin() {
        await userService.login(userName, password).then(res => {
            sessionStorage.setItem('accessToken', res.data.accessToken);
            // console.log(res.data);
            userService.saveUserInfo(res.data);
        })
        setIsLogin(true);
    }


    return (
        <div>
            {
                isLogin ?
                    <Provider store={userService.store}>
                        <Space>
                            <UserInfo />
                        </Space>
                    </Provider>

                    :
                    <Space direction="vertical">
                        <Input size="mid" placeholder="large size" prefix={<UserOutlined />} onChange={handleUserNameChange} />
                        <Input.Password placeholder="input password" onChange={handlePasswordChange} />
                        <Button type='primary' onClick={handleLogin}>登陆</Button>
                    </Space>

            }
        </div>
    )
}

export default Login;