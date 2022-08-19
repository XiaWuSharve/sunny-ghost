/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-11 14:56:28
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 11:15:30
 * @FilePath: \rogra-frontend\src\interfaces\blog\Blog.ts
 * @Description: 博客接口
 */
export interface Blog {
  _id?: string;
  category?: string;
  title?: string;
  abstract?: string;
  content?: string;
  hasPosted?: boolean;
  tags?: string[];
  authors?: string[];
  visitCount?: number;
  likeCount?: number;
  collectCount?: number;
  createdAt?: Date;
}

export type RequiredBlog = Required<Blog>;

export type ImgWordBlog = Omit<
  RequiredBlog,
  "hasPosted" | "tags" | "authors" | "category"
>;
