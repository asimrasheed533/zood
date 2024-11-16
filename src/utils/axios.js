import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axios;
