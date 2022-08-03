/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 11:37:35
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 13:26:45
 * @FilePath: \rogra-frontend\src\utils\validation.ts
 * @Description: 表单验证工具
 */
export const requiredValidation = (v: string) => !!v || "必须填写";
export const lengthValidation = (maxLength: number) => (v: string) =>
  v.length <= maxLength || `长度不超过${maxLength}`;
export const passwordMatchValidation = (str: string) => (v: string) => v === str || '密码不一致'


export const defaultRules = () => [requiredValidation, lengthValidation(20)];
export const confirmPasswordRules = (str: string) => [requiredValidation, lengthValidation(20), passwordMatchValidation(str)];