<script setup lang="ts">
import { reactive, onMounted, watch } from 'vue';
import { ref } from 'vue'
import Upload from '../person_info/upload.vue'
import { getSubjectTree, getTopic2List } from '@/utils/request';
import { useSubjectStore } from '@/stores/subject';
import type { TopicData } from '../../utils/request';
import { getImgUrl } from '@/utils';
import { patchTopic, addTopic, deleteTopic } from '../../utils/request';


const subejctStore = useSubjectStore()

const img_url = ref('')
const form = reactive({
  title: '',
  dec: '',
  img: []
})

onMounted(async () => {
  const res = await getSubjectTree()
  subejctStore.subject_tree = res
  subejctStore.cuttent_subject2_id = res[0].children[0].value
})

watch(() => subejctStore.cuttent_subject2_id, async (val: string) => {
  const res = await getTopic2List(val)
  subejctStore.topic_list = res
})


function option_change(val: any) {
  img_url.value = val
}

function topic_item_click(item: TopicData) {
  subejctStore.current_topic_id = item._id
}

function img_upload(val: string) {
  subejctStore.current_topic.img = [val]
  img_url.value = val
}

async function save_edit_topic() {
  if (!img_url) {
    await patchTopic(subejctStore.current_topic_id, {
      title: subejctStore.current_topic.title,
      dec: subejctStore.current_topic.dec,
      img: subejctStore.current_topic.img
    })
  } else {
    await patchTopic(subejctStore.current_topic_id, {
      title: subejctStore.current_topic.title,
      dec: subejctStore.current_topic.dec,
      img: [img_url.value]
    })
  }
}

function add_topic_btn() {
  subejctStore.current_topic_id = ""
}

async function add_topic() {
  await addTopic({
    title: subejctStore.current_topic.title,
    dec: subejctStore.current_topic.dec,
    img: [img_url.value],
    two_id: subejctStore.cuttent_subject2_id
  })
}

async function delete_topic(id: string) {
  await deleteTopic(id)
  const res = await getTopic2List(subejctStore.cuttent_subject2_id)
  subejctStore.topic_list = res
}

</script>

<template>
  <div class="wrap">
    <div class="top">
      <p>{{ subejctStore.current_subject_title }}</p>
      <el-select v-model="subejctStore.cuttent_subject2_id" @change="option_change" placeholder="Select">
        <el-option-group v-for="group in subejctStore.subject_tree" :key="group.value" :label="group.title">
          <el-option v-for="item in group.children" :key="item.value" :label="item.title" :value="item.value" />
        </el-option-group>
      </el-select>
      <el-button class="btn" type="primary" @click="add_topic_btn">新增题目</el-button>
    </div>
    <el-divider />
    <div class="content">
      <div class="left">
        <div v-for="item in subejctStore.topic_list" class="item" :class="{
        active: item._id === subejctStore.current_topic_id
      }">
          <p class="item_left" @click="topic_item_click(item)">
            {{ item.title }}
          </p>
          <span @click="delete_topic(item._id)" class="item_right">
            删除
          </span>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <div class="text">题目详情</div>
        </div>
        <el-form :model="form" label-width="40px">
          <el-form-item label="题目">
            <el-input class="input" v-model="subejctStore.current_topic.title" placeholder="" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" class="input" v-model="subejctStore.current_topic.dec" placeholder="" />
          </el-form-item>
          <el-form-item label="图片">
            <Upload @change="img_upload" :img="getImgUrl(subejctStore.current_topic.img?.[0])" />
          </el-form-item>
          <el-button v-if="subejctStore.current_topic_id" @click="save_edit_topic" class="btn"
            type="primary">保存编辑题目</el-button>
          <el-button v-if="!subejctStore.current_topic_id" @click="add_topic" class="btn" type="danger">新增题目</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  display: flex;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
  }

  .btn {
    margin-left: 20px;
  }
}

.content {
  display: flex;

  .left {
    // background: #ccc;
    flex: 1;
    height: calc(100vh - 300px);
    // padding: 20px;

    .item {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      margin-bottom: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 20px;
      padding-right: 20px;

      &.active {
        background: rgb(230, 229, 229);
      }

      .item_left {}

      .item_right {
        color: red;
      }

    }


  }

  .right {
    // background: pink;
    background: rgb(241, 240, 240);
    border-radius: 20px;
    margin-left: 20px;
    flex: 1;
    height: calc(100vh - 300px);
    padding: 20px;

    .title {
      display: flex;
      margin-bottom: 20px;

      .text {
        margin-right: 20px;
        font-size: 16px;
        font-weight: bold;
        border-left: 4px solid blue;
        padding-left: 20px;
      }
    }
  }

  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>