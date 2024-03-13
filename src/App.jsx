import "./App.css";
import FormInput from "./FormInput";
import TodoList from "./TodoList";
import { TodoProvider } from "./hook/useTodoContext";

function App() {
  return (
    <>
      <h1>My todo list</h1>
      <TodoProvider>
        <FormInput />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
