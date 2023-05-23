import style from '../style/header.module.scss'
import { Input } from 'antd';
import { useStoreActions, useStoreState } from "easy-peasy";
import { IoSearchOutline } from 'react-icons/io5'
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const { Search } = Input;
export default function Menu() {
  const {t} = useTranslation('common')
  const showSearch = useStoreState(({ header }) => header.showSearch);
  const searchData = useStoreState(({ header }) => header.search);
  const getSearch = useStoreActions(({ header }) => header.getSearch);
  const setShowSearch = useStoreActions(({ header }) => header.setShowSearch);

  function getSearch_(value) {
    if (Object.keys(value).length > 1)
      getSearch(value)
  }


  return (
    <>
      {
        <div className={(showSearch && style.search_show) + ' ' + style.search_content} >

          <Input size="large" onChange={(e) => getSearch_(e.target.value)} placeholder={t('Search')} bordered={false} className={style.search_input} prefix={<IoSearchOutline />} />


          <div className={style.SearchData} >
            {
              showSearch ?
                searchData?.map((res, i) =>
                  <ul>
                    <li onClick={setShowSearch}><Link href={`/categories/${res.category.slug}/${res.slug}`}><a>{res.title}</a></Link></li>
                  </ul>)
                :
                '...'

            }
          </div>

        </div>
      }

    </>
  );
}; 