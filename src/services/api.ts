import axios from "axios";

const api = axios.create({
  //baseURL: "http://172.17.119.7:3333/",
  baseURL: "https://meu.cb.ce.gov.br",
});

export default api;