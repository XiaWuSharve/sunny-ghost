<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-25 15:59:06
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-11 15:24:21
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
                <v-text-field v-model="username" :rules="defaultRules()" label="用户名"></v-text-field>
                <v-text-field v-model="password" :rules="defaultRules()" label="密码" type="password"
                    @keydown.enter="login"></v-text-field>
                <v-row align="center">
                    <v-col cols="4">
                        <v-checkbox label="记住我" v-model="rememberMe"></v-checkbox>
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
import { encryptPassword } from '@/utils/encrypt';
import { defaultRules } from '@/utils/validation'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            valid: false,
            username: '',
            password: '',
            rememberMe: true,
            loading: false,
        }
    },
    methods: {
        defaultRules,
        async login() {
            this.loading = true;
            if (this.$refs.form.validate()) {
                const res = await login(this.username, await encryptPassword(this.password));
                if (res.success) {
                    console.log(res);
                    if (this.rememberMe) this.$store.commit('setLoginLocal', res);
                    else this.$store.commit('setLoginSession', res);
                    this.$router.push('/');
                }
                this.$store.commit('showMessage', res);
            }
            this.loading = false;
        }
    }
})
</script>