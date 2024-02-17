<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'

import { ref } from 'vue'

const value = ref('')

const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]

</script>

<template>
  <div class="wrap">
    <div class="top">
      <p>xxxx课程</p>
      <el-select v-modle="value" placeholder="Select">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
      </el-select>
      <el-button class="btn" type="primary">新增题目</el-button>
    </div>

    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  display: flex;
}
</style>
<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'

import { ref } from 'vue'

const value = ref('')

const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]

</script>

<template>
  <div class="wrap">
    <div class="top">
      <p>xxxx课程</p>
      <el-select v-modle="value" placeholder="Select">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
      </el-select>
      <el-button class="btn" type="primary">新增题目</el-button>
    </div>

    <div class="content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  display: flex;
}
</style>
