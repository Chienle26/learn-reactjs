import { Box } from "@mui/material";
import { Route, Routes, useParams } from "react-router-dom";
import ProductAdditional from "./components/ProductAdditional";
import ProductDescription from "./components/ProductDescription";
import ProductReviews from "./components/ProductReviews";
import useProductDetail from "./hooks/useProductDetail";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const { productId } = useParams();

  const { product } = useProductDetail(productId);

  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:productId" element={<DetailPage />}>
          <Route
            index
            element={<ProductDescription product={product} />}
            exact
          />
          <Route path="additional" element={<ProductAdditional />} exact />
          <Route path="reviews" element={<ProductReviews />} exact />
        </Route>
      </Routes>
    </Box>
  );
}

export default ProductFeature;
