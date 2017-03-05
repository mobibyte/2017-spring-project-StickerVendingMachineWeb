import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, ButtonGroup,Modal} from "react-bootstrap"
import Product from "../components/Product"

import '../styles/Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

  render() {
    return (
        <div className="container">
          <h1 className="text-center">Sticker Shop</h1>
          <p className="text-center">Welcome to the sticker shop! Everything is $1</p>
          <hr />

          {[1,2,3,4].map((item, index) => (
            <Product key={index} />
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
