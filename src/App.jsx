import { useState } from "react";
import "./App.css";
import FilterBtn from "./FilterBtn";
import FormInput from "./FormInput";
import ListItem from "./ListItem";
import TodoList from "./TodoList";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

const filterList = ["all", "completed", "uncompleted"];
function App() {
  const [todoList, setTodoList] = useState([]);

  const [filter, setFilter] = useState("all");

  return (
    <>
      <h1>My todo list</h1>
      {filterList.map((filterItem) => {
        return (
          <FilterBtn
            key={filterItem}
            filter={filterItem}
            setFilter={setFilter}
          />
        );
      })}
      <FormInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} filter={filter} setTodoList={setTodoList} />
    </>
  );
}

export default App;
