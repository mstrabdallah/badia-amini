import { Empty } from "antd";

export default function NoDataFoundS1({ text }) {

    return (
        <div className="NoDataFoundS1">
            <Empty description={text} />
        </div>
    )
} 