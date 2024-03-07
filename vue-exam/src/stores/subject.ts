
import { defineStore } from 'pinia'
import type { SubjectData } from '../utils/request';


// 课程管理 题目管理 store
export const useSubjectStore = defineStore('subject', {
    state: () => {
        const subject_tree: SubjectData[] = []

        return {
            subject_tree
        }
    }
})
