import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import { Box } from "@mui/material";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategory) => {
    // Nếu có nhiều dòng nên viết kiểu này
    if (!onChange) return;

    const newFilters = {
      "category.id": newCategory.id,
      "category.name": newCategory.name,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
