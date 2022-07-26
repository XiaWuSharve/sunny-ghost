/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:39:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-21 07:41:52
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
      ? "https://63223976.r3.cpolar.top"
      : "/api",
  timeout: 10000,
};

const api = axios.create(baseConfig);

function formatResponse<T = any>(res: AxiosResponse<any>): Response<T> {
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

api.interceptors.response.use(
  (res) => {
    return formatResponse(res);
  },
  (err) => {
    return formatResponse(err.response);
  }
);

async function request<T = any>(
  url: string,
  method: string,
  data?: any,
  token?: string
): Promise<Response<T>> {
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
  })) as unknown as Promise<Response<T>>;
}

export async function upload<T = any>(
  url: string,
  filename: File
): Promise<Response<T>> {
  const formData = new FormData();
  formData.append("file", filename);
  return (await api({
    url,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })) as unknown as Promise<Response>;
}

export async function get<T = any>(
  url: string,
  params?: any,
  token?: string
): Promise<Response<T>> {
  return request(url, "get", params, token);
}

export async function post<T = any>(
  url: string,
  data?: any,
  token?: string
): Promise<Response<T>> {
  return request(url, "post", data, token);
}
