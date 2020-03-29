import { connect } from "react-redux";
import BenchForm from "./bench_form";
import { createBench } from "../../actions/bench_actions";

const msp = (state, { location }) => {
  return {
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
  };
};

const mdp = dispatch => {
  return {
    createBench: benchForm => dispatch(createBench(benchForm))
  };
};

export default connect(msp, mdp)(BenchForm);
