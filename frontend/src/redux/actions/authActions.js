import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../service/authAPI.js";
import { setUserInfo } from "../reducers/userReducer.js";

export const login = createAsyncThunk("auth/authLogin", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await loginAPI(data)
        // console.log(res)
        thunkAPI.dispatch(setUserInfo(res.user))
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk("auth/authRegister", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await registerAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await registerAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error?.response?.data?.message || error?.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})