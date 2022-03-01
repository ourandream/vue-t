<template>
    <el-menu :default-openeds="['1', '2']" class="el-menu" router default-active="/">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <user-filled />
                </el-icon>基本信息
            </template>
            <el-menu-item index="/">学籍信息</el-menu-item>
            <el-menu-item index="/statistics">班级数据</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <management />
                </el-icon>学业表现
            </template>
            <el-menu-item index="/404">学生课表</el-menu-item>
            <el-menu-item index="/results">学业成绩</el-menu-item>
            <el-menu-item index="/404">学业状态</el-menu-item>
            <el-menu-item index="/404">考勤记录</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <location-filled />
                </el-icon>实践育人
            </template>
            <el-menu-item index="/404">社会实践</el-menu-item>
            <el-menu-item index="/404">志愿服务</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <opportunity />
                </el-icon>德育提升
            </template>
            <el-menu-item index="/404">学生工作</el-menu-item>
            <el-menu-item index="/404">入党入团</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>
                <el-icon>
                    <list />
                </el-icon>科研竞赛
            </template>
            <el-menu-item index="/404">学科竞赛</el-menu-item>
            <el-menu-item index="/404">科研项目</el-menu-item>
            <el-menu-item index="/404">创新创业</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
            <template #title>
                <el-icon>
                    <home-filled />
                </el-icon>校园文化
            </template>
            <el-menu-item index="/404">文娱体育</el-menu-item>
            <el-menu-item index="/404">宿舍生活</el-menu-item>
            <el-menu-item index="/404">社团活动</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
            <template #title>
                <el-icon>
                    <histogram />
                </el-icon>综合测评
            </template>
            <el-menu-item index="/404">基础性素质指标</el-menu-item>
            <el-menu-item index="/404">发展性素质指标</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { List,UserFilled,Opportunity, HomeFilled, Histogram, Management, 
LocationFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-menu{
    border-bottom: 1px solid #e6e6e6;
    border-right: none
}
</style>