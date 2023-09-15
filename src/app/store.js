import counterReducer from "../features/Counter/counterSlice";
import cartReducer from "../features/Cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  // count tự đặt tên
  count: counterReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
