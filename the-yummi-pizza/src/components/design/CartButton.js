import React from 'react'

export default function CartButton(props) {
    return (
        <div className='cart-button-container'>
            <button className='cart-button' onClick={props.toggleCart}></button>
        </div>
    )
}
