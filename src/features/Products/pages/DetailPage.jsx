import { Box, Container, Grid, LinearProgress, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "16px",
  },

  left: {
    width: "400px",
    padding: "12px",
    borderRight: "1px solid lightgrey",
  },

  right: {
    flex: "1 1 0",
    padding: "12px",
  },

  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

function DetailPage(props) {
  const classes = useStyles();

  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress color="success" />
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log("formValues", formValues);
  };

  return (
    <Box>
      <Container className={classes.root}>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Routes>
          {/* <Route path={`/products/${productId}/`}>
            <ProductDescription product={product} />
          </Route> */}
          <Route
            path={`/products/${productId}/`}
            element={<ProductDescription product={product} />}
          />
          <Route
            path={`/products/${productId}/additional`}
            element={<ProductAdditional />}
          />
          <Route
            path={`/products/${productId}/reviews`}
            element={<ProductReviews />}
          />
        </Routes>
        <ProductDescription product={product} />
      </Container>
    </Box>
  );
}

export default DetailPage;
