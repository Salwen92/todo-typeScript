import React, { useState } from "react";
import Listitems from "./Listitems";
import Inputitems from "./InputItems";
import "../App.css";
import todoitem from "./Todoitem";

const App = props => {
  // const [state, setState] = useState({
  //   view: "all", // 'all' | 'active' | 'completed'
  //   inputValue: "",
  //   todos: []
  // });
  const [view, setView] = useState("all");
  const [inputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);

  const handleChange = evt => {
    setinputValue(evt.target.value);
  };
  //don't rerender page when submit
  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      value: inputValue,
      done: false,
      id: Date.now()
    };

    const newTodos = todos;
    todos.push(newTodo);

    // settodos({ todos, inputValue: "" });
    settodos(todos);
    setinputValue("");
  };

  const handleChecked = index => {
    const newtodos = [...todos];
    newtodos[index].done = !newtodos[index].done;
    settodos(newtodos);
  };
  const deleteItem = id => {
    //const newtodos = todos.filter(t => !t.done);

    const newtodos = [...todos];
    const index = newtodos.findIndex(e => e.id === id);

    newtodos.splice(index, 1);
    settodos(newtodos);
  };

  const deleteAll = () => {
    const newtodos = [...todos];
    newtodos.splice(0, newtodos.length);
    settodos(newtodos);
  };

  const showAll = () => {
    setView("all");
  };
  const showCompleted = () => {
    setView("completed");
  };
  const showActive = () => {
    setView("active");
  };

  //const { view, todos, inputValue } = state;

  let todoList = todos;
  if (view === "active") {
    todoList = todos.filter(t => !t.done);
  } else if (view === "completed") {
    todoList = todos.filter(t => t.done);
  }

  return (
    <div className="App" class="container">
      <h1>Todos</h1>
      <div class="todolist">
        <Inputitems
          handleChange={handleChange}
          inputValue={inputValue}
          handleSubmit={handleSubmit}
        />
        <div>
          <Listitems
            handleChecked={handleChecked}
            deleteItem={deleteItem}
            deleteAll={deleteAll}
            todos={todoList}
          />
        </div>
      </div>
      <div>
        <button>{todos.length} items left </button>

        <button onClick={() => showAll()}>All</button>

        <button onClick={() => showActive()}>Active</button>

        <button onClick={() => showCompleted()}>Completed </button>

        <button onClick={() => deleteAll()}>Clear ALL</button>
      </div>
    </div>
  );
};

export default App;
