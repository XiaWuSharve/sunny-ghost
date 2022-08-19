/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-16 10:47:30
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 09:58:31
 * @FilePath: \rogra-frontend\src\apis\music.ts
 * @Description: 音乐api调用
 */
import { Music } from "@/interfaces/music/Music";
import { Response } from "@/interfaces/Response";
import { get } from ".";
import apis from "./apis";

export async function getMusicList(): Promise<
  Response<{ music_list: Music[] }>
> {
  return get<{ music_list: Music[] }>(apis.music);
}

export async function getMusic(id: number): Promise<Response<{ url: string }>> {
  return get<{ url: string }>(apis.music, { id });
}
