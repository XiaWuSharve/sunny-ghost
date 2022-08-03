/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-29 13:56:29
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 13:33:04
 * @FilePath: \rogra-frontend\src\store\tip.ts
 * @Description: 全局提示
 */
/* eslint-disable */
import { Response } from "@/interfaces/Response";

const Style = {
  Accepted: {color: 'green', icon: 'mdi-check-circle'},
  Rejected: {color: 'red', icon: 'mdi-close-circle'},
  ServerError: {color: 'purple', icon: 'mdi-web-remove'}
}

const Status: {[key: number]: {color: string, icon: string}} = {
  200: Style.Accepted,
  201: Style.Accepted,

  400: Style.Rejected,
  401: Style.Rejected,

  500: Style.ServerError,
}


export const tip = {
  state: () => ({
    color: "blue",
    icon: "",
    message: "",
    show: false,
  }),
  mutations: {
    showTip(state: any, res: Response) {
      const { message } = res;
      state.message = res.status === 500 ? '服务器错误XAX' : message;
      state.color = Status[res.status].color || "blue";
      state.icon = Status[res.status].icon || "";
      state.show = true;
    },
  },
};
