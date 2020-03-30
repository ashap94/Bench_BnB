import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if currentUser
    if (this.props.currentUser) {
      this.props.history.push("/");
    }
  }

  handleInput(property) {
    return e => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentDidMount() {}

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    // let title = this.props.formType === "login" ? "Login" : "Sign Up!";
    // let errors = this.props.errors.map((error, i) => <li key={'error-${i}'}>{error}</li>);
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          Welcome to BenchBnB!
          <br />
          <br />
          Please {this.props.formType} or {this.props.navLink}
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <input
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.handleInput("username")}
              className="login-input"
            />
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput("password")}
              className="login-input"
            />
            <input
              type="submit"
              value={this.props.formType}
              className="session-submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
