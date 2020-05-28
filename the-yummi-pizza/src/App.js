import React, { Component } from 'react'
import './App.css';

import MenuItems from './components/menu/MenuItems';
import Cart from './components/cart/Cart';
import OrderPreview from './components/order/OrderView';
import 
{ BrowserRouter as Router,
  Route, 
} from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems : [],
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  addToCart(item){
    let prevStateItems = this.state.cartItems;
    // Try to find it
    let found = prevStateItems.includes(item);
    
    if(found){
      // If found 
      let newCartItems = prevStateItems.map(cartItem => {
        if(cartItem.id === item.id){
          // Find it in array and change its quantity, add 1
          cartItem.quantity++;
          return cartItem;
        }
        else return cartItem;
      });
      this.setState({cartItems : newCartItems});
    }
    else {
      // If not found
      item.quantity = 1;
      this.setState({cartItems : prevStateItems.concat(item)});
    }
  }

  removeItemFromCart(item){
    
    let newCartItems = this.state.cartItems.filter((cartItem)=> {
        if(cartItem.id === item.id) return false;
        else return true;
    });
    this.setState({cartItems : newCartItems});

}

  render() {
    return (
      <div>
        <h1>The Yummi pizza!</h1>
        <Router>
          <Route path='/' exact>
            <MenuItems addToCart={this.addToCart} />
            <Cart items={this.state.cartItems}
                  removeItem={this.removeItemFromCart}/>
          </Route>
          <Route path='/order' component={OrderPreview} />
        </Router>
         
      </div>
    )
  }
}

