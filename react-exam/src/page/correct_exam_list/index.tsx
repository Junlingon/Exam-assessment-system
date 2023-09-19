import { Form, Input, Button, Space, Row, Col, Table, Select } from "antd";
import { columns } from "./columns";
import { exam_list, get_exam_list } from "@/store/slice/exam";
import { useAppSelector, useAppDispatch } from "@/store/index";
import { useEffect } from "react";

function CorretExamList() {
    const exam = useAppSelector(exam_list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(get_exam_list({}));

        return () => { };
    }, []);

    return (
        <div style={{ padding: "0 24px 24px 24px", backgroundColor: "white" }}>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Form layout={"inline"}>
                        <Form.Item>
                            <Input placeholder="请输入学员花名" />
                        </Form.Item>
                        <Form.Item>
                            <Select placeholder="请选择考试类型" />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button
                                    onClick={alert.bind(null, "代码未完成!")}
                                    type={"primary"}>
                                    搜索
                                </Button>
                                <Button onClick={alert.bind(null, "代码未完成!")}>重置</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={24}>
                    <Table dataSource={exam} columns={columns}></Table>
                </Col>
            </Row>
        </div>
    );
}

export default CorretExamList;
