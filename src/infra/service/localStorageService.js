export default class LocalStorageService {

  static addItem(key, value) {
    const user = JSON.stringify(value);
    localStorage.setItem(key, user);
  }

  static obterItem(key) {
    const item = localStorage.getItem(key);
    const value = JSON.parse(item);
    return  value;
  }

  static removerItem(key) {
    localStorage.removeItem(key);
  }
}