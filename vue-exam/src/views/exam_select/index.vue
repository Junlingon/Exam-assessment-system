<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'
import Item from './item.vue'

onBeforeMount(() => {

})

onMounted(async () => {

})
</script>

<template>
  <div class="wrap">
    <div class="one_wrap">
      <div class="title">
        React
      </div>
      <div class="two_wrap">
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />
        <Item name="测试数据" class="item" />
        <Item name="测试数据" />

      </div>
    </div>

    <div class="btn_wrap">
      <el-button class="btn" size="large" type="primary">开始考试</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  position: relative;
  height: calc(100vh - 220px);

  .title {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .two_wrap {
    display: flex;
    // flex-direction: row;
    flex-flow: row wrap;
  }

  .item {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .btn_wrap {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;

    .btn {
      // margin: 0 auto;
      width: 200px;
    }
  }

}</style>
