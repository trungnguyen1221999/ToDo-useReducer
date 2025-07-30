import { ACTION_ADD, ACTION_INPUT, ACTION_REMOVE } from "./Action";

export const initialState = {
  todoList: [],
  input: "",
};
export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_ADD: {
      if (state.input === "") return state;
      return {
        ...state,
        todoList: [...state.todoList, state.input],
        input: "",
      };
    }
    case ACTION_INPUT: {
      return {
        ...state,
        input: action.payload,
      };
    }

    case ACTION_REMOVE: {
      const newList = state.todoList.filter((item) => item !== action.payload);
      return {
        ...state,
        todoList: newList,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
};
