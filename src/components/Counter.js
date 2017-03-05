import React, {Component} from "react"
import {Button, ButtonToolbar} from "react-bootstrap"

import '../styles/Counter.css'

export default class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        const {count} = this.state
    
        this.setState({count: count + 1});
        console.log(count)
        
    } 
    decrement = () => {
        var newCount = 0;
        const {count} = this.state 
        if (count > 0) {
            newCount= count;
            newCount--;
        }
        this.setState({count : newCount});
    }




    render(){
        return(
            <div className="counter">
                {/*<ButtonToolbar>*/}
                    <Button 
                        className="counter-left"
                        onClick = {() => {this.decrement()}}>
                        -
                    </Button>
                    <div className="counter-title">{this.state.count}</div>
                    <Button className="counter-right" onClick = {() => {this.increment()}}>+</Button>
                {/*</ButtonToolbar>*/}
            </div>
        )
    }
}