import "./App.css";
import FormInput from "./FormInput";
import TodoList from "./TodoList";

function App() {
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
      <FormInput />
      <TodoList />
    </>
  );
}

export default App;
