<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onBeforeMount } from 'vue'
import Header from '@components/header/index.vue';
import Menu from '@components/menu/index.vue'


onBeforeMount(() => {

})

onMounted(async () => {

})
</script>

<template>
  <div class="layout">
    <div class="header_layout">
      <Header />
    </div>

    <div class="content_wrap">
      <div className="nav_wrap">
        <Menu />
      </div>
      <div class="page_wrap">
        <RouterView />
      </div>

    </div>
  </div>
</template>

<style scoped></style>
