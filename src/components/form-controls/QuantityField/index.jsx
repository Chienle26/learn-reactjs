import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {},

  box: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    maxWidth: "150px",
  },

  quantity: {
    textAlign: "center",
    "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
      {
        display: "none", // Ẩn nút lên và xuống
      },
  },
}));

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const {
    formState: { errors, touchedFields },
    setValue,
  } = form;
  const hasError = errors[name] && touchedFields[name];

  return (
    <FormControl
      error={!!hasError}
      fullWidth
      margin="normal"
      variant="standard"
      size="small"
      className={classes.root}
    >
      <Typography marginBottom={1} variant="body1" fontWeight="bold">
        {label}
      </Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              className={classes.quantity}
              id={name}
              type="number"
              value={value}
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
