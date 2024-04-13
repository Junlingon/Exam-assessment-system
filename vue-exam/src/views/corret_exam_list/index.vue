<script setup lang="ts">
import { getExamHistory } from '@/utils/request';
import Search from './search.vue'
import { onMounted } from 'vue';
import { useExamStore } from '../../stores/exam';
import dayjs from 'dayjs'

const PAGE_COUNT = 10;

const exam_store = useExamStore()

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

onMounted(async () => {
  const res = await getExamHistory()
  exam_store.exam_list_page_data.count = res.count as number
  exam_store.exam_list = res.data
})

function read_click(row: any) {

}

function corret_click(row: any) {

}

async function page_change(val: any) {
  console.log(val)
  exam_store.exam_list_page_data.current_page = val;

  const res = await getExamHistory({
    ...exam_store.exam_list_page_data.search_params,
    skip: PAGE_COUNT * (val - 1)
  })

  exam_store.exam_list_page_data.count = res.count as number
  exam_store.exam_list = res.data
}

</script>

<template>
  <div>
    <Search />
    <el-table class="table" :data="exam_store.exam_list" style="width: 100%">
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
          <el-tag :class="{ can_read: true }"
            @click="scope.row.is_judge ? read_click(scope.row) : corret_click(scope.row)"
            :type="scope.row.is_judge ? 'primary' : 'danger'" disable-transitions>{{ scope.row.is_judge ? '查看' : '阅卷'
            }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="exam_store.exam_list_page_data.current_page" @current-change="page_change" background
      layout="prev, pager, next" :total="exam_store.exam_list_page_data.count" />
  </div>
</template>

<style scoped lang="scss">
.can_read {
  cursor: pointer;
}

.red {
  color: red;
}

.table {
  margin-bottom: 20px;
}
</style>
