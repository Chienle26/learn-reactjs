import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "32px",
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: "#f72c2c !important",
  },

  title: {
    marginTop: "16px !important",
    marginBottom: "24px !important",
    textAlign: "center",
  },

  submit: {
    marginBottom: "16px !important",
    marginTop: "24px !important",
  },

  loading: {
    position: "absolute",
    top: "-16px",
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  closeDialog: PropTypes.func,
};

function RegisterForm({ onSubmit = null, closeDialog = null }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name.")
      // custom validate
      .test(
        // name validate
        "should has at least two words",
        // error message
        "Please enter at least two words.",
        // validate => return boolean
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least 6 characters ."),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      // OneOf() - phải giống 1 trong những giá trị trong array này
      // yup.ref() - lấy giá trị từ 1 field nào đó
      .oneOf([yup.ref("password")], "Password doesn't match."),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  // Use async await let waiting for func handleSubmit completed then start isSubmitting
  const handleSubmit = async (values) => {
    if (onSubmit) await onSubmit(values);
    // form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.loading} />}

      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.submit}
          disabled={isSubmitting}
          size="large"
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
