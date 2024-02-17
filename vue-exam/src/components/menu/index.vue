<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onBeforeMount } from 'vue'

onBeforeMount(() => {

})

onMounted(async () => {

})
</script>

<template>
    <el-menu class="el-menu" mode="horizontal">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
    border-radius: 10px;
}
</style>
