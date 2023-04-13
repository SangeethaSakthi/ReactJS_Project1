import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message: ["State Venkat"]
        }
    }

    changeState(){
        this.setState({
            message:["State Steena", " GMX"]
        })
    }
    render(){
        return (
            <div>
            <h1>Checking the state {this.state.message}</h1>
            <button onClick={()=> this.changeState()}>Change</button>
            </div>
        )
    }
}

export default Message