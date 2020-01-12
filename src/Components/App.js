import React, { Component } from 'react';
import Listitems from './Listitems'
import Inputitems from './InputItems'
import  '../App.css'


class App extends Component {
  state = {
    inputValue: '',
    todos: []      
  }
  handleChange = (evt)=> {
    this.setState({inputValue: evt.target.value});
  }
//don't rerender page when submit
handleSubmit = (evt) => {
  evt.preventDefault();
    const newTodo = { 
    value:this.state.inputValue,
    done: false
    };
  const todos = this.state.todos;
  todos.push(newTodo)
  this.setState({todos, inputValue: ''})
}
//linethrough when checked change the value of done 
handleChecked = (index)=> {
  const todos= this.state.todos;
  todos[index].done= !todos[index].done;
  this.setState({todos});
}

 render() {
  return (     
      <div className="App" class="main">
        
        <h1>Todos</h1> 
        
        <Inputitems 
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit} 
        />
        <Listitems 
        handleChecked={this.handleChecked}
        todos={this.state.todos}
        />
        
       </div>
   );
 } 
}



export default App;
