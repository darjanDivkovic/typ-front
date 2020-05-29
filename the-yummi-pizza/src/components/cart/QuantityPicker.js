import React from 'react'

export default function QuantityPicker(props) {
    return (
        <div className='quantity-picker-container'>
            <button className='qp-buttons'>-</button>
            <div>{props.quantity}</div>
            <button onClick={props.incQuantity.bind(this, props.itemId)} className='qp-buttons'>+</button>
        </div>
    )
}

