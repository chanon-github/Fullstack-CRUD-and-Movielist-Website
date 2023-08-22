import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

const RegisterView = (props) => {
  const { onSubmitForm } = props;
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const handleKeyPress = (event) => {

    if (event.key === 'Enter') {
      handleSubmit(onSubmitForm)();

    }
  };
  const password = watch("password");
  watch("confirmPassword");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  return (
    <>
      <form>
        <h1 style={{ textAlign: "center" }}>Register</h1>
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
                onKeyDown={handleKeyPress}

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
                onKeyDown={handleKeyPress}

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

        <div>
          <Controller
            name="confirmPassword"
            control={control}
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
                error={errors.confirmPassword ? true : false}
                required
                onKeyDown={handleKeyPress}

                InputLabelProps={{
                  style: { fontSize: 12 },
                }}
              />
            )}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red", fontSize: "8px" }}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div>
          <Controller
            name="email"
            control={control}
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
                error={errors.email ? true : false}
                required
                onKeyDown={handleKeyPress}

                InputLabelProps={{
                  style: { fontSize: 12 },
                }}
                {...field}
              />
            )}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "8px" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        <TextField
                name="formType"
                id="formType"
                defaultValue={'REGISTER'}
                style={{display:'none'}}
                {...register("formType")}
              />

        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: "10px", textTransform: "capitalize" }}
          onClick={handleSubmit(onSubmitForm)}
        >
          {"Register"}
        </Button>

      </form>
    </>
  );
};

export default RegisterView;
