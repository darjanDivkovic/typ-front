import React from 'react'
import logo from '../../res/pizza-logo2.png';

export default function Logo() {
    return (
        <div className='logo-container'>
            <img src={logo} className='logo' alt='alt'/>
            <h1 className='logo-text'>THE YUMMI PIZZA</h1>
        </div>
    )
}
