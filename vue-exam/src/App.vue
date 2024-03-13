<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { onMounted, onBeforeMount } from 'vue'
import { getUserInfoRequest } from './utils/request';
import { useCommonStore } from './stores/common';
import eventBus from './utils/event';

const common_store = useCommonStore()
const router = useRouter()

onBeforeMount(async () => {
  const res = await getUserInfoRequest()
  common_store.$patch({
    userinfo: res
  })
})

onMounted(async () => {
  eventBus.on("global_not_login", function (msg) {
    router.push('/login')
  })
})
</script>

<template>
  <div class="app">
    <!-- 占位符 -->
    <RouterView />
  </div>
</template>

<style scoped></style>
