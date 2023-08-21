
'use client'
import React from 'react'
import LoginFormView from './LoginView'
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
import { useRouter } from 'next/navigation'
import { openModal } from '@/redux/reducers/alert'; 
import { useDispatch } from 'react-redux'; 

export default function LoginContainer(props) {


  const router = useRouter()
  const dispatch = useDispatch()

  const onSubmitForm = async (formData) => {

    let parameter = {
      username: formData.username,
      password: formData.password,
    };
    const response = await ServiceWeb.login(parameter);
    const result = await response.json();
    if (result && result.status_code === 200) {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
      router.push('/user-management');
    } else {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
    }
  };

  return (
    <><LoginFormView onSubmitForm={onSubmitForm}/>
    </>
  )
}
