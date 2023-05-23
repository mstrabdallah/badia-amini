import { AiOutlineDownload } from 'react-icons/ai';
import { message, Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;
import s from './multiple.module.scss'
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { setImagesIds } from '@store/slices/products/addSlice'

export default function Multiple({ fileList }) {

    const [cookies, setCookie] = useCookies(['BToken']);


    const dispatch = useDispatch();

    const getIds = (payload) => {
        var ids = [];
        payload.map((res) => {
            ids = [...ids, res.response?.ids[0]]
        })

        dispatch(setImagesIds({ ids: ids }))

    }
    const props = {
        name: 'files[]',
        multiple: true,
        action: 'http://manager.bshopa.com/tenant-api/v1/files',

        headers: {
            'Authorization': 'Bearer ' + cookies.BToken,
            'Accept': 'application/json',
            'domain': 'monaliza.bshopa.com'

        },
        onChange(info) {
            const { status } = info.file;

            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);

                // console.log('info', info.file.response.ids);
                getIds(info.fileList)

            }

            if (status === 'done') {
                // message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }
    }
    return (
        <div className={s.uploadMultiple}>

            <Dragger
                {...props}
                listType="picture-card"
                onPreview={onPreview}

            // defaultFileList={[...fileList]}
            >
                <p className="ant-upload-drag-icon">
                    <AiOutlineDownload />
                </p>
                <p className="ant-upload-text">اسحب الملفات لتحميلها</p>
                <p className="ant-upload-hint">
                    10 صور كحد أقصى
                </p>

            </Dragger>

        </div>
    );

}