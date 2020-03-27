import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../../actions/bench_actions";

const mapStateToProps = state => {
  let benchesArray = Object.values(state.entities.benches);
  return {
    benches: benchesArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
