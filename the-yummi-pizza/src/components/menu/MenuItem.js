import React, { Component } from 'react'

export default class MenuItem extends Component {
 
    render() {
        return (
            <div>
                <h2>menu item</h2>
                <hr></hr>
                <h3>{this.props.name}</h3>
                <h3>{this.props.price}</h3>
                <hr></hr>
            </div>
        )
    }
}
