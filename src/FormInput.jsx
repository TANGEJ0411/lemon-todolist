import { useState } from "react";

function FormInput({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnSubmit = (e, todoList, todo) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: Date.now(), title: todo, isCompleted: false },
    ]);
    setTodo("");
  };

  return (
    <form
      onSubmit={(e) => {
        handleOnSubmit(e, todoList, todo);
      }}
    >
      <input value={todo} onChange={handleOnChange} />
    </form>
  );
}

export default FormInput;
