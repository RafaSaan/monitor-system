import axios from "axios";
import systemApi from "@/api/systemApi";

export const login = async ({ commit }, loginData) => {
  try {
    await systemApi.get("/sanctum/csrf-cookie");

    const { data } = await systemApi.post("/api/login", loginData);

    commit("setToken", data);

    // console.log(data);
    localStorage.setItem("token", data);
  } catch (errors) {
    console.log(errors);
  }
};

export const setUser = async ({ commit }) => {
  try {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const { data } = await axios.get("http://localhost:8000/api/user");
    // const { data } = await systemApi.get("/api/user");
    commit("setUser", data);
  } catch (errors) {
    console.log(errors);
  }
};
