/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 11:16:01
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-06 17:29:43
 * @FilePath: \rogra-frontend\src\store\index.ts
 * @Description: 用户store
 */
/* eslint-disable */

import { Response } from "@/interfaces/Response";

export const user = {
  state: () => ({
    access_token: "",
    is_admin: false,
  }),
  getters: {
    getAccessToken: (state: any) => {
      lazyGet(state);
      return state.access_token;
    },
    getAuth: (state: any) => {
      lazyGet(state);
      return state.is_admin;
    },
  },
  mutations: {
    clearLoginState: clear,
    setLoginSession: (state: any, res: Response) => {
      clear(state);
      sessionStorage.setItem("access_token", res.data.access_token);
      sessionStorage.setItem("is_admin", res.data.is_admin);
    },
    setLoginLocal: (state: any, res: Response) => {
      clear(state);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("is_admin", res.data.is_admin);
    },
  },
};

function lazyGet(state: any) {
  if (state.access_token === "") {
    if (!sessionStorage.getItem("access_token")) {
      sessionStorage.setItem(
        "access_token",
        localStorage.getItem("access_token") || ""
      );
      sessionStorage.setItem(
        "is_admin",
        localStorage.getItem("is_admin") || "false"
      );
    }
    state.access_token = sessionStorage.getItem("access_token");
    state.is_admin = sessionStorage.getItem("is_admin") === "true";
  }
}

function clear(state: any) {
  state.access_token = "";
  state.is_admin = false;
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("is_admin");
  localStorage.removeItem("access_token");
  localStorage.removeItem("is_admin");
}
