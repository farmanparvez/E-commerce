import { getRequest, deleteRequest, patchRequest } from "../utils/request";
// const api = 'api'

export const getLoginUserDetails = () => getRequest(`/api/user`)
export const getUsersAPI = () => getRequest(`/api/admin/users`)
export const deleteUserAPI = (id) => deleteRequest(`/api/admin/user/${id}`)
export const editUserAPI = ({data, id}) => patchRequest(`/api/admin/user/${id}`, data)