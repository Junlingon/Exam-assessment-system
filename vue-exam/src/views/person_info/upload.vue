
<script setup lang="ts">
import { ref } from 'vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import type { UploadInstance } from 'element-plus'
import { upload_imgs, getImgUrl } from '../../utils/index';

const uploadRef = ref<UploadInstance>()
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const props = defineProps({
    img: String,
    change: Function
})

const emit = defineEmits(['change'])

const handleRemove = (file: UploadFile) => {
    // console.log(file)
    console.log(uploadRef.value?.clearFiles())
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}

async function upload_change(file: any) {
    uploadRef.value?.clearFiles()
    // console.log(file)
    let res = await upload_imgs([file])
    res = res.map((url: string) => {
        return getImgUrl(url)
    })

    const img_url = res[0];
    if (img_url) {
        emit('change', img_url)
    }
}
</script>

<template>
    <el-upload :on-change="upload_change" :multiple="false" action="#" list-type="picture-card" :auto-upload="false"
        ref="uploadRef">
        <!-- <img class="el-upload-list__item-thumbnail" :src="props.img" alt="" /> -->
        <div v-if="props.img">
            <img class="el-upload-list__item-thumbnail" :src="props.img" alt="" />
        </div>
        <div>
            <el-icon>
                <Plus />
            </el-icon>
        </div>

        <!-- <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </span>
                </span>
            </div>
        </template> -->
    </el-upload>
</template>

<style scoped lang="scss"></style>