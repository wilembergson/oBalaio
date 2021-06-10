import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cadastro from '../components/Cadastro/Cadastro'
import Home from '../components/Home/Home'
import ListaPedidos from '../components/ListaPedidos/ListaPedidos'
import ProdutoComponent from '../components/ProdutoComponent/ProdutoComponent'
import PedidoDetalhe from '../components/PedidoDetalhe/PedidoDetalhe'
import RotasPedidos from '../components/RotasPedidos/RotasPedidos'

function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/comprar" component={ProdutoComponent} />
                <Route path="/confirmacao" component={Cadastro} />
                <Route path="/pedidos/" component={RotasPedidos}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes