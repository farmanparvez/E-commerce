import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem("Etoken", action.payload.token);
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem("Etoken", action.payload.token);
        localStorage.setItem("userInfo", action.payload.user[0]);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
