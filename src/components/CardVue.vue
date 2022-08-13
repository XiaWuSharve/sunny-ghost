<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-22 20:59:21
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-04 10:37:49
 * @FilePath: \rogra-frontend\src\components\CardVue.vue
 * @Description: 自定义带标题卡片
-->
<template>
    <v-card :style="{ position: fixed }">
        <v-container class="fill-height pa-0 pe-4">
            <v-card-title>{{ title }}</v-card-title>
            <v-spacer></v-spacer>
            <slot name="navigation"></slot>
        </v-container>
        <v-divider></v-divider>
        <slot></slot>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        title: String,
        fixed: Boolean,
    }
})
</script>