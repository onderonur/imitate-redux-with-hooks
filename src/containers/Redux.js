import React, { useReducer } from "react";
import useCombinedReducer from "hooks/useCombinedReduce";
import todos from "reducers/todos";
import { VisibilityFilters } from "actions";
import visibilityFilter from "reducers/visibilityFilter";
import { StateContext } from "hooks/useSelector";
import { DispatchContext } from "hooks/useDispatch";

const { SHOW_ALL } = VisibilityFilters;
const initialVisibilityFilter = SHOW_ALL;
const initialTodos = [];

function Redux({ children }) {
  const [state, dispatch] = useCombinedReducer({
    todos: useReducer(todos, initialTodos),
    visibilityFilter: useReducer(visibilityFilter, initialVisibilityFilter)
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Redux;
