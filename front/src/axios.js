import axios from "axios";

const db = axios.create({
  baseURL: "http://192.34.58.115/api/",
  // baseURL: "http://6c5c-142-184-84-68.ngrok.io/recipes",
});

export { db };
