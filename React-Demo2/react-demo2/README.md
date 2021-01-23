<!--
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 11:42:41
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-22 15:51:25
-->
## React进阶学习

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

