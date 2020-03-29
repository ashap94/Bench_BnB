import { RECEIVE_BENCHES, RECEIVE_BENCH } from "../actions/bench_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, state, action.benches);

    case RECEIVE_BENCH:
      return Object.assign({}, state, { [action.bench.id]: action.bench });

    default:
      return state;
  }
};
