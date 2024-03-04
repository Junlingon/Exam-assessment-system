<script setup lang="ts">
import { onMounted, onBeforeMount, reactive } from 'vue';
import Upload from './upload.vue'
import { useCommonStore } from '../../stores/common';
import { userInfoPatch } from '../../utils/request';

const common_store = useCommonStore()
const userinfo = common_store.userinfo

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
  console.log(' common_store', common_store)
})

function img_change(url: string) {
  console.log('图片地址', url)
  userinfo.avatar = url
}

async function submit_userinfo() {
  const form: initUserType = {
    name: userinfo.name,
    vChat: userinfo.vChat,
    avatar: userinfo.avatar,
    graduation_time: userinfo.graduation_time,
    money: userinfo.money,
    edu: userinfo.edu,
    techStack: userinfo.techStack
  }
  const res = await userInfoPatch(userinfo._id, form)
}

</script>

<template>
  <div class="wrap">
    <div class="title">个人中心</div>
    <el-form :model="userinfo" label-width="100px" class="form">
      <el-form-item label="头像">
        <Upload :img="userinfo.avatar" @change="img_change" />
      </el-form-item>
      <el-form-item label="花名">
        <el-input size="large" class="input" v-model="userinfo.name" placeholder="请输入花名" />
      </el-form-item>
      <el-form-item label="当前薪资">
        <el-input size="large" class="input" v-model="userinfo.money" placeholder="请输入当前薪资" />
      </el-form-item>
      <el-form-item label="技术栈">
        <el-input size="large" class="input" v-model="userinfo.techStack" placeholder="请输入技术栈" />
      </el-form-item>
      <el-form-item label="学历">
        <el-select size="large" v-model="userinfo.edu" placeholder="请选择学历">
          <el-option v-for="item in eduOptions" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="毕业时间">
        <el-date-picker size="large" v-model="userinfo.graduation_time" type="date" label="Pick a date"
          placeholder="Pick a date" style="width: 100%" />
      </el-form-item>
      <el-form-item label="vChat">
        <el-input size="large" class="input" v-model="userinfo.vChat" placeholder="请输入vchat" />
      </el-form-item>
      <el-button size="large" class="btn" type="primary" @click="submit_userinfo">{{ userinfo.has_person_info ? '修改信息' :
        '提交信息' }}</el-button>
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
