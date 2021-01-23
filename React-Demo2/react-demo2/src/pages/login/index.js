/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 15:31:13
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-23 15:36:04
 */
import React, { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { login } from '../../services/login.service';
import {setHeader} from '../../utils/httpClient'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function handleLogin() {
        const data = await login(userName, password).then(res => {
            sessionStorage.setItem('accessToken', res.data.accessToken);
        })
    }

    return (
        <div>
            {
                isLogin ?
                    <div>您已登陆</div>
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