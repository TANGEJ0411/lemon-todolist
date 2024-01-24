import { useState } from "react";
import "./App.css";
import FilterBtn from "./FilterBtn";
import FormInput from "./FormInput";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

const filterList = ["all", "completed", "uncompleted"];
function App() {
  const [todoList, setTodoList] = useState([]);

  const [filter, setFilter] = useState("all");

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
      <ul>
        {todoList
          .filter((todoFilter) => {
            if (filter === "all") {
              return todoFilter;
            } else if (filter === "completed") {
              return todoFilter.isCompleted === true;
            } else if (filter === "uncompleted") {
              return todoFilter.isCompleted === false;
            }
          })
          .map((todo) => {
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
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
