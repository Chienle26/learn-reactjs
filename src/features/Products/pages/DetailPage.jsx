import { Box, Container, Grid, LinearProgress, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { addToCart } from "features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
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

  const dispatch = useDispatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress color="success" />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });

    dispatch(action);
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
        {/* Để hiện thị các thành phần trong router con */}
        <Outlet />
      </Container>
    </Box>
  );
}

export default DetailPage;
