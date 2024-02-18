<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue'
import ImageUpload from './imageUpload.vue'


const value = ref('')
const form = reactive({
  title: '',
  dec: '',
  img: []
})

const options = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]



</script>

<template>
  <div class="wrap">
    <div class="top">
      <p>xxxx课程</p>
      <el-select v-modle="value" placeholder="Select">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
      </el-select>
      <el-button class="btn" type="primary">新增题目</el-button>
    </div>
    <el-divider />
    <div class="content">
      <div class="left">
        <div class="item" :class="{
          active: true
        }">
          <p class="item_left">
            大师傅士大夫
          </p>
          <span class="item_right">
            删除
          </span>
        </div>
        <div class="item">
          <p class="item_left">
            大师傅士大夫
          </p>
          <span class="item_right">
            删除
          </span>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <div class="text">题目详情</div>
          <el-tag>编辑</el-tag>
        </div>
        <el-form :model="form" label-width="40px">
          <el-form-item label="题目">
            <el-input class="input" v-model="form.title" placeholder="" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" class="input" v-model="form.title" placeholder="" />
          </el-form-item>
          <el-form-item label="图片">
            <ImageUpload />
          </el-form-item>
          <el-button class="btn" type="primary">保存题目</el-button>
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