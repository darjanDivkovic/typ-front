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
  }

  addToCart(item){
    let prevStateItems = this.state.cartItems;
    this.setState({cartItems : prevStateItems.concat(item)});
  }

  render() {
    return (
      <div>
        <h1>The Yummi pizza!</h1>
        <Router>
          <Route path='/' exact>
            <MenuItems addToCart={this.addToCart} />
            <Cart items={this.state.cartItems}/>
          </Route>
          <Route path='/order' component={OrderPreview} />
        </Router>
         
      </div>
    )
  }
}

