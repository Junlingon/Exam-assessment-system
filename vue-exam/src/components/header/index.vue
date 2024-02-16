<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'
import logo from './assets/logo.png'

onBeforeMount(() => {

})

onMounted(async () => {

})
</script>

<template>
    <div class="wrap">
        <div className="logo">
            <img :src="logo" alt="九剑考试测评系统" />
        </div>
        <div class="right">
            <el-popover :width="300"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
                <template #reference>
                    <div class="icon_wrap">
                        <el-icon class="icon">
                            <ChatDotRound class="icon" width="60" height="60" />
                        </el-icon>
                    </div>

                </template>
                <template #default>
                    <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
                        信息内容
                    </div>
                </template>
            </el-popover>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrap {
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    user-select: none;

    // header内元素高度
    $height: 44px;

    .icon_wrap {
        background: pink;
        border-radius: 100%;
        width: 60px;
        height: 60px;
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    .logo {
        height: $height;
        cursor: pointer;

        img {
            height: 100%;
        }
    }

    .info {
        display: flex;
        column-gap: 24px;

        .message {
            background-image: url('./assets/message.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 40px;
            cursor: pointer;
        }

        .profile {
            display: flex;
            align-items: center;
            column-gap: 8px;

            .avatar {
                cursor: pointer;
                border: 2px solid #dddddd50;
                box-shadow: 0 0 10px 0 #dddddd50;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .name {
                font-size: 14px;
            }
        }
    }

}
</style>
