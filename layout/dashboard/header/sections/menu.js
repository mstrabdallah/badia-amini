import { Button, Drawer, Input } from "antd";
import { useStoreState } from "easy-peasy";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import s from '../style/header.module.scss'
import Loading from "../../../components/tools/loading/loading";
export default function Menu() {
  const { t, lang } = useTranslation('common')

  const categories = useStoreState(({ categories }) => categories.categories);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


 
  return (
    <div>


      <div className={s.menuIcon} onClick={showDrawer}>
        <AiOutlineMenu />
      </div>

      <Drawer className={`${s.menu}`} placement={lang === 'ar' ? 'right' : 'left'} onClose={onClose} visible={visible}>
        <ul>

          <li onClick={onClose}><Link href="/categories/all">{t('All Products')}</Link></li>

          {
            categories ?
              categories?.map((res, i) =>
                <li onClick={onClose} key={i}><Link href={`/categories/${res.slug}`}><a>{res.title}</a></Link></li>
              )
              :
              <Loading type={'sec'} />
          }

        </ul>
      </Drawer>

    </div>
  );
}; 