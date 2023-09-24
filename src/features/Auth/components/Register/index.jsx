import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // Auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // Use unwrapResult let get result of user from Object Action
      // const user = unwrapResult(resultAction);

      // -> Do something here on register successfully.
      enqueueSnackbar("Register successfully.", { variant: "success" });
      if (closeDialog) closeDialog();
    } catch (error) {
      console.log("Fail to register", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} closeDialog={closeDialog} />
    </div>
  );
}

export default Register;
