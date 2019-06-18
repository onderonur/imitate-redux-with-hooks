import { SET_VISIBILIY_FILTER } from "actions";

function visibilityFilter(state, action) {
  switch (action.type) {
    case SET_VISIBILIY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
