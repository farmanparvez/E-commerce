import { createSlice } from "@reduxjs/toolkit";
import { getOrderDetails, payOrder, getUserOrder, getOrders, updateOrderToDelivered } from "../actions/orderAction";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    order: null,
    loadingOrders: true,
    orders: null,
    profileSuccess: false,
    allOrders: [],
    stateUpdated: false
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
      state.userInfo = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.order = action.payload.order;
        state.isMessage= action.payload.message
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(payOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(payOrder.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        // state.order = action.payload.order;
        state.isMessage= action.payload.message
      })
      .addCase(payOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getUserOrder.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload.orders;
        state.isMessage= action.payload.message
      })
      .addCase(getUserOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.allOrders = action.payload.orders;
        state.isMessage= action.payload.message
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(updateOrderToDelivered.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateOrderToDelivered.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage= action.payload.message;
        state.stateUpdated = true
      })
      .addCase(updateOrderToDelivered.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
