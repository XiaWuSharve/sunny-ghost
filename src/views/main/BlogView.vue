<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-24 09:51:07
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-13 16:10:05
 * @FilePath: \rogra-frontend\src\views\BlogView.vue
 * @Description: 博文页面
-->
<template>
    <div>
        <v-navigation-drawer clipped app>
            <template v-slot:prepend>
                <v-app-bar flat>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-app-bar>
            </template>
            <v-list-group>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title>b</v-list-item-title>
                    </template>
                    <v-list-item>
                        <v-list-item-content>a</v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list-group>
        </v-navigation-drawer>
        <v-container fluid class="mt-4">
            <v-row>
                <v-col cols="12" sm="8">
                    <v-card>
                        <div>
                            <v-card-title>{{ blog.title }}</v-card-title>
                            <v-card-subtitle>
                                <v-chip class="me-2">
                                    <v-icon small>mdi-clock</v-icon>{{ blog.createdAt }}
                                </v-chip>
                                <v-chip class="me-2">
                                    <v-icon small>mdi-eye</v-icon>{{ blog.visitCount }}
                                </v-chip>
                                <v-chip>
                                    <v-icon small>mdi-star</v-icon>{{ blog.collectCount }}
                                </v-chip>
                            </v-card-subtitle>
                        </div>
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ blog.content }}
                        </v-card-text>
                    </v-card>
                    <card-vue title="评论" class="mt-8">
                        <v-card-text>
                            <v-textarea outlined label="试试吧" auto-grow>

                            </v-textarea>
                            <v-btn block>发表</v-btn>
                        </v-card-text>
                        <v-divider class="my-4"></v-divider>
                        <v-card-text>
                            <v-card outlined flat class="pa-4 d-flex">
                                <v-avatar size="100">
                                    <v-img src="#">

                                    </v-img>
                                </v-avatar>
                                <v-sheet width="100%">
                                    <v-sheet min-height="100">c</v-sheet>
                                    <div>b</div>
                                </v-sheet>
                            </v-card>
                        </v-card-text>

                    </card-vue>
                </v-col>
                <v-col cols="12" sm="3">
                    <card-vue title="see more" style="position: fixed; width: 40vh;">
                        <v-btn>秘密</v-btn>
                    </card-vue>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { getBlog } from '@/apis/blog'
import CardVue from '@/components/CardVue.vue'
import { Blog } from '@/interfaces/blog/Blog'
import Vue from 'vue'
export default Vue.extend({
    components: { CardVue },
    data() {
        return {
            blog: {
                title: '',
                abstract: '',
                createdAt: new Date('2021-10-10T12:00:00'),
                visitCount: 1005,
                collectCount: 1005,
                content: '',
            }
        }
    },
    // watch: {
    //     async $route(to) {
    //         console.log(to);

    //     }
    // },
    async mounted() {
        const res = await getBlog({ id: this.$route.params.id });
        if (res?.success) {
            let { title, abstract, createdAt, visitCount, collectCount, content } = res.data.blog as Blog;
            title = title || '';
            abstract = abstract || '';
            createdAt = createdAt || new Date('2021-10-10T12:00:00');
            visitCount = visitCount || 1005;
            collectCount = collectCount || 1005;
            this.blog = { title, abstract, createdAt, visitCount, collectCount, content };
        } else this.$store.commit('showMessage', res);
    },
})
</script>