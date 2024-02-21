
<script setup lang="ts">
import { ref } from 'vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)


const handleRemove = (file: UploadFile) => {
    // console.log(file)
    console.log(uploadRef.value?.clearFiles())
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}
</script>

<template>
    <el-upload :limit="1" :multiple="false" action="#" list-type="picture-card" :auto-upload="false" ref="uploadRef">
        <el-icon>
            <Plus />
        </el-icon>

        <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </span>
                </span>
            </div>
        </template>
    </el-upload>
</template>

<style scoped lang="scss"></style>