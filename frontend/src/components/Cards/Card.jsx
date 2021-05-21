import React from 'react'
import './Card.css'

export default props =>
    <div className="card mt-4 mb-4 bg-dark">
            <label className="label mt-5">{props.name}</label>
            <label className="label mt-2 mb-4">R${props.price}</label>
            <button type="button" className="button btn btn-outline-success mt-5">+ Adicionar</button>
    </div>