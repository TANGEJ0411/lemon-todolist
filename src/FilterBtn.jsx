function FilterBtn({ filter, setFilter }) {
  return (
    <button
      onClick={() => {
        setFilter(filter);
      }}
    >
      {filter}
    </button>
  );
}

export default FilterBtn;
