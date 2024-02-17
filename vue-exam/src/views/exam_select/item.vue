<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'
const emit = defineEmits(['click'])
let props = defineProps({
    active: Boolean,
    disabled: Boolean,
    name: String,
    id: String
})

function item_click() {
    if (!props.disabled) {
        emit('click', props.id)
    }
}

onBeforeMount(() => {

})

onMounted(async () => {

})
</script>

<template>
    <div @click="item_click" class="item" :class="{
        active: props.active,
        disabled: props.disabled
    }">
        {{ props.name }}
        <el-icon v-if="props.active" class="icon"><Select /></el-icon>
    </div>
</template>

<style scoped lang="scss">
.item {
    width: 240px;
    height: 40px;
    background: #a6c8be;
    border-radius: 6px;
    text-align: center;
    line-height: 40px;
    position: relative;
    cursor: pointer;

    &.active {
        border: 1px solid #1880FF;
        color: #1880FF;
        font-weight: bold;
    }

    &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .icon {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #1880FF;
    }
}
</style>
