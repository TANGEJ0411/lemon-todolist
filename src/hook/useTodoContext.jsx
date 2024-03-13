import { createContext, useContext, useReducer } from "react";
import TodoReducer, { initState, ACTIONS } from "../reducer/todoReducer";

// createContext可接受一個參數為初始值
export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  const value = { todo: state.todo };

  dispatch({ type: ACTIONS.ADD_TODO, payload: 1 });

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
