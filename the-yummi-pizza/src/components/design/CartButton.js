import React from 'react'

export default function CartButton(props) {
    return (
        <div className='cart-button'>
            <button onClick={props.toggleCart}>View Cart</button>
        </div>
    )
}
