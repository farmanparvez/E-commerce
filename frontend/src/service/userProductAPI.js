import { getRequest } from "../utils/request";
// const api = 'api'

export const getProductByProductTypeAPI = ({type}) => getRequest(`/api/product/productType/${type}`, )


// export const getProductByIdAPI = id => getRequest(`/api/product/${id}`)
