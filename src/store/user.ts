/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 11:16:01
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 15:54:51
 * @FilePath: \rogra-frontend\src\store\index.ts
 * @Description: 用户store
 */
/* eslint-disable */

export const user = {
  state: () => ({
    access_code: "",
  }),
  getters: {
    getAccessCode: (state: any) => state.access_code,
  },
  mutations: {
    clearAccessCode: (state: any) => (state.access_code = ""),
    setAccessCode: (state: any, access_code: string) =>
      (state.access_code = access_code),
  },
};
