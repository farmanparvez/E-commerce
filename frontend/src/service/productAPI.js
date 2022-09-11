import { postRequest, getRequest, axiosRequest, deleteRequest } from "../utils/request";
// const api = 'api'

export const getProductAPI = ({ page, limit }) => getRequest(`/api/products?page=${page}&limit=${limit}`)
export const getProductByIdAPI = id => getRequest(`/api/product/${id}`)

// image
export const uploadProductImageAPI = data => postRequest(`/api/uploads`, data)

// <=============================Admin===========================>

export const createProductAPI = data => postRequest(`/api/admin/user/product`, data)
export const deleteProductByIdAPI = id => deleteRequest(`/api/admin/user/product/${id}`)
export const updateProductByIdAPI = ( data, id )=> axiosRequest(`/api/admin/user/product/${id}`, 'patch', data)
export const productAdminProductByIdAPI = data => getRequest(`/api/admin/user/product`, data)


// <===============================user=======================================>
export const placeOrderAPI = data => postRequest(`/api/order`, data)
export const productReviewsAPI = ({ id, data}) => postRequest(`/api/product/reviews/${id}`, data)
export const topRatingProductsAPI = () => getRequest(`/api/topratingproducts`)

