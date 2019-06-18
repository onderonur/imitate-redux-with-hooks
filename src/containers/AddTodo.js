import React from "react";
import { addTodo } from "actions";
import useDispatch from "hooks/useDispatch";

function AddTodo() {
  const dispatch = useDispatch();

  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
