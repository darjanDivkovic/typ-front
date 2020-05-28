import React from 'react'

export default function MenuItem(props) {
    return (
        <li>
            <h2>menu item</h2>
            <hr></hr>
            <h3>{props.item.name}</h3>
            <h3>{props.item.price}</h3>
            <button onClick={props.addToCart.bind(this, props.item)}>Add to cart</button>
            <hr></hr>
        </li>
    )
}

