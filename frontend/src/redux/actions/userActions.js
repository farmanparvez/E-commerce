import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLoginUserDetails, getUsersAPI, deleteUserAPI, editUserAPI } from "../../service/userAPI.js";

export const getUserInfo = createAsyncThunk("Info/userInfo", async (history, thunkAPI) => {
    try {
        const res = await getLoginUserDetails()
        // console.log(res)
        return res.data
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUsers = createAsyncThunk("user/getUsers", async (history, thunkAPI) => {
    try {
        const res = await getUsersAPI()
        // console.log(res)
        return res.data
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUser = createAsyncThunk("user/deleteUser", async (id, thunkAPI) => {
    try {
        const res = await deleteUserAPI(id)
        // console.log(res)
        return res.data
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const editUser = createAsyncThunk("user/editUser", async (data, thunkAPI) => {
    try {
        // console.log(data)
        const res = await editUserAPI(data)
        // console.log(res)
        return res
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})