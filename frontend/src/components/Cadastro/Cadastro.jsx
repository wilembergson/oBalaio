import React, { useState } from 'react'
import './Cadastro.css'
import axios from 'axios'

const API_URL = 'http://localhost:8080/produtos'

const produtoInicial = {
    name: '',
    price: 0
}

function Cadastro() {

    const [produto, setProduto] = useState(produtoInicial)
    const [nome, setNome] = useState('')

    function onChange(evento) {
        const { className, value } = evento.target

        setProduto({ ...produto, [className]: value })
    }

    function onSubmit(evento) {
        evento.preventDefault()

        axios.post(API_URL, produto)
    }

    function testar(e){
        console.log(e.target.className)
        setNome(e.target.cla)

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
                </div>
            </div>
        </>
    )
}

export default Cadastro