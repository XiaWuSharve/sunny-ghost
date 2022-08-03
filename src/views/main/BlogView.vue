<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-24 09:51:07
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-03 15:57:58
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
                            <v-card-title>title</v-card-title>
                            <v-card-subtitle>
                                <v-chip class="me-2">
                                    <v-icon small>mdi-clock</v-icon>2022-8-3
                                </v-chip>
                                <v-chip class="me-2">
                                    <v-icon small>mdi-eye</v-icon>2
                                </v-chip>
                                <v-chip>
                                    <v-icon small>mdi-star</v-icon>55
                                </v-chip>
                            </v-card-subtitle>
                        </div>
                        <v-divider></v-divider>
                        <v-card-text>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                            text<br>
                        </v-card-text>
                    </v-card>
                    <card-vue title="评论" class="mt-8">
                        <v-card-text>
                            <v-textarea outlined label="试试吧" auto-grow>
                                
                            </v-textarea>
                            <v-btn block>发表</v-btn>
                        </v-card-text>
                    </card-vue>
                </v-col>
                <v-col cols="12" sm="4">
                    <card-vue title="see more">
                        <v-btn>秘密</v-btn>
                    </card-vue>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import CardVue from '@/components/CardVue.vue'
import Vue from 'vue'
export default Vue.extend({
    components: { CardVue }
})
</script>