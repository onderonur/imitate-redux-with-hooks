import React from "react";
import useSelector from "hooks/useSelector";
import useDispatch from "hooks/useDispatch";
import Link from "components/Link";
import { setVisibilityFilter } from "actions";

function FilterLink({ filter, children }) {
  const dispatch = useDispatch();
  const active = useSelector(state => state.visibilityFilter === filter);

  return (
    <Link active={active} onClick={() => dispatch(setVisibilityFilter(filter))}>
      {children}
    </Link>
  );
}

export default FilterLink;
