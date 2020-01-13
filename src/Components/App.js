import React, { Component } from 'react';
import Listitems from './Listitems'
import Inputitems from './InputItems'
import '../App.css'


class App extends Component {
  state = {
    inputValue: '',
    todos: []
  }
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }
  //don't rerender page when submit
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo)
    this.setState({ todos, inputValue: '' })
  }
  //linethrough when checked change the value of done 
  handleChecked = (index) => {
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }
  deleteItem = (index) => {
    console.log(index);

    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  deleteAll = () => {
    const todos = [...this.state.todos];
    todos.splice(0, todos.length);
    this.setState({ todos: todos });
  }
  
  showCompleted = () => {
    const todos = [...this.state.todos];
    const todoscompleted=todos.filter(item => item.done ==true);
    this.setState({ todos: todoscompleted });
    
  }
  showActive = () => {
    const todos = [...this.state.todos];
    const todosactive=todos.filter(item => item.done ==false);
    this.setState({ todos: todosactive });
    
  }


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
              deleteItem={this.deleteItem}
              deleteAll={this.deleteAll}
              todos={this.state.todos}

            />

          </div>

        </div>
        <div>

          <button>{this.state.todos.length} items left </button>



          <button onClick={()=>this.showActive()}>Active</button>



          <button onClick={()=>this.showCompleted()}>Completed </button>



          <button onClick={() => this.deleteAll()}   >Clear ALL</button>



        </div>

      </div>
    );
  }
}



export default App;
