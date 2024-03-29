import ApiService from "../Apiservice";

const USUARIOS = "/api/v1/usuarios";

class UsuarioService extends ApiService {
  constructor() {
    super(USUARIOS);
  }

  autenticar(credenciais) {
    return this.post("/autenticarUsuario", credenciais);
  }

  obterSaldoPorUsuarioId(id) {
    return this.get(`/saldo/${id}`);
  }

  salvarUsuario(usuario) {
    return this.post("/save", usuario);
  }
}

export default new UsuarioService();
