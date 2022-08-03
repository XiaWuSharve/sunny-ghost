<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-03 15:22:04
 * @FilePath: \rogra-frontend\src\App.vue
 * @Description: 主网页组件
-->
<template>
  <div>
    <v-app-bar height="60" clipped-left app>
      <v-container class="py-0 fill-height">
        <v-btn class="mr-10" width="0" color="grey darken-1" to="/" icon text>
          <v-avatar size="35" color="grey darken-1"></v-avatar>
        </v-btn>
        <v-btn v-for="url in urls_left" :key="url.route" :to="url.route" text>{{ url.name }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-for="url in urls_right" :key="url.route" :to="url.route" text>{{ url.name }}</v-btn>
      </v-container>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
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
          <v-menu top offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs}">
              <v-icon v-on="on" v-bind="attrs">mdi-white-balance-sunny</v-icon>
            </template>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-menu>
          <v-menu top offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-on="on" v-bind="attrs">mdi-map-marker-radius-outline</v-icon>
            </template>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-menu>
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
export default Vue.extend({
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
      ]
    };
  },
})
</script>
