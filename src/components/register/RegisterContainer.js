'use client'
import RegisterView from "./RegisterView";
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
import { useRouter } from 'next/navigation'
import { openModal } from '@/redux/reducers/alert'; 
import { setCurrentPage } from "@/redux/reducers/currentPage";
import { useDispatch } from 'react-redux'; 
import { currentPageTxt } from "@/constants/Constant";
import { useEffect } from "react";
import { closeProgress,openProgress } from '@/redux/reducers/progress';
import bcrypt from 'bcryptjs'
// import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

const RegisterContainer = (props) => {
  
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCurrentPage({currentPage:Constant.currentPageTxt.REGISTER}))
  },[])

  const onSubmitForm = async (formData) => {

    let parameter = {
      username: formData.username,
      password: sha256(formData.password).toString(Base64),
      email: formData.email,
    };

    dispatch(openProgress())
    const response = await ServiceWeb.register(parameter);
    const result = await response?.json();
    

    if (result && result.status_code === 200) {
      
      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
      router.push('/user/login');

    } else {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
    }

    dispatch(closeProgress())
   
  };


  const renderForm = () => {
    return <><RegisterView onSubmitForm={onSubmitForm}/> </>;
  };

  return <>{renderForm()}</>;
};

export default RegisterContainer;
