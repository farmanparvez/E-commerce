import axios from "axios";
// import { useCookies } from 'react-cookie';

export const getRequest = (url, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${Etoken}`,
    },
    withCredentials: true,
  };
  return axios.get(url, config).then((res) => res.data);
};

export const postRequest = (url, data) => {
  // const Etoken = localStorage.getItem("Etoken")
  //   ? localStorage.getItem("Etoken")
  //   : undefined;
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${Etoken}`,
    },
    withCredentials: true,
  };
  return axios.post(url, data, config).then((res) => res.data);
};

export const deleteRequest = (url, data = undefined) => {
  const Etoken = localStorage.getItem("Etoken")
    ? localStorage.getItem("Etoken")
    : undefined;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Etoken}`,
    },
  };
  return axios.delete(url, config).then((res) => res.data);
};

export const patchRequest = (url, data = undefined) => {
  const Etoken = localStorage.getItem("Etoken")
    ? localStorage.getItem("Etoken")
    : undefined;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Etoken}`,
    },
  };
  return axios.patch(url, data, config).then((res) => res.data);
};

export const axiosRequest = (url, methods, data) => {
  const Etoken = localStorage.getItem("Etoken")
    ? localStorage.getItem("Etoken")
    : undefined;
  // console.log(Etoken)
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Etoken}`,
    },
  };
  return axios[methods](url, data, config).then((res) => res.data);
};
