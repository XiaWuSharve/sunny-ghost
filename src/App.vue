<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-31 15:21:28
 * @FilePath: \rogra-frontend\src\App.vue
 * @Description: 根组件
-->
<template>
  <v-app>
    <router-view></router-view>
    <v-snackbar :color="$store.state.tip.color" v-model="$store.state.tip.show">
      <v-icon>{{ $store.state.tip.icon }}</v-icon>{{ $store.state.tip.message }}
    </v-snackbar>
  </v-app>
</template>