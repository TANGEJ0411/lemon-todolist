// eslint-disable-next-line react/prop-types
function TodoItem({ id, title, isCompleted, handleOnCompleted }) {
  return (
    <li>
      <p>{title}</p>
      <button
        onClick={() => {
          handleOnCompleted(id);
        }}
      >
        {isCompleted ? "已完成" : "未完成"}
      </button>
    </li>
  );
}

export default TodoItem;
