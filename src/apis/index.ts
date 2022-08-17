/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:39:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-16 14:12:26
 * @FilePath: \rogra-frontend\src\apis\index.ts
 * @Description: axios封装
 */
/* eslint-disable */
import FormData from "form-data";
import { Response } from "@/interfaces/Response";
import axios, { AxiosResponse } from "axios";

const baseConfig = {
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://f061035.r3.vip.cpolar.cn"
      : "/api",
  timeout: 10000,
};

const api = axios.create(baseConfig);

function formatResponse(res: AxiosResponse): Response {
  console.log(res);
  const { status, data } = res;
  const { message, ...rest } = data;
  const response = {
    success: status >= 200 && status <= 299,
    status,
    message,
    data: rest,
  };
  console.log(response);
  return response;
}

api.interceptors.response.use(
  (res) => {
    return formatResponse(res);
  },
  (err) => {
    return formatResponse(err.response);
  }
);

async function request(
  url: string,
  method: string,
  data?: any,
  token?: string
): Promise<Response> {
  console.log(url, method, data, token);
  if (method === "get") {
    data = { params: data };
  } else if (method === "post") {
    data = { data };
  }
  return (await api({
    url,
    method,
    ...data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })) as unknown as Promise<Response>;
}

export async function upload(url: string, filename: File): Promise<Response> {
  const formData = new FormData();
  formData.append("file", filename);
  return (await api({
    url,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })) as unknown as Promise<Response>;
}

export async function get(
  url: string,
  params?: any,
  token?: string
): Promise<Response> {
  return request(url, "get", params, token);
}

export async function post(
  url: string,
  data?: any,
  token?: string
): Promise<Response> {
  return request(url, "post", data, token);
}
