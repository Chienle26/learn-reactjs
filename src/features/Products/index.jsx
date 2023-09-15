import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import ProductDescription from "./components/ProductDescription";
import ProductAdditional from "./components/ProductAdditional";
import ProductReviews from "./components/ProductReviews";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:productId/*" element={<DetailPage />} />
        {/* <Route path="/:productId/*" element={<DetailPage />}>
          <Route path="" element={<ProductDescription />} />
          <Route path="additional" element={<ProductAdditional />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route> */}
      </Routes>
    </Box>
  );
}

export default ProductFeature;
