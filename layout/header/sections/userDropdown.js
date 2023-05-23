import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import ButtonsS1 from '../../../components/tools/buttons/buttonsS1';
import { RiUser6Line } from 'react-icons/ri'
import { useCookies } from 'react-cookie';



const UserDropdown = () => {

    const [cookies, setCookie, removeCookie] = useCookies();

    const Logout = () => {
        removeCookie('AToken')
        removeCookie('AUser')
        window.location.href = "/"
    }

    console.log(cookies)

    const menu = (
        <Menu
            items={[
                {
                    label: <Link href={'/dashboard'}>لوحة التحكم</Link>,
                    key: '1',
                },
                {
                    label: <div onClick={Logout}>تسجيل الخروج</div>,
                    key: '2',
                },
            ]}
        />
    );


    return (
        <div className='userMenu'>
            <Dropdown overlay={menu} trigger={['click']} overlayClassName={'menuS1'}>
                <a onClick={(e) => e.preventDefault()}>
                    <ButtonsS1 text={<><RiUser6Line /> حسابي</>} />
                </a>
            </Dropdown>
        </div>
    )
};

export default UserDropdown;