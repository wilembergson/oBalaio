import { render } from '@testing-library/react'
import React, { useState } from 'react'
import axios from 'axios'
import ProdutoService from '../../services/ProdutoService'
import Basket from '../Basket/Basket';
import Card from '../Cards/Card';
import NavBar from '../NavBar/NavBar'
import './ProdutoComponent.css'

function ProdutoComponent(props) {
    const  API_URL = 'http://localhost:8080/produtos/listAll'

    const [prod, setProd] = useState([])
    const [it, setIt] = useState([])

    axios.get(API_URL).then((response) => setProd(response.data))

    return (
        <>
            <div className="dados">
                <Basket prod={prod} item={it} />
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

/*class ProdutoComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            produtos: [],
            lista: [{ name:'didi', price: 0.25}, {name: 'juuba', price: 22.99 }],
            itemAtual:{}
        }
        this.mudarItem = this.mudarItem.bind(this)
    }


    componentDidMount() {
        ProdutoService.getProdutos().then((response) => {
            this.setState({ produtos: response.data })
        })
    }
    
    mudarItem(item){
         const it = this.state.itemAtual
         this.setState({itemAtual: item})
    }

    render() {
        return (
            <>
                <div className="dados">
                    <Basket prod={this.state.produtos} item={this.state.lista} />
                    <div className="tabela">
                        <h4 className="text-center mt-3">{this.state.itemAtual}</h4>
                        <hr/>
                        <div className="produtoss ml-5 mr-5">
                            {
                                this.state.produtos.map(
                                    p =>
                                        <Card name={p.name} price={p.price} adicionar={this.mudarItem} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}*/

export default ProdutoComponent