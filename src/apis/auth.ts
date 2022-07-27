/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 10:11:12
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:19:50
 * @FilePath: \rogra-frontend\src\apis\auth.ts
 * @Description: 验证apis
 */
import apis from './apis';
import { get } from '.';
import { Captcha } from '@/interfaces/auth/Captcha';

export async function getCaptcha(): Promise<Captcha> {
    return get(apis.captcha);
}
