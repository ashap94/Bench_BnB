import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../../actions/bench_actions";
import { updateBounds } from "../../actions/filter_actions";

const mapStateToProps = state => {
  let benchesArray = Object.values(state.entities.benches);
  return {
    benches: benchesArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: bounds => dispatch(updateBounds(bounds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
