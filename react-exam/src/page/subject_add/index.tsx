import React, { useEffect } from 'react';
import styles from './index.module.css';
import { TreeSelect, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { get_subject_tree_async, select_subject_tree, select_active_two, set_subject_active_two } from '@/store/slice/subject';
import { AppDispatch } from '@/store';

function SubjectAdd() {

    const dispatch: AppDispatch = useDispatch();
    const treeData = useSelector(select_subject_tree)
    const active_two_obj = useSelector(select_active_two)
    const onChange = (newValue: string, arr: React.ReactNode[]) => {
        dispatch(set_subject_active_two({
            title: arr[0],
            value: newValue,
        }))
    };

    useEffect(() => {
        dispatch(get_subject_tree_async()).then((res) => {
            const selectSub = res.payload[0].children[0];
            dispatch(set_subject_active_two(selectSub))
        })
    }, []);

    return <div className={styles.wrap}>
        <div className={styles.top}>
            <div className={styles.top_left}>
                {active_two_obj.title}
            </div>
            <div className={styles.top_right}>
                <TreeSelect
                    style={{ width: '100%' }}
                    value={active_two_obj.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    onChange={onChange}
                />
            </div>
            <Button>新增题目</Button>
        </div>
        <div className={styles.content}>
            <div className={styles.left}>
                <div className=""></div>
            </div>
            <div className={styles.right}>
                <div className=""></div>
            </div>
        </div>
    </div>
}

export default SubjectAdd;


