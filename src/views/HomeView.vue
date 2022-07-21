<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-20 15:25:28
 * @FilePath: \rogra-frontend\src\views\HomeView.vue
 * @Description: 主页
-->
<template>
  <v-container fluid>
    <hello-world />
  </v-container>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue'
export default Vue.extend({
  components: {
    HelloWorld,
  },
  data() {
    return {
      urls: [
        { name: '文章', route: 'blog' },
        { name: '日记', route: 'diary' },
        { name: '资源', route: 'resource' },
      ]
    };
  }
})
</script>