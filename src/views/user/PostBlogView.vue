<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-06 17:46:08
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-12 16:46:05
 * @FilePath: \rogra-frontend\src\views\user\PostBlogView.vue
 * @Description: 发布博文
-->
<template>
    <div class="d-flex">
        <v-row>
            <v-col cols="12" sm="9">
                <mavon-editor v-model="blog.content"></mavon-editor>
            </v-col>
            <v-col cols="12" sm="3">
                <v-text-field label="文章标题" v-model="blog.title"></v-text-field>
                <v-text-field label="文章摘要" v-model="blog.abstract"></v-text-field>
                <v-switch label="发表状态" v-model="blog.hasPosted"></v-switch>
                <div>
                    博主：
                    <v-chip-group>
                        <v-chip></v-chip>
                    </v-chip-group>
                </div>
                <v-btn block :loading="loading" @click="post_blog">发布</v-btn>
            </v-col>
        </v-row>
        <v-navigation-drawer permanent right>
            <v-list>

            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import { postBlog } from '@/apis/blog';
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            blog: {
                title: '',
                abstract: '',
                content: '',
                hasPosted: true,
                tags: [],
                authors: [],
            },
            loading: false,
        }
    },
    methods: {
        async post_blog() {
            this.loading = true;
            const res = await postBlog(this.blog, this.$store.getters.getAccessToken);
            this.$store.commit('showMessage', res);
            this.loading = false;
        }
    },
})
</script>