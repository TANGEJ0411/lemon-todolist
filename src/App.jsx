import { useState } from "react";
import "./App.css";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnSubmit = (e, todoList, todo) => {
    e.preventDefault();
    setTodoList([...todoList, { id: Date.now(), title: todo, isCompleted: false }]);
    console.log([...todoList, { id: Date.now(), title: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleOnCompleted = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>My todo list</h1>
      <form onSubmit={(e)=>{handleOnSubmit(e, todoList, todo)}}>
        <input value={todo} onChange={handleOnChange}/>
      </form>
      <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button
              onClick={() => {
                handleOnCompleted(todo.id);
              }}
            >
            {todo.isCompleted ? "已完成" : "未完成"}
          </button>
        </li>)
      })}
      </ul>
    </>
  );
}

export default App;
