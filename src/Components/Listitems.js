import React, { Component } from 'react'
import Todoitem from './Todoitem'
export default class Listitems extends Component {
  
    render() {
        return (
            <div>
                
                <div id="react-container">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Todoitem 
                        key={index}
                        index={index}
                        handleChecked = { this.props.handleChecked}
                        todo={todo}
                        />
                    )

                })}
                </div>                            
            </div>
            
            
        )
    }
}
