/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-25 15:29:06
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 16:34:52
 */
import React,{useState} from 'react';
import UserInfo from './userInfo';
import { Box, Input, Button } from '@alifd/next'
import store from '@/store';

const Login = ()=> {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [userName, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [userState, userDispatchers] = store.useModel('userInfo');

    const handleClick=()=>{
        userDispatchers.getUserInfo(userName+'?'+password);
    }

    const handleChange=(e)=>{
        setPassword(e);
        console.log(password);
    }

    return (
        <div>
            {
                isLogin?
                <UserInfo userState={userState}/>
                :
                <Box spacing={20}>
                    <Input placeholder="Medium" aria-label="Medium" aria-labelledby="J_InputMedium" onChange={e=>{setUsername(e)}}/>
                    <Input.Password placeholder="please input password" onChange={handleChange} /><br /><br />
                    <Button onClick={handleClick}>登陆</Button>
                </Box>
            }
        </div>
    )
}
export default Login;