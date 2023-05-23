import Image from "next/image";
import { useEffect } from "react";
import style from "./styles/loadingScreen.module.scss"

function LoadingScreen() {

  useEffect(() => {
    // document.body.classList.add(className);
  }, [])
  return (
    <>

      <div className={style.loadingScreen}>

        <div className='logo'>
             <Image src={'/images/logo.svg'} width={158} height={54} />
         </div>
      </div>
    </>

  )
}

export default LoadingScreen;