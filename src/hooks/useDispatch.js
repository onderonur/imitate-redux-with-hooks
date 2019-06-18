import React, { useContext } from "react";

export const DispatchContext = React.createContext();

function useDispatch() {
  const dispatch = useContext(DispatchContext);

  return dispatch;
}

export default useDispatch;
