<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-21 10:17:56
 * @FilePath: \rogra-frontend\src\App.vue
 * @Description: 根组件
-->
<template>
  <v-app>
    <v-app-bar height="60" flat app>
      <v-container class="py-0 fill-height">
        <v-btn class="mr-10" color="grey darken-1" size="32" to="/" icon text>
          <v-avatar color="grey darken-1"></v-avatar>
        </v-btn>
        <v-btn v-for="url in urls_left" :key="url.route" :to="url.route" text>{{ url.name }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-for="url in urls_right" :key="url" :to="url.route" text>{{ url.name }}</v-btn>
      </v-container>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
      <v-btn fixed fab right bottom class="mb-16" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-white-balance-sunny</v-icon>
      </v-btn>
      <v-btn fixed fab right bottom>
        <v-icon>mdi-arrow-collapse-up</v-icon>
      </v-btn>
    </v-main>
    <v-footer min-height="400" app>
      
    </v-footer>
  </v-app>
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
        { name: '登录', route: 'signin' },
        { name: '注册', route: 'signup' },
      ],
    };
  }
})
</script>
