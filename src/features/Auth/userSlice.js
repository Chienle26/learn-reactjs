import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

// Async action
export const register = createAsyncThunk("users/register", async (payload) => {
  // Call api to register
  const data = await userApi.register(payload);

  // Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // Return user data
  return data.user;
});

// Async action
export const login = createAsyncThunk("users/login", async (payload) => {
  // Call api to register
  const data = await userApi.login(payload);

  // Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // Return user data
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  // Vì userSlice chỉ call api nên nó là async action chứ ko phải sync nên ta ko khởi tạo action tạo ở đây
  reducers: {
    logout(state) {
      // Clear localStorage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },
  },
  extraReducers: {
    // [register.fulfilled] (= "users/register/fulfilled") - khi register success
    [register.fulfilled]: (state, action) => {
      // action.payload chính là chỗ ta return từ register -> save into state current
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
