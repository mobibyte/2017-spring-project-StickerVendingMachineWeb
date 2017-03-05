import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, ButtonGroup} from "react-bootstrap"


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 0
    };
  }
  increment(){
    const newQuantity = this.state.quantity + 1;
   this.setState( { quantity: newQuantity});
  }
  decrement(){
    var newQuantity = 0
    const {quantity} = this.state;
    // if (this.state.quantity >0){
    //   const newQuantity = this.state.quantity -1}
    if (quantity >0){
      newQuantity = quantity - 1}
   this.setState( { quantity: newQuantity});
  }
  
  render() {
   
    return (
      <div className="App">
        
        <ButtonGroup >
          <img style={{width: 50, height: 50}} src = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"/>
           <Button onClick={this.decrement.bind(this)}>-</Button>
           <div>{this.state.quantity}</div>
           <Button onClick={this.increment.bind(this)}>+</Button>
        </ButtonGroup>
        
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Check Out</Button>

        </ButtonToolbar>
      </div>
    );
  }
}

export default Home;
