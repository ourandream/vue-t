<template>
    <div class="page">
        <el-card class="change-card">
            <div class="login-title">
                <h2>修改密码</h2>
            </div>
            <div class="form-wrapper">
                <el-form
                    :model="passwordData"
                    status-icon
                    label-position="top"
                    :rules="rules"
                    ref="changeForm"
                >
                    <el-form-item label="账号" prop="id">
                        <el-input v-model="passwordData.id" type="text" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码 " prop="tel">
                        <el-input v-model="passwordData.tel" type="tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="vCode">
                        <el-input v-model="passwordData.vCode" type="tel" autocomplete="off">
                            <template #append>
                                <el-button @click="getVerification" :disabled="countIn">{{ count }}</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword">
                        <el-input
                            v-model="passwordData.newPassword"
                            type="password"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="newPasswordCheck">
                        <el-input
                            v-model="passwordData.newPasswordCheck"
                            type="password"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-row justify="center" style="width:100%;">
                            <el-button type="primary" @click="confirmChange">确认</el-button>
                        </el-row>
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
let passwordData = ref({
    id: '',
    newPassword: '',
    newPasswordCheck: '',
    vCode: '',
    tel: ''
})
let count = ref<number | string>('发送')
let countIn = ref(false)

function getVerification() {
    if (passwordData.value.tel === '') {
        ElMessage.error('请输入电话号码')
    }
    else {
        const countDown = setInterval(() => {
            if (typeof count.value === 'string') {
                count.value = 60
                countIn.value = true
            }
            else if (count.value > 0) {
                count.value--
            }
            else {
                count.value = '发送'
                countIn.value = false
                clearInterval(countDown)
            }
        }, 1000)
    }
}

function confirmChange() {
    if (passwordData.value.id === '') {
        ElMessage.error('请输入账号')
    }
    else if (passwordData.value.tel === '') {
        ElMessage.error('请输入电话号码')
    }
    else if (passwordData.value.vCode === '') {
        ElMessage.error('请输入验证码')
    }
    else if (passwordData.value.newPassword === '') {
        ElMessage.error('请输入新密码')
    }
    else {
        router.push({
            path: '/'
        })
    }
}

const validateID = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    }
    else {
        callback()
    }
}

const validateTel = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入电话号码'))
    }
    else {
        callback()
    }
}

const validateVCode = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入验证码'))
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

const chexkPasswordSame = (rule: any, value: string, callback: any) => {
    if (value !== passwordData.value.newPassword) {
        callback(new Error('密码不一致'))
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
    tel: [
        {
            validator: validateTel,
            trigger: 'blur'
        }
    ],
    vCode: [
        {
            validator: validateVCode,
            trigger: 'blur'
        }
    ],
    newPassword: [
        {
            validator: validatePassword,
            trigger: 'blur'
        },
        {
            validator: chexkPasswordLength,
            trigger: 'change'
        }
    ],
    newPasswordCheck: [
        {
            validator: chexkPasswordSame,
            trigger: 'blur'
        },
        {
            validator: chexkPasswordSame,
            trigger: 'change'
        }
    ]
})

</script>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.change-card {
    text-align: center;
}

.page::before {
    content: "";
    position: absolute;
    top: -3;
    left: -1;
    height: 102vh;
    width: 102vw;
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 30%;
    z-index: -1;
    filter: blur(12px);
}

.change-card {
    width: 35%;
    text-align: center;
}

@media screen and (max-width: 400px) {
    .change-card {
        width: 98%;
    }

    .page::before {
        background-size: auto;
    }
}
</style>
