type Todo = {
  value: string;
  done: boolean;
  id: number;
};
type handleChecked = (selectedTodo: Todo) => void;
type handelSubmit = (evt: FormEvent) => void;
type handelChange = (evt: ChangeEvent) => void;
type addItem = (newTodo: string) => void;
type deleteItem = (idToDelete: number) => void;
