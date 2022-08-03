/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:39:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 10:04:31
 * @FilePath: \rogra-frontend\src\apis\index.ts
 * @Description: axios封装
 */
/* eslint-disable */
import { Response } from "@/interfaces/Response";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
});

function formatResponse(res: AxiosResponse): Response {
  const { status, data } = res;
  const { message, ...rest } = data;
  const response = {
    success: status >= 200 && status <= 299,
    status,
    message,
    data: rest,
  };
  return response;
}

api.interceptors.response.use((res) => {
  return formatResponse(res);
}, err => {
  return formatResponse(err.response);
});

async function request(url: string, method: string, data?: any): Promise<Response> {
  if (method === "get") {
    data = { params: data };
  } else if (method === "post") {
    data = { data };
  }
  return await api({
    url,
    method,
    ...data,
  }) as unknown as Promise<Response>;
}

export async function get(url: string, params?: any): Promise<Response> {
  return request(url, "get", params);
}

export async function post(url: string, data?: any): Promise<Response> {
  return request(url, "post", data);
}
