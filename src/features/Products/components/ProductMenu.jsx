import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useParams } from "react-router-dom";

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
        <Link component={NavLink} to={`/products/${productId}/`}>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`/products/${productId}/additional`}>
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`/products/${productId}/reviews`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
