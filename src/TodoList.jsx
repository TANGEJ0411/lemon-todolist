import ListItem from "./ListItem";
import useTodoContext from "./hook/useTodoContext";

function TodoList() {
  const { todo } = useTodoContext();

  console.log(todo, "TodoList");

  return (
    <ul>
      {/* {todoList.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleOnCompleted={handleOnCompleted}
            />
          );
        })} */}
    </ul>
  );
}

export default TodoList;
