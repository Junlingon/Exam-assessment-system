<script setup lang="ts">
import { onMounted, onBeforeMount, ref } from 'vue';
import Item from './item.vue'
import { getSubjectTree } from '@/utils/request';
import { useSubjectStore } from '../../stores/subject';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'

const router = useRouter()
const subejctStore = useSubjectStore()
const current_subject_id = ref('')

onBeforeMount(() => {
})

onMounted(async () => {
  const res = await getSubjectTree()
  subejctStore.subject_tree = res
})

function item_click(id: string) {
  console.log('子组件回调的id', id)
  current_subject_id.value = id
}

function start_exam_click() {
  if (!current_subject_id.value) {
    ElMessage.error('请先选择课程')
  } else {
    router.push(`/exam/${current_subject_id.value}`)
  }
}

</script>

<template>
  <div class="wrap">
    <div class="one_wrap" v-for="item in subejctStore.subject_tree">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="two_wrap">
        <Item v-for="data in item.children" @click="item_click" :name="data.title" class="item" :disabled="!data.can_exam"
          :id="data.value" :active="data.value === current_subject_id" />
      </div>
    </div>

    <div class="btn_wrap">
      <el-button class="btn" size="large" type="primary" @click="start_exam_click">开始考试</el-button>
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

}
</style>
