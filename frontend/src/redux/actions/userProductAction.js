import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductByProductTypeAPI } from "../../service/userProductAPI";

export const getMenProduct = createAsyncThunk("product/getMenProduct", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await getProductByProductTypeAPI(data)
        // console.log(res)
        return res.product
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const getWomenProduct = createAsyncThunk("product/getWomenProduct", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await getProductByProductTypeAPI(data)
        // console.log(res)
        return res.product
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const getElectronicsProduct = createAsyncThunk("product/getElectronicsProduct", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await getProductByProductTypeAPI(data)
        // console.log(res)
        return res.product
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})