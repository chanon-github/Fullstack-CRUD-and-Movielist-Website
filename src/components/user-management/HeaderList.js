import * as React from "react";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Button from "@mui/material/Button";
import Form from "./form/FormContainer";

const Header = (props) => {
  const { onChangeView } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="login-btn"
            onClick={handleOpen}
          >
            + Add Customer
          </Button>
        </Grid>
        <Grid container item xs={2} justifyContent={"flex-end"}>
          <Grid item xs={2}>
            <IconButton
              color="primary"
              onClick={() => {
                onChangeView("TABLE-VIEW");
              }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              color="primary"
              onClick={() => {
                onChangeView("CARD-VIEW");
              }}
            >
              <AppsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Form isOpen={open} handleOpen={handleOpen} handleClose={handleClose}></Form>
       
      </div>
    </React.Fragment>
  );
};

export default Header;
