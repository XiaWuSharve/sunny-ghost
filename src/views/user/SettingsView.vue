<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-04 19:49:38
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-16 13:54:41
 * @FilePath: \rogra-frontend\src\views\user\SettingsView.vue
 * @Description: 用户设置
-->
<template>
    <v-sheet class="pa-10">
        <div class="d-flex align-center">
            <v-text-field class="pe-4" label="密码"></v-text-field>
            <v-btn width="80">保存</v-btn>
        </div>
        <div class="d-flex align-center">
            <v-text-field class="pe-4" label="密码"></v-text-field>
            <v-btn width="80">保存</v-btn>
        </div>
        <div class="d-flex align-center">
            <v-text-field class="pe-4" label="密码"></v-text-field>
            <v-btn width="80">保存</v-btn>
        </div>
        <div>
            <v-file-input accept="image/*" label="更新头像" v-model="image_filename" prepend-icon="mdi-image"></v-file-input>
            <v-btn width="80" @click="update_image">保存</v-btn>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import { upload } from '@/apis'
import apis from '@/apis/apis'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            image_filename: new File([], ''),
        }
    },
    methods: {
        async update_image() {
            console.log(this.image_filename);
            console.log(await upload(apis.file_upload, this.image_filename));
        }
    }
})
</script>