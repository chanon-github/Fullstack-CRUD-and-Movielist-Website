'use client'
import { useState , useEffect} from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
import ForgotPwdView from "./ForgotPwdView";
import { openModal } from '@/redux/reducers/alert'; 
import { useDispatch } from 'react-redux'; 
import { useRouter } from 'next/navigation'
import { setCurrentPage } from "@/redux/reducers/currentPage";
import { currentPageTxt } from "@/constants/Constant";
import { closeProgress,openProgress } from '@/redux/reducers/progress';

const ForgotPwdContainer = (props) => {
  const { handleOpenModal } = props;
  const [isShowForm,setIsShowForm] = useState(false)
  const [currentEmail,setCurrentEmail] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(()=>{
    
    dispatch(setCurrentPage({currentPage:currentPageTxt.FORGOTPWD}))

  },[])

  const onSubmitForm = async (formData) => {

    let parameter = {
      verifyCode: formData.verifyCode,
      password: formData.password,
      email: currentEmail,
    };
    dispatch(openProgress())

    const response = await ServiceWeb.resetPassword(parameter);
    const result = await response?.json();

    if (result && result.status_code === 200) {

      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
      router.push('/user/login');

    } else {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))

    }
    dispatch(closeProgress())

  };
  const onSendResetToken = async (formData) =>{
    const parameter = {
      email: formData.email
    }

    dispatch(openProgress())
    const response = await ServiceWeb.sendResetToken(parameter);
    const result = await response?.json();
    dispatch(closeProgress())

    if (result && result.status_code === 200) {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))

      setIsShowForm(true)
      setCurrentEmail(formData.email)

    } else {
      dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))


    }
    
  }


  const renderForm = () => {
    return <ForgotPwdView onSubmitForm={onSubmitForm} onSendResetToken={onSendResetToken} isShowForm={isShowForm}/>;
  };

  return <>{renderForm()}</>;
};

export default ForgotPwdContainer;
