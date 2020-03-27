import ReactDom from "react-dom";
import React from "react";
// import { signup, login, logout } from "./utils/session_api_util";
// import { fetchBenches } from "./utils/bench_api_util";
import { fetchBenches } from "./actions/bench_actions";
import { login, logout } from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  // window.signup = signup;
  window.logout = logout;

  window.fetchBenches = fetchBenches;

  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDom.render(<Root store={store} />, root);
});
