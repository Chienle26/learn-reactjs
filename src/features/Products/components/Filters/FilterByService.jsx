import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    borderTop: "1px solid lightgrey",
  },

  list: {
    margin: 0,
    padding: 0,
    listStyleType: "none",

    "& > li": {
      margin: 0,
    },
  },
}));

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className={classes.list}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí giao hàng" },
        ].map((service, index) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  name={service.value}
                  color="primary"
                  onChange={handleChange}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
