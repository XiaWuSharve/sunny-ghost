/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:39:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:10:55
 * @FilePath: \rogra-frontend\src\apis\index.ts
 * @Description: axios封装
 */
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  withCredentials: true,
});

async function request(url: string, method: string, data?: any) {
    if(method === 'get') {
        data = { params: data };
    } else if(method === 'post') {
        data = { data };
    }
    return (await api({
        url,
        method,
        ...data,
    })).data;
}

export async function get(url: string, params?: any): Promise<any> {
    return request(url, 'get', params);
}

export async function post(url: string, data?: any): Promise<any> {
    return request(url, 'post', data);
}