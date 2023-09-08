import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { TreeSelect, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { get_subject_tree_async, select_subject_tree } from '@/store/slice/subject';
import { AppDispatch } from '@/store';

function SubjectAdd() {

    const [value, setValue] = useState<string>('');
    const dispatch: AppDispatch = useDispatch();

    const treeData = useSelector(select_subject_tree)

    const onChange = (newValue: string) => {
        console.log(newValue);
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(get_subject_tree_async())
    }, []);

    return <div className={styles.wrap}>
        <div className={styles.top}>
            <div className={styles.top_left}>
                基础网络
            </div>
            <div className={styles.top_right}>
                <TreeSelect
                    style={{ width: '100%' }}
                    value={value}
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


