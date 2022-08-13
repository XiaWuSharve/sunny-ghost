/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-07 14:16:54
 * @FilePath: \rogra-frontend\src\main.ts
 * @Description: 入口文件
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store/index";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.config.productionTip = false;
Vue.use(mavonEditor);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
