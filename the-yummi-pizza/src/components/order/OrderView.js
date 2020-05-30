import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OrderItem from './OrderItem';
import PriceCalculator from './PriceCalculator';

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
        let deliveryCost = 2;
        this.state.orderItems.forEach((item)=> {
            price += item.price * item.quantity;
        });
        let finalPrice = price + deliveryCost;
        // Round it
        return Math.round(finalPrice * 100) / 100;
    }

    render() {
        let priceCalculator = <p>Add items to cart to view them here!</p>;
        let orderItems;
        if(this.state.orderItems.length !== 0){
            orderItems = this.state.orderItems.map(item => <OrderItem 
                                                            key={item.id}
                                                            item={item}
                                                            />);
            priceCalculator = <PriceCalculator calculatePrice={this.calculatePrice}/>;
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
                {priceCalculator}
                </div>
                <div className='contact-container'>
                    <h3>Contact & other info</h3>
                </div>
                
            </div>
        )
    }
}
