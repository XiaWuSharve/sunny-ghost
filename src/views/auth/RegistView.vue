<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-25 15:59:27
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:49:19
 * @FilePath: \rogra-frontend\src\views\auth\RegistView.vue
 * @Description: 注册界面
-->
<template>
    <div>
        <div class="d-flex align-center">
            <v-card-title>注册</v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
                已经有账号了？
                <v-hover v-slot="{ hover }">
                    <v-btn text width="50" :color="hover ? 'orange' : ''" to="login">点击登录</v-btn>
                </v-hover>
            </v-card-subtitle>
        </div>
        <v-card-text>
            <v-form>
                <v-text-field label="用户名"></v-text-field>
                <v-text-field label="密码" type="password"></v-text-field>
                <v-text-field label="确认密码" type="password"></v-text-field>
                <div class="d-flex">
                    <v-text-field label="验证码"></v-text-field>
                    <v-avatar width="200" @click="changeCaptcha">
                        <captcha-vue ref="captcha" @callback="captchaComplete"></captcha-vue>
                    </v-avatar>
                </div>
                <v-btn block>注册</v-btn>
            </v-form>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import CaptchaVue from '@/components/CaptchaVue.vue';
import Vue from 'vue'
export default Vue.extend({
    components: { CaptchaVue },
    data() {
        return {
            hash: '',
        }
    },
    methods: {
        changeCaptcha() {
            // eslint-disable-next-line
            this.$refs.captcha.changeCaptcha();
        },

        captchaComplete(hash: string) {
            this.hash = hash;
        }
    },
})
</script>