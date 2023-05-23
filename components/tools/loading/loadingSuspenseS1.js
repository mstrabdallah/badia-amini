import { Space, Spin } from 'antd'
export default function HeaderPagesS1() {

    return (
        <div className='page_'>
            <div className="loadingSuspenseS1">

                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </div>
        </div>
    )
} 