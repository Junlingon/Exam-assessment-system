import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import React from "react";
import classnames from "classnames";
import Menu from "@/components/exam_select_menu";
import {
    get_exam_select_data,
    get_subject_tree_async,
    set_exam_slect_data,
} from "@/store/slice/subject";
import colorsData from "./color.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/index";
import { useNavigate } from "react-router-dom";

type ResData = {
    title: string;
    value: string;
    img: string;
    color: string;
    children: {
        title: string;
        value: string;
        can_exam: boolean;
        ispermission?: boolean;
        isChecked?: boolean;
    }[];
};

function ExamSelect() {
    let topic_id = useRef<ResData["children"][number] | null>(null);
    const data = useSelector(get_exam_select_data) as ResData[];
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(get_subject_tree_async());
    }, []);

    const handleChoose = (item: ResData["children"][number]) => {
        if (item.can_exam) {
            topic_id.current = item;
            const checked_data = data.map((t) => {
                const updated_data = t.children.map((dataItem) =>
                    dataItem.value === item.value
                        ? { ...dataItem, isChecked: true }
                        : { ...dataItem, isChecked: false }
                );
                return { ...t, children: updated_data };
            });

            dispatch(set_exam_slect_data(checked_data));
        }
    };

    const handleJump = () => {
        if (!topic_id.current) {
            alert("请选择题目再作答");
        } else {
            navigate({
                pathname: `/exam/${topic_id.current?.value}`,
            });
        }
    };

    return (
        <>
            <div className={styles.wrap}>
                <Menu />
                <div className={styles.content}>
                    <div>
                        {data.map((item: (typeof data)[number], index) => (
                            <React.Fragment key={item.title}>
                                <div
                                    style={{
                                        color:
                                            colorsData.colors[index % colorsData.colors.length].value,
                                    }}
                                    className={styles.title}
                                >
                                    {/* <img src={item.img} alt=""></img> */}
                                    <div>{item.title}</div>
                                </div>
                                <div className={styles.topic_section}>
                                    {item.children.map(
                                        (_item: (typeof data)[number]["children"][number]) => (
                                            <div
                                                key={_item.value}
                                                className={classnames(styles.topic_section_content, {
                                                    topic_section_content_selected:
                                                        _item.isChecked && _item.can_exam === true,
                                                    topic_section_content_disabled:
                                                        _item.can_exam === false,
                                                })}
                                                onClick={() => handleChoose(_item)}
                                            >
                                                <p>{_item.title}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleJump}>开始答题</button>
                </div>
            </div>
        </>
    );
}

export default ExamSelect;
