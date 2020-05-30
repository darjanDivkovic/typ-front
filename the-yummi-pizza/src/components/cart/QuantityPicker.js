import React from 'react'

export default function QuantityPicker(props) {
    return (
        <div className='quantity-picker-container'>
            <button onClick={props.changeQuantity.bind(this, props.itemId, 'dec')} className='qp-buttons'>-</button>
            <div>{props.quantity}</div>
            <button onClick={props.changeQuantity.bind(this, props.itemId, 'inc')} className='qp-buttons'>+</button>
        </div>
    )
}

