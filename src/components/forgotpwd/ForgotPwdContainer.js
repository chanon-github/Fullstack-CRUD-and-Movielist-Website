'use client'
import { useState } from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
import ForgotPwdView from "./ForgotPwdView";
const ForgotPwdContainer = (props) => {
  const { handleOpenModal } = props;
  // const navigate = useNavigate();
  const [isShowForm,setIsShowForm] = useState(false)
  const [currentEmail,setCurrentEmail] = useState('')

  const onSubmitForm = async (formData) => {

    let parameter = {
      verifyCode: formData.verifyCode,
      password: formData.password,
      email: currentEmail,
    };
    const response = await ServiceWeb.resetPassword(parameter);
    const result = await response.json();
    if (result && result.status_code === 200) {
 
      handleOpenModal(result?.message, Constant.alertSeverity.SUCCESS);
      // navigate("/login");

    } else {
      handleOpenModal(result?.message, Constant.alertSeverity.ERROR);

    }
  };
  const onSendResetToken = async (formData) =>{
    console.log("formData", formData);
    const parameter = {
      email: formData.email
    }
    const response = await ServiceWeb.sendResetToken(parameter);
    const result = await response.json();
    if (result && result.status_code === 200) {
      handleOpenModal(result?.message, Constant.alertSeverity.SUCCESS);
      setIsShowForm(true)
      setCurrentEmail(formData.email)

    } else {

      handleOpenModal(result?.message, Constant.alertSeverity.ERROR);

    }
    
  }


  const renderForm = () => {
    return <ForgotPwdView onSubmitForm={onSubmitForm} onSendResetToken={onSendResetToken} isShowForm={isShowForm}/>;
  };

  return <>{renderForm()}</>;
};

export default ForgotPwdContainer;
