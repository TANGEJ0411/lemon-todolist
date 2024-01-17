import { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <h1>My todo list</h1>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
