import * as React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import * as Constant from "@/constants/Constant";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/reducers/alert";
import { closeProgress, openProgress } from "@/redux/reducers/progress";
import CardView from "./CardView";
import { useRouter } from "next/navigation";

const CardContainer = (props) => {
  const { dataCustomers, dataListFetch } = props;

  const [openForm, setOpenForm] = React.useState(false);
  const [idCustomer, setIdCustomer] = React.useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const handleOpenForm = (id) => {
    setIdCustomer(id);
    setOpenForm(true);
  };
  const handleCloseForm = () => setOpenForm(false);

  const handleDelete = async (id) => {
    const response = await ServiceWeb.deleteCustomer(id);
    const result = await response.json();

    if (result?.isInvalidToken) {
      dispatch(
        openModal({
          alertSeverity: Constant.alertSeverity.ERROR,
          message: result?.message,
        })
      );
      router.push("/user/login");
    } else if (result.status && result.status === 200) {
      dispatch(
        openModal({
          alertSeverity: Constant.alertSeverity.SUCCESS,
          message: result?.message,
        })
      );
      dataListFetch();
    } else {
      dispatch(
        openModal({
          alertSeverity: Constant.alertSeverity.ERROR,
          message: result?.message,
        })
      );
    }
  };

  return (
    <>
      <CardView
        dataCustomers={dataCustomers}
        openForm={openForm}
        idCustomer={idCustomer}
        handleCloseForm={handleCloseForm}
        handleOpenForm={handleOpenForm}
        handleDelete={handleDelete}
        dataListFetch={dataListFetch}
      />
    </>
  );
};
export default CardContainer;
