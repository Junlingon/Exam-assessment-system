<script setup lang="ts">
import Search from './search.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>

<template>
  <div>
    <Search />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="试卷名称" />
      <el-table-column prop="name" label="考试时间" />
      <el-table-column prop="address" label="是否阅卷" />
      <el-table-column prop="address" label="操作" />
    </el-table>
  </div>
</template>

<style scoped></style>
