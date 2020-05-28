import React from 'react'

export default function OrderItem(props) {
    return (
        <li>
            <h3>preview item</h3>
            <h2>{props.item.name}</h2>
            <h2>{props.item.price}</h2>
            <h2>Quantity : {props.item.quantity}x</h2>
        </li>
    )
}
