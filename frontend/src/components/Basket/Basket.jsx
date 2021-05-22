import React, { useState }from 'react'
import './Basket.css'


function Basket(props) {

    const [cesta, setCesta] = useState()

    return (
        <>
            <div className="basket ml-2">
                <div className="tnome bg-dark">
                    Cesta
        </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Preço(R$)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.item.map(
                                p =>
                                    <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Basket