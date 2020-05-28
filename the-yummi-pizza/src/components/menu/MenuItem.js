import React, { Component } from 'react'

export default class MenuItem extends Component {


 
    render() {
        return (
            <li>
                <h2>menu item</h2>
                <hr></hr>
                <h3>{this.props.item.name}</h3>
                <h3>{this.props.item.price}</h3>
                <button onClick={this.props.addToCart.bind(this, this.props.item)}>Add to cart</button>
                <hr></hr>
            </li>
        )
    }
}
