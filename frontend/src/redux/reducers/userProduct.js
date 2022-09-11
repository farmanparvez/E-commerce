import { createSlice } from "@reduxjs/toolkit";
import { getMenProduct, getWomenProduct, getElectronicsProduct } from "../actions/userProductAction";

const userProductSlice = createSlice({
  name: "userProduct",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    count: null,
    page: { page: 1, limit: 12},

    // MensProduct
    menProduct: [],
    isErrorInMenProducts: false,
    // WomrnProduct
    womenProduct: [],
    isErrorInWomenProducts: false,
    //ElectronicProduct
    electronicsProduct: [],
    isErrorInElectronicProducts: false

  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
      // MensProduct
      state.isErrorInMenProducts = false;
      // WomrnProduct
      state.isErrorInWomenProducts = false;
      //ElectronicProduct
      state.isErrorInElectronicProducts = false
    },
    setPagination: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMenProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menProduct = action.payload.product
        state.count = action.payload.count
      })
      .addCase(getMenProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrorInMenProducts = true;
        state.isMessage = action.payload;
      })
      .addCase(getWomenProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWomenProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.womenProduct = action.payload.product
        state.count = action.payload.count
      })
      .addCase(getWomenProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrorInWomenProducts = true;
        state.isMessage = action.payload;
      })
      .addCase(getElectronicsProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getElectronicsProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.electronicsProduct = action.payload.product
        state.count = action.payload.count
      })
      .addCase(getElectronicsProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrorInElectronicProducts = true;
        state.isMessage = action.payload;
      })
  },
});

export const { reset, setPagination } = userProductSlice.actions;
export default userProductSlice.reducer;
