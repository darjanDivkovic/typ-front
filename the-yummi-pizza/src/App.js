import React, { Component } from 'react'
import './App.css';
import nextId from "react-id-generator";

import Header from './components/design/Header';
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
      cartOpen : false,
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  addToCart(item){
    
    // Find 
    let oldCartItems = this.state.cartItems;
    let found = oldCartItems.some( items => items.id === item.id );

    // Not found
    if(!found){
      
      item.quantity = 1;
      console.log(item);
      let newCartItems = oldCartItems.concat(item);
      this.setState({cartItems : newCartItems});

    }
    else{

      let newCartItems = oldCartItems.map( cartItem => {
          if(cartItem.id === item.id){
            cartItem.quantity++;
            return cartItem;
          }
          else return cartItem;
      });

      console.log(newCartItems);
      this.setState({oldCartItems : newCartItems});
    }
    
  }

  removeItemFromCart(item){
    
    let newCartItems = this.state.cartItems.filter((cartItem)=> {
        if(cartItem.id === item.id) return false;
        else return true;
    });
    this.setState({cartItems : newCartItems});
  }

  toggleCart(){
    this.setState({cartOpen : !this.state.cartOpen});
  }

  render() {
    return (
      <div className='app-container'>
        <Header toggleCart={this.toggleCart}/>
        <Router>
          <Route path='/' exact>
            <div className='main-container'>
            <MenuItems addToCart={this.addToCart}
                       cartOpen={this.state.cartOpen} />
            <Cart items={this.state.cartItems}
                  removeItem={this.removeItemFromCart}
                  cartOpen={this.state.cartOpen}/>
            </div>      
          </Route>
          <Route path='/order' component={OrderPreview} />
        </Router>
         
      </div>
    )
  }
}

