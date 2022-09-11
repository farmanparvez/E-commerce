import { getRequest } from "../utils/request";
// const api = 'api'

export const getProductByProductTypeAPI = ({type, page, limit}) => getRequest(`/api/product/productType/${type}?page=${page}&limit=${limit}`, )


// export const getProductByIdAPI = id => getRequest(`/api/product/${id}`)
