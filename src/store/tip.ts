/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-29 13:56:29
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 15:54:36
 * @FilePath: \rogra-frontend\src\store\tip.ts
 * @Description: 全局提示
 */
/* eslint-disable */
import { Tip } from "./../interfaces/store/Tip";
export const tip = {
  state: () => ({
    color: "blue",
    icon: "",
    message: "",
    show: false,
  }),
  mutations: {
    showTip(state: any, tip: Tip) {
      const { message, color, icon } = tip;
      state.message = message;
      state.color = color || "blue";
      state.icon = icon || "";
      state.show = true;
    },
  },
};
