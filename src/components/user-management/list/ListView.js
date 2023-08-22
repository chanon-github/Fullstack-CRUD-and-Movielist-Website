import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Form from "../form/FormContainer";
import * as ServiceWeb from "@/service/serviceWeb";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRouter } from 'next/navigation'

const ListView = (props) => {
  const {
    dataCustomers,
    slicedData,
    openForm,
    idCustomer,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    handleCloseForm,
    handleOpenForm,
    handleDelete,
    dataListFetch
  } = props;
  const router = useRouter()

  // export default function Animations() {
  //   return (
  //     <Box sx={{ width: 300 }}>
  //       <Skeleton />
  //       <Skeleton animation="wave" />
  //       <Skeleton animation={false} />
  //     </Box>
  //   );
  // }
  return (
    <Paper>
     

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size={"small"}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Address
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Email
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Phone
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Birth Date
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold" }}
                align="right"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  {row.birth_date ? row.birth_date : "-"}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={(e) => {
                      handleOpenForm(e, row.id);
                      // router.push(`/user-management/${row.id}`);

                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="add to shopping cart"
                    onClick={(e) => {
                      handleDelete(e, row.id);
                    }}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
           
          </TableBody>
        </Table>
        {openForm && (
          <Form
            isOpen={openForm}
            handleOpen={handleOpenForm}
            handleClose={handleCloseForm}
            idCustomer={idCustomer}
            dataListFetch={dataListFetch}
          ></Form>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={dataCustomers?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default ListView;
