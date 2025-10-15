import axios from "axios";

const API = axios.create({
  baseURL: "https://d-and-d-wq3m.vercel.app/api",
});

export default API;
