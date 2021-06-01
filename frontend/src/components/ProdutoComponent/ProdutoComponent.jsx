import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Basket from '../Basket/Basket';
import Card from '../Cards/Card';
import './ProdutoComponent.css'

const API_URL = 'http://localhost:8080/produtos/listAll'

function ProdutoComponent(props) {
    //INSTALAR WEBPAC
    const [prod, setProd] = useState([])
    const [cesta, setCesta] = useState([])

    axios.get(API_URL).then((response) => setProd(response.data))


    function addCesta(item) {
        const itemCopy = Array.from(cesta)
        var existente = false
        for (var i = 0; i < cesta.length; i++) {
            if (itemCopy[i].name === item.name) {
                itemCopy[i].quantity++
                existente = true
            }
        }
        if (existente === false) {
            itemCopy.push({ id: cesta.length, name: item.name, price: item.price, quantity: 1 })
        }
        setCesta(itemCopy)
    }

    return (
        <>
            <div className="dados">
                <div className="basket ml-2">
                    <div className="tnome bg-dark">
                        Cesta
                 </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Preço(R$)</td>
                                <td>Quantidade</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cesta.map(
                                    p =>
                                        <tr key={p.id}>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.quantity}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {/*<Basket prod={prod} item={it} />*/}
                <div className="tabela">
                    <h4 className="text-center mt-3">Lista de produtos</h4>
                    <hr />
                    <div className="produtoss ml-5 mr-5">
                        {
                            prod.map(
                                p =>
                                    <Card name={p.name} price={p.price} adicionar={addCesta} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
export default ProdutoComponent