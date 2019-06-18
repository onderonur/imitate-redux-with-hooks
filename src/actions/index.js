// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILIY_FILTER = "SET_VISIBILITY_FILTER";

// other constants
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let nextTodoId = 0;

// action creators
export function addTodo(text) {
  return { id: nextTodoId++, type: ADD_TODO, text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILIY_FILTER, filter };
}
