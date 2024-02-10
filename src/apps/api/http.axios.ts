import axios from "axios";

const httpService = axios.create({
  baseURL: "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev",
  timeout: 1000,
  //headers: { "X-Custom-Header": "foobar" }
});
export default httpService;
