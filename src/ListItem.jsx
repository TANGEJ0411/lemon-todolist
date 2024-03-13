function ListItem({ title, isCompleted, handleOnCompleted, handleOnDelete }) {
  return (
    <li>
      <p>{title}</p>
      <button onClick={handleOnCompleted}>
        {isCompleted ? "已完成" : "未完成"}
      </button>
      <button onClick={handleOnDelete}>刪除</button>
    </li>
  );
}

export default ListItem;
