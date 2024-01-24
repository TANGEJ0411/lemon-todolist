import React from "react";
import ListItem from "./ListItem";

function TodoList({ todoList, filter, setTodoList }) {
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
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleOnCompleted={handleOnCompleted}
            />
          );
        })}
    </ul>
  );
}

export default TodoList;
