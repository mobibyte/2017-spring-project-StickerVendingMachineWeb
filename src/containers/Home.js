import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, ButtonGroup,Modal} from "react-bootstrap"
import Product from "../components/Product"

import StripeCheckout from 'react-stripe-checkout';

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

  _getTotalCount = () => {
    let count = 0;
    for(let item of this.state.products) {
      count += item.count;
    }
    
    return count;
  }

  _onItemUpdate = (item, index) => {
    this.state.products[index] = item;
    this.forceUpdate();
    this._getTotalCount();
  }

  _onToken = (token) => {
    console.log('WERE IN BUSInESS BUT I DONT HAV AN API YET SRR', token)
  }

  render() {
    const { products } = this.state;
    const count = this._getTotalCount();

    return (
        <div className="container">
          <StripeCheckout
        token={this.onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
      />
          <h1 className="text-center">Sticker Shop</h1>
          <p className="text-center">Welcome to the sticker shop! Everything is $1</p>
          <hr />

          {products.map((item, index) => (
            <Product key={index} product={item} onItemUpdate={this._onItemUpdate} index={index} />
          ))}

          <div className={"checkout-bar" + (count > 0 ? " active" : "")}>
            <div className="checkout-title">
              Checkout
            </div>
            <div className="checkout-price">
              ${count}
            </div>
          </div>
        </div>
      );
   }
}

export default Home;
