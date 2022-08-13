<!--
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-08-04 17:45:51
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-08-06 17:17:23
 * @FilePath: \rogra-frontend\src\views\admin\AdminView.vue
 * @Description: 后台根组件
-->
<template>
    <div>
        <v-navigation-drawer app>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.route">
                        <v-list-item-content @click="$router.push({ name: link.route })">{{ link.name }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main app>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            users: [
                { route: 'user_home', name: '用户信息' },
                { route: 'favorite', name: '收藏的文章' },
                { route: 'settings', name: '账号设置' },
                { route: 'home', name: '返回主页' },
            ],
            admins: [
                { route: 'post_blog', name: '发布博文' },
            ]
        }
    },
    computed: {
        links() {
            let links: { route: string, name: string }[] = [];
            if (this.$store.getters.getAuth) {
                links = this.admins;
            }
            links = links.concat(this.users)
            return links;
        }
    }
})
</script>