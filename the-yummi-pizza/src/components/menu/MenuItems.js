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
          price: 5.99,
          img_path : "https://i.ibb.co/G3PcW0y/pizza3.png",
        },
        {
          id: 2,
          name: "Q Stagioni",
          price: 8.99,
          img_path : "https://i.ibb.co/T083QQN/tandori.png",
        },
        {
          id: 3,
          name: "Napoletana",
          price: 2.99,
          img_path : "https://i.ibb.co/DLTPx1C/pizza4.png",
        },
        {
          id: 4,
          name: "Boscaiola",
          price: 3.99,
          img_path : "https://i.ibb.co/ncbSzxt/pizza10.png",
        },
        {
          id: 5,
          name: "Valtellina",
          price: 3.99,
          img_path : "https://i.ibb.co/KyXmCXR/pizza5.png",
        },
        {
          id: 6,
          name: "Diavola",
          price: 7.99,
          img_path : "https://i.ibb.co/nrXq08V/pizza7.png",
        },
        {
          id: 7,
          name: "Tedesca",
          price: 4.99,
          img_path : "https://i.ibb.co/MBXGJQp/pizza8.png",
        },
        {
          id: 8,
          name: "Mimosa",
          price: 4.99,
          img_path : "https://i.ibb.co/MkNnZvf/pizza8.png",
        },
        
      ],
    };
  }

  render() {
    let style;
    if(this.props.cartOpen) style = { marginLeft: '0px' }
    else style = { marginLeft : '120px'};

    return (
      <div className='menu-container' style={style}>
        <ul className='menu-container-ul'>
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
