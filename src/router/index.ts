/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 11:37:27
 * @FilePath: \rogra-frontend\src\router\index.ts
 * @Description: 路由配置
 */
import MainViewVue from "@/views/MainView.vue";
import HomeViewVue from "@/views/main/HomeView.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: MainViewVue,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeViewVue,
      },
      {
        path: "/blog/:id",
        name: "blog",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/main/BlogView.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthView.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/auth/LoginView.vue"),
      },
      {
        path: "/regist",
        name: "regist",
        component: () => import("../views/auth/RegistView.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/UserView.vue"),
    children: [
      {
        path: "/",
        name: "user_home",
        component: () => import("../views/user/HomeView.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/user/SettingsView.vue"),
      },
      {
        path: "/post_blog",
        name: "post_blog",
        component: () => import("../views/user/PostBlogView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
