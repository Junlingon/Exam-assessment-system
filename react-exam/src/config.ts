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
    name: string,
    path: string,
    hasMenu: boolean,
    element: Function
};
export const routersData: routersDataProps[] = [
    {
        name: 'login',
        path: '/login',
        hasMenu: false,
        element: Login
    },
    {
        name: 'admin_manage',
        path: '/admin_manage',  //管理员
        hasMenu: true,
        element: AdminManage
    },
    {
        name: 'correct_exam',
        path: '/correct_exam/:exam_id',
        hasMenu: true,
        element: CorrectExam
    },
    {
        name: 'correct_exam_list',
        path: '/correct_exam_list',
        hasMenu: false,
        element: CorrectExamList
    },
    {
        name: 'exam',
        path: '/exam/:exam_id',
        hasMenu: true,
        element: Exam
    },
    {
        name: 'exam_history',
        path: '/exam_history',
        hasMenu: true,
        element: ExamHistory
    },
    {
        name: 'exam_select',
        path: '/exam_select',
        hasMenu: true,
        element: ExamSelect
    },
    {
        name: 'person_info',
        path: '/person_info',
        hasMenu: false,
        element: PersonInfo
    },
    {
        name: 'read_exam',
        path: '/read_exam/:exam_id',
        hasMenu: true,
        element: ReadExam
    },
    {
        name: 'student_manage',
        path: '/student_manage',
        hasMenu: true,
        element: StudentManage
    },
    {
        name: 'subject_add',
        path: '/subject_add',
        hasMenu: true,
        element: SubjectAdd
    },
    {
        name: 'subject_manage',
        path: '/subject_manage',
        hasMenu: true,
        element: SubjectManage
    },
]

type MenuProps = {
    label: string,
    key: string,
};
export const studentMenus: MenuProps[] = [
    {
        label: '考题选择',
        key: 'exam_select',
    },
    {
        label: "考试记录",
        key: 'exam_history',
    },
]

export const adminMenus: MenuProps[] = [
    {
        label: '阅卷列表',
        key: 'correct_exam_list',
    },
    {
        label: "考题管理",
        key: 'subject_add',
    },
    {
        label: "课程管理",
        key: 'subject_manage',
    },
    {
        label: "学员管理",
        key: 'student_manage',
    },
]

export const superAdminMenus: MenuProps[] = [
    {
        label: '阅卷列表',
        key: 'correct_exam_list',
    },
    {
        label: "考题管理",
        key: 'subject_add',
    },
    {
        label: "课程管理",
        key: 'subject_manage',
    },
    {
        label: "学员管理",
        key: 'student_manage',
    },
    {
        label: "管理员管理",
        key: 'admin_manage',
    },
]

export const examSelectMenus = [{
    label: "开始考试",
    key: "exam_select",
},
{
    label: "考试记录",
    key: "exam_history",
},]