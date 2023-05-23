import { Layout } from "antd";
import s from './footer.module.scss'
import { IoMdHelp } from 'react-icons/io'
export default function Footer() {
  const { Footer } = Layout;


  return (
    <>
      <Footer className={s.footer + ' container_'}>
        <div className="iconHelp"> <IoMdHelp /></div>
        <span>مركز المساعدة</span>
      </Footer>
    </>

  );
}
