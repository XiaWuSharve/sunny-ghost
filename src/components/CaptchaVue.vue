<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-27 09:28:46
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-27 10:29:03
 * @FilePath: \rogra-frontend\src\components\CaptchaVue.vue
 * @Description: 验证码组件
-->
<template>
    <div v-html="image"></div>
</template>

<script lang="ts">
import { getCaptcha } from '@/apis/auth';
import Vue from 'vue'
export default Vue.extend({
    props: {
        callback: Function,
    },
    data() {
        return {
            image: '',
        }
    },
    mounted() {
        this.changeCaptcha();
    },
    methods: {
        async changeCaptcha() {
            const { data, hash } = await getCaptcha();
            this.image = data;
            this.$emit('callback', hash);
        }
    }
})
</script>