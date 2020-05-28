import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {
                        this.props.items.map(cartItem => 
                             <CartItem key={cartItem.id}
                                       item={cartItem}
                                       removeItem={this.props.removeItem}/>)
                    }
                </ul>
                <Link to={{
                    pathname : '/order',
                    items : this.props.items,
                }}>
                  <button>Preview order</button>
                </Link> 
            </div>
        )
    }
}
