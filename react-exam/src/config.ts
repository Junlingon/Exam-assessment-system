import React from 'react';
import Login from '@/page/login';
import AdminManage from '@/page/admin_manage';
import CorrectExam from '@/page/correct_exam';
import CorrectExamList from '@/page/correct_exam_list';
import Exam from '@/page/exam';
import ExamHistory from '@/page/exam_history';
import ExamSelect from '@/page/exam_select';
import PersonInfo from '@/page/person_info';
import ReadExam from '@/page/read_exam';
import StudentManage from '@/page/student_manage';
import SubjectAdd from '@/page/subject_add';
import SubjectManage from '@/page/subject_manage';

type routersDataProps = {
    path: string,
    hasMenu: boolean,
    element: React.ReactNode
};
export const routersData: routersDataProps[] = [
    {
        path: '/login',
        hasMenu: false,
        element: Login()
    },
    {
        path: '/admin_manage',  //管理员
        hasMenu: true,
        element: AdminManage()
    },
    {
        path: '/correct_exam/:exam_id',
        hasMenu: true,
        element: CorrectExam()
    },
    {
        path: '/correct_exam_list',
        hasMenu: false,
        element: CorrectExamList()
    },
    {
        path: '/exam/:exam_id',
        hasMenu: true,
        element: Exam()
    },
    {
        path: '/exam_history',
        hasMenu: true,
        element: ExamHistory()
    },
    {
        path: '/exam_select',
        hasMenu: true,
        element: ExamSelect()
    },
    {
        path: '/person_info',
        hasMenu: false,
        element: PersonInfo()
    },
    {
        path: '/read_exam/:exam_id',
        hasMenu: true,
        element: ReadExam()
    },
    {
        path: '/student_manage',
        hasMenu: true,
        element: StudentManage()
    },
    {
        path: '/subject_add',
        hasMenu: true,
        element: SubjectAdd()
    },
    {
        path: '/subject_manage',
        hasMenu: true,
        element: SubjectManage()
    },
]
