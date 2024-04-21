<template>
    <el-button @click="add_click" class="btn" type="primary">新增课程</el-button>

    <el-dialog v-model="dialogVisible" title="新增二级课程类目" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px">
            <el-form-item label="课程类别">
                <el-select v-model="form.one_key" placeholder="please select your zone">
                    <el-option v-for="item in subject_store.subject_one_list" :label="item.name" :value="item.key" />
                </el-select>
            </el-form-item>
            <el-form-item label="课程名称">
                <el-input class="input" v-model="form.two_name" placeholder="请输入课程名称" />
            </el-form-item>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="submit_click">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { getSubejctOne, subjectAddPost, getSubjectTree } from '../../utils/request';
import { useSubjectStore } from '../../stores/subject';

const subject_store = useSubjectStore()

onMounted(async () => {
    const res: any = await getSubejctOne()
    subject_store.subject_one_list = res
})

let dialogVisible = ref(false)

let form = reactive({
    one_key: '',
    two_name: ''
})

const add_click = async () => {
    dialogVisible.value = true;
}

async function submit_click() {
    await subjectAddPost({
        one_key: form.one_key,
        two_name: form.two_name
    });

    const res: any = await getSubjectTree()
    subject_store.subject_tree = res;
    dialogVisible.value = false;
}

const handleClose = (done: () => void) => {
    dialogVisible.value = false;
}
</script>
<style scoped>
.btn {
    margin-bottom: 20px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>