import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OrderItem from './OrderItem';

export default class OrderView extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderItems : [],
        }
    }

    componentDidMount(){
        if(this.props.location.items !== undefined){
            this.setState({orderItems : this.props.location.items});
        }
    }

    calculatePrice = () => {
        let price = 0;
        this.state.orderItems.forEach((item)=> {
            price += item.price * item.quantity;
        });
        return price
    }

    render() {

        let orderItems;
        if(this.state.orderItems !== []){
            orderItems = this.state.orderItems.map(item => <OrderItem 
                                                            key={item.id}
                                                            item={item}
                                                            />);
        }

        return (
            <div className='order-container'>
                <Link className='back-to-menu-btn' to='/'>
                    <button>To Menu</button>
                </Link>
                <div className='order-preview'>
                <h2>Order Preview</h2>
                <div className='preview-items-container'>
                <ul>
                    {orderItems}
                </ul>
                </div>
                <div className='calculating-price-div'>
                <hr style={{width : '90%', marginRight : '0'}}></hr>
                <h3>+ 2  €</h3>
                <p>(delivery)</p>
                <hr style={{width : '90%', marginRight : '0'}}></hr>
                
                <h1>PRICE: {this.calculatePrice()+2}  €</h1>
                </div>
                </div>
                <div className='contact-container'>
                    <h3>Contact & other info</h3>
                </div>
                
            </div>
        )
    }
}
