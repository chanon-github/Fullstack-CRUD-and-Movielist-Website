import * as React from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import ListView from "./ListView";
import * as Constant from '@/constants/Constant'
import { useDispatch } from 'react-redux'; 
import { openModal } from '@/redux/reducers/alert'; 
import { closeProgress,openProgress } from '@/redux/reducers/progress';
import { useRouter } from 'next/navigation'

const ListContainer = (props) => {
  const { dataCustomers ,dataListFetch} = props;
  const [openForm, setOpenForm] = React.useState();
  const [idCustomer, setIdCustomer] = React.useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch()
  const router = useRouter()
  const handleCloseForm = () => setOpenForm();
  const handleOpenForm = (e, id) => {
    setIdCustomer(id);
    setOpenForm(true);
  };

  const handleDelete = async (e, id) => {
    const response = await ServiceWeb.deleteCustomer(id);
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

    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const slicedData = dataCustomers.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return (
    <ListView
      dataCustomers={dataCustomers}
      slicedData={slicedData}
      openForm={openForm}
      idCustomer={idCustomer}
      rowsPerPage={rowsPerPage}
      page={page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleCloseForm={handleCloseForm}
      handleOpenForm={handleOpenForm}
      handleDelete={handleDelete}
       dataListFetch={dataListFetch}
      
    />
    // <Paper>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table" size={'small' }>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
    //         <TableCell style={{ fontWeight: "bold" }} align="right">
    //           Address
    //         </TableCell>
    //         <TableCell style={{ fontWeight: "bold" }} align="right">
    //           Email
    //         </TableCell>
    //         <TableCell style={{ fontWeight: "bold" }} align="right">
    //           Phone
    //         </TableCell>
    //         <TableCell style={{ fontWeight: "bold" }} align="right">
    //           Birth Date
    //         </TableCell>
    //         <TableCell style={{ fontWeight: "bold" }} align="right"></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {slicedData?.map((row) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.address}</TableCell>
    //           <TableCell align="right">{row.email}</TableCell>
    //           <TableCell align="right">{row.phone}</TableCell>
    //           <TableCell align="right">
    //             {row.birth_date ? row.birth_date : "-"}
    //           </TableCell>
    //           <TableCell align="right">
    //             <IconButton
    //               color="primary"
    //               aria-label="add to shopping cart"
    //               onClick={(e) => {
    //                 handleOpenForm(e, row.id);
    //               }}
    //             >
    //               <EditIcon />
    //             </IconButton>
    //             <IconButton
    //               color="error"
    //               aria-label="add to shopping cart"
    //               onClick={(e) => {
    //                 handleDelete(e, row.id);
    //               }}
    //             >
    //               <DeleteForeverIcon />
    //             </IconButton>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   {openForm && <Form
    //     isOpen={openForm}
    //     handleOpen={handleOpenForm}
    //     handleClose={handleCloseForm}
    //     idCustomer={idCustomer}
    //   ></Form>}

    // </TableContainer>
    // <TablePagination
    //     rowsPerPageOptions={[5, 10, 20]}
    //     component="div"
    //     count={dataCustomers?.length}
    //     rowsPerPage={rowsPerPage}
    //     page={page}
    //     onPageChange={handleChangePage}
    //     onRowsPerPageChange={handleChangeRowsPerPage}
    //   />
    // </Paper>
  );
};
export default ListContainer;
