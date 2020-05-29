import React from 'react'
import QuantityPicker from './QuantityPicker';

export default function CartItem(props) {
    return (
        <li className='cart-item'>
            <div className='cart-item-des'>
            <h3>{props.item.name} x{props.item.quantity}</h3>
            <h4>{props.item.price} €</h4>
            <hr className='hr-style-cart'/>
            <div className='cart-item-options-container'>
            <QuantityPicker quantity={props.item.quantity}/>
            <button onClick={props.removeItem.bind(this, props.item)} className='remove-btn'>Remove</button>
            </div>
            <hr className='hr-style-cart'/>
            </div>
        </li>
    )
}
