
'use client'
import React from 'react'
import LoginFormView from './LoginView'
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
import { useRouter } from 'next/navigation'
import { openModal } from '@/redux/reducers/alert'; 
import { useDispatch } from 'react-redux'; 
import { setCurrentPage } from '@/redux/reducers/currentPage';
import { useEffect } from 'react';
import { closeProgress,openProgress } from '@/redux/reducers/progress';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import JScookies from 'js-cookie';

export default function LoginContainer() {

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(()=>{
    const token = JScookies.get('token')
    const isLogined = JScookies.get('isLogined')

    if( isLogined === 'true' && token === undefined   ) {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:'invalid token'}))
    }

    dispatch(setCurrentPage({currentPage:Constant.currentPageTxt.LOGIN}))
  },[])


  const onSubmitForm = async (formData) => {
    
    let parameter = {
      username: formData.username,
      password:sha256(formData.password).toString(Base64),
    };

    dispatch(openProgress())
    const response = await ServiceWeb.login(parameter);
    const result = await response?.json();

    if (result && result.status_code === 200) {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
      JScookies.set('token', result?.token)
      JScookies.set('isLogined',true )
      router.push('/landing');
    } else {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
    }
    dispatch(closeProgress())

  };

  return (
    <><LoginFormView onSubmitForm={onSubmitForm}/>
    </>
  )
}
