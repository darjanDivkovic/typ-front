import React from 'react'

export default function CartItem(props) {
    return (
        <li>
            <h4>Cart item</h4>
            <hr></hr>
            <h2>{props.item.name}</h2>
            <h2>{props.item.price}</h2>
            <h2>Quantity : {props.item.quantity}x</h2>
            <hr></hr>
            <button onClick={props.removeItem.bind(this, props.item)}>Remove</button>
        </li>
    )
}
