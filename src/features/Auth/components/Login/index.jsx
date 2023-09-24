import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // Use unwrapResult let get result of user from Object Action
      // const user = unwrapResult(resultAction);

      // -> Do something here on login successfully.
      if (closeDialog) closeDialog();
    } catch (error) {
      console.log("Fail to login", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} closeDialog={closeDialog} />
    </div>
  );
}

export default Login;
