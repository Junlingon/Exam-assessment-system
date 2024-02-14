import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            history_list: new Set(), // 历史记录
            result_list: [],   // 查询结果
            show_main_dropdown: false,  // 推荐的搜索
            show_result_dropdown: false,  // 搜索的结果框
            result_loading: false    // loading状态
        }
    },
    getters: {
        is_show_result: (state) => {// 是否显示搜索结果的框框
            return !state.result_loading && state.result_list.length
        },
        is_show_no_result: (state) => {  // 显示  没有查询到结果
            return !state.result_loading && !state.result_list.length
        }
    }
})

