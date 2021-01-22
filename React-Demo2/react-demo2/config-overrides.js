/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 12:11:54
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-22 12:14:03
 */
const { override, fixBabelImports } = require('customize-cra');
module.exports=override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDictionary:'es',
        style:'css',
    }),
);