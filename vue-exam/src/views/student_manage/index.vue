<script lang="ts" setup>
import Modal from './modal.vue'
import { onMounted } from 'vue';
import { getSubjectTree } from '../../utils/request';
import { useSubjectStore } from '../../stores/subject';

const subject_store = useSubjectStore()

onMounted(async () => {
  const res = await getSubjectTree()
  subject_store.subject_tree = res
  console.log('')
})

</script>
<template>
  <div>
    <div class="top">
      <Modal />
    </div>
    <el-table :data="subject_store.subject_tree" style="width: 100%; margin-bottom: 20px" row-key="id" border
      default-expand-all>
      <el-table-column prop="value" label="分类" sortable />
      <el-table-column prop="title" label="课程" sortable />
    </el-table>

  </div>
</template>


<style scoped lang="scss">
.btn {
  margin-bottom: 20px;
}
</style>