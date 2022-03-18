import axios from "axios";

const CADASTROCLIENTE_API_BASE_URL = "http://localhost:8080/cadastrocliente";

class CadastroclienteService {
    getCadastrocliente(){
        return axios.get(CADASTROCLIENTE_API_BASE_URL);
    }
}
export default new CadastroclienteService();