<template>
    <div class="page">
        <el-card class="login-card">
            <div class="login-title">
                <h2>欢迎进入学路系统</h2>
            </div>
            <div class="form-wrapper">
                <el-form
                ref="ruleFormRef"
                :model="userData"
                status-icon
                label-position="top"
                class="demo-ruleForm"
            >
                
                <el-form-item label="学号" prop="checkPass">
                    <el-input v-model="userData.id" type="text" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="userData.password" type="password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button>统一身份认证</el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ElForm } from 'element-plus'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
let userData = ref({
    id: '',
    password: ''
})

let users = [
    {
        id: "2020",
        password: 'rXt!bY7n!HnpEXL'
    },
    {
        id: "123",
        password: '123456'
    }
]



function login() {
    console.log(userData.value)
    console.log(JSON.stringify(users).includes(JSON.stringify(userData.value)))
    if (JSON.stringify(users).includes(JSON.stringify(userData.value))) {
        sessionStorage.setItem('token', '1234')
        router.push({
            path: '/'
        })
    }
    else {
        if (userData.value.id === '') {
            ElMessage.error('请输入用户名！')
        }
        else if (userData.value.password === '') {
            ElMessage.error('请输入密码！')
        }
        else {
            ElMessage.error('没有此用户！')
        }
    }
}
</script>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-card{
    text-align: center;
}

.page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/loginBg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 30%;
    z-index: -1;
    filter: blur(3px);
}

.login-card {
    width: 40%;
    text-align: center;
}

</style>
