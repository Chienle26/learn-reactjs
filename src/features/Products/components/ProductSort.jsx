import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disable tabs example"
    >
      <Tab label="Giá từ thấp tới cao" value="salePrice:ASC" />
      <Tab label="Giá từ cao tới thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
