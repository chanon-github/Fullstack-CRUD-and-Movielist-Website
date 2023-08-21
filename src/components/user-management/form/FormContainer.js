import * as React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import moment from "moment";
import FormView from "./FormView";
const FormContainer = (props) => {
  const { idCustomer } = props;

  React.useEffect(() => {
    console.log("idCustomer", idCustomer);
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
          reset(result);
          console.log("response", response);
        }
      };
      dataFetch();
    }
  }, []);

  const onSubmit = async (formData) => {
    if (idCustomer) {
      const response = await ServiceWeb.editCustomer(formData);
      const result = await response.json();
      if (result.status && result.status === 200) {
        alert(result?.text);
        window.location.reload(false);
      }
    } else {
      const response = await ServiceWeb.addCustomer(formData);
      const result = await response.json();
      if (result.status && result.status === 200) {
        alert(result?.text);
        window.location.reload(false);
      }
    }
  };

  return (
    <>
      <FormView {...props} onSubmit={onSubmit} />
    </>
   
  );
};
export default FormContainer;
