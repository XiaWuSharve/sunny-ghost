/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-16 10:47:30
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 15:39:16
 * @FilePath: \rogra-frontend\src\apis\music.ts
 * @Description: 音乐api调用
 */
import { Music } from "@/interfaces/music/Music";
import { Response } from "@/interfaces/Response";
import { extract } from "@/utils/extract";
import { get } from ".";
import apis from "./apis";

export async function getMusicList(): Promise<Response<Music[]>> {
  return extract(await get<{ music_list: Music[] }>(apis.music), "music_list");
}

export async function getMusic(id: number): Promise<Response<string>> {
  return extract(await get<{ url: string }>(`${apis.music}/${id}`), "url");
}
