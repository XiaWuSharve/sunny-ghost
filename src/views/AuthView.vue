<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-25 16:01:23
 * @FilePath: \rogra-frontend\src\views\LoginView.vue
 * @Description: 验证父页面
-->
<template>
  <v-img src="../assets/background/太阳.png" max-height="100vh">
    <v-container class="fill-height pa-0 d-flex justify-center align-center">
      <v-card elevation="16" color="transparent" width="600" class="d-flex flex-no-swrap overflow-hidden">
        <v-row class="ma-0">
          <v-col cols="5" class="pa-0">
            <v-sheet tile color="rgb(255, 152, 0, 0.7)" class="fill-height">

            </v-sheet>
          </v-col>
          <v-col class="pa-0" style="background-color: rgb(255, 255, 255, 0.7);">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-img>
</template>