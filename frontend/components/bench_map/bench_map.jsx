import React from "react";
import MarkerManager from "../../utils/marker_manager";

class BenchMap extends React.Component {
  componentDidMount() {
    // console.log("WHAT DOES refs look LIKE:   ", this.refs.map);
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

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
      this.props.updateBounds(bounds);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.benches.length !== this.props.benches.length) {
      this.MarkerManager.updateMarkers(this.props.benches);
      // console.log("WERE HEERREJREOIWJREOWIJREWOI");
    }
    // below find functionality later to check if each object is the same in array
    else {
      let prevBenches = prevProps.benches;
      let currBenches = this.props.benches;
      for (let i = 0; i < currBenches.length; i++) {
        if (JSON.stringify(prevBenches[i]) !== JSON.stringify(currBenches[i])) {
          this.MarkerManager.updateMarkers(currBenches);
          // console.log("WERE HEERREJREOIWJREOWIJREWOI");
          break;
        }
      }
    }
  }

  render() {
    return <div id="map-container" ref="map"></div>;
  }
}

export default BenchMap;
