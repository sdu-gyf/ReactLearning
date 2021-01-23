/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 12:11:54
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-23 16:10:51
 */
const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');
module.exports=override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDictionary:'es',
        style:'css',
    }),
    addDecoratorsLegacy()
);