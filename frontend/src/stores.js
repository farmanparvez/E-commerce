import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/authReducer";
import productReducer from "./redux/reducers/productReducer";
import userReducer from "./redux/reducers/userReducer";
import orderReducer from "./redux/reducers/orderReducer";
import userProduct from "./redux/reducers/userProduct"

const Store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        user: userReducer,
        order: orderReducer,
        userProduct,
    }
})

export default Store