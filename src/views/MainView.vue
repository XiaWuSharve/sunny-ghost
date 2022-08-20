<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-20 13:27:56
 * @FilePath: \rogra-frontend\src\views\MainView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 22:56:21
 * @FilePath: \rogra-frontend\src\App.vue
 * @Description: 主网页组件
-->
<template>
  <div>
    <v-app-bar clipped-left dense app>
      <v-btn @click="$router.push({ name: 'home' })" text>
        <v-img src="@/assets/logo.svg"></v-img>
      </v-btn>
      <v-container class="fill-height py-0">
        <v-btn class="fill-height" v-for="url in urls_left" :key="url.route" text>{{ url.name
        }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="fill-height" v-for="url in urls_right" :key="url.route" :to="{ name: url.route }" text>{{ url.name
        }}
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
      <music-box class="music-box"></music-box>
    </v-main>
    <v-footer absolute app>
      <v-sheet width="300" color="transparent" class="d-flex flex-column">
        <div class="text-center">
          Thank For
        </div>
        <div class="d-flex justify-space-between">
          <div v-for="sponsor in sponsors" :key="sponsor.name">
            <!-- <v-img :src="sponsor.src"></v-img> -->
            <v-icon>{{ sponsor.src }}</v-icon>
            {{ sponsor.name }}
          </div>
        </div>
        <div class="d-flex justify-center">
          <v-sheet rounded class="d-flex overflow-hidden">
            <v-sheet color="orange" class="px-3 text-center white--text">
              version
            </v-sheet>
            <v-sheet color="blue" class="px-3 text-center white--text">
              v1.0
            </v-sheet>
          </v-sheet>
        </div>
        <div class="text-center">
          建站日期：
        </div>
      </v-sheet>
      <v-spacer></v-spacer>
      <v-sheet width="300" color="transparent" class="pe-16 d-flex flex-column">
        <v-container class="fill-height pa-0 justify-center">
          <v-tooltip top offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-on="on" v-bind="attrs">mdi-white-balance-sunny</v-icon>
            </template>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-tooltip>
          <v-tooltip top offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-on="on" v-bind="attrs">mdi-map-marker-radius-outline</v-icon>
            </template>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-tooltip>
        </v-container>
        <div class="text-center">
          联系邮箱：sharve@foxmail.com
        </div>
      </v-sheet>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MusicBox from '@/components/MusicBox.vue';
export default Vue.extend({
  components: { MusicBox },
  data() {
    return {
      urls_left: [
        { name: '文章', route: 'blog' },
        { name: '日记', route: 'diary' },
        { name: '资源', route: 'resource' },
      ],
      urls_right: [
        { name: '登录', route: 'login' },
        { name: '注册', route: 'regist' },
      ],
      sponsors: [
        { src: 'mdi-map-marker-radius-outline', name: '夏午' },
        { src: 'mdi-medical-bag', name: '镭镭' },
        { src: 'mdi-movie-open-edit-outline', name: '幽幽' },
      ],
      music_box: 0,
    };
  },
  methods: {
    music_box_offset(hover: boolean) {
      return { position: 'fixed', top: '70vh', left: hover ? 0 : -this.music_box.offsetWidth + 70 + 'px' };
    }
  },
  mounted() {
    this.music_box = document.querySelector('#music_box');
  }
})
</script>

<style lang="sass" scoped>
.music-box
  position: fixed
  top: 70vh
  left: 0
  translate: calc( 70px - 100% ) 0
  transition: all 0.3s
  &:hover
    translate: 0 0
</style>