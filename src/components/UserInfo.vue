<template>
    <div class="user-block">
        <el-dropdown>
            <el-avatar :size="60" :src="userAvatar">
                <img src="../assets/student.png" />
            </el-avatar>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <p>{{ userType+' '+userName }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let userAvatar = ref(sessionStorage.getItem('userAvatar'))
let userName = ref(sessionStorage.getItem('userName'))
let userType=ref(sessionStorage.getItem('userType'))

function logout() {
    sessionStorage.removeItem('token')
    router.push({
        path: '/login'
    })
}
</script>

<style scoped>
.user-block {
    text-align: center;
    padding-top: 5%;
    position: sticky;
    border-bottom: 1px solid #e6e6e6;
    top: 0;
    z-index: 1;
    background-color: white;
}
</style>