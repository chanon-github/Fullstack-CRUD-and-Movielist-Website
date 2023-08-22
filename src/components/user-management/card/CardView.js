import * as React from "react";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import Form from "../form/FormContainer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CardView = (props) => {
  const {
    dataCustomers,
    dataListFetch,
    openForm,
    idCustomer,

    handleCloseForm,
    handleOpenForm,
    handleDelete,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ];

  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    setAnchorEl({ [index]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      {dataCustomers?.map((item, index) => (
        <Grid item xs={12} sm={12} xl={12} key={item?.id}>
          <Card>
            <Grid container>
              <Grid item xs={3} sm={3} xl={3}>
                <AccountCircleIcon
                  color="primary"
                  fontSize="inherit"
                  sx={{ fontSize: "100px" }}
                ></AccountCircleIcon>
              </Grid>
              <Grid item xs={6} sm={6} xl={6}>
                <CardContent>
                  <Typography
                    variant="body1"
                    color="#797a7a"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#797a7a"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    {item?.phone}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#797a7a"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    {item?.email}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#797a7a"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    {item?.address}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid container item xs={3} sm={3} xl={3} justifyContent="center">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  sx={{ height: "60%" }}
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={
                    // Check to see if the anchor is set.
                    anchorEl && anchorEl[index]
                  }
                  open={
                    // Likewise, check here to see if the anchor is set.
                    Boolean(anchorEl && anchorEl[index])
                  }
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  sx={{ maxHeight: ITEM_HEIGHT * 10, width: "20ch" }}

                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={(e) => {
                      handleOpenForm(item.id);
                      handleClose()
                    }}
                  >
                    <EditIcon color="primary" />
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      handleDelete(item.id);
                    }}
                  >
                    <DeleteForeverIcon color="error" />
                    Delete
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}

      {openForm && <Form
        isOpen={openForm}
        handleOpen={handleOpenForm}
        handleClose={handleCloseForm}
        idCustomer={idCustomer}
        dataListFetch={dataListFetch}
      ></Form>}
    </Grid>
  );
};
export default CardView;
