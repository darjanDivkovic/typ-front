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
                <h1>Order Preview</h1>
                <ul>
                    {orderItems}
                </ul>
                <h1>FINAL PRICE: {this.calculatePrice()} E</h1>
                <Link to='/'>
                    <button>Back to menu</button>
                </Link>
            </div>
        )
    }
}
