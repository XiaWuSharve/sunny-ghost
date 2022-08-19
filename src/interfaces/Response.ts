/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-29 11:52:42
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 09:27:11
 * @FilePath: \rogra-frontend\src\interfaces\Response.ts
 * @Description: 响应接口
 */
export interface Response<T = any> {
  status: number;
  message: string;
  success: boolean;
  data: T;
}
