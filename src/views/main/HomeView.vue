<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 11:14:06
 * @FilePath: \rogra-frontend\src\views\HomeView.vue
 * @Description: 主页
-->
<template>
  <div>
    <v-parallax height="600" src="@/assets/background/太阳.png">
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <div class="text-h1">Long Long Way To Go</div>
          <div class="text-h6 mt-8 font-weight-black">感谢来访我们的小站！</div>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="mt-16" style="min-height: 400px">
      <v-row>
        <v-col cols="12" sm="8">
          <template v-for="(blog, index) in blogs">
            <card-vue v-if="!index" :key="blog" title="博客文章">
              <v-card-text>
                <img-word :title="blog.title" src="" :text="blog.abstract" :time="blog.createdAt"
                  :likes="blog.likeCount" :comments="1" :collections="blog.collectCount">
                  <v-btn :to="`/blog/${blog._id}`" color="primary">go<v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </img-word>
              </v-card-text>
            </card-vue>
            <v-card v-else :key="blog._id" class="mt-5">
              <v-card-text>
                <img-word :title="blog.title" src="" :text="blog.abstract" :time="blog.createdAt"
                  :likes="blog.likeCount" :comments="1" :collections="blog.collectCount">
                  <v-btn :to="`/blog/${blog._id}`" color="primary">go<v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </img-word>
              </v-card-text>
            </v-card>
          </template>
          <v-btn :loading="loading" @click="load_more" class="mt-5" block>加载更多</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card>
            <v-list>
              <template v-for="(blogger, index) in bloggers">
                <v-divider :key="blogger.name" v-if="index !== 0" inset></v-divider>
                <id-card-vue :key="blogger.name" :name="blogger.name" :avatar="blogger.avatar"
                  :description="blogger.description">
                </id-card-vue>
              </template>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <a target="_blank" :class="index ? 'pl-3' : ''" :href="website.spaceURL"
                v-for="(website, index) in websites" :key="website.baseURL" icon>
                <v-img sizes="32" :src="website.baseURL + 'favicon.ico'" style="background-color: white"></v-img>
              </a>
            </v-card-actions>
          </v-card>
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
import CardVue from '@/components/CardVue.vue';
import ImgWord from '@/components/ImgWord.vue';
import IdCardVue from '@/components/IdCard.vue';
import { getBlog } from '@/apis/blog';
import { Blog, ImgWordBlog } from '@/interfaces/blog/Blog';
export default Vue.extend({
  components: {
    CardVue,
    ImgWord,
    IdCardVue,
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
      websites: [
        { baseURL: 'https://www.bilibili.com/', spaceURL: 'https://space.bilibili.com/189090159/' },
        { baseURL: 'https://www.github.com/', spaceURL: 'https://github.com/XiaWuSharve' },
        { baseURL: 'https://blog.csdn.net/', spaceURL: 'https://blog.csdn.net/qq_19315559' }
      ],
      bloggers: [
        {
          name: '夏午',
          avatar: 'Sharve.png',
          description: '克服意识形态去承认自己是共产主义者就总能带动一些同志去学习马克思主义。',
        },
        {
          name: '镭镭',
          avatar: 'Rogra.png',
          description: '大家好，这里是可爱又迷人的镭镭！',
        },
      ],
      blogs: [{
        _id: '0',
        title: '内容正在意识中涌现……',
        abstract: '内容正在意识中涌现……',
        content: '内容正在意识中涌现……',
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
      const res = await getBlog<Blog[]>({ page: this.page });
      if (res?.success) {
        const blogs = res.data.map(blog => {
          const { _id, title, abstract, content, visitCount, likeCount, collectCount, createdAt } = blog;
          return { _id, title, abstract, content, visitCount, likeCount, collectCount, createdAt } as unknown as ImgWordBlog;
        });

        this.blogs.splice(this.blogs.length, 0, ...blogs);
        console.log(this.blogs);
        this.page++;
      } else this.$store.commit('showMessage', res);
      this.loading = false;
    }
  },
  async mounted() {
    await this.load_more();
    this.blogs.splice(0, 1);
  },
})
</script>