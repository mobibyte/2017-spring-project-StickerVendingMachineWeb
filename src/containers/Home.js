import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, ButtonGroup} from "react-bootstrap"
import Counter from "../components/Counter"

import '../styles/Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

  
  render() {
   
    return (
        <div className="container">
          <div>
            <Counter/> 
          </div>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="lg">Check Out</Button>
          </ButtonToolbar>
        </div>
      );
   }
}

export default Home;
