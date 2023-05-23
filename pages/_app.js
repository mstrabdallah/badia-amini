import '@styles/antd.less';

import 'swiper/css';
import "swiper/css/navigation";
import '@styles/sections.scss'
import '@styles/globals.scss'

import LayoutApp from '../layout/layout'
import { wrapper } from '../store/store'
import SetApp from '../layout/setApp';
import { CookiesProvider, useCookies } from 'react-cookie';
import { getUser, setCheckUser } from '../store/slices/auth/authSlice';
import { useDispatch } from 'react-redux';
import { isIfStatement } from 'typescript';

function MyApp({ Component, pageProps, data }) {

  // console.log('MyApp = ', data.data.id)

  const [cookies, setCookie] = useCookies(['AToken']);




  return (
    <CookiesProvider>

      <SetApp>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </SetApp>
    </CookiesProvider>
  )
}

MyApp.getInitialProps = wrapper.getInitialPageProps(store => async (props) => {

  // if (typeof window === "undefined") {
  //   var data2 = [];
  //   store.dispatch(getUser(true)).unwrap().then((res) => {
  //     data2 = res
  //     console.log('------------------------------------')


  //   })
  //   const response = await fetch(`https://reqres.in/api/users/2`);
  //   const json = await response.json()

  //   console.log(json)
  //   return { data: json }
  // }else{
  //   console.log('done')
  // }


});


// MyApp.getInitialProps = wrapper.getInitialAppProps(store => async () => {
//   await store.dispatch(getLayout())
// });

export default wrapper.withRedux(MyApp);
