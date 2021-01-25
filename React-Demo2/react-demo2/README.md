<!--
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 11:42:41
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-23 15:50:47
-->
## React学习

### 框架搭建 

`npx create-react-app react-demo2`

创建完成第一步我们先把 `src` 下的不必要的文件删除，只留下最基本的文件，方便我们学习。

![0Kgfed-11-52-sMO6WR](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-22/0Kgfed-11-52-sMO6WR.png)

```js
// App.js

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;

```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 数据请求
数据请求我们使用的是 `Axios`，这一章节我们将会自己封装一套 `GET POST` 请求。

首先我们新建一个 `utils` 文件夹，然后新建一个 `httpClient.js  common.js` 

```js
// common.js
export const BACKEND_URL = "http://127.0.0.1:8080";
```
这是定义我们全局的后端地址。

然后我们把目光聚焦到 `httpClient.js`上

再次之前我们引入 `antd`

`yarn add antd --save-dev`

`yarn add react-app-rewired customize-cra --save-dev`

在 `package.json` 中修改如下：
![mCVI7o-12-21-rYu9Gp](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-22/mCVI7o-12-21-rYu9Gp.png)

在跟目录下创建 `config-overides.js`

```js
// config-overides.js
const { override, fixBabelImports } = require('customize-cra');
module.exports=override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDictionary:'es',
        style:'css',
    }),
);
```

这样我们就实现了 `antd` 的 `css` 按需加载。如果你还不明白这是什么的话，只需要跟着这样做就可以，后面会说到。

然后我们编写 `httpClient.js`

```js
import axios from 'axios';
import {BACKEND_URL} from './common'
import {message} from 'antd'

let hide = null;
const instance = axios.create({
    timeout:10000,
    baseURL:BACKEND_URL
})
```
首先我们创建一个 `axios` 实例，设置10s的超时时间，引入后端地址。

```js
instance.defaults.headers.post['Content-Type'] = 'application/json'
```

文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'

```js

let httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}
```
这里我简单列出一些常见的http状态码信息，可以自己去调整配置

```js
/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    config.headers['accessToken'] = sessionStorage.getItem('accessToken') || ''
    hide = message.loading({content: 'Loading...', duration: 0});
    // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
    if (config.url.includes('pur/contract/export')) {
        config.headers['responseType'] = 'blob'
    }
    // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    if (config.url.includes('pur/contract/upload')) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
    hide()
    if (response.success === true) {     // success: true是我与后台的约定，大家可以根据实际情况去做对应的判断
        return Promise.resolve(response.data)
    } else {
        message.error('响应超时')
        return Promise.reject(response.data.message)
    }
}, error => {
    hide()
    if (error.response) {
        // 根据请求失败的http状态码去给用户相应的提示
        let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
        message.error(tips)
        if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
            //针对框架跳转到登陆页面
            this.props.history.push(LOGIN);
        }
        return Promise.reject(error)
    } else {
        message.error('请求超时, 请刷新重试')
        return Promise.reject('请求超时, 请刷新重试')
    }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}
```

这里的注释我写的都比较详细了，我们来看下实际应用

```js
import { Button } from 'antd';
import {get} from './utils/httpClient'




const App=()=> {

  function handleClick() {
    // console.log('1')
    get('/system/login?userName=test&password=test')
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="App">
      Hello
      <Button type="primary" onClick={ handleClick }>你好</Button>
    </div>
  );
}

export default App;

```

![IFTgT7-12-59-fzuTX2](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-22/IFTgT7-12-59-fzuTX2.png)

我们的界面是这样的，点击按钮登陆，查看 http 请求：

![mUSGxC-13-00-gqrJb9](https://gitee.com/stdgyf/upic/raw/master/uPic/2021-01-22/mUSGxC-13-00-gqrJb9.png)

这里我使用了我之前一个项目写的后端，可以查看[这里](https://github.com/sdu-gyf/Logistics-order-management)

另外这里涉及到跨域的问题，这里写一下我的解决方案：

```bash
yarn add http-proxy-middleware --save
```

然后在 `src` 下新建 `setupProxy.js` 的文件

```js
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
```

另外再修改 `BACKEND_URL` 为 `http://127.0.0.1:3000/api`

这样就实现了完美跨域。

这样我们就拿到来用户的 `token`，由于之前的项目是验证 `header`里有没有`accsssToken`， 所以我们在拿到 `token` 之后需要把 `token` 设置到 `header` 里面。

我们在 `httpClient.js` 添加一个方法

```js
export const init=(header, data) =>{
    axios.defaults.headers.common[header] = data;
}
```

我们就可以通过这种方式实现我们的需求。


### 配置路由

首先安装 `react-router-dom` 

```bash
yarn add react-router-dom --save-dev
```

React Router 适用于小型网站，比如 React.js Training，也可以支持 Facebook 和 Twitter 这类大型网站。

对于大型应用来说，一个首当其冲的问题就是所需加载的 JavaScript 的大小。程序应当只加载当前渲染页所需的 JavaScript。有些开发者将这种方式称之为“代码分拆” —— 将所有的代码分拆成多个小包，在用户浏览过程中按需加载。

对于底层细节的修改不应该需要它上面每一层级都进行修改。举个例子，为一个照片浏览页添加一个路径不应该影响到首页加载的 JavaScript 的大小。也不能因为多个团队共用一个大型的路由配置文件而造成合并时的冲突。

路由是个非常适于做代码分拆的地方：它的责任就是配置好每个 view。

React Router 里的路径匹配以及组件加载都是异步完成的，不仅允许你延迟加载组件，并且可以延迟加载路由配置。在首次加载包中你只需要有一个路径定义，路由会自动解析剩下的路径。

Route 可以定义 getChildRoutes，getIndexRoute 和 getComponents 这几个函数。它们都是异步执行，并且只有在需要时才被调用。我们将这种方式称之为 “逐渐匹配”。 React Router 会逐渐的匹配 URL 并只加载该 URL 对应页面所需的路径配置和组件。

如果配合 webpack 这类的代码分拆工具使用的话，一个原本繁琐的构架就会变得更简洁明了。

```js
// App.js
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Login from './pages/login'
import NotFoundPage from './pages/404'

const App=()=> {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/login' component= {Login}></Route>
          <Route component= {NotFoundPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```

我们来实现登陆功能

首先我们新建 `login.service.js`

```js
import {get} from '../utils/httpClient'

async function login(username, password){
    return await get('/system/login',{
                userName:username,
                password:password
            })
}

export {login};
```

这里调用之前封装的 `axios` 来实现登陆接口

```js
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
            sessionStorage.setItem('accessToken', res.data.accessToken）;
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
```

这里使用了一个缺省值，`isLogin` 判断是否登陆，进而给用户显示不同主页(后面会实现自动跳转)，这里值得注意的是`sessionStorage.setItem('accessToken', res.data.accessToken）;` 这里存储了 `accessToken` ,这是我们前端和后端交互的唯一凭证

### 使用mobx存储返回数据

首先我们配置 `mobx` 

```bash
yarn add mobx mobx-react @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties --save-dev
```

在`package.json` 中找到 `babel` 修改如下

```json
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
```

另外我们还需要在 `config-overrides.js`中修改

```js
const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');
module.exports=override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDictionary:'es',
        style:'css',
    }),
    addDecoratorsLegacy()
);
```

接下来我们就来一步一步存储返回的数据

1. 首先我们新建一个`store`用于存储返回数据，新建`src/stores/user.store.js`

```js
import { observable } from 'mobx';

class UserInfo {
    @observable
    userName = 'hahaha'

    @observable
    userCode = ''

    @observable
    accessToken = ''

    @observable
    avatarUrl = ''
}


export default UserInfo;
```

​	这里面的变量都需要使用`observable`修饰，之后导出这类，记得不要导出类的实例（当然如果你很清楚你在干什么的话也可以`new UserInfo()`导出，这个很灵活。）

2. 有了存储的`store` ，我们还需要能修改这个`store`的手段，比如把数据存入`store`或者对`store`内的数据进行修改，我们把这样的业务逻辑统一存放到`service`里面，新建`src/services/login.service.js`

```js
import {get} from '../utils/httpClient'
import UserStore from '../stores/user.store'
import { action } from 'mobx';


class UserService {
    constructor() {
        this.store = new UserStore();
    }
    
    async login(username, password) {
        return await get('/system/login',{
            userName:username,
            password:password
        })
    }

    @action
    saveUserInfo(data) {
        this.store.userName = data.userName;
        this.store.accessToken = data.accessToken;
        this.store.avatarUrl = data.avatarUrl;
        this.store.userCode = data.userCode;
    }
}

export default UserService;
```

​	首先引入`store`，然后由于我们导出的是类而不是类的实例，所以我们需要在`constructor`中实例化这个`store`，然后由于是登陆的`service` ，所以我们首先实现一个登陆接口，`api`地址为`/system/login`，参数为`userName password` ，由于是`GET`方法，我们引入封装好的`get`请求进行编写。

​	然后我们来看`saveUserInfo`这个方法，由于我们需要修改`store`里面的数据，所以我们需要使用`@action` 来修饰这个方法，然后我们就能像正常操作数据一样对数据进行读写。

​	最后我们导出这个`UserService`这个类就可以了。

3. 编写页面逻辑，为了能体现 `mobx`对数据管理的方便性，我们要写子父两个组件 `src/pages/login/index.js`和`src/pages/login/userInfo.js`

首先我们写`index.js`

```js
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
```

​	整个组件使用`hook`编写，比较简洁也比较简单，不做过多介绍，比较重要的一点是不要在`Login` 这个组件里面直接`const userService  = new UserService()`初始化实例，这样每次组件刷新的时候都会把`userService`初始化，从而让变动的数据重制，所以我使用了`state`对`userService`进行管理，当然你也可以在`Login`组件外面`new UserService()` 然后在里面调用，但是何必呢。

​	这里重点说下`<Provider>`这个组件，这才是`mobx`传输数据的关键，通过使用它对子组件进行嵌套就能让里面的子组件都能拿到`store`的数据，子组件通过读取`this.props.xxx`就可以拿到`store`的数据。

4. 接下来是`userInfo.js`

```js
import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let { store } = this.props;
        return (
            <div>
                <div>您已登陆</div>
                <p>UserName: {store.userName}</p>
                <p>头像: {store.avatarUrl}</p>
                <p>accessToken: {store.accessToken}</p>
                <p>userCode: {store.userCode}</p>
            </div>
        )
    }
}
```

这里通过两个注解`@inject和@observer`就可以让数据显示并且实时刷新。

5. 总结下数据流程：首先我们需要有一个容器存放数据，即`store`，然后我们需要能改动数据的方法，即`@action`修饰的函数，为了管理方便我们一般把它存放到同一个`service`里面。然后父组件通过`<Provider>`把`store`的数据传入子组件，子组件通过`this.props和@inject @observer`能拿到数据并显示，并且数据和父组件实时同步。

