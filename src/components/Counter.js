import React, {Component} from "react"
import {Button, ButtonToolbar} from "react-bootstrap"

import '../styles/Counter.css'

export default class Counter extends Component{
    render(){
        return(
            <div className="counter">
                {/*<ButtonToolbar>*/}
                    <Button 
                        className="counter-left"
                        onClick={this.props.onRemove}>
                        -
                    </Button>
                    <div className="counter-title">{this.props.count}</div>
                    <Button className="counter-right" onClick={this.props.onAdd}>+</Button>
                {/*</ButtonToolbar>*/}
            </div>
        )
    }
}