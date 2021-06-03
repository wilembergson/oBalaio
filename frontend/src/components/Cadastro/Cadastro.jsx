import React from 'react'
import './Cadastro.css'

function Cadastro() {
    return (
        <>
            <div className="dados">
                <div className="s1"></div>
                <div className="formulario">
                <form>
                    <h1 className="tt">Cadastro de Produtos</h1>
                    <hr className="sss"/>
                    <div className="cadastro-campo">
                        <label htmlFor="name">Nome</label>
                        <input id="name" className="name" type="text" />
                    </div>
                    <div className="cadastro-campo">
                        <label htmlFor="price">Preço</label>
                        <input id="price" className="price" type="number" />
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro