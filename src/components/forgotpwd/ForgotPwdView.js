import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import { useNavigate, useLocation } from "react-router-dom";

const ForgotPwdView = (props) => {
  const { onSubmitForm, onSendResetToken, isShowForm } = props;
  // const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const {
    control: controlFormSendToken,
    handleSubmit: handleSubmitFormSendToken,
    formState: { errors: errorsFormSendToken },
  } = useForm();

  const {
    control: controlFormResetPswd,
    handleSubmit: handleSubmitFormResetPswd,
    formState: { errors: errorsFormResetPswd },
    watch,
  } = useForm();

  const password = watch("password");
  watch("confirmPassword");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  return (
    <>
      <form>
        <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
        <div>
          <Controller
            name="email"
            control={controlFormSendToken}
            rules={{
              required: "This field is required*",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                label="Email"
                size="small"
                fullWidth
                margin={"dense"}
                error={errorsFormSendToken.email ? true : false}
                required
                InputLabelProps={{
                  style: { fontSize: 12 },
                }}
                {...field}
              />
            )}
          />
          {errorsFormSendToken.email && (
            <span style={{ color: "red", fontSize: "8px" }}>
              {errorsFormSendToken.email.message}
            </span>
          )}
        </div>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: "10px", textTransform: "capitalize" }}
          onClick={handleSubmitFormSendToken(onSendResetToken)}
        >
          {"Send Reset Token"}
        </Button>
      </form>


      {isShowForm && (
        <form style={{marginTop:'25px'}}>
          <div>
            <Controller
              name="verifyCode"
              control={controlFormResetPswd}
              rules={{
                required: "This field is required*",
              }}
              render={({ field }) => (
                <TextField
                  label="Verify Code"
                  size="small"
                  fullWidth
                  margin={"dense"}
                  error={errorsFormResetPswd.verifyCode ? true : false}
                  required
                  InputLabelProps={{
                    style: { fontSize: 12 },
                  }}
                  {...field}
                />
              )}
            />
            {errorsFormResetPswd.verifyCode && (
              <span style={{ color: "red", fontSize: "8px" }}>
                {errorsFormResetPswd.verifyCode.message}
              </span>
            )}
          </div>

          <div>
            <Controller
              name="password"
              control={controlFormResetPswd}
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
                  error={errorsFormResetPswd.password ? true : false}
                  required
                  InputLabelProps={{
                    style: { fontSize: 12 },
                  }}
                />
              )}
            />
            {errorsFormResetPswd.password && (
              <span style={{ color: "red", fontSize: "8px" }}>
                {errorsFormResetPswd.password.message}
              </span>
            )}
          </div>

          <div>
            <Controller
              name="confirmPassword"
              control={controlFormResetPswd}
              rules={{
                required: "This field is required*",
                validate: validatePasswordMatch,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  size="small"
                  fullWidth
                  margin={"dense"}
                  error={errorsFormResetPswd.confirmPassword ? true : false}
                  required
                  InputLabelProps={{
                    style: { fontSize: 12 },
                  }}
                />
              )}
            />
            {errorsFormResetPswd.confirmPassword && (
              <span style={{ color: "red", fontSize: "8px" }}>
                {errorsFormResetPswd.confirmPassword.message}
              </span>
            )}
          </div>

          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: "10px", textTransform: "capitalize" }}
            onClick={handleSubmitFormResetPswd(onSubmitForm)}
          >
            {"Submit"}
          </Button>
        </form>
      )}
    </>
  );
};

export default ForgotPwdView;
