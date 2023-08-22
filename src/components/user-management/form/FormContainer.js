import {useState,useEffect} from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import moment from "moment";
import FormView from "./FormView";
import { useDispatch } from 'react-redux'; 
import { openModal } from '@/redux/reducers/alert'; 
import { closeProgress, openProgress } from '@/redux/reducers/progress';
import { useForm } from "react-hook-form";
import * as Constant from '@/constants/Constant'
import { useRouter } from 'next/navigation'

const FormContainer = (props) => {
  const { idCustomer ,dataListFetch} = props;
  const [initValue, setInitValue] = useState(null);
  const dispatch = useDispatch()
  const router = useRouter()

 useEffect(() => {
    if (idCustomer) {
      //edit
      const dataFetch = async () => {
        const response = await ServiceWeb.getAllCustomers(idCustomer);
        if (response?.isInvalidToken) {
        } else {
          const result = {
            ...response?.[0],
            birth_date: moment(response[0]?.birth_date).format("YYYY-MM-DD"),
          };
          // reset(result);
          setInitValue(result)
          console.log("response", response);
        }
      };
      dataFetch();
    }
  }, []);

  const onSubmit = async (formData) => {
    if (idCustomer) {
      dispatch(openProgress())
      const response = await ServiceWeb.editCustomer(formData);
      const result = await response.json();
    
      if(result?.isInvalidToken){
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
        router.push('/user/login');
      }
      else if (result.status && result.status === 200) {
        dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
        dataListFetch()

      }else{
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
        dispatch(closeProgress())

      }
    } else {
      dispatch(openProgress())
      const response = await ServiceWeb.addCustomer(formData);
      const result = await response.json();
      if(result?.isInvalidToken){
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
        router.push('/user/login');
      }
      else if (result.status && result.status === 200) {
        dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.message}))
        dataListFetch()
        dispatch(closeProgress())
      }else{
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.message}))
        dispatch(closeProgress())
      }
    }
  };

  return (
    <>
      <FormView {...props} onSubmit={onSubmit} initValue={initValue}/>
    </>
   
  );
};
export default FormContainer;
