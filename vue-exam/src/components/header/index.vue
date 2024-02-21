<script setup lang="ts">
import logo from './assets/logo.png'
import avatar from './assets/avatar.png'
import { useRouter } from 'vue-router';
const router = useRouter()

function logout() {
    router.push('/login')
}

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
                        <div class="tag">0</div>
                    </div>

                </template>
                <template #default>
                    <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
                        信息内容
                    </div>
                </template>
            </el-popover>

            <el-dropdown>
                <div class="avatar_wrap">
                    <img :src="avatar" alt="九剑考试测评系统" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <p class="user">我是卧龙</p>
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
    height: 44px;

    .right {
        display: flex;
    }

    .icon_wrap {
        // background: pink;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin-right: 20px;
        position: relative;

        .icon {
            width: 100%;
            height: 100%;
        }

        .tag {
            position: absolute;
            right: 0;
            top: 0;
            color: #fff;
            border-radius: 100%;
            background: red;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
        }
    }

    .user {
        line-height: 44px;
        padding-left: 10px;
    }

    .logo {
        height: 44px;
        cursor: pointer;

        img {
            height: 100%;
        }
    }


}
</style>
