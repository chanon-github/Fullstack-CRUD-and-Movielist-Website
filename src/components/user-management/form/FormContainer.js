import {useState,useEffect} from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import moment from "moment";
import FormView from "./FormView";
import { useDispatch } from 'react-redux'; 
import { openModal } from '@/redux/reducers/alert'; 
import { closeProgress, openProgress } from '@/redux/reducers/progress';
import { useForm } from "react-hook-form";
import * as Constant from '@/constants/Constant'

const FormContainer = (props) => {
  const { idCustomer ,dataListFetch} = props;
  const [initValue, setInitValue] = useState(null);
  const dispatch = useDispatch()
  // const {
  //   reset,
  // } = useForm();
 useEffect(() => {
    if (idCustomer) {
      //edit
      const dataFetch = async () => {
        const response = await ServiceWeb.getAllCustomers(idCustomer);
        if (response?.isInvalidToken) {
          // setDataCustomers([])
          // navigate("/");
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
      if (result.status && result.status === 200) {
        dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.text}))
        dataListFetch()
        console.log(dataListFetch)
        // alert(result?.text);
        // window.location.reload(false);
      }else{
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.text}))
        dispatch(closeProgress())

      }
    } else {
      dispatch(openProgress())
      const response = await ServiceWeb.addCustomer(formData);
      const result = await response.json();
      if (result.status && result.status === 200) {
        dispatch(openModal({alertSeverity:Constant.alertSeverity.SUCCESS,message:result?.text}))
        dataListFetch()
        dispatch(closeProgress())
        // alert(result?.text);
        // window.location.reload(false);
      }else{
        dispatch(openModal({alertSeverity:Constant.alertSeverity.ERROR,message:result?.text}))
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
