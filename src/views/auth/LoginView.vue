<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-25 15:59:06
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:50:18
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
            <v-form>
                <v-text-field label="用户名"></v-text-field>
                <v-text-field label="密码" type="password"></v-text-field>
                <v-row align="center">
                    <v-col cols="4">
                        <v-checkbox label="记住我"></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-btn block>登录</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>