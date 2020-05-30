import React, { Component } from 'react'

export default class OrderDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            credentials: '',
            adress: '',
            phone: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    submit(){
        // I wanna send the bill, user credentials & item id and quantity to make
        let itemsToMake = this.props.items.map((item)=> {
            return { id : item.id, quantity : item.quantity}
        });
        let order = {
            user: {
                credentials: this.state.credentials,
                adress: this.state.adress,
                phone: this.state.phone,
            },
            itemsToMake : itemsToMake,
            bill : this.props.bill,
        }
        // This is what i want to send 
        console.log(order);

        // Clear fields
        this.clearFields();
    }
    
    clearFields(){
        this.setState({credentials : ''});
        this.setState({adress : ''});
        this.setState({phone : ''});
    }

    render() {
        return (
            <div className='contact-container'>
                    <h2>Personal details</h2>
                    <label>Name & Surname</label>
                    <input type='text' name='credentials' value={this.state.credentials} onChange={this.handleChange}/>
                    <label>Adress</label>
                    <input type='text' name='adress' value={this.state.adress} onChange={this.handleChange}/>
                    <label>Phone Number</label>
                    <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                    <p>Please, provide us with some personal details to complete your order</p>
                    <button onClick={this.submit}>Place Order</button>
                </div>
        )
    }
}
