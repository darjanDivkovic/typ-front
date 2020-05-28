import React, { Component } from 'react'
import './App.css';

import MenuItems from './components/menu/MenuItems';
import Cart from './components/cart/Cart';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems : [],
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item){
    let prevStateItems = this.state.cartItems;
    this.setState({cartItems : prevStateItems.concat(item)});
  }

  render() {
    return (
      <div>
        <h1>The Yummi pizza!</h1>
         <MenuItems addToCart={this.addToCart} />
         <Cart items={this.state.cartItems}/>
      </div>
    )
  }
}

