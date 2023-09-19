import React, { FC, useState, useEffect } from 'react';
import { Table } from 'antd';
import { tableDefaultData, tableColumns } from './interface';
import PageList from '@/components/PageList';
import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { get_exam_list, exam_list, exam_list_count } from '@/store/slice/exam';

const ExamHistory: FC = () => {
    const [list, setList] = useState(tableDefaultData)
    const dispatch = useAppDispatch()
    const [total, setTotal] = useState(0)
    const exam = useAppSelector(exam_list)
    const exam_count = useAppSelector(exam_list_count)
    useEffect(() => {
        dispatch(get_exam_list({}))
    }, [])

    /**
     * 监视地址栏的page pageSize变化，发请求
     */
    return <div className={styles["exam-history"]}>
        <div className='table-list-wrapper'>
            <Table dataSource={exam} columns={tableColumns} pagination={false} />
        </div>
        <div className={styles["pagination-wrapper"]}>
            <PageList total={exam_count} />
        </div>
    </div>;
}

export default ExamHistory