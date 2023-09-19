// @ts-nocheck
import { Button } from "antd";

export const columns = [
  {
    title: "序号",
    key: "xx",
    dataIndex: "xx",
    render (a, b, c) {
      return c + 1;
    },
  },
  {
    title: "花名",
    key: "user_name",
    dataIndex: "user_name",
  },
  {
    title: "考试类型",
    key: "two_id",
    dataIndex: "two_id",
    render () {
      return "未格式化";
    },
  },
  {
    title: "考试时间",
    key: "created",
    dataIndex: "created",
  },
  {
    title: "状态",
    key: "is_judge",
    dataIndex: "is_judge",
    render (a) {
      return a + "";
    },
  },
  {
    title: "操作",
    key: "action",
    render () {
      return (
        <Button type={"link"} onClick={alert.bind(null, "代码未完成!")}>
          批改
        </Button>
      );
    },
  },
];
