<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-19 13:37:07
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-20 14:51:29
 * @FilePath: \rogra-frontend\src\components\MusicBox.vue
 * @Description: 音乐盒
-->
<template>
    <v-card class="d-inline-flex overflow-hidden" rounded="lg">
        <audio ref="audio" :src="music_url" @ended="current_music++, play()" autoplay hidden></audio>
        <v-dialog width="480" v-model="music_dialog">
            <v-card>
                <v-card-title>我们有歌单</v-card-title>
                <v-card-subtitle>但是怕突然的播放会吓到你</v-card-subtitle>
                <v-card-text>你准备好了吗？</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="closeDialog(true)">没有</v-btn>
                    <v-btn text @click="closeDialog(false)">准备好了</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div>
            <v-card-text class="text-center py-1">
                {{ music_list[current_music].name }}
            </v-card-text>
            <v-divider class="mx-3"></v-divider>
            <div class="d-flex justify-space-around">
                <v-btn :disabled="current_music === 0" @click="current_music--, play()" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn @click="is_muted = !is_muted" icon>
                    <v-icon>{{ is_muted ? 'mdi-bell-off-outline' : 'mdi-bell-outline' }}</v-icon>
                </v-btn>
                <v-btn :disabled="current_music === music_list.length - 1" @click="current_music++, play()" icon>
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
        <v-img :src="music_list[current_music].picUrl" height="70" width="70" contain></v-img>
    </v-card>
</template>

<script lang="ts">
import { getMusic, getMusicList } from '@/apis/music';
import { count } from 'console';
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            music_dialog: true,
            current_music: 0,
            music_url: '',
            is_muted: false,
            music_list: [{ id: 0, name: 'dark', pop: -1, picUrl: '#' }],
        }
    },
    async mounted() {
        const res = await getMusicList();
        if (res.success) {
            const list = res.data;
            const count = list.reduce((pre: Record<string, number>, now): Record<string, number> => {
                pre[now.pop] = (pre[now.pop] + 1) || 1;
                return pre;
            }, {});
            this.music_list = list
                .map((song: any) => {
                    song.priority = Math.random() * count[song.pop];
                    return song;
                }).sort((a, b) => a.priority - b.priority);
        } else this.$store.commit('showMessage', res);
    },
    methods: {
        async play() {
            if (this.current_music == this.music_list.length) this.current_music--;
            else {
                const res = await getMusic(this.music_list[this.current_music].id);
                if (res.success) {
                    this.music_url = res.data;
                    this.$refs.audio.play();
                } else this.$store.commit('showMessage', res);
            }
        },
        closeDialog(muted: boolean) {
            this.$refs.audio.autoplay = true;
            this.is_muted = muted;
            this.music_dialog = false;
            this.play();
        }
    },
    watch: {
        is_muted: function (val) { this.$refs.audio.muted = val; }
    }
})
</script>