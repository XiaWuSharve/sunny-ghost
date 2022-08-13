/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-13 20:40:57
 * @FilePath: \rogra-frontend\vue.config.js
 * @Description: vue配置
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://19dfc8d3.cpolar.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
});
