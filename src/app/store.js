import counterReducer from "../features/Counter/counterSlice";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/Auth/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  // count tự đặt tên
  count: counterReducer,
  cart: cartReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
