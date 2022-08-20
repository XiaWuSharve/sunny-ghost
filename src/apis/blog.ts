import { extract } from "@/utils/extract";
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-09 20:01:48
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 14:26:58
 * @FilePath: \rogra-frontend\src\apis\blog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Blog } from "@/interfaces/blog/Blog";
import { Response } from "@/interfaces/Response";
import { get, post } from ".";
import apis from "./apis";

export async function getBlog<T extends Blog | Blog[]>(
  options: {
    id?: string;
    page?: number;
    begin?: Date;
    end?: Date;
    category_id?: string;
  },
  admin = false,
  token?: string
): Promise<Response<T> | undefined> {
  const { id, page, begin, end, category_id } = options;
  let url, res;
  if (id) {
    url = admin ? apis.admin_blog : apis.user_blog;
    res = (await get<Blog>(`${url}/${id}`, undefined, token)) as Response<T>;
  } else if (page !== undefined) {
    url = apis.user_blogs_page;
    res = extract(
      await get<{ blogs: Blog[] }>(`${url}/${page}`),
      "blogs"
    ) as Response<T>;
  } else if (category_id) {
    url = admin ? apis.admin_blogs : apis.user_blogs_category;
    res = extract(
      await get<{ blogs: Blog[] }>(`${url}/${category_id}`, undefined, token),
      "blogs"
    ) as Response<T>;
  } else if (begin && end) {
    url = apis.user_blog;
    res = extract(
      await get<{ blogs: Blog[] }>(`${url}`, { begin, end }),
      "blogs"
    ) as Response<T>;
  }
  return res;
}

export async function postBlog(
  blog: Blog,
  token: string
): Promise<Response<undefined>> {
  return post<undefined>(apis.admin_blog, blog, token);
}

export async function getCategory(
  id: string,
  admin = false,
  token?: string
): Promise<Response> {
  const url = admin ? apis.admin_category : apis.user_category;
  return get(`${url}/${id}`, undefined, token);
}

export async function getCategories(
  category_id: string,
  admin = false,
  token: string
): Promise<Response> {
  const url = admin ? apis.admin_categories : apis.user_categories;
  return get(`${url}/${category_id}`, undefined, token);
}
