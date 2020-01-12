import React, { Component } from 'react'
import App from './App'

export default class Todoitems extends Component {
    state = {
        chechekValue: false
        
    }
      
    render() {
        return (
            <div className="Todoitem">
                <div> 
                <input type="checkbox" onChange={()=>
                    this.props.handleChecked(this.props.index)}></input>            
                <span 
                style={{textDecoration:this.props.todo.done ? 'line-through' : 'none' }}>
                {this.props.todo.value}
                </span>
                </div> 
                </div> 
        )
    }
}
