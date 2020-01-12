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
  const todos= [...this.state.todos];
  todos[index].done= !todos[index].done;
  this.setState({todos});
}
deleteItem = (index)=> {
  console.log(index);
  
  const todos= [...this.state.todos];

  const updatedtodos = todos.filter(item =>item.index != index);

  this.setState({todos: updatedtodos});
}
/*
deleteItem(index){
  const todos= [...this.state.todos];

  const updatedtodos = todos.filter(item =>item.index != index);

  this.setState({todos: updatedtodos});
}
deleteAll(){
  this.setState({todos=[]});
}
*/


 render() {
  return (     
      <div className="App" class="container">
        
        <h1>Todos</h1> 
        <div class="todolist">
        <Inputitems 
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit} 
        />
        <div>
        <Listitems 
        handleChecked={this.handleChecked}
        deleteItem={this.handleonClick}
        todos={this.state.todos}
        
        />
        
        </div>
        
        </div>
        <div>
          <button>{this.state.todos.length} items left </button>
          
        
        
          <button>Active</button>
          
        
        
          <button>Completed </button>

          
          
          <button>Clear ALL </button>

          
          
        </div>
        
       </div>
   );
 } 
}



export default App;
