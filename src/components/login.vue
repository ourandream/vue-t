<template>
    <div class="page">
        <el-card class="login-card">
            <div class="login-title">
                <h2>欢迎进入学路系统</h2>
            </div>
            <div class="form-wrapper">
                <el-form
                    :model="userData"
                    status-icon
                    label-position="top"
                    class="demo-ruleForm"
                    :rules="rules"
                >
                    <el-form-item label="账号" prop="id">
                        <el-input v-model="userData.id" type="text" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" style="margin-bottom: 0;">
                        <el-input v-model="userData.password" type="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="link-block">
                        <el-link :underline="false" @click="toChangePassword">忘记密码</el-link>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

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

const validateID = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    }
    else {
        callback()
    }
}

const validatePassword = (rule: any, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    }
    else if (value.length < 6) {
        callback(new Error('请输入至少六位字符'))
    }
    else {
        callback()
    }
}

const chexkPasswordLength = (rule: any, value: string, callback: any) => {
    if (value.length < 6) {
        callback(new Error('请输入至少6位字符'))
    }
    else {
        callback()
    }
}

const rules = reactive({
    id: [
        {
            validator: validateID,
            trigger: 'blur'
        }
    ],
    password: [
        {
            validator: validatePassword,
            trigger: 'blur'
        },
        {
            validator: chexkPasswordLength,
            trigger: 'change'
        }
    ]
})


function login() {
    console.log(userData.value)
    console.log(JSON.stringify(users).includes(JSON.stringify(userData.value)))
    if (JSON.stringify(users).includes(JSON.stringify(userData.value))) {
        sessionStorage.setItem('token', '1234')
        sessionStorage.setItem('userName',userData.value.id)
        sessionStorage.setItem('userType','学生')
        router.push({
            path: '/'
        })
    }
    else {
        if (userData.value.id === '') {
            ElMessage.error('请输入账号！')
        }
        else if (userData.value.password === '') {
            ElMessage.error('请输入密码！')
        }
        else {
            let userExist = false
            for (let i = 0; i < users.length; ++i) {
                if (userData.value.id === users[i].id) {
                    ElMessage.error('密码错误')
                    userExist = true
                }
            }
            if (!userExist) {
                ElMessage.error('没有此用户！')
            }
        }
    }
}

function toChangePassword() {
    router.push({
        path: '/changePassword'
    })
}
</script>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-card {
    text-align: center;
}

.page::before {
    content: "";
    position: absolute;
    top: -3;
    left: -1;
    height: 102vh;
    width: 102vw;
    background-image: url("../assets/loginBg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 30%;
    z-index: -1;
    filter: blur(3px);
}

.login-card {
    width: 35%;
    text-align: center;
}

.link-block {
    width: 100%;
    text-align: right;
}

@media screen and (max-width: 400px) {
    .login-card {
        width: 98%;
    }

    .page::before {
        background-size: auto;
    }
}
</style>
