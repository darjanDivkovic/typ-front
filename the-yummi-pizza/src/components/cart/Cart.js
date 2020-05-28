import React, { Component } from 'react'

import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
           cartItems : props.items,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ cartItems: nextProps.items });  
      }

    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {
                        this.state.cartItems.map(cartItem => 
                             <CartItem key={cartItem.id}
                                       id={cartItem.id}
                                       name={cartItem.name}
                                       price={cartItem.price}/>)
                    }
                </ul>
            </div>
        )
    }
}
