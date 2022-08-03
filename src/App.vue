<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-20 08:15:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-03 13:29:31
 * @FilePath: \rogra-frontend\src\App.vue
 * @Description: 根组件
-->
<template>
  <v-app>
    <router-view></router-view>
    <v-snackbar :color="$store.state.tip.color" v-model="$store.state.tip.show">
      <v-icon class="pe-2">{{ $store.state.tip.icon }}</v-icon>{{ $store.state.tip.message }}
    </v-snackbar>
    <v-btn fixed fab right bottom class="mb-16" @click="setTheme(!$vuetify.theme.dark)">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <v-btn fixed fab right bottom>
      <v-icon>mdi-arrow-collapse-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icon: 'mdi-white-balance-sunny',
    }
  },
  created() {
    if (!localStorage.theme) {
      localStorage.theme = false;
    }
    this.setTheme(localStorage.theme === 'true');
  },
  methods: {
    setTheme(isDark: boolean) {
      this.$vuetify.theme.dark = isDark;
      localStorage.theme = isDark;
      this.icon = isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
    }
  }
})
</script>