import React from 'react'
import './Basket.css'


export default props =>
    <div className="basket ml-2">
        <div className="tnome bg-dark">
            Cesta
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço(R$)</td>
                </tr>
            </thead>
            <tbody>
                {
                    props.prod.map(
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