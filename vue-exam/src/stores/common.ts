import { reactive } from 'vue';
import { defineStore } from 'pinia'
import type { MenuData, UserInfo } from '../utils/request';

export const useCommonStore = defineStore('common', {
  state: () => {
    const userinfo: UserInfo = {
      created: null,
      name: '',            // 学生花名
      vChat: '',          // 微信名字
      phone: '',          // 手机
      avatar: '',        // 头像
      graduation_time: '',    // 毕业时间
      money: 0,         // 现在薪资
      role: 'student',        // 角色
      _id: '',
      has_person_info: false,  // 是否填写个人信息
      topic_role: [],        // 课程权限列表
      techStack: '',
      edu: ''        // 技术栈
    }

    const menus: MenuData[] = []

    console.log('@@@@@初始化')
    return {
      userinfo,
      menus
    }
  }
})
