import React, { useState } from 'react';
import styles from './index.module.css';
import { TreeSelect } from 'antd';

function SubjectAdd() {

    const [value, setValue] = useState<string>('');

    const treeData = [
        {
            title: 'Node1',
            value: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-1',
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
        },
    ];

    const onChange = (newValue: string) => {
        console.log(newValue);
        setValue(newValue);
    };

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