<script setup lang="ts">
import { onMounted, onBeforeMount, reactive } from 'vue';

const form = reactive({
    name: '',
    is_corret: false
})

function search() {
    console.log('form', form)
}

</script>

<template>
    <div>
        <el-form :model="form" label-width="100px" class="form">
            <el-form-item label="名字">
                <el-input class="input" v-model="form.name" placeholder="请输入phone" />
            </el-form-item>
            <el-form-item label="是否阅卷">
                <el-select v-model="form.is_corret" placeholder="please select your zone">
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
