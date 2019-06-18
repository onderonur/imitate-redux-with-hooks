import React, { useContext } from "react";

export const StateContext = React.createContext();

function useSelector(selector) {
  const state = useContext(StateContext);

  return selector(state);
}

export default useSelector;
