import React, { useEffect, useState } from 'react';
import { Table, TableColumnsType, Divider, Button, Col, Input, Row } from 'antd';

interface Course {
    id: number;
    class: string;
    name: string;
}

const ListTable: React.FC = () => {
    const [data, setData] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedPhone, setSelectedPhone] = useState<string>('');
    const [selectedPhoneForAdmin, setSelectedPhoneForAdmin] = useState<string>('');

    const handleSearch = (value: string) => {
        // Here you can implement the logic to set the user as an administrator using the `value` (phone number).
        // For now, we'll just add the new phone number as a new record to testData.

        const newCourse: Course = {
            id: data.length + 1, // Assign a new id to the new record (you may need to handle this differently in a real application)
            class: value, // Use the entered phone number as the class (you can modify this according to your data structure)
            name: value, // Use the entered phone number as the name (you can modify this according to your data structure)
        };

        setData((prevData) => [...prevData, newCourse]);
        setSelectedPhoneForAdmin(value); // Update the selectedPhoneForAdmin state with the new phone number.
    };

    const handleDelete = (record: Course) => {
        // Here you can implement the logic to delete the course record.
        // For now, we'll just remove the record from the data state.
        setData((prevData) => prevData.filter((item) => item.id !== record.id));
    };

    // 自定义排序函数
    const sortDataById = (data: Course[]) => {
        return data.sort((a, b) => a.id - b.id);
    };

    const columns: TableColumnsType<Course> = [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '手机号码',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: '操作',
            dataIndex: 'option',
            render: (_, record) => (
                <>
                    <Divider type="vertical" />
                    <a onClick={() => handleDelete(record)}>删除</a>
                </>
            ),
        },
    ];

    const testData: Course[] = [
        {
            id: 1,
            class: '15798642464',
            name: '15798642464',
        },
        {
            id: 2,
            class: '15798642464',
            name: '15798642464',
        },
        {
            id: 3,
            class: '15798642464',
            name: '15798642464',
        },
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          const sortedData = sortDataById(testData); // 对 testData 数组进行排序
          setData(sortedData);
          setLoading(false);
        }, 1000);
      }, []);

    return (
        <>
            <Row style={{ padding: 10 }}>
                <Col span={3}>
                    <Input
                        placeholder="请输入手机号"
                        style={{ width: '100%' }}
                        value={selectedPhone}
                        onChange={(e) => setSelectedPhone(e.target.value)}
                    />
                </Col>

                <Col span={4}>
                    <Button type="primary" className="margin-left" onClick={() => handleSearch(selectedPhone)}>
                        设置管理员
                    </Button>
                </Col>
            </Row>
            <Table
                loading={loading}
                dataSource={data}
                columns={columns}
                rowKey={(record) => record.id.toString()}
            />
        </>
    );
};

export default ListTable;
