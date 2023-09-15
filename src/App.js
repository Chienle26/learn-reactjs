import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumFeature from "./features/Album";
import BlogFeature from "./features/Blog";
import ProductFeature from "./features/Products";
import TodoFeature from "./features/Todo";
import CartFeature from "./features/Cart";
import CounterFeature from "./features/Counter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/counter" element={<CounterFeature />} />
        <Route path="/products/*" element={<ProductFeature />} />
        <Route path="/blogs/*" element={<BlogFeature />} />
        <Route path="/cart/*" element={<CartFeature />} />
      </Routes>
    </div>
  );
}

export default App;
