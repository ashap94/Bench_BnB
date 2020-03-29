import React from "react";
import MarkerManager from "../../utils/marker_manager";
import { withRouter } from "react-router-dom";

class BenchMap extends React.Component {
  componentDidMount() {
    // console.log("WHAT DOES refs look LIKE:   ", this.refs.map);
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431297
      }, // this is SF
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentDidUpdate() {
    if (this.props.singleBench) {
      const targetBenchKey = this.props.benchId;
      const targetBench = this.props.benches[targetBenchKey];
      this.MarkerManager.updateMarkers([targetBench]);
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  registerListeners() {
    this.map.addListener("idle", () => {
      const { south, north, west, east } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {
          lat: north,
          lng: east
        },
        southWest: {
          lat: south,
          lng: west
        }
      };
      this.props.updateFilter("bounds", bounds);
    });
    this.map.addListener("click", e => {
      var myLatLng = e.latLng;
      var lat = myLatLng.lat();
      var lng = myLatLng.lng();
      this.handleClick(lat, lng);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  handleClick(lat, lng) {
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${lat}&lng=${lng}`
    });
  }

  render() {
    return (
      <div id="map-container" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BenchMap);
