import { createContext, useContext, useReducer } from "react";
import TodoReducer, { initState, ACTIONS } from "../reducer/todoReducer";

// createContext可接受一個參數為初始值
export const TodoContext = createContext(null);

const makeTodo = (content) => {
  return {
    id: Math.random() * 10000,
    title: content,
    isCompleted: false,
  };
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addTodo = (todoContent) => {
    const newTodo = makeTodo(todoContent);
    const newTodoList = [...state.todo, newTodo];
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: newTodoList } });
  };

  const toggleTodo = (id) => {
    const newTodoList = state.todo.map((todoContent) => {
      if (todoContent.id === id) {
        return { ...todoContent, isCompleted: !todoContent.isCompleted };
      }
      return todoContent;
    });
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { todo: newTodoList } });
  };

  const deleteTodo = (id) => {
    const newTodoList = state.todo.filter(
      (todoContent) => todoContent.id !== id
    );
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { todo: newTodoList } });
  };

  const value = { todo: state.todo, addTodo, toggleTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
