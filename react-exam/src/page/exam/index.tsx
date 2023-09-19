import { useEffect, useState } from "react";
import styles from "./exam.module.scss";
import { Alert, Button, Divider, Input, message } from 'antd';
import { useAppDispatch, useAppSelector } from "@/store";
import { exam_list, get_exam } from "@/store/slice/exam";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { examPost, createExamSubmitBody } from '@/utils/api/exam';
import findRouter from "@/hooks/findRouter";
console.log(styles)
interface SelectArry {
    created: string;
    img: any[];
    dec?: string;
    two_id: string;
    _id: string;
    title: string;
    isKeep: boolean;
}

// function debounce<T extends any[]>(
//   func: (this: unknown, ...args: T) => void,
//   delay: number
// ) {
//   let timerId: NodeJS.Timeout;

//   return function (this: unknown, ...args: T) {
//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }
function Exam() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    let examlist: SelectArry[] = useAppSelector(exam_list);
    console.log(examlist);
    const routerParams = useParams()
    const current_exam_id = routerParams.exam_id || ""

    //数据封装

    //记录当前题号
    let [CurrentQuestion, setCurrentQuestion] = useState<number>(0);
    //记录是否保存
    let [Select, setSelect] = useState(examlist);

    useEffect(() => {
        // 异步操作完成后，初始化 Select 状态
        console.log(examlist);
        setSelect(examlist);
    }, [examlist]);
    let rawValue = window.localStorage.getItem("topic_list");
    let initializeanswer = rawValue ? JSON.parse(rawValue) : [];
    //记录每题答案
    let [answer, setanswer] = useState<Array<string>>(initializeanswer);
    //防抖答案
    // let [debouncedAnswer, setDebouncedAnswer] = useState<string>("");

    //切换tab
    let handleClick = (index: number) => {
        setCurrentQuestion(index);
    };

    let handleTextChange = (value: any) => {
        let newanswer = [...answer];
        newanswer[CurrentQuestion] = value;
        setanswer(newanswer);
    };
    let KeepHandle = (index: number) => {
        console.log(answer);

        if (!answer[index]) {
            alert("未作答");
            return;
        }

        window.localStorage.setItem("topic_list", JSON.stringify(answer));

        let newSelct = [...Select];
        newSelct[index] = { ...newSelct[index], isKeep: true };
        setSelect(newSelct);
    };
    let finishHandle = () => {
        console.log(Select);

        const surefinish = Select.every((item: any) => {
            return item.isKeep;
        });

        if (surefinish) {
            let data = window.localStorage.getItem("topic_list") || '[]'

            console.log(JSON.parse(window.localStorage.getItem("topic_list") as string));
            window.localStorage.removeItem('topic_list')
            examPost(createExamSubmitBody({ topic_list: JSON.parse(data), two_id: current_exam_id })).then(() => {
                message.success("提交成功!")
                navigate({
                    pathname: findRouter('exam_history').path,
                });
            })

        } else {
            message.error("未答完!")
        }
    };
    const goback = () => {
        window.localStorage.removeItem("topic_list");
        navigate({ pathname: `/exam_select` });
    };
    useEffect(() => {
        let id = location.pathname.split("/")[2];
        dispatch(get_exam(id));
    }, []);
    useEffect(() => {
        // 在debouncedAnswer发生变化时执行其他操作
    }, [answer]);
    // useEffect(() => {
    //   // 使用防抖函数来限制频繁更新answer的值
    //   const delay = 250; // 设置防抖延迟时间，单位：毫秒
    //   console.log(3333);

    //   let timerId = setTimeout(() => {
    //     setDebouncedAnswer(answer[CurrentQuestion]);
    //   }, delay);

    //   // 清除定时器，确保组件卸载时不会触发已过期的定时器操作
    //   return () => clearTimeout(timerId);

    // }, [answer]);

    //按钮样式

    return (
        <>
            {examlist?.length == 0 ? (
                <div>loading</div>
            ) : (
                <div className={styles.exam}>
                    <div className={styles.exam_left}>
                        <div className={styles.title}> 考题列表</div>
                        <div className={styles.exam_left_content}></div>
                        {Select?.map((item: any, index: any) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles.questiontab}`}
                                    onClick={() => handleClick(index)}
                                >
                                    <div
                                        className={`${styles.question} ${CurrentQuestion === index ? styles.alreadyselect : ""
                                            }`}
                                    >
                                        {index + 1}丶{item.title}
                                    </div>
                                    <div
                                        className={`${styles.circle}  ${Select[index].isKeep ? styles.alreadykeep : ""
                                            }`}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.exam_right}>
                        <div className={styles.exam_right_marigin}>
                            <div className={styles.exam_right_top}>
                                <div className={`${styles.title} ${styles.rightTitle} `}>
                                    题目详情
                                </div>

                                <Button
                                    type="primary"
                                    className={styles.customButton}
                                    onClick={() => goback()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="none"
                                        version="1.1"
                                        width="16"
                                        height="14"
                                        viewBox="0 0 16.26045036315918 14.969650268554688"
                                        className={styles.customButtonSvg}
                                    >
                                        <g>
                                            <path
                                                d="M11.2538,14.8447L11.2538,14.9697L1.2538,14.9697L1.2538,13.7197L10.0038,13.7197C12.7652,13.7197,15.0038,11.4811,15.0038,8.71965C15.0038,5.95823,12.7652,3.71965,10.0038,3.71965L5.0038,3.71965L5.0038,5.71965C4.98964,6.00358,4.74908,6.22293,4.46505,6.2109C4.3531,6.2114,4.24351,6.17878,4.15005,6.11715L0.225051,3.5034C-0.0147762,3.35838,-0.0733799,3.03606,0.100051,2.8159C0.135684,2.77325,0.177878,2.73654,0.225051,2.70715L4.15005,0.0946493C4.39131,-0.0651976,4.71413,-0.0183882,4.90005,0.203399C4.96675,0.285374,5.00337,0.387718,5.0038,0.493399L5.0038,2.46965L10.0038,2.46965C13.2148,2.46642,15.9058,4.89682,16.2285,8.09153C16.5511,11.2862,14.4005,14.2057,11.2538,14.8447Z"
                                                fill="#FFFFFF"
                                                fillOpacity="1"
                                            />
                                        </g>
                                    </svg>
                                    返回
                                </Button>
                            </div>
                            {/* <p className={styles.exam_right_question}>
                                {CurrentQuestion + 1}丶{Select[CurrentQuestion]?.title}
                            </p>
                            <p className={styles.exam_right_desc}>
                                {Select[CurrentQuestion]?.dec}
                            </p> */}
                            {/* <div
                                className={styles.exam_right_pic}
                                style={{ backgroundImage: Select[CurrentQuestion]?.img[0] }}
                            ></div> */}
                            <div className={styles.exam_right_pic} onClick={() => { console.log(Select) }}>465</div>
                        </div>

                        <Divider />
                        <div className={styles.exam_right_marigin}>
                            <div className={`${styles.title}`}>作答区域</div>

                            <Input.TextArea
                                value={answer[CurrentQuestion]}
                                rows={4}
                                placeholder="请输入多行文本"
                                className={styles.customInput}
                                onChange={(e) => handleTextChange(e.target.value)}
                            />
                            <div className={styles.exam_right_btn}>
                                <Button
                                    type="primary"
                                    className={styles.keepbtn}
                                    onClick={() => KeepHandle(CurrentQuestion)}
                                >
                                    保存作答
                                </Button>
                                <Button
                                    type="primary"
                                    className={styles.summitbtn}
                                    onClick={() => finishHandle()}
                                >
                                    点击交卷
                                </Button>
                            </div>
                            <div className={styles.exam_right_tip}>tips:</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Exam;
