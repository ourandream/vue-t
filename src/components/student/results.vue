<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <div class="toolbar">
                <el-dropdown>
                    <el-icon style="margin-right: 8px; margin-top: 1px">
                        <setting />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>导出pdf</el-dropdown-item>
                            <el-dropdown-item>导出excel</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>操作</span>
            </div>
        </el-header>

        <el-main>
            <el-scrollbar>
                <el-table :data="tableData">
                    <el-table-column v-for="i of Object.keys(item)"
                    :prop="i"
                    :label="i"
                    sortable></el-table-column>
                </el-table>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {Setting} from '@element-plus/icons-vue'
const item = {
    '科目':'离散数学',
    '平时成绩':92,
    '期末分数':85,
    '绩点':4.44
}
const tableData = ref(Array(20).fill(item))
</script>

<style scoped>
.el-header {
    position: relative;
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
}
.toolbar {
    position: absolute;
    display: inline-flex;
    align-items: center;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

.el-main {
    padding: 0;
}
</style>