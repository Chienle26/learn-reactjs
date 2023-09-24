import { TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, onBlur, value, name },
        // fieldState: { invalid, error },
      }) => (
        <TextField
          margin="normal"
          variant="outlined"
          id="outlined-error-helper-text"
          fullWidth
          label={label}
          error={!!hasError}
          helperText={errors[name]?.message}
          // error={invalid}
          // helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
        />
      )}
    />
  );
}

export default InputField;
