import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  uploadProductImageAPI,
  createProductAPI,
  updateProductByIdAPI,
  productAdminProductByIdAPI,
  deleteProductByIdAPI,
  getProductAPI,
  getProductByIdAPI,
  placeOrderAPI,
  productReviewsAPI,
  topRatingProductsAPI,
} from "../../service/productAPI";

// uploadimage
export const uploadProductImage = createAsyncThunk(
  "image/uploadProductImage",
  async (formData, thunkAPI) => {
    try {
      // // console.log(formData)
      const data = await uploadProductImageAPI(formData);
      // console.log(data)
      return data;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      const res = await createProductAPI(data);
      // console.log(res)
      return res.message;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAdminProductProductByID = createAsyncThunk(
  "product/productAdminProductById",
  async (data, thunkAPI) => {
    try {
      const res = await productAdminProductByIdAPI(data);
      // console.log(res)
      return res.product;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProductByID = createAsyncThunk(
  "product/updateProductByID",
  async ({ productData, id }, thunkAPI) => {
    try {
      // console.log(productData, id);
      // const data = {}
      // const
      const res = await updateProductByIdAPI(productData, id);
      // console.log(res)
      return res.message;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProductByID = createAsyncThunk(
  "product/deleteProduct",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const res = await deleteProductByIdAPI(data);
      // console.log(res)
      return res.message;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (data, thunkAPI) => {
    try {
      const res = await getProductAPI(data);
      // console.log(res)
      return res;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProductByID = createAsyncThunk(
  "product/getProductByID",
  async (id, thunkAPI) => {
    try {
      // console.log(id)
      const res = await getProductByIdAPI(id);
      // console.log(res)
      return res.product;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addCartItem = createAsyncThunk(
  "addCartItem/addCartItemInLocalStorege",
  async ({ val, history }, thunkAPI) => {
    // console.log(val);
    const existItem =
      localStorage.getItem("cartItem")?.length > 0 &&
      JSON.parse(localStorage.getItem("cartItem")).find(
        (x) => x._id === val._id && x.user === val.user
      );

      // console.log(existItem)
    if (existItem) return;
    // console.log(val);
    const oldCartItems = localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [];
    const data = [...oldCartItems, val];
    localStorage.setItem("cartItem", JSON.stringify(data));
    // history.push(`/cart/${match.params.id}?qty=${qty}`);

    // try {
    //     // console.log(id)
    //     const res = await getProductByIdAPI(id)
    //     // console.log(res)
    //     return res.product
    // } catch (error) {
    //     const message = error.response.data.message || error.message || error.toString()
    //     return thunkAPI.rejectWithValue(message)
    // }
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart/removeFromCartLocalStorege",
  async (id, thunkAPI) => {
    const existItem = JSON.parse(localStorage.getItem("cartItem")).filter(
      (x) => x._id !== id
    );
    if (existItem) localStorage.setItem("cartItem", JSON.stringify(existItem));
  }
);

export const saveShippingAddress = createAsyncThunk(
  "saveShippingAddress/saveShippingAddressLocalStorege",
  async (data, thunkAPI) => {
    // const existItem = JSON.parse(localStorage.getItem('cartItem')).filter(x => x._id !== id)
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  }
);

export const createOrder = createAsyncThunk(
  "createOrder/createOrderProduct",
  async (data, thunkAPI) => {
    try {
      const res = await placeOrderAPI(data);
      // console.log(res);
      return res;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productReviews = createAsyncThunk(
  "product/productReviews",
  async (data, thunkAPI) => {
    try {
      // console.log(data)
      const res = await productReviewsAPI(data);
      // console.log(res);
      return res;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const topratingproducts = createAsyncThunk(
  "product/topratingproducts",
  async (_, thunkAPI) => {
    try {
      // console.log(data)
      const res = await topRatingProductsAPI();
      // console.log(res);
      return res;
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
