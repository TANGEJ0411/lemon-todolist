import ListItem from "./ListItem";
import useTodoContext from "./hook/useTodoContext";

function TodoList() {
  const { todo, toggleTodo, deleteTodo } = useTodoContext();

  console.log(todo, "TodoList");

  return (
    <ul>
      {todo.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            handleOnCompleted={() => {
              toggleTodo(todo.id);
            }}
            handleOnDelete={() => {
              deleteTodo(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
