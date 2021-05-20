import { render } from '@testing-library/react'
import React from 'react'
import ProdutoService from '../services/ProdutoService'
import Basket from './Basket';
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
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>Preço</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produtos.map(
                                        p =>
                                            <tr key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{p.name}</td>
                                                <td>{p.price}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default ProdutoComponent