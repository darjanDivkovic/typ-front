import React from 'react'

export default function OrderItem(props) {
    return (
        <li className='item-preview'>
            <img src={props.item.img_path}></img>
            <h2>{props.item.name}</h2>
            <h4>{props.item.price} €</h4>
            <h2>X{props.item.quantity}</h2>
            <h4 className='finaly'>Finaly: {props.item.price * props.item.quantity}  €</h4>
        </li>
    )
}
