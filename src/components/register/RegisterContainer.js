'use client'
import RegisterView from "./RegisterView";
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from '@/constants/Constant'
const RegisterContainer = (props) => {
  // const navigate = useNavigate();
  const {handleOpenModal} = props
  
  const onSubmitForm = async (formData) => {
    let parameter = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    const response = await ServiceWeb.register(parameter);
    const result = await response.json();
    if (result && result.status_code === 200) {
      
      handleOpenModal(result?.message,Constant.alertSeverity.SUCCESS)
      // navigate("/login");

    } else {
      handleOpenModal(result?.message,Constant.alertSeverity.ERROR)
    }
   
  };


  const renderForm = () => {
    return <><RegisterView onSubmitForm={onSubmitForm}/> </>;
  };

  return <>{renderForm()}</>;
};

export default RegisterContainer;
