/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:39:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 15:54:07
 * @FilePath: \rogra-frontend\src\apis\index.ts
 * @Description: axios封装
 */
/* eslint-disable */
import { Response } from "@/interfaces/Response";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.response.use((res) => {
  const { status, statusText, data } = res;
  const response = {
    success: status >= 200 && status <= 299,
    status,
    statusText,
    data,
  };
  return response;
});

async function request(url: string, method: string, data?: any): Promise<Response> {
  if (method === "get") {
    data = { params: data };
  } else if (method === "post") {
    data = { data };
  }
  return api({
    url,
    method,
    ...data,
  }).catch(err => err.response) as Promise<Response>;
}

export async function get(url: string, params?: any): Promise<Response> {
  return request(url, "get", params);
}

export async function post(url: string, data?: any): Promise<Response> {
  return request(url, "post", data);
}
