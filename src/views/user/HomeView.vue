<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-04 17:49:48
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-04 19:37:28
 * @FilePath: \rogra-frontend\src\views\user\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <v-container fluid>
        <div class="d-flex">
            <v-card width="400">
                <v-card-title class="d-flex justify-space-around">
                    <v-avatar size="128">
                        <v-img src="@/assets/avatar.png"></v-img>
                    </v-avatar>
                    <div class="fill-height">
                        你好，夏午！
                    </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    今日运势：镭镭！
                </v-card-text>
            </v-card>
            <div>
                这是一些状态性的文字：
                <p>金币？： 100d</p>
            </div>
        </div>
    </v-container>
</template>