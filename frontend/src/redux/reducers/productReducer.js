import { createSlice } from "@reduxjs/toolkit";
import {
  uploadProductImage,
  createProduct,
  getAdminProductProductByID,
  updateProductByID,
  deleteProductByID,
  getProduct,
  getProductByID,
  createOrder,
  productReviews,
  topratingproducts
} from "../actions/productAction";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    isRequestSuccess: false,
    products: [],
    product: {},
    isVisible: {},
    data: null,
    uploadImage: null,
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')),
    cartItem: JSON.parse(localStorage.getItem('cartItem')),
    paymentMethod: null,
    itemsPrice: '',
    order: {},
    stateUpdated: false,
    topRatedProducts: []
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
      state.isRequestSuccess = false;
      // state.uploadImage = null;
      state.stateUpdated = false;
    },
    setModalVisible: (state, action) => {
      // console.log(action.payload);
      state.isVisible = action.payload;
      state.data = action.payload.data;
    },
    savePaymentMethod: (state, action) => {
      // console.log(action.payload);
      state.paymentMethod = action.payload;
      // state.data = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadProductImage.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(uploadProductImage.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.uploadImage = action.payload;
        // state.isMessage = action.payload
      })
      .addCase(uploadProductImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = action.payload;
        state.isRequestSuccess = true;
        state.uploadImage = null;
        state.isVisible = false;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        // state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getAdminProductProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAdminProductProductByID.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        // state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAdminProductProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(updateProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProductByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isRequestSuccess = true;
        state.isMessage = action.payload;
        state.isVisible = false;
      })
      .addCase(updateProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(deleteProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProductByID.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.isRequestSuccess = true;
        state.isMessage = action.payload;
      })
      .addCase(deleteProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getProductByID.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        // state.isSuccess = true;
        state.product = action.payload;
        // state.isMessage = action.payload
      })
      .addCase(getProductByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(createOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload.order
        state.isMessage = action.payload.message
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(productReviews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(productReviews.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        // state.order = action.payload.order
        state.isMessage = action.payload.message
        state.stateUpdated = true
      })
      .addCase(productReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(topratingproducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(topratingproducts.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        // state.isSuccess = true;
        // state.order = action.payload.order
        state.isMessage = action.payload.message
        state.topRatedProducts = action.payload.product
      })
      .addCase(topratingproducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      });
  },
});

export const { reset, setModalVisible, savePaymentMethod } = productSlice.actions;
export default productSlice.reducer;
