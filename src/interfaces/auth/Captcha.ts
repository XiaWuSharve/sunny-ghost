/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 10:18:21
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:19:30
 * @FilePath: \rogra-frontend\src\interfaces\auth\Captcha.ts
 * @Description: 验证码接口
 */
export interface Captcha {
    data: string;
    hash: string;
}