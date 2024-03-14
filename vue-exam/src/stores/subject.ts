
import { defineStore } from 'pinia'
import type { SubjectData, TopicData } from '../utils/request';


// 课程管理 题目管理 store
export const useSubjectStore = defineStore('subject', {
    state: () => {
        const subject_tree: SubjectData[] = []
        const topic_list: TopicData[] = []
        return {
            subject_tree,
            topic_list
        }
    }
})
