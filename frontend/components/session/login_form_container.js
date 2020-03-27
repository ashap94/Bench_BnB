import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "login",
    navLink: <Link to="/signup">sign up instead</Link>,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: userForm => dispatch(login(userForm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
