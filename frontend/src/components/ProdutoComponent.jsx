import { render } from '@testing-library/react'
import React from 'react'
import ProdutoService from '../services/ProdutoService'
import Basket from './Basket';
import Card from './Card';
import NavBar from './NavBar'
import './ProdutoComponent.css'


class ProdutoComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            produtos: []
        }
    }


    componentDidMount() {
        ProdutoService.getProdutos().then((response) => {
            this.setState({ produtos: response.data })
        })
    }

    render() {
        return (
            <>
                <div className="dados">
                    <Basket />
                    <div className="tabela">
                        <h1 className="text-center"> Lista de produtos</h1>
                        <div className="produtos">
                            {
                                this.state.produtos.map(
                                    p =>
                                        <Card name={p.name} price={p.price} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProdutoComponent