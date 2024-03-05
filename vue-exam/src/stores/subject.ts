
import { defineStore } from 'pinia'
import type { SubjectData } from '../utils/request';


// 课程管理store
export const useSubjectStore = defineStore('subject', {
    state: () => {
        const subject_tree: SubjectData[] = []

        return {
            subject_tree
        }
    }
})
