<script setup lang="ts">
import { onMounted, onBeforeMount, reactive, ref } from 'vue';
import login_desc from './assets/login_desc.png'
import login_logo from './assets/login_logo.png'
import login_title_cn from './assets/login_title_cn.png'
import login_title_en from './assets/login_title_en.png'
import { loginPost } from '../../utils/request';
import { useRouter } from 'vue-router';
import { useCommonStore } from '../../stores/common';

// 这个地址会变成，基于项目的相对路径，相对package.json所在的根目录
console.log('login_desc', login_desc)
const router = useRouter()
const form = reactive({
  phone: '',
  code: ''
})

onMounted(async () => {
  // 获取用户信息
})
// 这是可响应的对象
const timer_ob = reactive({
  count: 60,
  show: false
})

async function login() {
  // console.log(form.phone, form.code)
  const res = await loginPost(form)

  if (!res.has_person_info) {
    router.push('/person_info')
  }
}

function get_code() {
  timer_ob.count = 60
  timer_ob.show = true

  let timer = setInterval(() => {
    timer_ob.count--
    if (timer_ob.count === 0) {
      timer_ob.show = false
      clearInterval(timer)
    }
  }, 1000)
}

</script>

<template>
  <div class="page_container">
    <div class="login_container">
      <div class="login_left">
        <div class="left_title">
          <img :src="login_desc" alt="" />
        </div>
      </div>
      <div class="login_right">
        <div class="right_title">
          <div>
            <img :src="login_logo" alt="" />
          </div>
          <div class="title_container">
            <div>
              <img :src="login_title_cn" alt="" />
            </div>
            <div>
              <img :src="login_title_en" alt="" />
            </div>
          </div>
        </div>
        <div class="right_form">
          <el-form :model="form" label-width="60px">
            <el-form-item label="用户名">
              <el-input class="input" size="large" v-model="form.phone" placeholder="请输入phone" />
            </el-form-item>
            <el-form-item label="验证码">
              <el-input class="input" size="large" v-model="form.code" placeholder="请输入验证码">
                <template #append>
                  <el-button v-if="!timer_ob.show" @click="get_code">点击获取验证码</el-button>
                  <el-button v-if="timer_ob.show" :disabled="true">倒计时 {{ timer_ob.count }} s</el-button>
                </template>
              </el-input>
            </el-form-item>
            <el-button @click="login" class="btn" size="large" type="primary">点击登录</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  margin-bottom: 20px;
}

.btn {
  width: 100%;
}

.page_container {
  position: relative;
  height: 100vh;
  background: url(./assets/login_bg.png) no-repeat;
  background-size: cover;
  overflow: auto;

  .login_container {
    width: 960px;
    height: 600px;
    background: #EFF5FF;
    border-radius: 16px;
    box-shadow: 0px 2px 16px 0px rgba(235, 239, 243, 0.23);
    display: flex;
    position: relative;
    top: calc(50% - 300px);
    left: calc(50% - 480px);

    .login_left {
      width: 50%;

      .left_title {
        width: 340px;
        height: 380px;
        margin: 87px auto;
      }
    }

    .login_right {
      width: 50%;
      box-sizing: border-box;
      background: #FFFFFF;
      height: 100%;
      padding: 80px 40px 80px 33px;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;

      .right_title {
        display: flex;
        align-items: center;

        .title_container {
          margin-left: 15px;
        }
      }

      .right_form {
        margin-top: 80px;
      }
    }
  }
}
</style>
