<script setup lang="ts">
import { onMounted, onBeforeMount, reactive } from 'vue';
import { getExamHistory } from '../../utils/request';
import { useExamStore } from '../../stores/exam';

const exam_store = useExamStore()
const form: any = reactive({
    user_name: '',
    is_judge: false
})

async function search() {
    Object.keys(form).forEach((key: string) => {
        if (!form[key] && form[key] !== false) {
            delete form[key]
        }
    })
    // console.log('form', form.name, form.is_corret)
    const res = await getExamHistory(form)
    exam_store.exam_list_page_data.count = res.count as number
    exam_store.exam_list = res.data

    exam_store.exam_list_page_data.current_page = 1;
    exam_store.exam_list_page_data.search_params = form
}

</script>

<template>
    <div>
        <el-form :model="form" label-width="100px" class="form">
            <el-form-item label="名字">
                <el-input class="input" v-model="form.user_name" placeholder="请输入phone" />
            </el-form-item>
            <el-form-item label="是否阅卷">
                <el-select v-model="form.is_judge" placeholder="please select your zone">
                    <el-option label="是" :value="true" />
                    <el-option label="否" :value="false" />
                </el-select>
            </el-form-item>
            <el-button class="btn" type="primary" @click="search">查询</el-button>
        </el-form>
    </div>
</template>

<style scoped lang="scss">
.form {
    display: flex;

    .btn {
        margin-left: 20px;
    }
}
</style>
