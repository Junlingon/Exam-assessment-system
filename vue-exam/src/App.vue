<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onBeforeMount } from 'vue'
import { getUserInfoRequest } from './utils/request';
import { useCommonStore } from './stores/common';

const common_store = useCommonStore()

onBeforeMount(async () => {
  const res = await getUserInfoRequest()
  common_store.$patch({
    userinfo: res
  })
})

onMounted(async () => {

})
</script>

<template>
  <div class="app">
    <!-- 占位符 -->
    <RouterView />
  </div>
</template>

<style scoped></style>
