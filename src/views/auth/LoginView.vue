<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-25 15:59:06
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 15:55:06
 * @FilePath: \rogra-frontend\src\views\auth\LoginView.vue
 * @Description: 登录界面
-->
<template>
    <div>
        <div class="d-flex align-center">
            <v-card-title>登录</v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle>
                还没有账号？
                <v-hover v-slot="{ hover }">
                    <v-btn text width="50" :color="hover ? 'orange' : ''" to="regist">点击注册</v-btn>
                </v-hover>
            </v-card-subtitle>
        </div>
        <v-card-text>
            <v-form ref="form" v-model="valid">
                <v-text-field v-model="username" :rules="usernameRules()" label="用户名"></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules()" label="密码" type="password"></v-text-field>
                <v-row align="center">
                    <v-col cols="4">
                        <v-checkbox label="记住我"></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-btn :loading="loading" :disabled="!valid" @click="login" block>登录</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { login } from '@/apis/auth';
import { lengthValidation, requiredValidation } from '@/utils/validation'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            valid: false,
            username: '',
            password: '',
            loading: false,
        }
    },
    methods: {
        usernameRules() {
            return [requiredValidation, lengthValidation(50)];
        },
        passwordRules() {
            return [requiredValidation, lengthValidation(50)];
        },
        async login() {
            if (!this.$refs.form.validate()) return;
            this.loading = true;
            const res = await login(this.username, this.password);
            if (res.success) {
                this.$store.commit('setAccessCode', res.data.access_code);
                this.$store.commit('showTip', { message: '登录成功OwO', color: 'green' });
                this.$router.push('/');
            } else if (res.status === 401) {
                this.$store.commit('showTip', { message: '用户名或密码错误QAQ', color: 'red' });
            } else {
                this.$store.commit('showTip', { message: '服务器错误XAX', color: 'purple' });
            }
            this.loading = false;
        }
    }
})
</script>