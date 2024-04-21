
import { defineStore } from 'pinia'
import type { ExamData, SubjectData, TopicData } from '../utils/request';
import { reactive } from 'vue';

// const obj = reactive({})
// 课程管理 题目管理 store
export const useSubjectStore = defineStore('subject', {
    state: () => {
        const subject_tree: SubjectData[] = []
        const topic_list: TopicData[] = []
        const current_topic_id = ''
        const current_subject2_id = ''
        const subject_one_list: any[] = []

        return {
            subject_tree,
            topic_list,
            current_topic_id,
            current_subject2_id,
            subject_one_list
        }
    },
    getters: {
        current_topic(state): TopicData {
            return state.topic_list.find((item: TopicData) => {
                return item._id === state.current_topic_id
            }) || reactive({}) as TopicData
        },
        current_subject_title(state) {
            let name;

            state.subject_tree.forEach((item) => {
                item.children.forEach((item2) => {
                    if (item2.value === state.current_subject2_id) {
                        name = item2.title
                    }
                })
            })

            return name
        }
    }
})
