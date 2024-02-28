import { VisibilityFilters } from "../actions";

interface VisibilityFilterAction {
  type: string;
  filter: string;
}

const visibilityFilter = (
  state: string = VisibilityFilters.SHOW_ALL,
  action: VisibilityFilterAction
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
