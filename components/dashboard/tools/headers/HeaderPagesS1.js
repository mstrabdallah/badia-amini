import { BsChevronRight } from 'react-icons/bs'
export default function HeaderPagesS1({ title }) {

    return (
        <div className="headerPagesS1">
            <div className='icon'> <BsChevronRight /></div>
            <h1> {title}</h1>
        </div>
    )
} 