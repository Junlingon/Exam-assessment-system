<script setup lang="ts">
import { onMounted, onBeforeMount, useCssModule } from 'vue'
import { getMenuRequest } from '../../utils/request';
import { useCommonStore } from '../../stores/common';
import { useRoute } from 'vue-router';
const route = useRoute()

const common_store = useCommonStore()

const current_path = route.path

onMounted(async () => {

    const res = await getMenuRequest();

    common_store.$patch({
        menus: res
    })
    // console.log('menu res', res)
})

function item_click(item: any) {
    console.log('item', item)
}

</script>

<template>
    <el-menu :default-active="current_path" router class="el-menu" mode="horizontal">
        <el-menu-item v-for="item in common_store.menus" :index="item.path">{{ item.label }}</el-menu-item>
    </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
    border-radius: 10px;
}
</style>
