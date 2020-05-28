import React from 'react'

export default function CartItem(props) {
    return (
        <li>
            <h4>Cart item</h4>
            <hr></hr>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <hr></hr>
        </li>
    )
}
