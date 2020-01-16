import React from "react";
import Todoitem from "./Todoitem";

//Statless component, il se base seulement sur les props

const listItems = props => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          <Todoitem
            key={index}
            index={index}
            handleChecked={props.handleChecked}
            deleteItem={props.deleteItem}
            deleteAll={props.deleteAll}
            showall={props.showall}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
export default listItems;
