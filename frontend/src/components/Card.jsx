import React from 'react'
import "./Card.css"

export default props => 
    <div className="card mt-4 bg-dark">
        <label>{props.name}</label>
        <label>{props.price}</label>
    </div>