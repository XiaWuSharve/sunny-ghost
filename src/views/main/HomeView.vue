<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-24 11:12:53
 * @FilePath: \rogra-frontend\src\views\HomeView.vue
 * @Description: 主页
-->
<template>
  <div>
    <carousel-vue></carousel-vue>
    <v-container style="min-height: 400px">
      <v-row>
        <v-col cols="12" sm="8">
          <card-vue title="标题">
            <template v-slot:navigation>
              <v-btn text>go<v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
            <v-card-text>
              <v-btn>执行</v-btn>
            </v-card-text>
          </card-vue>
          <card-vue class="mt-5" title="博客文章">
            <v-card-text>
              <img-word title="React基本使用" src=""
                text="hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!"
                time="2022-01-01" :likes="99" :comments="99" :collections="99">
                <v-btn color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </card-vue>
          <v-card class="mt-5">
            <v-card-text>
              <img-word title="React基本使用" src=""
                text="hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!"
                time="2022-01-01" :likes="99" :comments="99" :collections="99">
                <v-btn color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </v-card>
          <v-card class="mt-5">
            <v-card-text>
              <img-word title="React基本使用" src=""
                text="hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!"
                time="2022-01-01" :likes="99" :comments="99" :collections="99">
                <v-btn color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </v-card>
          <v-card class="mt-5">
            <v-card-text>
              <img-word title="React基本使用" src=""
                text="hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!hello, world!"
                time="2022-01-01" :likes="99" :comments="99" :collections="99">
                <v-btn color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <card-vue title="hello">
            <v-card-text>你好</v-card-text>
          </card-vue>
          <card-vue title="标签云" class="mt-5">
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
                <v-col cols="12" sm="4">example</v-col>
              </v-row>
            </v-card-text>
          </card-vue>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CarouselVue from '@/components/CarouselVue.vue';
import CardVue from '@/components/CardVue.vue';
import ImgWord from '@/components/ImgWord.vue';
export default Vue.extend({
  components: {
    CarouselVue,
    CardVue,
    ImgWord
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