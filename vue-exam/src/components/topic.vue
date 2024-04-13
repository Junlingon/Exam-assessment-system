<script setup lang="ts">
import { onMounted, onBeforeMount, ref, withDefaults, watch } from 'vue'
import type { TopicData } from '../utils/request';

type Iprops = { // 考试 批阅 查看
    type: 'exam' | 'read' | 'corret'
    topic: TopicData
    pass_cb?: any,
    no_pass_cb?: any,
    answer_cb?: any
}

const props = withDefaults(defineProps<Iprops>(), {
    topic: {} as TopicData
})

const answer = ref('')
const corret = ref('')

watch(() => props.topic.answer, (value) => {
    console.log('value', value)
    answer.value = value
})

// 提交答案
function save_click() {

    if (answer.value.trim()) {
        props.answer_cb({
            answer: answer.value
        })
    }
}
</script>

<template>
    <div class="wrap">
        <div class="title">
            题目
            <span v-if="props.type === 'read'" class="span_tag">
                <el-tag v-if="props.topic.pass" class="ml-2" type="success">通过</el-tag>
                <el-tag v-else class="ml-2" type="danger">不通过</el-tag>
            </span>
        </div>
        <p class="content">
            {{ props.topic.title }}
        </p>
        <div class="title">
            详细描述
        </div>
        <p class="content">
            {{ props.topic.dec }}
        </p>
        <div class="title">
            答案
        </div>
        <p class="content">
            <el-input class="customInput" v-model="answer" :rows="4" type="textarea" placeholder="请填写答案" />
        </p>
        <el-button @click="save_click" v-if="props.type === 'exam'" class="answer_btn" type="primary">保存作答</el-button>
        <template v-if="props.type !== 'exam'">
            <div class="title">我的批阅</div>
            <p class="content">
                <el-input class="customInput" v-model="corret" :rows="4" type="textarea" placeholder="填写批阅" />
            </p>
        </template>
        <div v-if="props.type === 'corret'" class="submit_wrap">
            <el-button class="btn" type="primary">通过</el-button>
            <el-button class="btn" type="primary">不通过</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-size: 24px;
    font-weight: bold;
    border-left: 5px solid blue;
    padding-left: 20px;
}

.submit_wrap {
    margin-bottom: 20px;
}

.btn {
    margin-right: 20px;
}

.answer_btn {
    margin-bottom: 20px;
}

p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
}
</style>
