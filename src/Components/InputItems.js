import React, { Component } from 'react'

 const inputItems=props=>{
    return (
        <div className="InputItems">
            <form onSubmit={(evt) => props.handleSubmit(evt)}>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={(evt) => props.handleChange(evt)}
            value=  {props.inputValue}
            />          
            </form>
        </div>
    )


 }
    
   
    
    

export default inputItems ;
