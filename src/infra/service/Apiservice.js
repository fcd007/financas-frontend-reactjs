import axios from "axios";

const API_REST_DEV_URL = "http://localhost:8080/v1";

const httpClient = axios.create({
  baseURL: API_REST_DEV_URL,
});
/**
 * Classe responsavel por requisicoes de chamadas a api rest
 */
class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  get(url) {
    return httpClient.get(url);
  }
  
  post(url, objeto) {
    return httpClient.post(url, objeto);
  }

  put(url, objeto) {
    return httpClient.put(url, objeto);
  }

  delete(url) {
    return httpClient.delete(url);
  }
}

export default ApiService;
