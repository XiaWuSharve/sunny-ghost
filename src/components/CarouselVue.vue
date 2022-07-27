<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-21 11:10:08
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-21 12:45:59
 * @FilePath: \rogra-frontend\src\components\carousel.vue
 * @Description: 轮播图组件
-->
<template>
    <v-carousel cycle="5000" height="400" :show-arrows="false" hide-delimiters>
        <v-carousel-item v-for="image in images" :key="image.url">
            <v-sheet color="orange" class="fill-height">
                <v-row align="center" justify="center" class="fill-height">
                    {{ image.description }}
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            images: [
                { url: '', description: '我' },
                { url: '', description: '是' },
                { url: '', description: '夏' },
                { url: '', description: '午' },
            ],
        }
    }
})
</script>