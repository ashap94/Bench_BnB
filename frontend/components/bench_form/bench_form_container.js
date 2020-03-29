import { connect } from "react-redux";
import BenchForm from "./bench_form";

const msp = (state, { location }) => {
  return {
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
  };
};

const mdp = dispatch => {
  return {};
};

export default connect(msp, mdp)(BenchForm);
