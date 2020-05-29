import React from 'react'

export default function CartItem(props) {
    return (
        <li className='cart-item'>
            <div className='cart-item-des'>
            <h2>{props.item.name} x{props.item.quantity}</h2>
            <h3>{props.item.price} €</h3>
            <hr className='hr-style-cart'/>
            <button onClick={props.removeItem.bind(this, props.item)} className='remove-btn'>Remove</button>
            <hr className='hr-style-cart'/>
            </div>
        </li>
    )
}
