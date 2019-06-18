import React from "react";
import { VisibilityFilters, toggleTodo } from "actions";
import TodoList from "components/TodoList";
import useDispatch from "hooks/useDispatch";
import useSelector from "hooks/useSelector";

const getVisibleTodoList = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

function VisibleTodoList() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const todos = useSelector(state =>
    getVisibleTodoList(state.todos, visibilityFilter)
  );

  function handleTodoClick(id) {
    dispatch(toggleTodo(id));
  }

  return <TodoList todos={todos} onTodoClick={handleTodoClick} />;
}

export default VisibleTodoList;
