<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-25 15:59:27
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-01 19:10:10
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
            <v-form ref="form" v-model="valid">
                <v-text-field label="用户名" v-model="username" :rules="defaultRules()"></v-text-field>
                <v-text-field label="密码" type="password" v-model="password" :rules="defaultRules()"></v-text-field>
                <v-text-field label="确认密码" type="password" v-model="confirmPassword"
                    :rules="confirmPasswordRules(password)"></v-text-field>
                <div class="d-flex">
                    <v-text-field label="验证码" v-model="captcha" :rules="defaultRules()" @keydown.enter="regist">
                    </v-text-field>
                    <v-avatar width="200" @click="changeCaptcha">
                        <captcha-vue ref="captcha" @callback="captchaComplete"></captcha-vue>
                    </v-avatar>
                </div>
                <v-btn :loading="loading" :disabled="!valid" @click="regist" block>注册</v-btn>
            </v-form>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { regist } from '@/apis/auth';
import CaptchaVue from '@/components/CaptchaVue.vue';
import { encryptPassword } from '@/utils/encrypt';
import { defaultRules, confirmPasswordRules } from '@/utils/validation';
import Vue from 'vue'
export default Vue.extend({
    components: { CaptchaVue },
    data() {
        return {
            valid: false,
            username: '',
            password: '',
            confirmPassword: '',
            captcha: '',
            hash: '',
            loading: false,
        }
    },
    methods: {
        defaultRules,
        confirmPasswordRules,

        changeCaptcha() {
            // eslint-disable-next-line
            this.$refs.captcha.changeCaptcha();
        },

        captchaComplete(hash: string) {
            this.hash = hash;
            console.log(hash);
        },

        async regist() {
            this.loading = true;
            if (this.$refs.form.validate()) {
                const res = await regist(this.username, await encryptPassword(this.password), this.captcha.toUpperCase(), this.hash);
                if (res.success) {
                    this.$router.push({ name: 'login' });
                }
                this.$store.commit('showTip', res);
            }
            this.loading = false;
        }
    },
})
</script>