import axios from "axios";

const db = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "http://6c5c-142-184-84-68.ngrok.io/recipes",
});

export { db };
