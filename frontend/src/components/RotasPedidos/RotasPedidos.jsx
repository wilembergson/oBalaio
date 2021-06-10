import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListaPedidos from '../ListaPedidos/ListaPedidos'
import PedidoDetalhe from '../PedidoDetalhe/PedidoDetalhe'

function RotasPedidos(){
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/pedidos" exact component={ListaPedidos} />
                <Route path="/detalhes" component={PedidoDetalhe} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default RotasPedidos