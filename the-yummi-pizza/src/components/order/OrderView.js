import React, { Component } from 'react'

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

    render() {
        console.log(this.props.location.items);
        let orderItems;
        if(this.state.orderItems !== []){
            orderItems = this.state.orderItems.map(item => <OrderItem 
                                                            key={item.id}
                                                            item={item}
                                                            />);
        }

        return (
            <div>
                <h1>Order Preview</h1>
                <ul>
                    {orderItems}
                </ul>
            </div>
        )
    }
}
