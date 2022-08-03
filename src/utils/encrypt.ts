/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-01 18:13:32
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 19:08:14
 * @FilePath: \rogra-frontend\src\utils\encrypt.ts
 * @Description: 加密工具
 */
import md5 from 'md5';

export async function encryptPassword(str: string): Promise<string> {
  return md5(`${str}rogra`);
}