// "use client";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
const LoginFormView = (props) => {
  const { onSubmitForm } = props;
  // const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onClickForgotpassword = () => {
    // navigate("/forgotpwd");
  };

  return (
    <>
      <form>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div>
          <div>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "This field is required*",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  size="small"
                  fullWidth
                  margin={"dense"}
                  error={errors.username ? true : false}
                  required
                  InputLabelProps={{
                    style: { fontSize: 12 },
                  }}
                />
              )}
            />
            {errors.username && (
              <span style={{ color: "red", fontSize: "8px" }}>
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "This field is required*",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  size="small"
                  fullWidth
                  margin={"dense"}
                  error={errors.password ? true : false}
                  required
                  InputLabelProps={{
                    style: { fontSize: 12 },
                  }}
                />
              )}
            />
            {errors.password && (
              <span style={{ color: "red", fontSize: "8px" }}>
                {errors.password.message}
              </span>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={
                <Typography variant="body1" fontWeight="bold">
                  Remember Me
                </Typography>
              }
            />
          </div>
          <TextField
            name="formType"
            id="formType"
            defaultValue={"LOGIN"}
            style={{ display: "none" }}
            {...register("formType")}
          />
          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: "10px", textTransform: "capitalize" }}
            onClick={handleSubmit(onSubmitForm)}
          >
            {"Login"}
          </Button>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link href="/user/forgotpwd">
              <Typography variant="subtitle1" fontSize="12px">
                Forgotten password?
              </Typography>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginFormView;
