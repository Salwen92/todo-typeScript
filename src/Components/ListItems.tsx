import React from "react";
import { TodoItem } from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

interface ListItemsProps {
  todos: Array<Todo>;
  handleChecked: handleChecked;
  deleteItem: deleteItem;
}

export const ListItems: React.FC<ListItemsProps> = ({
  todos,
  handleChecked,
  deleteItem
}) => {
  return (
    <div>
      {todos.map(todo => {
        return (
          <AnimatePresence>
            <motion.div
              key={todo.id}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              // exit={{ y: -1000, transition: { duration: 4 } }}

              exit={{ x: 100, opacity: 0 }}
            >
              <TodoItem
                todo={todo}
                handleChecked={handleChecked}
                key={todo.id}
                deleteItem={deleteItem}
              />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};
