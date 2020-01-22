type Todo = {
  value: string;
  done: boolean;
  id: number;
};
type handleChecked = (selectedTodo: Todo) => void;
type addItem = (newTodo: string) => void;
type deleteItem = (idToDelete: number) => void;
