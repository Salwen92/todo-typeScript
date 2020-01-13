import React, { Component } from 'react';
import Listitems from './Listitems'
import Inputitems from './InputItems'
import '../App.css'


class App extends Component {
  state = {
    view: 'all', // 'all' | 'active' | 'completed'
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

  showAll = () => {
    this.setState({ view: 'all' });
  }
  showCompleted = () => {
    this.setState({ view: 'completed' });
  }
  showActive = () => {
    this.setState({ view: 'active' });
  }


  render() {

    const { view, todos, inputValue } = this.state;

    let todoList = todos;
    if (view === 'active') {
      todoList = todos.filter(t => !t.done);
    } else if (view === 'completed') {
      todoList = todos.filter(t => t.done);
    }

    return (
      <div className="App" class="container">

        <h1>Todos</h1>
        <div class="todolist">
          <Inputitems
            handleChange={this.handleChange}
            inputValue={inputValue}
            handleSubmit={this.handleSubmit}
          />
          <div>
            <Listitems
              handleChecked={this.handleChecked}
              deleteItem={this.deleteItem}
              deleteAll={this.deleteAll}
              todos={todoList}

            />

          </div>

        </div>
        <div>

          <button>{this.state.todos.length} items left </button>


          <button onClick={()=>this.showAll()}>All</button>



          <button onClick={()=>this.showActive()}>Active</button>



          <button onClick={()=>this.showCompleted()}>Completed </button>



          <button onClick={() => this.deleteAll()}   >Clear ALL</button>



        </div>

      </div>
    );
  }
}



export default App;
