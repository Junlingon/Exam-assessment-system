<template>
    <el-dialog v-model="dialogVisible" title="新增二级课程类目" width="30%" :before-close="handleClose">

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


const handleClose = (done: () => void) => {
    dialogVisible.value = false;
    // ElMessageBox.confirm('Are you sure to close this dialog?')
    //   .then(() => {
    //     done()
    //   })
    //   .catch(() => {
    //     // catch error
    //   })
}
</script>
<style scoped>  .btn {
      margin-bottom: 20px;
  }

  .dialog-footer button:first-child {
      margin-right: 10px;
  }
</style>