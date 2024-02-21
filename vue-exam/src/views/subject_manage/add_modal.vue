<template>
    <el-button @click="add_click" class="btn" type="primary">新增课程</el-button>

    <el-dialog v-model="dialogVisible" title="新增二级课程类目" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px">
            <el-form-item label="课程类别">
                <el-select v-model="form.one_key" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="课程名称">
                <el-select v-model="form.two_name" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue';

let dialogVisible = ref(false)

let form = reactive({
    one_key: '',
    two_name: ''
})

const add_click = () => {
    dialogVisible.value = true;
}

const handleClose = (done: () => void) => {
    dialogVisible.value = false;
}
</script>
<style scoped>  .btn {
      margin-bottom: 20px;
  }

  .dialog-footer button:first-child {
      margin-right: 10px;
  }
</style>