import { useEffect } from "react";
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
function TodoList({ todoList = [], setTodoList }) {
  useEffect(() => {
    console.log(todoList, "todoList");
  }, [todoList]);
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
    <div>
      <h3>todolist</h3>
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            handleOnCompleted={handleOnCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
