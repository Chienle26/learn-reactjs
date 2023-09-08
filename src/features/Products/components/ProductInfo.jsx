import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { formatPrice } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "16px",
    borderBottom: "1px solid #d3d3d3",
  },

  priceBox: {
    padding: "16px",
    backgroundColor: "#f0f0f0",
  },

  salePrice: {
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "24px",
  },

  originalPrice: {
    marginRight: "8px",
    textDecoration: "line-through",
  },
}));

ProductInfo.propTypes = {
  product: PropTypes.object,
};

// Dùng cách này để tạo giá trị mặc định cho nó khi không có product sẽ lấy object rỗng
function ProductInfo({ product = {} }) {
  const classes = useStyles();

  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ margin: "16px 0" }}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span">{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
