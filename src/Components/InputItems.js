import React, { Component } from 'react'

export default class InputItems extends Component {
    
   
    render() {
        return (
            <div className="InputItems">
                <form onSubmit={(evt) => this.props.handleSubmit(evt)}>
                <input 
                type="text" 
                placeholder="What needs to be done?"
                onChange={(evt) => this.props.handleChange(evt)}
                value=  {this.props.inputValue}
                /> 
                
                
                </form>


            </div>
        )
    }
    
}
