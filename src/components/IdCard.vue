<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-19 10:01:06
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-19 13:35:45
 * @FilePath: \rogra-frontend\src\components\IdCard.vue
 * @Description: 名片组件
-->
<template>
    <v-list-item>
        <v-list-item-avatar size="100">
            <v-img :src="require(`@/assets/${avatar}`)"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="text-h5">{{ name }}</v-list-item-title>
            <v-row dense>
                <v-col align-self="start" cols="1">
                    <div class="text-h4">“</div>
                </v-col>
                <v-col cols="10" class="text-subtitle-2">{{ description }}</v-col>
                <v-col align-self="end" cols="1">
                    <div class="text-h4">”</div>
                </v-col>
            </v-row>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        name: String,
        avatar: String,
        description: String,
    }
})
</script>