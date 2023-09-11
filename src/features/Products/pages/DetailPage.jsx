import { Box, CircularProgress, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";
import AddToCartForm from "../components/AddToCartForm";
DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "400px",
    padding: "12px",
    borderRight: "1px solid lightgrey",
  },

  right: {
    flex: "1 1 0",
    padding: "12px",
  },
}));

function DetailPage(props) {
  const classes = useStyles();

  const { productId } = useParams();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress color="inherit" size={16} />
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
      </Container>
    </Box>
  );
}

export default DetailPage;
