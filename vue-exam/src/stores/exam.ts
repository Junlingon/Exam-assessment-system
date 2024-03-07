
import { defineStore } from 'pinia'
import type { ExamData, SubjectData } from '../utils/request';


// 课程管理store
export const useExamStore = defineStore('exam', {
    state: () => {
        const exam_list: ExamData[] = []

        return {
            exam_list
        }
    }
})
