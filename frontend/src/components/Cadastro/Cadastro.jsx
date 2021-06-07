import React, { useState } from 'react'
import './Cadastro.css'
import axios from 'axios'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'
import { Redirect } from 'react-router'

const API_URL = 'http://localhost:8080/produtos'
const API_URL_LISTALL = 'http://localhost:8080/produtos/listAll'

const produtoInicial = {
    name: '',
    price: 0
}

function Cadastro() {

    const [prod, setProd] = useState([])
    const [produto, setProduto] = useState(produtoInicial)

    axios.get(API_URL_LISTALL).then((response) => setProd(response.data))

    function onChange(evento) {
        const { className, value } = evento.target

        setProduto({ ...produto, [className]: value })
    }

    function onSubmit(evento) {
        evento.preventDefault()

        axios.post(API_URL, produto)
    }

    return (
        <>
            <div className="dados">
                <div className="s1"></div>
                <div className="formulario">
                    <h1 className="tt">Cadastro de Produtos</h1>
                    <hr className="sss" />
                    <form onSubmit={onSubmit}>
                        <div className="cadastro-campo">
                            <label htmlFor="name">Nome</label>
                            <input id="name" className="name" type="text" onChange={onChange} />
                        </div>
                        <div className="cadastro-campo">
                            <label htmlFor="price">Preço</label>
                            <input id="price" className="price" type="number" onChange={onChange} step="0.01"/>
                        </div>
                        <div>
                            {/*Adicionar efeito hover no botão*/}
                            <button type="submit" className="bt-salvar">Salvar</button>
                        </div>
                    </form>
                    <hr className="sss" />
                    <div className="cadastro-campo">
                    <h3 className="tt">Produtos cadastrados</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>PREÇO</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prod.map(p =>
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>R${p.price.toFixed(2)}</td>
                                        <td><button type="button" className="btn btn-danger"><BsFillTrashFill/></button>
                                            <button type="button" className="btn btn-warning"><GrEdit/></button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro