import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";

import moment from 'moment';

const FormView = (props) => {
  const { isOpen, handleClose, handleOpen,idCustomer,onSubmit } = props;
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const phoneNumberRegex = /^02\d{8}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validateAge = (value) => {
    const today = new Date();
    const enteredDate = new Date(value);
    const ageInMilliseconds = today - enteredDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    return ageInYears > 10 || "You must be at least 20 years old.";
  };

  return (
    <form>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add/Edit Customer</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={5}>
              <PersonIcon style={{ fontSize: "150px" }}></PersonIcon>
              <Button
                variant="contained"
                //   sx={{ mt: 3, mb: 2 }}
                style={{ marginLeft: "30px" }}
                onClick={handleOpen}
              >
                Upload
              </Button>
            </Grid>

            <Grid item xs={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="name"
                label="Name"
                id="name"
                style={{ background: "white" }}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  This field is required*
                </span>
              )}

           

              <TextField
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="address"
                label="Address"
                id="address"
                style={{ background: "white" }}
                {...register("address")}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="current-password"
                style={{ background: "white" }}
                {...register("email", { required: true, pattern: emailRegex })}
              />
              {errors.email && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Invalid Email
                </span>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="phone"
                label="Phone"
                id="phone"
                style={{ background: "white" }}
                {...register("phone", {
                  pattern: phoneNumberRegex,
                  required: true,
                })}
              />
              {errors.phone && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Invalid Phone Number
                </span>
              )}

              <label>
                <Controller
                  name="birth_date"
                  control={control}
                  rules={{ required: true, validate: validateAge }}
                  render={({ field }) => <TextField InputLabelProps={{ shrink: true }} name="birthdate" id="birthdate" label="Birth Date" type="date" required margin="normal" fullWidth {...field} />}
                />
                {errors.birth_date && <p style={{ color: "red", fontSize: "12px" }}>{errors.birth_date.message}</p>}
              </label>
            
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ marginLeft: "30px", backgroundColor: "red" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ marginLeft: "30px" }}
            onClick={handleSubmit(onSubmit)}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
export default FormView;
