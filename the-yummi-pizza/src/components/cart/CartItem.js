import React from 'react'

export default function CartItem(props) {
    return (
        <li className='cart-item'>
            <div className='cart-item-des'>
            <h2>{props.item.name} x{props.item.quantity}</h2>
            <h3>{props.item.price} €</h3>
            <button onClick={props.removeItem.bind(this, props.item)} className='remove-btn'>REMOVE</button>
            </div>
            <hr></hr>
        </li>
    )
}
