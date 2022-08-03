/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-29 11:52:42
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 17:49:17
 * @FilePath: \rogra-frontend\src\interfaces\Response.ts
 * @Description: 响应接口
 */
export interface Response {
    status: number,
    message: string;
    success: boolean;
    data: any;
}