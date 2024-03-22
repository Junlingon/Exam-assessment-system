<script setup lang="ts">
import { onMounted, onBeforeMount, ref, watch } from 'vue';
import { getTopic2List, examPost } from '../../utils/request';
import type { TopicData } from '../../utils/request'
import { useRoute, useRouter } from 'vue-router';
import { useSubjectStore } from '../../stores/subject';
import TopicCp from '@/components/topic.vue'


const route = useRoute()
const router = useRouter()
const subject_store = useSubjectStore()

const can_submit = ref(false)

watch(() => subject_store.topic_list.map((item) => {
  return item
}), (value) => {

  can_submit.value = value.every((item) => {
    console.log('item', item)
    return item.answer
  })
}, {
  deep: true
})


onBeforeMount(() => {

})

onMounted(async () => {
  const topic_list = await getTopic2List(route.params.exam_id as string)
  subject_store.topic_list = topic_list
  subject_store.current_topic_id = topic_list[0]._id
})

function submit_answer(topic: TopicData) {
  subject_store.topic_list.forEach((item: TopicData) => {
    if (item._id === subject_store.current_topic_id) {
      item.answer = topic.answer
    }
  })
}

function item_click(item: TopicData) {
  console.log(item)
  subject_store.current_topic_id = item._id
}

async function submit_exam() {
  await examPost({
    topic_list: subject_store.topic_list,
    two_id: route.params.exam_id as string
  })
  router.push('/exam_history')
}
</script>

<template>
  <div>
    <div class="exam">
      <div class="exam_left">
        <div class="title"> 考题列表</div>
        <div class="exam_left_content">
          <div v-for="item, index in subject_store.topic_list" class="questiontab" @click="item_click(item)">
            <div class="question" :class="{
            alreadyselect: subject_store.current_topic_id === item._id
          }">
              {{ index + 1 }} {{ item.title }}
            </div>
            <div class="circle" :class="{
            alreadykeep: item.answer
          }"></div>
          </div>
        </div>
      </div>

      <div class="exam_right">
        <TopicCp type="exam" :topic="subject_store.current_topic" :answer_cb="submit_answer" />
        <el-button @click="submit_exam" :disabled="!can_submit" type="primary">提交考试</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.exam_left {
  width: 320px;

  border-radius: 8px;
  opacity: 1;
  margin-right: 28px;

  background: white;
  /* background-color: #fff; */
  padding: 24px;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: 350;
  letter-spacing: 0em;

  word-wrap: break-word;
  /* main-color */
  /* box-sizing: border-box; */
  z-index: 0;
}

.exam_left_content {
  margin-top: 30px;
}

.exam_right {
  width: 86%;
  height: 100%;
  border-radius: 8px;
  opacity: 1;
  background: white;
  box-sizing: border-box;
  padding: 20px;
}

.exam_right_marigin {
  margin: 24px 42px;
}

.exam {
  display: flex;
  height: calc(100vh - 10.625rem);
  max-width: 1520px;
  margin-top: 20px;

}

.questiontab {
  background-color: white;
  border-radius: .25rem;
  opacity: 1;
  margin: 10px 0;

  position: relative;

}

.title {
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0em;
  margin-left: 10px;

  /* text-1 */
  color: #3a3d40;
  position: relative;
}

.title::before {
  content: "";
  display: block;
  width: 4.8px;
  /* 长方形的宽度 */
  height: 16px;
  /* 长方形的高度 */
  background-color: rgb(56, 125, 254);
  /* 长方形的背景颜色 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  /* 负值表示向左偏移 */
}

.rightTitle {
  margin-left: 11px;
}

.question {
  border-radius: .25rem;
  max-width: 240px;
  box-sizing: border-box;
  padding: 12px 10px;
  color: #5f6367;
  margin-right: 10px;
}

.circle {
  position: absolute;
  width: 20px;
  height: 20px;
  right: -15px;
  border-radius: 50%;
  background-color: rgb(218, 222, 226);
  color: #ffffff;
  top: 50%;
  transform: translateY(-50%);
}

.circle::before {
  content: "\2713";
  /* Unicode for √ symbol */
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.alreadyselect {
  color: #1880ff;
  background-color: rgb(242, 244, 247);
}

.alreadykeep {
  color: white;
  background-color: rgb(82, 200, 129);
}

.customButton {
  /* 使用Flex布局 */
  display: flex;
  align-items: center;
  /* 垂直居中SVG和文字 */
  justify-content: center;
  /* 水平居中SVG和文字 */
  font-weight: 700;
  /* 修改按钮的背景颜色和文字颜色 */
  background-color: #007bff;
  color: #fff;
  height: 40px;
  width: 100px;
}

.customButtonSvg {
  margin-right: 10px;
}

.exam_right_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.exam_right_question {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: 350;
  letter-spacing: 0em;

  /* text-1 */
  color: #3a3d40;
}

.exam_right_desc {
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: 350;
  letter-spacing: 0em;

  /* text-2 */
  color: #5f6367;
}

.exam_right_pic {
  width: 280px;
  height: 155px;
  opacity: 1;

  background: white;
}

.customInput {
  /* 设置输入框的背景颜色 */
  margin-top: 24px;
  height: 120px;
  border-radius: .25rem;
  opacity: 1;
  color: #5f6367;
  background: rgb(242, 244, 247);
}

.keepbtn {
  background-color: rgb(242, 244, 247);
  color: rgb(56, 125, 254);
  font-weight: 700;
  font-size: 16px;
  border: 1px solid #1880ff;
  height: 40px;
  width: 120px;
  border-radius: .25rem;
  opacity: 1;
  margin-right: 16px;
}

.summitbtn {

  font-size: 16px;
  font-weight: 700;
  height: 40px;
  width: 120px;
  border-radius: .25rem;
}

.exam_right_btn {
  display: flex;
  margin-top: 17px;
  margin-bottom: 10px;
}

.exam_right_tip {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: 350;
  letter-spacing: 0em;
  color: #9FA3A7;
}
</style>
../../stores/subject