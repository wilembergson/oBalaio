import React, { useState } from 'react'
import './Cadastro.css'
import axios from 'axios'
import { BsFillTrashFill } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'
import { AiFillSave } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:8080/produtos'

const produtoInicial = {
    id: null,
    name: '',
    price: 0
}

function Cadastro() {

    const [prod, setProd] = useState([])
    const [produto, setProduto] = useState(produtoInicial)

    axios.get(`${API_URL}/listAll`).then((response) => setProd(response.data))

    function onChange(evento) {
        const { className, value } = evento.target
        setProduto({ ...produto, [className]: value })
    }

    function onSubmit(evento) {
        evento.preventDefault()
        if (produto.id === null) {
            axios.post(API_URL, produto)
        } else {
            axios.put(`${API_URL}/${produto.id}`, produto)
        }
        setProduto(produtoInicial)
        window.location.reload();
    }

    function atualizar(p) {
        alert(`Produto de ID=${p.id} selecionado. Altere os campos que desejar no formulário de cadastro para atualizar os dados deste produto.`)
        setProduto(p)
    }

    function deletar(p) {
        axios.delete(`${API_URL}/${p.id}`)
        alert(`O produto ${p.name} foi excluído com sucesso.`)
    }

    return (
        <div className="formulario">
            <h1 className="tt">Cadastro de Produtos</h1>
            <hr className="sss" />
            {/*--------------------------------------FORM-------------------------------------------------*/}
            <form onSubmit={onSubmit}>
                <div className="cadastro">
                    <div className="cadastro-campo">
                        <label htmlFor="name">Nome</label>
                        <input id="name" className="name" type="text" onChange={onChange} />
                    </div>
                    <div className="cadastro-campo">
                        <label htmlFor="price">Preço</label>
                        <input id="price" className="price" type="number" onChange={onChange} step="0.01" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="bt-salvar"><AiFillSave /> Salvar</button>
                    <button type="reset" className="bt-salvar bg-danger"> X Cancelar</button>
                </div>
            </form>
            {/*--------------------------------------------------------------------------------------------*/}
            <hr className="sss" />
            <div className="cadastro-campo">
                <h3 className="tt">Produtos cadastrados</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NOME</td>
                            <td>PREÇO</td>
                            <td className="botaoBox">DELETAR / EDITAR</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prod.map(p =>
                                <tr className="tLinha" key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>R${p.price.toFixed(2)}</td>
                                    <td><button type="button" onClick={() => deletar(p)} onMouseOver="Deletar" className="btn btn-danger"><BsFillTrashFill /></button>
                                        <button type="reset" onClick={() => atualizar(p)} className="btn btn-warning"><GrEdit /></button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cadastro