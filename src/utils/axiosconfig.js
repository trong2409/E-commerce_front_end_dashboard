import axios from "axios";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const MyAxios = axios.create({
  baseURL: "https://e-commercebackend-production-01c8.up.railway.app/api/",
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data",
  },
});

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
