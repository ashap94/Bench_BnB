import { connect } from "react-redux";
import BenchShow from "./bench_show";
import { fetchBench } from "../../actions/bench_actions";
import { selectReviewsForBench } from "../../reducers/selectors";

const msp = (state, { match }) => {
  let benchId = match.params.benchId;
  let bench = state.entities.benches[benchId];
  const reviews = selectReviewsForBench(state.entities, bench);

  return {
    benchId,
    bench,
    reviews
  };
};

const mdp = dispatch => {
  return {
    fetchBench: benchId => dispatch(fetchBench(benchId))
  };
};

export default connect(msp, mdp)(BenchShow);
