function ListItem({ id, title, isCompleted }) {
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

export default ListItem;
