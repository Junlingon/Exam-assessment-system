<script setup lang="ts">
import Add from './add.vue'

const tableData = [
  {
    created: '2016-05-04',
    is_judge: false,
    subject_name: 'react课程',
    user_name: '詹姆斯'
  },
  {
    created: '2016-05-04',
    is_judge: true,
    subject_name: 'vue课程',
    user_name: '杜兰特'
  },
]

function read_click(row: any) {

}

function corret_click(row: any) {

}

</script>

<template>
  <div>
    <Add />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="subject_name" label="试卷名称" />
      <el-table-column prop="user_name" label="考试时间" />
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.can_read {
  cursor: pointer;
}

.red {
  color: red;
}
</style>
