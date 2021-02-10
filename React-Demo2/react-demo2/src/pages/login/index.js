/*
 * @Description:
 * @version:
 * @Author: sdu-gyf
 * @Date: 2021-01-22 15:31:13
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-25 14:56:17
 */
import React, { useEffect, useState } from "react";
import { Input, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import UserService from "../../services/login.service";
import { Provider } from "mobx-react";
import UserInfo from "./userInfo";
import { get } from "../../utils/httpClient";
// import useSound from 'use-sound'
import useSounds from "../../hooks/useSounds";

const Login = () => {
  const [playWordSound] = useSounds();

  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLogin, setIsLogin] = useState(false);
  // const [userService, setUserService] = useState(new UserService())

  // const handleUserNameChange = (e) => {
  //     setUserName(e.target.value)
  // }

  // const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  // }

  // async function handleLogin() {
  //     await userService.login(userName, password).then(res => {
  //         sessionStorage.setItem('accessToken', res.data.accessToken);
  //         // console.log(res.data);
  //         userService.saveUserInfo(res.data);
  //     })
  //     setIsLogin(true);
  // }

  // useEffect(()=>{
  //     useSound("/dictvoice?audio=word&type=1")
  // },[])

  async function handleClick() {
    const data = await get("/dictvoice?audio=word&type=1");
    // $.ajax({
    //   url: "https://dict.youdao.com/dictvoice?audio=word&type=2",
    //   success: function (data) {
    //     $("audio #source").attr("src", data);
    //     $("audio").get(0).load();
    //     $("audio").get(0).play();
    //   },
    // });
  }

  return (
    <div>
      <audio controls>
        <source
          id="source"
          src="https://dict.youdao.com/dictvoice?audio=word&type=2"
          type="audio/mpeg"
        />
      </audio>
      <Button onClick={handleClick}>测试</Button>
      {/* {
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

            } */}
    </div>
  );
};

export default Login;
