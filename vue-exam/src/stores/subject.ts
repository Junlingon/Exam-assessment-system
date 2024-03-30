
import { defineStore } from 'pinia'
import type { SubjectData, TopicData } from '../utils/request';

//
// 课程管理 题目管理 store
export const useSubjectStore = defineStore('subject', {
    state: () => {
        const subject_tree: SubjectData[] = []
        const topic_list: TopicData[] = []
        const current_topic_id = ''
        return {
            subject_tree,
            topic_list,
            current_topic_id
        }
    },
    getters: {
        current_topic(state): TopicData {
            return state.topic_list.find((item: TopicData) => {
                return item._id === state.current_topic_id
            }) as TopicData
        }
    }
})
