import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, getUsers, deleteUser, editUser } from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: null,
    userInfo:  null,
    // userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    users: [],
    stateUpdated: false,
    isVisible: false,
    modalData: null
  },
  reducers: {
    reset: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = null;
      state.stateUpdated = false
      // state.userInfo = null
      // state.users = []
    },
    setModalVisible: (state, action) => {
      // console.log(action.payload);
      state.isVisible = action.payload;
      state.modalData = action.payload.data;
    },
    clearUserInfo: (state, action) => {
      state.userInfo = null
      localStorage.removeItem('Etoken')
      localStorage.removeItem('userInfo')
    },
    setUserInfo: (state, action) => {
      // console.log(action.payload)
      state.userInfo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = action.payload
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.stateUpdated = true
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
      .addCase(editUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.stateUpdated = true
        state.isVisible = false
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isMessage = action.payload;
      })
  },
});

export const { reset, setModalVisible, clearUserInfo, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
