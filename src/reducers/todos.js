import { ADD_TODO, TOGGLE_TODO } from "actions";
import produce from "immer";

function todos(state = [], action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_TODO:
        const newTodo = {
          id: action.id,
          text: action.text,
          completed: false
        };
        draft.push(newTodo);
        break;
      case TOGGLE_TODO:
        const id = action.id;
        draft[id].completed = !draft[id].completed;
        break;
      default:
        return;
    }
  });
}

export default todos;
