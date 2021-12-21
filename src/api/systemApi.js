import axios from "axios";

const systemApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default systemApi;
