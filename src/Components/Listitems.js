import React, { Component } from 'react'
import Todoitem from './Todoitem'

//Statless component, il se base seulement sur les props 
const listItems=props=>{
        return (
            <div>
                
                <div id="react-container">
                {props.todos.map((todo, index) => {
                    return (
                        <Todoitem 
                        key={index}
                        index={index}
                        handleChecked = { props.handleChecked}
                        todo={todo}
                        />
                    )

                })}
                </div>                            
            </div>
            
            
        )
    } 
    export default listItems;

    
  
   

