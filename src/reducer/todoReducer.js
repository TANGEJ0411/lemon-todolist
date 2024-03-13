export const initState = { todo: [] };

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const TodoReducer = (state, action) => {
  const { type, payload } = action;
  console.log(state, type, payload, "state, type, payload");
  switch (type) {
    case ACTIONS.ADD_TODO:
      return { ...state, todo: payload.todo };
    case ACTIONS.TOGGLE_TODO:
      return { ...state, todo: payload.todo };
    case ACTIONS.DELETE_TODO:
      return { ...state, todo: payload.todo };
    default:
      return state;
  }
};

export default TodoReducer;
