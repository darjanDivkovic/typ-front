import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let msg = null;
        if(this.props.items.length === 0){
            msg = <p className='empty-msg'>Cart is currently empty, add more items to view them here!</p>;
        } 

        let style;
        if(this.props.cartOpen) style = { marginLeft: '0px' }
        else style = { marginLeft : '400px'};

        return (
            <div className='cart-container' style={style}>
                <h2>SHOPPING CART</h2>
                <hr className='hr-style-cart'/>
                {msg}
                <div className='cart-items-container'>
                <ul className='cart-items'>
                    {
                        this.props.items.map(cartItem => 
                             <CartItem key={cartItem.id}
                                       item={cartItem}
                                       removeItem={this.props.removeItem}/>)
                    }
                </ul>
                </div>
                <Link to={{
                    pathname : '/order',
                    items : this.props.items,
                }}>
                  <button className='preview-order-btn'>Preview order</button>
                </Link> 
            </div>
        )
    }
}
