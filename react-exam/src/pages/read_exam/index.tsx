import { useEffect } from "react";
import styles from "./read_exam.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '@/store';
import { select_exam_topic_list, set_exam_topic_list, set_exam_answer, get_corret_exam_async } from '../../store/slice/subject';
import TopicCp from "@/common_components/topic";

function ReadExam() {
    const dispatch = useAppDispatch()
    const params = useParams()

    // 题目列表
    const topic_list: any[] = useAppSelector(select_exam_topic_list)

    useEffect(() => {
        const exam_id: any = params.exam_id
        dispatch(get_corret_exam_async(exam_id))

        return () => {
            dispatch(set_exam_topic_list([]))
        }
    }, [])

    return (
        <div>
            <div className={styles.exam}>
                <div className={styles.exam_left}>
                    <div className={styles.title}> 考题列表</div>
                    <div className={styles.exam_left_content}></div>
                    {topic_list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.questiontab}`}
                            >
                                <div
                                    className={`${styles.question}`}
                                >
                                    {index + 1}. {item.title}
                                </div>
                                {
                                    item.is_corret && item.pass ?
                                        (<div
                                            className={`${styles.circle} ${styles.alreadykeep}`}
                                        ></div>) : null
                                }
                                {
                                    item.is_corret && !item.pass ?
                                        (<div
                                            className={`${styles.wrong} ${styles.no_pass}`}
                                        ></div>) : null
                                }
                            </div>
                        );
                    })}
                </div>

                <div className={styles.exam_right}>
                    {
                        topic_list.map((item) => {
                            return (
                                <div className={styles.topic_wrap}>
                                    <TopicCp
                                type="read"
                                topic={item}
                            />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ReadExam