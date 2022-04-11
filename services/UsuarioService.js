// import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import config from "../util/Config";

class UsuarioService {
    async cadastrar(dados) { 
        return axios({
            url: config.API_URL+"usuario/cadastrar",
            method: config.METHOD,
            timeout: config.TIMEOUT_REQUEST,
            data: dados,
            headers: config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService