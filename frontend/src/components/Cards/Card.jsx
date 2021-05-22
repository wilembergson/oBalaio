import React, { useState } from 'react'
import './Card.css'

class Card extends React.Component {

        item = {
                name: this.props.name,
                price: this.props.price,
                quantity: 1
        }

        render (){
                return(
                        <>
                        <div className="card mt-4 mb-4 bg-dark">
                                <label className="label mt-5">{this.props.name}</label>
                                <label className="label mt-2 mb-4">R${this.props.price}</label>

                                <button onClick={()=>this.props.adicionar(this.item)} className="button btn btn-outline-success mt-5">
                                        + Adicionar
                    </button>
                        </div>
                </>
                )
        }
}
/*function Card(props) {

        const [item, setItem] = useState({name: props.name, price: props.price})

        return (
                <>
                        <div className="card mt-4 mb-4 bg-dark">
                                <label className="label mt-5">{props.name}</label>
                                <label className="label mt-2 mb-4">R${props.price}</label>

                                <button type="button" className="button btn btn-outline-success mt-5"
                                        onClick={()=>props.ad}>
                                        + Adicionar
                    </button>
                        </div>
                </>
        )
}*/

export default Card;