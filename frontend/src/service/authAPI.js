import { postRequest } from "../utils/request";
const api = 'api'

export const loginAPI = data => postRequest(`${api}/login`, data)
export const registerAPI = data => postRequest(`${api}/signup`, data)