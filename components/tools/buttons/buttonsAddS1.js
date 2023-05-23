import { Button } from "antd";
import s from './buttons.module.scss'
import { IoMdAdd } from 'react-icons/io'
export default function ButtonsAddS1({ text }) {

    return (
        <div className={s.ButtonsAddS1}>
            <Button>
                <IoMdAdd />
                {text}
            </Button>
        </div>
    )
}