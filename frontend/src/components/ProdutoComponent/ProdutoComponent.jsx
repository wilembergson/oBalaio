import React, { useState } from 'react'
import axios from 'axios'
import '../../components/Basket/Basket.css'
import Card from '../Cards/Card';
import './ProdutoComponent.css'

const API_URL = 'http://localhost:8080/produtos/listAll'

function ProdutoComponent(props) {
    //INSTALAR WEBPAC
    const [prod, setProd] = useState([])
    const [cesta, setCesta] = useState([])

    axios.get(API_URL).then((response) => setProd(response.data))

    function removeCesta(item) {
        const itemCopy = Array.from(cesta)
        var p = 0
        for(var i=0; i<prod.length; i++){
            if(prod[i].name === item.name){
                p = prod[i].price
            }
        }
        for (var i = 0; i < itemCopy.length; i++) {
            if (itemCopy[i].name === item.name) {
                itemCopy[i].quantity = parseInt(itemCopy[i].quantity - 1)
                itemCopy[i].price = parseFloat(p * itemCopy[i].quantity).toFixed(2)
            }
        }
        setCesta(itemCopy)
    }

    function addCesta(item) {
        const itemCopy = Array.from(cesta)
        var existente = false
        for (var i = 0; i < itemCopy.length; i++) {
            if (itemCopy[i].name === item.name) {
                itemCopy[i].quantity++
                itemCopy[i].price = parseFloat(item.price * itemCopy[i].quantity).toFixed(2)
                existente = true
            }
        }
        if (existente === false) {
            itemCopy.push({ id: parseInt(cesta.length+1), name: item.name, price: item.price, quantity: 1 })
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
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cesta.map(p => 
                                    <tr>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.quantity}</td>
                                            <td><button onClick={() => removeCesta(p)} type="button" className="btn2 btn-danger">-</button></td>
                                        </tr>
                                    
                                )
                            }
                        </tbody>
                        </table>
                        <div className="tnome bg-dark">
                        TOTAL: R$
                 </div>
                </div>

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