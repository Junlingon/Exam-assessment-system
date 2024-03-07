<script lang="ts" setup>
import type { ExamData } from '@/utils/request';
import { getExamHistory } from '@/utils/request';
import { onMounted } from 'vue';
import { useExamStore } from '../../stores/exam';
import dayjs from 'dayjs'
import { useRouter } from 'vue-router';

const router = useRouter()
const exam_store = useExamStore()

onMounted(async () => {
  const res = await getExamHistory({})

  const exma_list: ExamData[] = res.data
  exam_store.exam_list = exma_list
})

// const tableData = [
//   {
//     created: '2016-05-03',
//     is_judge: false,
//     subject_name: 'react课程',
//   },
//   {
//     created: '2016-05-04',
//     is_judge: true,
//     subject_name: 'vue课程',
//   },
// ]

function read_click(row: any) {
  // console.log(row)
  if (row.is_judge) {
    //...
    router.push(`/read_exam/${row._id}`)
  }
}

</script>

<template>
  <el-table :data="exam_store.exam_list" style="width: 100%">
    <el-table-column prop="subject_name" label="试卷名称" />
    <el-table-column prop="created" label="考试时间">
      <template #default="scope">
        <span>
          {{ dayjs(scope.row.created).format('YYYY MM-DD hh:mm:ss') }}
        </span>
      </template>
    </el-table-column>
    <el-table-column prop="is_judge" label="是否阅卷">
      <template #default="scope">
        <span :class="{
          red: scope.row.is_judge
        }">
          {{ scope.row.is_judge ? '已阅' : '未阅' }}
        </span>
      </template>


    </el-table-column>
    <el-table-column prop="is_judge" label="操作">
      <!-- vue的缺陷 -->
      <template #default="scope">
        <el-tag :class="{
          can_read: scope.row.is_judge
        }" @click="read_click(scope.row)" :type="scope.row.is_judge ? '' : 'info'" disable-transitions>{{
  scope.row.is_judge ? '查看' : '不可查看' }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.can_read {
  cursor: pointer;
}

.red {
  color: red;
}
</style>
