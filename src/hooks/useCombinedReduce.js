import produce from "immer";

function useCombinedReducer(combinedReducers) {
  // Global State
  const state = Object.keys(combinedReducers).reduce((acc, key) => {
    return produce(acc, draft => {
      draft[key] = combinedReducers[key][0];
    });
  }, {});

  // Global Dispatch Function
  const dispatch = action =>
    Object.keys(combinedReducers)
      .map(key => combinedReducers[key][1])
      .forEach(fn => fn(action));

  return [state, dispatch];
}

export default useCombinedReducer;
