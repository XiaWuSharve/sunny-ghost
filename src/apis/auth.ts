/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 10:11:12
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 10:48:46
 * @FilePath: \rogra-frontend\src\apis\auth.ts
 * @Description: 验证apis
 */
import apis from "./apis";
import { get, post } from ".";
import { Captcha } from "@/interfaces/auth/Captcha";
import { Response } from "@/interfaces/Response";

export async function getCaptcha(): Promise<Captcha> {
  return (await get(apis.captcha)).data;
}

/**
 * @description:
 * @param {string} username
 * @param {string} password
 * @return {*} access_code
 */
export async function login(
  username: string,
  password: string
): Promise<Response> {
  return post(apis.login, { username, password });
}

/**
 * @description: 
 * @param {string} username
 * @param {string} password
 * @param {string} captcha
 * @param {string} hash
 * @return {*} message
 */
export async function regist(username: string, password: string, captcha: string, hash: string): Promise<Response> {
  return post(apis.regist, { username, password, captcha, hash });
}
