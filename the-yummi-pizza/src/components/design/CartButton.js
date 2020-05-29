import React from 'react'

export default function CartButton(props) {

    let notification = null;
    if(props.newInCart !== 0){
        notification = <p className='new-in-cart-notification'>{props.newInCart}</p>;
    }

    return (
        <div className='cart-button-container'>
            {notification}            
            <button className='cart-button' onClick={props.toggleCart}></button>
        </div>
    )
}
