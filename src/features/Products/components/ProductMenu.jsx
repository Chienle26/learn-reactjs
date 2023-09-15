import React from "react";
import PropTypes from "prop-types";
import { Box, Link } from "@mui/material";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: "16px 24px",
    },

    "& > li > a": {
      color: "grey",
    },

    "& > li > a.active": {
      color: "blue",
      textDecoration: "underline",
    },
  },
}));

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const classes = useStyles();
  const { productId } = useParams();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={`/products/${productId}/`} exact>
          Description
        </Link>
      </li>
      <li>
        <Link
          component={NavLink}
          to={`/products/${productId}/additional`}
          exact
        >
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`/products/${productId}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
