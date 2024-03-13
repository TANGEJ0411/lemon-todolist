import ListItem from "./ListItem";

function TodoList() {
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
