import { UPDATE_BOUNDS, UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = {
  bounds: {},
  minSeating: 1,
  maxSeating: 10
};

export default (state = defaultFilters, action) => {
  Object.freeze(state);

  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};
