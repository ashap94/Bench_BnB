import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "../components/session/login_form_container";
import SignupFormContainer from "../components/session/signup_form_container";
// import BenchIndexContainer from "../components/benches/benches_index_container";
import SearchContainer from "../components/search/search_container";
import BenchFormContainer from "../components/bench_form/bench_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute
        exact
        path="/benches/new"
        component={BenchFormContainer}
      />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
