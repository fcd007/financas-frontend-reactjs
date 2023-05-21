import axios from "axios";

const API_REST_DEV_URL = "http://localhost:8080";

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
    const requestUrl = `${ this.apiUrl}${url}`
    return httpClient.get(requestUrl);
  }
  
  post(url, objeto) {
    const requestUrl = `${ this.apiUrl}${url}`
    return httpClient.post(requestUrl, objeto);
  }

  put(url, objeto) {
    const requestUrl = `${ this.apiUrl}${url}`
    return httpClient.put(requestUrl, objeto);
  }

  delete(url) {
    const requestUrl = `${ this.apiUrl}${url}`
    return httpClient.delete(requestUrl);
  }
}

export default ApiService;
