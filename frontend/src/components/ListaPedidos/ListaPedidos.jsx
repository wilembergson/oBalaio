import axios from 'axios'
import React, { useState } from 'react'
import './ListaPedidos.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'

const API_URL = 'http://localhost:8080/pedidos'

function ListaPedidos(){

    const [pedidos, setPedidos] = useState([])

    axios.get(`${API_URL}/listAll`).then((response)=> setPedidos(response.data))

    function remover(id){
        axios.delete(`${API_URL}/${id}`)
        alert(`Pedido de ID=${id} foi deletado com sucesso.`)
    }

    return(
        <div className="pagina">
            <h2>Lista de pedidos</h2>
            <hr/>

            <table className="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>DATA</td>
                                <td>DETALHES</td>
                                <td>EXCLUIR</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.map(p =>
                                    <tr className="tLinha" key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.date}</td>
                                        <td><button type="button" className="btn btn-primary"><BiDetail/></button></td>
                                        <td><button type="button" onClick={()=> remover(p.id)} className="btn btn-danger"><BsFillTrashFill/></button></td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
        </div>
    )
}

export default ListaPedidos