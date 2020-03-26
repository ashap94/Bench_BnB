import ReactDom from "react-dom";
// import React from "react";
// import { signup, login, logout } from "./utils/session_api_util";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;

  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDom.render(<Root store={store} />, root);
});
