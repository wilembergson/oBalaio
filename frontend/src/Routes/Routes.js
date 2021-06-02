import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Confirmacao from '../components/Confirmacao/Confirmacao'
import ProdutoComponent from '../components/ProdutoComponent/ProdutoComponent'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ProdutoComponent} />
                <Route path="/confirmacao" component={Confirmacao} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes