import ApiService from "../Apiservice";

const USUARIOS = '/usuarios';

class UsuarioService extends ApiService{

  constructor() {
    super(USUARIOS)
  }
  
}

export default UsuarioService;