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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  closeDialog: PropTypes.func,
};

function LoginForm({ onSubmit = null, closeDialog = null }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
    password: yup.string().required("Please enter your password."),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
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
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.submit}
          disabled={isSubmitting}
          size="large"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
