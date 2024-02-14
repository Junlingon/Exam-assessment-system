import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@components/layout.vue'

import Login from '../views/login/index.vue'
import AdmianManage from '../views/admin_manage/index.vue'
import CorretExam from '../views/corret_exam/index.vue'
import CorretExamList from '../views/corret_exam_list/index.vue'
import Exam from '../views/exam/index.vue'
import ExamHistory from '../views/exam_history/index.vue'
import ExamSelect from '../views/exam_select/index.vue'
import PersonInfo from '../views/person_info/index.vue'
import ReadExam from '../views/read_exam/index.vue'
import StudentManage from '../views/student_manage/index.vue'
import SubjectAdd from '../views/subject_add/index.vue'
import SubjectManage from '../views/subject_manage/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: '/admin_manage',
        name: 'admin_manage',
        component: AdmianManage
      },
      {
        path: '/corret_exam/:exam_id',
        name: 'corret_exam',
        component: CorretExam
      },
      {
        path: '/corret_exam_list',
        name: 'corret_exam_list',
        component: CorretExamList
      },
      {
        path: '/exam/:exam_id',
        name: 'exam',
        component: Exam
      },
      {
        path: '/exam_history',
        name: 'exam_history',
        component: ExamHistory
      },
      {
        path: '/exam_select',
        name: 'exam_select',
        component: ExamSelect
      },
      {
        path: '/person_info',
        name: 'person_info',
        component: PersonInfo
      },
      {
        path: '/exam_select',
        name: 'exam_select',
        component: ExamSelect
      },
      {
        path: '/read_exam/:exam_id',
        name: 'read_exam',
        component: ReadExam
      },
      {
        path: '/student_manage',
        name: 'student_manage',
        component: StudentManage
      },
      {
        path: '/subject_add',
        name: 'subject_add',
        component: SubjectAdd
      },
      {
        path: '/subject_manage',
        name: 'subject_manage',
        component: SubjectManage
      }]
    }

  ]
})

export default router
