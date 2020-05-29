import React from 'react'


export default function MenuItem(props) {

    const style = {
        backgroundImage : `url(${props.item.img_path})`,
        backgroundPosition : 'right',
    }
   
    return (
        <li className='menu-item' style={style}>
            <h2>{props.item.name} </h2>
            <h3>{props.item.price} €</h3>
            <button onClick={props.addToCart.bind(this, props.item)} className='menu-item-add-btn'>+</button>
        </li>
    )
    
}
