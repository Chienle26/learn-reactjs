import React, { useEffect } from "react";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import productApi from "./api/productApi";
import { Link, Route, Routes } from "react-router-dom";
import ProductFeature from "./features/Products";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products" element={<ProductFeature />} />
      </Routes>
    </div>
  );
}

export default App;
