import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: userForm => dispatch(signup(userForm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
