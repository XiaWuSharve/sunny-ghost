/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-26 16:57:50
 * @FilePath: \rogra-frontend\vue.config.js
 * @Description: vue配置
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
              '/api': ''
            }
        }
    }
}

}
