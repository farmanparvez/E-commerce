import { createSlice } from "@reduxjs/toolkit";
import { getMenProduct, getWomenProduct, getElectronicsProduct } from "../actions/userProductAction";

const userProductSlice = createSlice({
  name: "userProduct",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    menProduct: [],
    womenProduct: [],
    electronicsProduct: [],
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
      .addCase(getMenProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMenProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menProduct = action.payload
      })
      .addCase(getMenProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getWomenProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWomenProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.womenProduct = action.payload
        // console.log(action.payload)
      })
      .addCase(getWomenProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getElectronicsProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getElectronicsProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.electronicsProduct = action.payload
      })
      .addCase(getElectronicsProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
  },
});

export const { reset } = userProductSlice.actions;
export default userProductSlice.reducer;
