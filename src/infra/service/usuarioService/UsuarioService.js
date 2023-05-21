import ApiService from "../Apiservice";

const USUARIOS = '/api/v1/usuarios';

class UsuarioService extends ApiService{

  constructor() {
    super(USUARIOS)
  }

  autenticar(credenciais) {
    return this.post("/autenticarUsuario", credenciais);
  }
  
}

export default UsuarioService;