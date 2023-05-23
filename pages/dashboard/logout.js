import { useEffect } from "react";
import { useCookies } from "react-cookie";

const LOGOUT = () => {

  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    removeCookie('AToken')
    removeCookie('AUser')
    window.location.href = "/"
  }, [])



  return (
    <div></div>
  );
};
export default LOGOUT;
