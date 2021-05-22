import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProdutoService from '../../services/ProdutoService'
import Basket from '../Basket/Basket';
import Card from '../Cards/Card';
import './ProdutoComponent.css'

const  API_URL = 'http://localhost:8080/produtos/listAll'

function ProdutoComponent(props) {
    //INSTALAR WEBPAC
    const [prod, setProd] = useState([])
    const [cesta, setCesta] = useState([])
    const [it, setIt] = useState({})

    axios.get(API_URL).then((response) => setProd(response.data))

    useEffect(() => {
        cesta.push(it)
    }, [it])

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
                    <h4 className="text-center mt-3">Lista de prod</h4>
                    <hr />
                    <div className="produtoss ml-5 mr-5">
                        {
                            prod.map(
                                p =>
                                    <Card name={p.name} price={p.price} adicionar={setIt} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
export default ProdutoComponent