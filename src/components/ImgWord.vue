<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-23 13:57:22
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-23 15:05:47
 * @FilePath: \rogra-frontend\src\components\ImgWordContainer.vue
 * @Description: 图文组件
-->
<template>
    <v-row>
        <v-col cols="4">
            <v-avatar>
                <v-img :src="src"></v-img>
            </v-avatar>
        </v-col>
        <v-col cols="8">
                <v-card-title>{{ title }}</v-card-title>
                <v-card-text style="height: 60px" class="overflow-hidden">{{ text }}</v-card-text>
                <v-card-actions>
                    <v-icon>mdi-clock</v-icon>{{ time }}
                    <v-icon>mdi-clock</v-icon>{{ likes }}
                    <v-icon>mdi-clock</v-icon>{{ comments }}
                    <v-icon>mdi-clock</v-icon>{{ collections }}
                    <v-spacer></v-spacer>
                    <slot></slot>
                </v-card-actions>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        src: String,
        title: String,
        text: String,
        time: Date,
        likes: Number,
        comments: Number,
        collections: Number,
    }
})
</script>