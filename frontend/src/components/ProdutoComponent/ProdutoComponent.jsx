import { render } from '@testing-library/react'
import React from 'react'
import ProdutoService from '../../services/ProdutoService'
import Basket from '../Basket/Basket';
import Card from '../Cards/Card';
import NavBar from '../NavBar/NavBar'
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
                    <Basket prod={this.state.produtos} />
                    <div className="tabela">
                        <h4 className="text-center mt-3">Lista de produtos</h4>
                        <hr/>
                        <div className="produtoss ml-5 mr-5">
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