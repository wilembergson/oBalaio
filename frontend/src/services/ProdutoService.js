import axios from 'axios'

const  API_URL = 'http://localhost:8080/produtos/listAll'

class ProdutoService {
    getProdutos(){
        return axios.get(API_URL)
    }
}

export default new ProdutoService();