<template>
  <el-empty description="该页面不存在" :image-size="300">
    <el-button type="primary" @click="back">回到首页</el-button>
  </el-empty>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router=useRouter()

function back(){
  router.push({
    path:'/'
  })
}
</script>
