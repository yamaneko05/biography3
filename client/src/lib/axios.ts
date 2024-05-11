import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:8000/api",
})

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err.response?.data);

    return Promise.reject(err);
  }
)
