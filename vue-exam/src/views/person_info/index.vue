<script setup lang="ts">
import { onMounted, onBeforeMount, reactive } from 'vue';
import Upload from './upload.vue'
import { useCommonStore } from '../../stores/common';

const common_store = useCommonStore()

const form: initUserType = reactive({
  name: '',
  vChat: '',
  avatar: '',
  graduation_time: '',
  money: 0,
  edu: '',
  techStack: ''
})

type initUserType = {
  name: string            // 学生花名
  vChat: string          // 微信名字
  avatar?: string        // 头像
  graduation_time: any    // 毕业时间
  money: number         // 现在薪资
  edu: string,          // 学历
  techStack: string,    // 技术栈
}
const eduOptions = ['初中', '高中', ' 大专', '成人本科', '专升本', '二本', '一本', '研究生']

onBeforeMount(() => {

})

onMounted(async () => {
  console.log('common_store', common_store)
})

function img_change(url: string) {
  console.log('图片地址', url)
  form.avatar = url
}

async function submit_userinfo() {
  console.log('点击事件')
  console.log(form)

  // const res = await userInfoPatch(form)
}

</script>

<template>
  <div class="wrap">
    <div class="title">个人中心</div>
    <el-form :model="form" label-width="100px" class="form">
      <el-form-item label="头像">
        <Upload :img="form.avatar" @change="img_change" />
      </el-form-item>
      <el-form-item label="花名">
        <el-input size="large" class="input" v-model="form.name" placeholder="请输入花名" />
      </el-form-item>
      <el-form-item label="当前薪资">
        <el-input size="large" class="input" v-model="form.money" placeholder="请输入当前薪资" />
      </el-form-item>
      <el-form-item label="技术栈">
        <el-input size="large" class="input" v-model="form.techStack" placeholder="请输入技术栈" />
      </el-form-item>
      <el-form-item label="学历">
        <el-select size="large" v-model="form.edu" placeholder="请选择学历">
          <el-option v-for="item in eduOptions" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="毕业时间">
        <el-date-picker size="large" v-model="form.graduation_time" type="date" label="Pick a date"
          placeholder="Pick a date" style="width: 100%" />
      </el-form-item>
      <el-form-item label="vChat">
        <el-input size="large" class="input" v-model="form.vChat" placeholder="请输入vchat" />
      </el-form-item>
      <el-button size="large" class="btn" type="primary" @click="submit_userinfo">提交信息</el-button>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  font-weight: bold;
  padding-left: 100px;
}

.title {
  font-size: 30px;
  color: blue;
  margin-bottom: 40px;
}

.form {
  width: 400px;
}
</style>
