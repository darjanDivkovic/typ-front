import React from 'react'

import Logo from './Logo';
import CartButton from './CartButton';

export default function Header(props) {
    return (
        <div className='header-container'>
            <Logo />
            <CartButton toggleCart={props.toggleCart}/>
        </div>
    )
}
