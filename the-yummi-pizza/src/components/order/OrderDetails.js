import React, { Component } from 'react'

export default class OrderDetails extends Component {
    render() {
        return (
            <div className='contact-container'>
                    <h2>Personal details</h2>
                    <label>Name & Surname</label>
                    <input type='text' />
                    <label>Adress</label>
                    <input type='text' />
                    <label>Phone Number</label>
                    <input type='text' />
                    <p>Provide us with some personal details and complete your order</p>
                    <button>Place Order</button>
                </div>
        )
    }
}
