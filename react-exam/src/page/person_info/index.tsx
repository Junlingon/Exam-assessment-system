import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, Select, Upload, Button, message } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import './index.scss';
import IMG from './img/info.png';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { upload_imgs } from '@/utils';
import axios, { AxiosRes, ResData } from '@/utils/https';
import { select_user_info, RoleState } from '@/store/slice/role';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import dayjs from 'dayjs';
import findRouter from '@/hooks/findRouter';

const OPTIONS = ['大专', '本科', '硕士', '博士'];
let imgUrl = '';

function PersonInfo() {
    const Navigate = useNavigate()
    const { _id, has_person_info }: RoleState = useSelector(select_user_info)
    useEffect(() => {
        if (has_person_info) {
            init()
        }
    }, [])

    const formRef = useRef<FormInstance>(null)

    const init = async () => {
        const { data }: AxiosRes<ResData> = await axios.get('/api/user')
        if (data.code === 0) {
            form.setFieldsValue(data.data)
            form.setFieldValue('graduation_time', dayjs(data.data.graduation_time))
            setFileList([
                {
                    uid: data.data._id,
                    name: 'backImg',
                    status: 'done',
                    url: `https://${data.data.avatar}`,
                },
            ])
        }
    }

    // 图片列表
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const imgTypeLimit = ['image/png', 'image/jpg', 'image/jpeg']
    const imgLimitSize = 5 * 1024 * 1024

    const [form] = Form.useForm()

    const props: UploadProps = {
        listType: 'picture-card',
        maxCount: 1,
        accept: '.jpg, .png,.jpeg',
        fileList: fileList,
        beforeUpload: (file: RcFile) => {
            // 判断文件格式
            if (imgTypeLimit.includes(file.type) && file.size < imgLimitSize) {
                // setFileList(file);
            } else {
                message.error('上传的图片格式或尺寸不符合要求!')
                return Upload.LIST_IGNORE // 不加入fileList
            }
            // 返回false表示不上传
            return false
        },
        onChange: async (info: UploadChangeParam<UploadFile>) => {
            console.log(info, '图片')
            if (info.fileList.length > 0) {
                setFileList(info.fileList)
                const [imgURL] = (await upload_imgs(info.fileList).catch(() => {
                    // 上传失败
                    setFileList([])
                })) as string[]
                imgUrl = imgURL
            }

            /* if (info.file.status === 'uploading') {
              return
            }
            if (info.file.status === 'done') {
              // Get this url from response in real world.
            } */
        },
    }

    // 表单完成
    const onFinish = async (values: any) => {
        // 1. 联调入参格式化formmat+接口调用
        let params = {
            ...values,
            avatar: imgUrl,
        }
        const { data }: AxiosRes<ResData> = await axios.patch(`/api/user/${_id}`, params)
        if (data.code === 0) {
            if (!has_person_info) {
                console.log(params, '参数')
                // 2. 接口调用成功后
                message.success('个人信息录入成功')
                // 2.1 跳转考试页面
                Navigate(findRouter('exam').path)
            } else {
                message.success('修改成功')
            }
        }
    }

    const onFinishFailed = () => {
        if (!has_person_info) {
            message.error('表单信息缺失')
        } else {
            message.error('修改失败')
        }
    }

    return (
        <div className='info-container'>
            <div className='info-content'>
                {!has_person_info ? (
                    <div className='info-title'>
                        欢迎进入<span style={{ color: '#1880FF' }}>九剑考试测评系统</span>
                    </div>
                ) : (
                    <div className='info-title'>
                        修改<span style={{ color: '#1880FF' }}>个人中心</span>
                    </div>
                )}
                <Form form={form} labelCol={{ style: { width: 80 } }} wrapperCol={{ span: 14 }} layout='horizontal' ref={formRef} onFinish={onFinish} onFinishFailed={onFinishFailed} labelAlign='left'>
                    <Form.Item label='头像' valuePropName='fileList'>
                        <Upload {...props}>
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label='花名'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: '请输入花名',
                            },
                        ]}>
                        <Input placeholder='请输入花名' />
                    </Form.Item>

                    <Form.Item
                        label='当前薪资'
                        name='money'
                        rules={[
                            {
                                required: true,
                                message: '请输入当前薪资',
                            },
                        ]}>
                        <Input placeholder='请输入当前薪资' />
                    </Form.Item>

                    <Form.Item
                        label='技术栈'
                        name='name2'
                        rules={[
                            {
                                required: true,
                                message: '请输入技术栈',
                            },
                        ]}>
                        <Input placeholder='请输入技术栈' />
                    </Form.Item>

                    <Form.Item
                        label='学历'
                        name='name3'
                        rules={[
                            {
                                required: true,
                                message: '请选择学历',
                            },
                        ]}>
                        <Select
                            placeholder='请选择学历'
                            options={OPTIONS.map((item) => ({
                                value: item,
                                label: item,
                            }))}></Select>
                    </Form.Item>

                    <Form.Item
                        label='毕业时间'
                        name='graduation_time'
                        rules={[
                            {
                                required: true,
                                message: '请选择毕业时间',
                            },
                        ]}>
                        <DatePicker placeholder='请选择毕业时间' locale={locale} />
                    </Form.Item>

                    <Form.Item
                        label='微信号'
                        name='vChat'
                        rules={[
                            {
                                required: true,
                                message: '请输入微信号',
                            },
                        ]}>
                        <Input placeholder='请输入微信号' />
                    </Form.Item>

                    <Form.Item>
                        <div className='btn-container'>
                            {!has_person_info ? (
                                <Button type='primary' htmlType='submit' className='btn goto_exam'>
                                    前往考试
                                </Button>
                            ) : (
                                <>
                                    <Button type='primary' htmlType='submit' className='btn'>
                                        确认修改
                                    </Button>
                                    <Button type='default' className='btn gray-btn' onClick={() => Navigate(findRouter('exam').path)}>
                                        返回考试
                                    </Button>
                                </>
                            )}
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <img src={IMG} />
        </div>
    )
}

export default PersonInfo
