import React, { Component } from "react";

import MenuItem from "./MenuItem";

export default class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 1,
          name: "Margherita",
          price: "5.99 E",
        },
        {
          id: 2,
          name: "Quattro Stagioni",
          price: "8.99 E",
        },
        {
          id: 3,
          name: "Napoletana",
          price: "2.99 E",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Menu Items</h2>
        <ul>
          {
          this.state.menuItems.map((pizza) => (
            <MenuItem key={pizza.id}
                      item={pizza}
                      addToCart={this.props.addToCart}/>
          ))
          }
        </ul>
      </div>
    );
  }
}
