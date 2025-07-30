import { useReducer, useRef } from "react";
import { initialState, Reducer } from "./Reucer";
import { ACTION_ADD, ACTION_INPUT, ACTION_REMOVE } from "./Action";

function App() {
  const inputFocus = useRef();
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="app">
      <h1>TODO</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ACTION_ADD });
          inputFocus.current.focus();
        }}
      >
        <input
          ref={inputFocus}
          type="text"
          placeholder="Enter ToDo..."
          value={state.input}
          onChange={(e) =>
            dispatch({ type: ACTION_INPUT, payload: e.target.value })
          }
        />
        <button className="btn-add">ADD</button>
      </form>

      <ul>
        {state.todoList.map((item) => (
          <li>
            {item}

            <button
              className="btn-remove"
              onClick={() => {
                dispatch({ type: ACTION_REMOVE, payload: item });
              }}
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
