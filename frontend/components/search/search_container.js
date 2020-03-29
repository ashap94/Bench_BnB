import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../../actions/bench_actions";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => {
  let benchesArray = Object.values(state.entities.benches);
  return {
    benches: benchesArray,
    minSeating: state.ui.filters.minSeating,
    maxSeating: state.ui.filters.maxSeating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
