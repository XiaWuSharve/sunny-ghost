<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-13 15:36:39
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
                :time="new Date('2021-10-10')" :likes="99" :comments="99" :collections="99">
                <v-btn color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </card-vue>
          <v-card v-for="blog in blogs" :key="blog.title" class="mt-5">
            <v-card-text>
              <img-word :title="blog.title" src="" :text="blog.abstract" :time="blog.createdAt" :likes="blog.likeCount"
                :comments="1" :collections="blog.collectCount">
                <v-btn :to="`/blog/${blog._id}`" color="primary">go<v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </img-word>
            </v-card-text>
          </v-card>
          <v-btn :loading="loading" @click="load_more">加载更多</v-btn>
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
import { getBlog } from '@/apis/blog';
export default Vue.extend({
  components: {
    CarouselVue,
    CardVue,
    ImgWord
  },
  data() {
    return {
      page: 0,
      loading: false,
      urls: [
        { name: '文章', route: 'blog' },
        { name: '日记', route: 'diary' },
        { name: '资源', route: 'resource' },
      ],
      blogs: [{
        _id: '0',
        title: 'loading...',
        abstract: 'loading...',
        content: 'loading...',
        visitCount: 1005,
        likeCount: 1005,
        collectCount: 1005,
        createdAt: new Date("2021-10-10T12:00:00")
      }],
    };
  },
  methods: {
    async load_more() {
      this.loading = true;
      const res = await getBlog({ page: this.page });
      if (res?.success) {
        this.blogs.splice(this.blogs.length, 0, ...res.data.blogs);
        console.log(this.blogs);
        this.page++;
      } else this.$store.commit('showMessage', res);
      this.loading = false;
    }
  }
})
</script>