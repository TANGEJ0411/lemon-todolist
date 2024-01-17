import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoInput({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ id: "", title: "", isCompleted: false });

  const handleOnChange = (e) => {
    const newTodo = { ...todo };
    newTodo.title = e.target.value;
    newTodo.id = Date.now();
    // console.log(newTodo);
    setTodo(newTodo);
    // {...todo, title: e.target.value, id: Date.now()}
  };

  const handleOnSubmit = (e, todoList, todo) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({
      id: "",
      title: "",
      isCompleted: false,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        handleOnSubmit(e, todoList, todo);
      }}
    >
      <input value={todo.title} onChange={handleOnChange} />
      <p>{todo.title}</p>
      <button
        onClick={(e) => {
          handleOnSubmit(e, todoList, todo);
        }}
      >
        輸入
      </button>
    </form>
  );
}

export default TodoInput;
