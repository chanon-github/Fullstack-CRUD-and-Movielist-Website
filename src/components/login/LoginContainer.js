
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

export default function LoginContainer() {

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCurrentPage({currentPage:Constant.currentPageTxt.LOGIN}))
  },[])
  const onSubmitForm = async (formData) => {

    let parameter = {
      username: formData.username,
      password: formData.password,
    };

    dispatch(openProgress())
    const response = await ServiceWeb.login(parameter);
    const result = await response.json();

    if (result && result.status_code === 200) {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
      localStorage.setItem("token", result?.token);
      router.push('/user-management');
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
