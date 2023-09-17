
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
// import COS from 'cos-js-sdk-v5'
import { forwardRef } from 'react';

const { Dragger } = Upload;

function Update(props: any) {
    const config = {
        name: 'file',
        // multiple: true,
        onChange(info: any) {
            const { status } = info.file;
            console.log('change', info);
            console.log(status);

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} 上传成功`)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            props.change(info)
            // (window as any).file_list = info.fileList.map((item: any) => {
            //     return item.originFileObj
            // })

        },
        onDrop(e: any) {
            console.log('Dropped files', e.dataTransfer.files);
            // window.file_list = e.dataTransfer.files;
        },
        customRequest(option: any) {
            const urlData = URL.createObjectURL(option.file); //转为blob格式（二进制文件）
            console.log("blob:", urlData);
            option.onSuccess();
        },
        maxCount: 1,
        beforeUpload: () => {
            return true
        },
        multiple: true,
    };


    return (
        <div>
            <Dragger {...config}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或者拖拽上传图片</p>
                <p className="ant-upload-hint">
                    请上传图片
                </p>
            </Dragger>
        </div>
    )
}

export default Update;