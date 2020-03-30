import React from "react";
import { withRouter } from "react-router-dom";

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seating: 2,
      lat: this.props.lat,
      lng: this.props.lng,
      picture_url: ""
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
        <div className="new-bench-form">
          <h3 className="new-bench-title">Create A Bench!</h3>

          <form onSubmit={this.handleSubmit} className="bench-form">
            <label className="bench-field">Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleInput("description")}
              className="bench-field"
            />

            <label className="bench-field">Number of Seats</label>
            <input
              min="0"
              type="number"
              value={this.state.seating}
              onChange={this.handleInput("seating")}
              className="bench-field"
            />

            <label className="bench-field">Picture Url</label>
            <input
              type="text"
              value={this.state.picture_url}
              onChange={this.handleInput("picture_url")}
              className="bench-field"
            />

            <label className="bench-field">Latitude</label>
            <input
              type="text"
              value={this.state.lat}
              onChange={this.handleInput("lat")}
              placeholder="Latitude"
              disabled
              className="bench-field"
            />

            <label className="bench-field">Longitude</label>
            <input
              type="text"
              value={this.state.lng}
              onChange={this.handleInput("lng")}
              placeholder="Longitute"
              disabled
              className="bench-field"
            />

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Bench"
                className="new-bench-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-bench-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BenchForm);
