import React, {
  HtmlHTMLAttributes,
  useState,
  ChangeEvent,
  FormEvent
} from "react";
import "../App.css";
import { ListItems } from "./ListItems";
import { InputValue } from "./Inputvalue";
import styled from "@emotion/styled";

//Styling
const ButtonCount = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  background: none;
  border: 1px solid white;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  transition: 250ms ease-out;
`;
const Button = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  border: 1px solid #4fc08d;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  transition: 250ms ease-out;
  &:hover,
  &:focus {
    color: #fff;
    background: #4fc08d;
    outline: none;
  }
`;
const DeleteButton = styled("button")`
  font-size: 14px;
  margin: 0 0.5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  border: 1px solid #d16ba5;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #d16ba5;
  transition: 250ms ease-out;
  &:hover {
    color: black;
    background: #d16ba5;
    outline: none;
  }
`;

const Container = styled("div")`
  display: flex;
  overflow: scroll;
  justify-content: top;
  height: 99vh;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(25, 25, 25, 0.25);
`;
const Wrapper = styled("div")`
  display: flex;
  width: 45%;
  flex-direction: column;
  background: white;
  border-radius: 20px;
`;
const ButttonWrapper = styled("div")`
  display: block;
  flex-direction: row;
  background: white;
  border-radius: 20px;
`;

//Styling

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [view, setView] = useState("all");
  const [Value, setValue] = useState("");

  const handelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handelSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addItem(Value);
    setValue("");
  };

  const handleChecked: handleChecked = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addItem: addItem = newValue => {
    newValue.trim() !== "" &&
      setTodos([...todos, { value: newValue, done: false, id: Date.now() }]);
  };
  const deleteItem: deleteItem = idToDelete => {
    const newtodos = [...todos];
    const index = newtodos.findIndex(e => e.id === idToDelete);

    newtodos.splice(index, 1);
    setTodos(newtodos);
  };

  const showCompleted = () => {
    setView("completed");
  };
  const showActive = () => {
    setView("active");
  };
  const showAll = () => {
    setView("all");
  };
  const deleteAll = () => {
    setTodos([]);
  };

  //-------------------------------------------------------
  let todoList = todos;
  if (view === "active") {
    todoList = todos.filter(t => !t.done);
  } else if (view === "completed") {
    todoList = todos.filter(t => t.done);
  }
  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <InputValue
            todo={Value}
            handelChange={handelChange}
            handelSubmit={handelSubmit}
          />

          <ListItems
            handleChecked={handleChecked}
            deleteItem={deleteItem}
            todos={todoList}
          />
          <br></br>
          <ButttonWrapper>
            <ButtonCount>{todos.length} items left</ButtonCount>
            <Button onClick={() => showCompleted()}>Completed</Button>
            <Button onClick={() => showActive()}>Active</Button>
            <Button onClick={() => showAll()}>Show All</Button>
            <DeleteButton onClick={() => deleteAll()}>Delete All</DeleteButton>
          </ButttonWrapper>
        </Wrapper>
      </Container>
    </React.Fragment>
  );
};
export default App;

// const App: React.FC = props => {
//   // const [state, setState] = useState({
//   //   view: "all", // 'all' | 'active' | 'completed'
//   //   inputValue: "",
//   //   todos: []
//   // });
//   const [view, setView] = useState("all");
//   const [inputValue, setinputValue] = useState("");
//   const [todos, settodos] = useState([]);

//   const handleChange = evt => {
//     setinputValue(evt.target.value);
//   };
//   //don't rerender page when submit
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const newTodo = {
//       value: inputValue,
//       done: false,
//       id: Date.now()
//     };

//     const newTodos = todos;
//     todos.push(newTodo);

//     // settodos({ todos, inputValue: "" });
//     settodos(todos);
//     setinputValue("");
//   };

//   const handleChecked = index => {
//     const newtodos = [...todos];
//     newtodos[index].done = !newtodos[index].done;
//     settodos(newtodos);
//   };
//   const deleteItem = id => {
//     //const newtodos = todos.filter(t => !t.done);

//     const newtodos = [...todos];
//     const index = newtodos.findIndex(e => e.id === id);

//     newtodos.splice(index, 1);
//     settodos(newtodos);
//   };

//   const deleteAll = () => {
//     const newtodos = [...todos];
//     newtodos.splice(0, newtodos.length);
//     settodos(newtodos);
//   };

//   const showAll = () => {
//     setView("all");
//   };
//   const showCompleted = () => {
//     setView("completed");
//   };
//   const showActive = () => {
//     setView("active");
//   };

//   //const { view, todos, inputValue } = state;

//   let todoList = todos;
//   if (view === "active") {
//     todoList = todos.filter(t => !t.done);
//   } else if (view === "completed") {
//     todoList = todos.filter(t => t.done);
//   }

//   return (
//     <div className="App" class="container">
//       <h1>Todos</h1>
//       <div class="todolist">
//         <Inputitems
//           handleChange={handleChange}
//           inputValue={inputValue}
//           handleSubmit={handleSubmit}
//         />
//         <div>
//           <Listitems
//             handleChecked={handleChecked}
//             deleteItem={deleteItem}
//             deleteAll={deleteAll}
//             todos={todoList}
//           />
//         </div>
//       </div>
//       <div>
//         <button>{todos.length} items left </button>

//         <button onClick={() => showAll()}>All</button>

//         <button onClick={() => showActive()}>Active</button>

//         <button onClick={() => showCompleted()}>Completed </button>

//         <button onClick={() => deleteAll()}>Clear ALL</button>
//       </div>
//     </div>
//   );
// };

// export default App;
