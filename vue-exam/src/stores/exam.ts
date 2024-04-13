
import { defineStore } from 'pinia'
import type { ExamData, SubjectData } from '../utils/request';


// 课程管理store
export const useExamStore = defineStore('exam', {
    state: () => {
        const exam_list: ExamData[] = []
        const exam_list_page_data = {
            limit: 10,
            current_page: 1,
            search_params: {},
            count: 0
        }

        return {
            exam_list,
            exam_list_page_data
        }
    }
})
