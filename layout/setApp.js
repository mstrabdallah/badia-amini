import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setCheckUser } from "@store/slices/auth/authSlice";
import { useRouter } from 'next/router'
import { setFirstLoad } from "../store/slices/auth/authSlice";





function SetApp({ children }) {
    //
    const { t, lang } = useTranslation()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['AToken']);
    const { firstLoad, checkUser, users } = useSelector(({ auth }) => auth);



    useMemo(() => {
        // set axios






        axios.defaults.headers.common['lang'] = lang;
        // axios.defaults.baseURL = "http://192.168.1.125:8000/api";
        axios.defaults.baseURL = "https://manager.aminiinsure.com.sa/api";

        // cookies.AToken && dispatch(setCheckUser(true))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.AToken;

    }, [])


    useEffect(() => {
        if (cookies.AToken) {
            dispatch(setCheckUser(true))
        }

    }, [])



    return children



}

export default SetApp;
