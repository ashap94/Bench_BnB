import React from "react";
import { withRouter } from "react-router-dom";

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seating: 2,
      lat: this.props.lat,
      lng: this.props.lng
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    this.props.history.push("/");
  }

  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state);
    this.navigateToSearch();
  }

  render() {
    return (
      <div className="bench-form-container">
        <form onSubmit={this.handleSubmit} className="bench-form">
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleInput("description")}
            placeholder="Description"
          />
          <input
            type="number"
            value={this.state.seating}
            onChange={this.handleInput("seating")}
            placeholder="Seating"
          />
          <input
            type="text"
            value={this.state.lat}
            onChange={this.handleInput("lat")}
            placeholder="Latitude"
            disabled
          />
          <input
            type="text"
            value={this.state.lng}
            onChange={this.handleInput("lng")}
            placeholder="Longitute"
            disabled
          />
          <button onClick={this.handleSubmit}>Create Bench!</button>
          <button onClick={this.navigateToSearch}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BenchForm);
