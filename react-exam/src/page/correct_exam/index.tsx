import { useEffect, useState } from "react";
import styles from "./exam.module.scss";
import { Alert, Button, Divider, Input } from "antd";

let questionslist = [
    {
        id: 1,
        message: "题目一",
    },
    {
        id: 2,
        message: "题目二",
    },
    {
        id: 3,
        message: "题目三",
    },
    {
        id: 4,
        message: "题目四",
    },
];
interface SelectArry {
    id: number;
    message: string;

    isKeep: boolean;
}
//11111111111
function debounce<T extends any[]>(
    func: (this: unknown, ...args: T) => void,
    delay: number
) {
    let timerId: NodeJS.Timeout;

    return function (this: unknown, ...args: T) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function CorretExam() {
    //数据封装
    let selectArry: Array<SelectArry> = questionslist
        .filter((item, index) => {
            return true;
        })
        .map((item) => {
            return {
                ...item,
                isKeep: false,
            };
        });
    //记录当前题号
    let [CurrentQuestion, setCurrentQuestion] = useState(0);
    //记录是否保存
    let [Select, setSelect] = useState(selectArry);
    //记录每题答案
    let [answer, setanswer] = useState<Array<string>>(Array.from({ length: questionslist.length }));
    //防抖答案
    let [debouncedAnswer, setDebouncedAnswer] = useState<string>("");

    //切换tab
    let handleClick = (index: number) => {
        setCurrentQuestion(index);
    };

    //将输入框的内容存储起来
    let handleTextChange = (value: any) => {
        let newanswer = [...answer]
        newanswer[CurrentQuestion] = value   //当前题号往里面加值
        setanswer(newanswer);
    };

    //为目标添加选中状态
    let KeepHandle = (index: number) => {
        if (answer[index] == "") {     //这里要用==
            alert("未作答");
            return;
        }
        let newSelct = [...Select];
        newSelct[index] = { ...newSelct[index], isKeep: true }; //添加一个选中的状态
        setSelect(newSelct);
        //console.log("questionslist.length",questionslist.length,"index",index);
        //加一个自动切换下一题的逻辑
        if (index != questionslist.length - 1) {
            setCurrentQuestion(index + 1);
        }
    };

    //看所有的按键是不是全被选了
    let finishHandle = () => {
        Select.every((item) => {
            return item.isKeep;
        })
            ? alert("批改成功")
            : alert("未批改完成");
    };

    useEffect(() => {
        // 在debouncedAnswer发生变化时执行其他操作
        console.log("debouncedAnswer:", debouncedAnswer);
        console.log(answer);
    }, [debouncedAnswer]);

    // 使用防抖函数来限制频繁更新answer的值
    useEffect(() => {
        const delay = 250; // 设置防抖延迟时间，单位：毫秒

        let timerId = setTimeout(() => {
            setDebouncedAnswer(answer[CurrentQuestion]);
        }, delay);

        // 清除定时器，确保组件卸载时不会触发已过期的定时器操作
        return () => clearTimeout(timerId);
    }, [answer]);

    //按钮样式
    return (
        <div className={styles.exam}>
            {/* 左边 */}
            <div className={styles.exam_left}>
                <div className={styles.title}> 考题列表</div>
                <div className={styles.exam_left_content}></div>
                {questionslist.map((item, index) => {
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
                                {item.id}丶{item.message}
                            </div>
                            <div
                                className={`${styles.circle}  ${Select[index].isKeep ? styles.alreadykeep : ""
                                    }`}
                            ></div>
                        </div>
                    );
                })}
            </div>

            {/* 右边 */}
            <div className={styles.exam_right}>
                {/* 题目栏 */}
                <div className={styles.exam_right_marigin}>
                    <div className={styles.exam_right_top}>
                        <div className={`${styles.title} ${styles.rightTitle} `}>
                            题目详情
                        </div>
                        <Button type="primary" className={styles.customButton}>
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
                    <p className={styles.exam_right_question}>
                        问题{Select[CurrentQuestion].message}
                    </p>
                    <p className={styles.exam_right_desc}>题目表述</p>
                    <div className={styles.exam_right_pic}>这里再表述一下</div>

                </div>
                <Divider />
                <div className={`${styles.answer_title}`}>考试答案:<div className={`${styles.answer}`}>这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案这是我的答案</div></div>
                {/* 批阅栏 */}
                <div className={styles.exam_right_marigin}>
                    <div className={`${styles.title}`}>我的批阅</div>

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
                            className={styles.keepbtn1}
                            onClick={() => KeepHandle(CurrentQuestion)}
                        >
                            合格
                        </Button>
                        <Button
                            type="primary"
                            className={styles.keepbtn2}
                            onClick={() => KeepHandle(CurrentQuestion)}
                        >
                            不合格
                        </Button>
                        <Button
                            type="primary"
                            className={styles.summitbtn}
                            onClick={() => finishHandle()}
                        >
                            完成批改
                        </Button>
                    </div>
                    <div className={styles.exam_right_tip}>注意:</div>
                </div>
            </div>
        </div>
    );
}

export default CorretExam;