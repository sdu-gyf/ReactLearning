/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 12:51:08
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-22 12:53:36
 */
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'https://dict.youdao.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};