import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, ButtonGroup,Modal} from "react-bootstrap"
import Product from "../components/Product"

import '../styles/Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          title: 'Namecheap',
          imageUrl: 'https://dl.dropboxusercontent.com/u/42151352/IMG_1835.JPG',
          count: 0
        },
        {
          title: 'HackUTD',
          imageUrl: 'https://dl.dropboxusercontent.com/u/42151352/IMG_1836.JPG',
          count: 0
        },
        {
          title: 'Make School',
          imageUrl: 'https://dl.dropboxusercontent.com/u/42151352/IMG_1834.JPG',
          count: 0
        }
      ]
    }
  }

  _onItemUpdate = (item, index) => {
    this.state.products[index] = item;
    this.forceUpdate();
  }

  render() {
    const { products } = this.state;

    return (
        <div className="container">
          <h1 className="text-center">Sticker Shop</h1>
          <p className="text-center">Welcome to the sticker shop! Everything is $1</p>
          <hr />

          {products.map((item, index) => (
            <Product key={index} product={item} onItemUpdate={this._onItemUpdate} index={index} />
          ))}

          <div className="checkout-bar">
            <div className="checkout-title">
              Checkout
            </div>
            <div className="checkout-price">
              $10
            </div>
          </div>
        </div>
      );
   }
}

export default Home;
