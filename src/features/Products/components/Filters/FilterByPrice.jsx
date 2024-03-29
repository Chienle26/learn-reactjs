import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    borderTop: "1px solid lightgrey",
  },

  range: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "8px",
    "& > span": {
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          variant="standard"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          variant="standard"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp Dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
