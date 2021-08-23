import axios from "axios";

const base =
  process.env.NODE_ENV === "production"
    ? "https://portfolio-carlson-site-api.herokuapp.com"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: base,
});

export default api;