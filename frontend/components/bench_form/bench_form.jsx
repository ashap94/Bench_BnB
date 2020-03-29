import React from "react";

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
  }

  handleInput(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
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
        </form>
      </div>
    );
  }
}

export default BenchForm;
