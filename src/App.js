import { Typography } from "@mui/material";
import Header from "components/Header";
import DetailPage from "features/Products/pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import AlbumFeature from "./features/Album";
import BlogFeature from "./features/Blog";
import CartFeature from "./features/Cart";
import CounterFeature from "./features/Counter";
import ProductFeature from "./features/Products";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/counter" element={<CounterFeature />} />
        <Route path="/products/*" element={<ProductFeature />} exact>
          <Route path=":productId" element={<DetailPage />} exact />
        </Route>
        <Route path="/blogs/*" element={<BlogFeature />} />
        <Route path="/cart/*" element={<CartFeature />} />
        <Route path="*" element={<Typography>This is 404 page.</Typography>} />
      </Routes>
    </div>
  );
}

export default App;
